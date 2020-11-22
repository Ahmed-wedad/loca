import React, {useEffect} from "react"
import {Card, CardBody, CardHeader, CardTitle, Col, Table} from "reactstrap"
import DataTable from "react-data-table-component"
import {Trash} from "react-feather"
import PaginationIconsAndText from '../pagination/Pagination'
import {connect} from 'react-redux'
import {getReviews, clearErrors, setLoading, deleteReview} from "../../../redux/actions/reviews/reviewAction";
import PropTypes from 'prop-types'
import Spinner from '../../ui-elements/Spinner'
import {useSnackbar} from 'react-simple-snackbar'
import CarouselUncontrolled from "./CarouselUncontrolled"

const DataTableExpandableRows = (
  {review: {reviews, loading, totalItems, currentPage, totalPages, error, msg},
    getReviews, setLoading, deleteReview, clearErrors}) => {

  const [openSnackbar] = useSnackbar();


  useEffect(() => {
    getReviews();

    //eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (error) {
      openSnackbar(error);
      clearErrors();
      getReviews()
    }

    if (msg) {
      openSnackbar(msg)
      clearErrors()
    }

    //eslint-disable-next-line
  }, [error, msg])

  const columns = [
    {
      name: "Id",
      selector: "id"
    },
    {
      name: "Username",
      selector: `User.username`
    },
    {
      name: "Name",
      selector: `User.firstname`
    }
  ]
  const data = reviews;
  const ExpandableTable = ({ data }) => {
    return (
      <Table responsive striped>
        <thead>
        <tr>
          <th>Property</th>
          <th>Value</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>User</td>
          <td>{`${data.User.lastname} ${data.User.firstname}`}</td>
        </tr>
        <tr>
          <td>Message</td>
          <td>
            {data.message}
          </td>
        </tr>
        <tr>
          <td>Rating</td>
          <td>
            {data.rating}
          </td>
        </tr>
        <tr>
          <td>Image</td>
          <td>{<Col md="6" sm="12">
            <CarouselUncontrolled images={data.Car.images} />
          </Col>}</td>
        </tr>
        <tr>
          <td>Car Name</td>
          <td>
            {data.Car.name}
          </td>
        </tr>
        <tr>
          <td>Car Cost</td>
          <td>
            {data.Car.cost}
          </td>
        </tr>
        <tr>
          <td>Car Location</td>
          <td>
            {data.Car.city}
          </td>
        </tr>
        <tr>
          <td>Actions</td>
          <td>
            <div className="data-list-action">
              <Trash
                className="cursor-pointer"
                size={20}
                onClick={() => onDelete(data.id)}
              />
            </div>
          </td>
        </tr>
        </tbody>
      </Table>
    )
  }


  const nextPage = (pageNumber) => {
    setLoading()
    getReviews(pageNumber)
  }


  const onDelete = (id) => {
    setLoading()
    deleteReview(id);
  }


  if (loading) return <Spinner/>

  return (
    <Card>
      <CardHeader>
        <CardTitle>Reviews</CardTitle>
      </CardHeader>
      <CardBody>
        <DataTable
          data={data}
          columns={columns}
          expandableRows
          expandOnRowClicked
          expandableRowsComponent={<ExpandableTable />}
        />
      {totalItems > 10 && <PaginationIconsAndText pages={totalPages} nextPage={nextPage} currentPage={currentPage} />}
      </CardBody>
    </Card>
  )
}

const mapStateToProps = state => ({
  review: state.reviewList.review
})

DataTableExpandableRows.propTypes = {
  review: PropTypes.object.isRequired,
}

export default connect(mapStateToProps,
  {getReviews, setLoading, deleteReview, clearErrors}
  )(DataTableExpandableRows)
