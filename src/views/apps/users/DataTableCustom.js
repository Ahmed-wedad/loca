import React, {useState, useEffect} from "react"
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Badge,
  Input,
  Form
} from "reactstrap"
import DataTable from "react-data-table-component"
import {Search} from "react-feather"
import {getUsers, getUsersSearch, setLoading, clearErrors, getUsersPage} from "../../../redux/actions/users/usersAction";
import PropTypes from "prop-types"
import {connect} from 'react-redux'
import Spinner from "../../ui-elements/Spinner"
import userPNG from '../../../assets/img/portrait/user.png'
import {useSnackbar} from 'react-simple-snackbar'
import PaginationIconsAndText from "../pagination/Pagination";



const DataTableCustom = ({user: {users, error, loading, currentPage, msg, totalItems, totalPages}, getUsers, getUsersPage, getUsersSearch, setLoading, clearErrors}) => {
  const [state] = useState({
    columns: [
      {
        name: "ID",
        selector: "user_id",
        sortable: true,
        cell: row => (
          <p className="text-bold-500 text-truncate mb-0">{row.user_id}</p>
        )
      },
      {
        name: "Image",
        selector: "image",
        sortable: true,
        cell: row => (
          <div className="user-img">
            <img
              className="img-fluid rounded-circle"
              height="100"
              width="100"
              src={row.image === null ? userPNG : row.image}
              alt={row.firstname}
            />
          </div>
        )
      },
      {
        name: "Username",
        selector: "username",
        sortable: true,
        cell: row => (
          <p className="text-bold-500 text-truncate mb-0">{row.username}</p>
        )
      },
      {
        name: "Name",
        selector: "name",
        sortable: true,
        minWidth: "200px",
        cell: row => (
          <div className="d-flex flex-xl-row flex-column align-items-xl-center align-items-start py-xl-0 py-1">
            <div className="user-info text-truncate ml-xl-50 ml-0">
              <span
                title={row.firstname}
                className="d-block text-bold-500 text-truncate mb-0">
                {row.firstname}{" "}
                {row.lastname}
              </span>
              <small title={row.email}>{row.email}</small>
            </div>
          </div>
        )
      },
      {
        name: "Date Created",
        selector: "date",
        sortable: true,
        cell: row => (
          <p className="text-bold-500 text-truncate mb-0">{`${row.createdAt}`.slice(0, 10)}</p>
        )
      },
      {
        name: "Status",
        selector: "isVerified",
        sortable: true,
        cell: row => (
          <Badge
            color={row.isVerified === false ? "light-danger" : "light-success"}
            pill>
            {row.isVerified === false ? "Not verified" : "Verified"}
          </Badge>
        )
      },
      {
        name: "Phone",
        selector: "phone",
        sortable: true,
        cell: row => <p className="text-bold-500 mb-0">{row.phone === null ? 'Nil' : row.phone}</p>
      },
      {
        name: "Rating",
        selector: "rating",
        sortable: false,
        cell: row => <p className="text-bold-500 mb-0">{row.rating === null ? 0.00 : row.rating}</p>
      }
    ],
  })

  const [openSnackbar] = useSnackbar();

  useEffect(() => {
    getUsers()

    //eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (error) {
      openSnackbar(error);
      clearErrors();
      getUsers()
    }

    if (msg) {
      openSnackbar(msg)
      clearErrors()
    }

    //eslint-disable-next-line
  }, [error, msg])

  const [searchUser, setSearchUser] = useState({
    search: ''
  })

  const {search} = searchUser

  const onChange = e => setSearchUser({search: e.target.value})

  const onSubmit = (e) => {
    e.preventDefault()
    setLoading()
    getUsersSearch(search)
  }



  let {columns} = state

  const data = users

  const nextPage = (pageNumber) => {
    setLoading()
    getUsersPage(pageNumber)
  }

  if (loading) return <Spinner/>
  return (
    <Card>
      <CardHeader>
        <CardTitle>Users</CardTitle>
      </CardHeader>
      <CardBody className="rdt_Wrapper">
        <div className="d-flex flex-wrap justify-content-between">
          <div className="position-relative has-icon-left mb-1">
            <Form onSubmit={onSubmit}>
              <Input type="text" name="search" value={search} onChange={onChange} />
            </Form>
            <div className="form-control-position">
              <Search size="15"/>
            </div>
          </div>
        </div>
        <DataTable
          className="dataTable-custom"
          data={data}
          columns={columns}
          noHeader
        />
        {totalItems > 10 && <PaginationIconsAndText pages={totalPages} nextPage={nextPage} currentPage={currentPage} />}
      </CardBody>
    </Card>
  )
}

DataTableCustom.propTypes = {
  car: PropTypes.object.isRequired,
}


const mapStateToProps = state => ({
  user: state.userList.user
})


export default connect(mapStateToProps, {getUsersSearch, getUsers, setLoading, clearErrors, getUsersPage})(DataTableCustom)
