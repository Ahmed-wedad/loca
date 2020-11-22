import React, {useEffect, useState} from "react"
import {Card, CardBody, CardHeader, CardTitle, Table, Col, Input, Form, Badge} from "reactstrap"
import DataTable from "react-data-table-component"
import {
  Search,
  Trash,
  Edit
} from "react-feather"
import CarouselUncontrolled from "./CarouselUncontrolled"
import ModalCentered from "./ModalCentered"
import PaginationIconsAndText from '../pagination/Pagination'
import {connect} from 'react-redux'
import {
  getCars,
  clearErrors,
  setLoading,
  setCurrent,
  clearCurrent,
  deleteCar,
  verifyCar,
  getCarsSearch
} from "../../../redux/actions/cars/carActions"
import PropTypes from 'prop-types'
import Spinner from '../../ui-elements/Spinner'
import {useSnackbar} from 'react-simple-snackbar'

const DataTableExpandableRows = (
  {car: {cars, loading, totalItems, currentPage, current, totalPages, error, msg},
    getCars, setLoading, setCurrent, getCarsSearch, deleteCar, verifyCar}) => {

  const [openSnackbar] = useSnackbar();


  useEffect(() => {
    getCars();

    //eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (error) {
      openSnackbar(error);
      clearErrors();
      getCars()
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
      selector: "car_id"
    },
    {
      name: "Name",
      selector: `name`
    },
    {
      name: "Cost",
      selector: "cost"
    },
    {
      name: "City",
      selector: 'city'
    },
    {
      name: "User",
      selector: 'User.username'
    }
  ]
  const data = cars;
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
          <td>Name</td>
          <td>{data.name}</td>
        </tr>
        <tr>
          <td>Make</td>
          <td>{data.make}</td>
        </tr>
        <tr>
          <td>Year</td>
          <td>{data.year}</td>
        </tr>
        <tr>
          <td>Model</td>
          <td>{data.model}</td>
        </tr>
        <tr>
          <td>Cost</td>
          <td>{`N ${data.cost}`}</td>
        </tr>
        <tr>
          <td>Rating</td>
          <td>{data.rating === null ? 0 : data.rating}</td>
        </tr>
        <tr>
          <td>Description</td>
          <td>{data.description}</td>
        </tr>
        <tr>
          <td>Distance</td>
          <td>{data.distance}</td>
        </tr>
        <tr>
          <td>Image</td>
          <td>{<Col md="12" sm="12">
            <CarouselUncontrolled images={data.images} />
          </Col>}</td>
        </tr>
        <tr>
          <td>Features</td>
          <td>{data.features.map(feature => (
            <ul key={feature}>
              <li>{feature}</li>
            </ul>
          ))}</td>
        </tr>
        <tr>
          <td>Verified</td>
          <td>
            <Badge
              color={data.isVerified === false ? "light-danger" : "light-success"}
              pill>
              {data.isVerified === false ? "Not verified" : "Verified"}
            </Badge>
          </td>
        </tr>
        <tr>
          <td>Doors</td>
          <td>{data.doors}</td>
        </tr>
        <tr>
          <td>Seats</td>
          <td>{data.seats}</td>
        </tr>
        <tr>
          <td>Fuel Type</td>
          <td>{data.fuel_type}</td>
        </tr>
        <tr>
          <td>Transmission</td>
          <td>{data.transmission}</td>
        </tr>
        <tr>
          <td>Street</td>
          <td>{data.street}</td>
        </tr>
        <tr>
          <td>City</td>
          <td>{data.city}</td>
        </tr>
        <tr>
          <td>State</td>
          <td>{data.state}</td>
        </tr>
        <tr>
          <td>Country</td>
          <td>{data.country}</td>
        </tr>
        <tr>
          <td>User</td>
          <td>{`${data.User.lastname} ${data.User.firstname}`}</td>
        </tr>
        <tr>
          <td>Actions</td>
          <td>
            <div className="data-list-action">
              <Edit
                className="cursor-pointer mr-1"
                size={20}
                onClick={() => {toggleModal(); setCurrent(data)}}
              />
              <Trash
                className="cursor-pointer"
                size={20}
                onClick={() => onDelete(data.car_id)}
              />
              <ModalCentered
                activeTab={activeTab}
                modal={modal}
                current={current}
                clearCurrent={clearCurrent}
                clearErrors={clearErrors}
                toggleModal={toggleModal}
                verifyCar={verifyCar}
                msg={msg}
              />
            </div>
          </td>
        </tr>
        </tbody>
      </Table>
    )
  }

  const [state, setState] =  useState( {
    activeTab: "1",
    modal: false
  })

  const {activeTab, modal} = state

  const toggleModal = () => {
    setState(prevState => ({
      modal: !prevState.modal
    }))
  }

  const nextPage = (pageNumber) => {
    setLoading()
    getCars(pageNumber)
  }

  const [searchTerm, setSearchTerm] = useState({
    search: ''
  })

  const {search} = searchTerm

  const onChange = e => setSearchTerm({search: e.target.value})

  const searchCars = (e) => {
    e.preventDefault()
    setLoading()
    getCarsSearch(search)
  }

  const onDelete = (id) => {
    setLoading()
    deleteCar(id);
  }


  if (loading) return <Spinner/>

  return (
    <Card>
      <CardHeader>
        <CardTitle>Cars</CardTitle>
      </CardHeader>
      <CardBody>
        <div className="position-relative has-icon-left mb-1">
          <Form onSubmit={searchCars}>
            <Input type="text" name="search" onChange={onChange} value={search} />
          </Form>
          <div className="form-control-position">
            <Search size="15" />
          </div>
        </div>
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
  car: state.carList.car
})

DataTableExpandableRows.propTypes = {
  car: PropTypes.object.isRequired,
}

export default connect(mapStateToProps,
  {getCars, setLoading, setCurrent, getCarsSearch, deleteCar, verifyCar}
  )(DataTableExpandableRows)
