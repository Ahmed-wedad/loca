import React, {useEffect} from "react"
import {Row, Col} from "reactstrap"
import SubscribersGained from "../../ui-elements/cards/statistics/SubscriberGained"
import RevenueGenerated from "../../ui-elements/cards/statistics/RevenueGenerated"
import QuaterlySales from "../../ui-elements/cards/statistics/QuaterlySales"
import OrdersReceived from "../../ui-elements/cards/statistics/OrdersReceived"
import RevenueChart from "../../ui-elements/cards/analytics/Revenue"
import {connect} from 'react-redux'
import "../../../assets/scss/plugins/charts/apex-charts.scss"
import {getUsers, setLoading} from "../../../redux/actions/users/usersAction"
import {getCars} from "../../../redux/actions/cars/carActions"
import {getPayments} from "../../../redux/actions/payments/paymentAction"
import {getReviews} from "../../../redux/actions/reviews/reviewAction"
import {getTrips} from "../../../redux/actions/trips/tripsAction"
import {getRatings} from "../../../redux/actions/ratings/ratingAction"
import PropTypes from "prop-types"
import Spinner from "../../ui-elements/Spinner"
import {addComma} from "../../../utility/formatNumber"

let $primary = "#7367F0",
  // $success = "#28C76F",
  // $danger = "#EA5455",
  // $warning = "#FF9F43",
  // $primary_light = "#9c8cfc",
  // $warning_light = "#FFC085",
  $danger_light = "#f29292",
  $stroke_color = "#b9c3cd",
  $label_color = "#e7eef7"

const EcommerceDashboard = (
  {
    user,
    rating,
    review,
    trip,
    car: {totalItems},
    payment: {payments},
    getUsers,
    setLoading,
    getTrips,
    getReviews,
    getRatings,
    getPayments,
    getCars
  }
  ) => {

  useEffect(() => {
    setLoading()
    getUsers()
    getCars()
    getPayments()
    getRatings()
    getReviews()
    getRatings()
    getTrips()

    //eslint-disable-next-line
  }, [])
  let Payments = payments

  //eslint-disable-next-line
  Array.prototype.sum = function(prop) {
    let total = 0;
    for (let i = 0, _len = this.length; i < _len; i++) {
      total += parseInt(this[i][prop])
    }
    return total;
  };

  const payment =`${'$'} ${addComma(Payments.sum("amount"))}`

  if (user.loading) return <Spinner />

  return (
    <React.Fragment>
      <Row className="match-height">
        <Col lg="3" md="6" sm="6">
          <SubscribersGained users={user.totalItems}/>
        </Col>
        <Col lg="3" md="6" sm="6">
          <RevenueGenerated payment={payment}/>
        </Col>
        <Col lg="3" md="6" sm="6">
          <QuaterlySales cars={totalItems}/>
        </Col>
        <Col lg="3" md="6" sm="6">
          <OrdersReceived trips={trip.totalItems}/>
        </Col>
      </Row>
      <Row className="match-height">
        <Col lg="12" md="12" sm="12">
          <RevenueChart
            primary={$primary}
            dangerLight={$danger_light}
            strokeColor={$stroke_color}
            labelColor={$label_color}
          />
        </Col>
      </Row>
    </React.Fragment>
  )
}

EcommerceDashboard.propTypes = {
  car: PropTypes.object.isRequired,
  trip: PropTypes.object.isRequired,
  review: PropTypes.object.isRequired,
  payment: PropTypes.object.isRequired,
  rating: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  car: state.carList.car,
  trip: state.tripList.trip,
  rating: state.ratingList.rating,
  review: state.reviewList.review,
  payment: state.paymentList.payment,
  user: state.userList.user,
})

export default connect(mapStateToProps, {getRatings, getTrips, setLoading, getReviews, getPayments, getCars, getUsers})(EcommerceDashboard)
