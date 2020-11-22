import React, {useEffect} from "react"
import {Card, CardBody, CardHeader, CardTitle, Table} from "reactstrap"
import DataTable from "react-data-table-component"
import {
  Trash
} from "react-feather"
import PaginationIconsAndText from '../pagination/Pagination'
import {connect} from 'react-redux'
import {getRatings, clearErrors, setLoading, deleteRating} from "../../../redux/actions/ratings/ratingAction";
import PropTypes from 'prop-types'
import Spinner from '../../ui-elements/Spinner'
import {useSnackbar} from 'react-simple-snackbar'

const DataTableExpandableRows = (
  {rating: {ratings, loading, totalItems, currentPage, totalPages, error, msg},
    getRatings, setLoading, deleteRating, clearErrors}) => {

  const [openSnackbar] = useSnackbar();


  useEffect(() => {
    getRatings();

    //eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (error) {
      openSnackbar(error);
      clearErrors();
      getRatings()
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
  const data = ratings;
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
    getRatings(pageNumber)
  }


  const onDelete = (id) => {
    setLoading()
    deleteRating(id);
  }


  if (loading) return <Spinner/>

  return (
    <Card>
      <CardHeader>
        <CardTitle>Ratings</CardTitle>
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
  rating: state.ratingList.rating
})

DataTableExpandableRows.propTypes = {
  review: PropTypes.object.isRequired,
}

export default connect(mapStateToProps,
  {getRatings, setLoading, deleteRating, clearErrors}
  )(DataTableExpandableRows)
