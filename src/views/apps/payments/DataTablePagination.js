import React, {useEffect} from "react"
import {Card, CardBody, CardHeader, CardTitle, Table} from "reactstrap"
import DataTable from "react-data-table-component"
import PropTypes from "prop-types";
import {connect} from 'react-redux'
import {getPayments, setLoading, clearErrors} from "../../../redux/actions/payments/paymentAction"
import Spinner from "../../ui-elements/Spinner"
import PaginationIconsAndText from '../pagination/Pagination'
import {useSnackbar} from 'react-simple-snackbar'

const columns = [
  {
    name: "ID",
    selector: "payment_id",
    sortable: true
  },
  {
    name: "Amount",
    selector: "amount",
    sortable: true
  },
  {
    name: "User",
    selector: "User.username",
    sortable: true
  }
]


const DataTablePagination = (
  {
    payment: {payments, loading, totalItems, currentPage, totalPages, error, msg},
    getPayments, setLoading, clearErrors
  }) => {

  const [openSnackbar] = useSnackbar();


  useEffect(() => {
    getPayments();

    //eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (error) {
      openSnackbar(error);
      clearErrors();
      getPayments()
    }

    if (msg) {
      openSnackbar(msg)
      clearErrors()
    }

    //eslint-disable-next-line
  }, [error, msg])

  const nextPage = (pageNumber) => {
    setLoading()
    getPayments(pageNumber)
  }

  const data = payments

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
          <td>Trip Reference</td>
          <td>
            {data.Trip.reference}
          </td>
        </tr>
        <tr>
          <td>Start Date</td>
          <td>
            {`${data.Trip.start_date}`.slice(0, 10)}
          </td>
        </tr>
        <tr>
          <td>End Date</td>
          <td>
            {`${data.Trip.end_date}`.slice(0, 10)}
          </td>
        </tr>
        <tr>
          <td>User Email</td>
          <td>
            {data.User.email}
          </td>
        </tr>
        <tr>
          <td>User Phone</td>
          <td>
            {data.User.phone}
          </td>
        </tr>
        <tr>
          <td>User Rating</td>
          <td>
            {data.User.rating === null ? 0.00 : data.User.rating}
          </td>
        </tr>
        </tbody>
      </Table>
    )
  }

  if (loading) return <Spinner/>
  return (
    <Card>
      <CardHeader>
        <CardTitle>Payments</CardTitle>
      </CardHeader>
      <CardBody>
        <DataTable
          data={data}
          columns={columns}
          noHeader
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
  payment: state.paymentList.payment
})

DataTablePagination.propTypes = {
  payment: PropTypes.object.isRequired,
}

export default connect(mapStateToProps, {getPayments, clearErrors, setLoading})(DataTablePagination)
