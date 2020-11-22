import React, {useEffect, useState} from "react"
import {Card, CardBody, CardHeader, CardTitle, Table, Badge} from "reactstrap"
import DataTable from "react-data-table-component"
import {
  Trash,
  Edit,
  Check,
  UserX,
  CheckSquare,
  X
} from "react-feather"
import ModalCentered from "./ModalCentered"
import PaginationIconsAndText from '../pagination/Pagination'
import {connect} from 'react-redux'
import {
  clearErrors,
  setLoading,
  setCurrent,
  clearCurrent,
  getTrips,
  updateTrip,
  acceptTrip,
  rejectTrip,
  cancelTrip,
  finishTrip,
  deleteTrip
} from "../../../redux/actions/trips/tripsAction"
import PropTypes from 'prop-types'
import Spinner from '../../ui-elements/Spinner'
import {useSnackbar} from 'react-simple-snackbar'
import AcceptTrip from "./AcceptTrip"
import RejectTrip from "./RejectTrip"
import CancelTrip from "./CancelTrip"
import FinishTrip from "./FinishTrip"

const DataTableExpandableRows = (
  {trip: {trips, loading, totalItems, currentPage, current, totalPages, error, msg},
    getTrips, setLoading, setCurrent, acceptTrip, rejectTrip, cancelTrip, deleteTrip, finishTrip}) => {

  const [openSnackbar] = useSnackbar();


  useEffect(() => {
    getTrips();

    //eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (error) {
      openSnackbar(error);
      clearErrors();
      getTrips()
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
      selector: "trip_id"
    },
    {
      name: "Reference",
      selector: `reference`
    },
    {
      name: "Status",
      selector: "status"
    },
    {
      name: "Cost",
      selector: 'cost'
    },
    {
      name: "User",
      selector: 'User.username'
    },
    {
      name: "Car",
      selector: 'Car.name'
    },
    {
      name: "City",
      selector: 'Car.city'
    },
    {
      name: "Owner",
      selector: 'Car.User.username'
    }
  ]
  const data = trips;
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
          <td>Reference</td>
          <td>{data.reference}</td>
        </tr>
        <tr>
          <td>Start Date</td>
          <td>
            {`${data.start_date}`.slice(0, 10)}
          </td>
        </tr>
        <tr>
          <td>End Date</td>
          <td>
            {`${data.end_date}`.slice(0, 10)}
          </td>
        </tr>
        <tr>
          <td>Cost</td>
          <td>{data.cost}</td>
        </tr>
        <tr>
          <td>Status</td>
          <td>
            <Badge
            color={
              data.status === 'declined' ? "light-danger"
                : data.status === 'canceled' ? "light-dark"
                : data.status === 'finished' ? "light-info"
                  : data.status === 'pending' ? "light-primary"
                  : "light-success"
            }
            pill>
            {data.status}
          </Badge>
          </td>
        </tr>
        <tr>
          <td>Extra Cost</td>
          <td>{data.extra_cost === null ? 0.00 : data.extra_cost}</td>
        </tr>
        <tr>
          <td>User</td>
          <td>{`${data.User.lastname} ${data.User.firstname}`}</td>
        </tr>
        <tr>
          <td>User Email</td>
          <td>{data.User.email}</td>
        </tr>
        <tr>
          <td>User Phone</td>
          <td>{data.User.phone}</td>
        </tr>
        <tr>
          <td>User Rating</td>
          <td>{data.User.rating === null ? 0.00 : data.User.rating}</td>
        </tr>
        <tr>
          <td>User Verification</td>
          <td>
            <Badge
              color={data.User.isVerified === false ? "light-danger" : "light-success"}
              pill>
              {data.User.isVerified === false ? "Not verified" : "Verified"}
            </Badge>
          </td>
        </tr>
        <tr>
          <td>User License</td>
          <td>
            <img
              height="200"
              width="200"
              src={data.User.DriverLicense.image}
              alt="img"
            /></td>
        </tr>
        <tr>
          <td>User License Verification</td>
          <td>
            <Badge
              color={data.User.DriverLicense.isVerified === false ? "light-danger" : "light-success"}
              pill>
              {data.User.DriverLicense.isVerified === false ? "Not verified" : "Verified"}
            </Badge>
          </td>
        </tr>
        <tr>
          <td>Car Name</td>
          <td>{data.Car.name}</td>
        </tr>
        <tr>
          <td>Car Make</td>
          <td>{data.Car.make}</td>
        </tr>
        <tr>
          <td>Car Cost</td>
          <td>{`N ${data.Car.cost}`}</td>
        </tr>
        <tr>
          <td>Car Rating</td>
          <td>{data.Car.rating === null ? 0 : data.Car.rating}</td>
        </tr>
        <tr>
          <td>Car Image</td>
          <td><img
            height="200"
            width="200"
            src={data.Car.images[0]}
            alt="img"
          /></td>
        </tr>
        <tr>
          <td>Car Verification</td>
          <td>
            <Badge
              color={data.Car.isVerified === false ? "light-danger" : "light-success"}
              pill>
              {data.Car.isVerified === false ? "Not verified" : "Verified"}
            </Badge>
          </td>
        </tr>
        <tr>
          <td>Car Location</td>
          <td>{`${data.Car.city}, ${data.Car.state}`}</td>
        </tr>
        <tr>
          <td>Owner</td>
          <td>{`${data.Car.User.firstname} ${data.Car.User.lastname}`}</td>
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
              <Check
                className="cursor-pointer mr-1"
                size={20}
                onClick={() => {toggleModalAccept(); setCurrent(data)}}
              />
              <UserX
                className="cursor-pointer mr-1"
                size={20}
                onClick={() => {toggleModalReject(); setCurrent(data)}}
              />
              <CheckSquare
                className="cursor-pointer mr-1"
                size={20}
                onClick={() => {toggleModalFinish(); setCurrent(data)}}
              />
              <X
                className="cursor-pointer mr-1"
                size={20}
                onClick={() => {toggleModalCancel(); setCurrent(data)}}
              />
              <Trash
                className="cursor-pointer"
                size={20}
                onClick={() => onDelete(data.trip_id)}
              />
              <ModalCentered
                activeTab={activeTab}
                modal={modal}
                current={current}
                clearCurrent={clearCurrent}
                clearErrors={clearErrors}
                toggleModal={toggleModal}
                msg={msg}
              />
              <AcceptTrip
                activeTabA={activeTabA}
                modalA={modalA}
                current={current}
                clearCurrent={clearCurrent}
                clearErrors={clearErrors}
                toggleModalAccept={toggleModalAccept}
                msg={msg}
                acceptTrip={acceptTrip}
              />
              <RejectTrip
                activeTabB={activeTabB}
                modalB={modalB}
                current={current}
                clearCurrent={clearCurrent}
                clearErrors={clearErrors}
                toggleModalReject={toggleModalReject}
                msg={msg}
                rejectTrip={rejectTrip}
              />
              <CancelTrip
                activeTabC={activeTabC}
                modalC={modalC}
                current={current}
                clearCurrent={clearCurrent}
                clearErrors={clearErrors}
                toggleModalCancel={toggleModalCancel}
                msg={msg}
                cancelTrip={cancelTrip}
              />
              <FinishTrip
                activeTabD={activeTabD}
                modalD={modalD}
                current={current}
                clearCurrent={clearCurrent}
                clearErrors={clearErrors}
                toggleModalFinish={toggleModalFinish}
                msg={msg}
                finishTrip={finishTrip}
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

  const [modalAccept, setAcceptModal] =  useState( {
    activeTabA: "1",
    modalA: false
  })

  const [modalReject, setRejectModal] =  useState( {
    activeTabB: "1",
    modalB: false
  })

  const [modalCancel, setCancelModal] =  useState( {
    activeTabC: "1",
    modalC: false
  })

  const [modalFinish, setFinishModal] =  useState( {
    activeTabD: "1",
    modalD: false
  })


  const {modalA, activeTabA} = modalAccept
  const {modalB, activeTabB} = modalReject
  const {modalC, activeTabC} = modalCancel
  const {modalD, activeTabD} = modalFinish

  const {activeTab, modal} = state

  const toggleModal = () => {
    setState(prevState => ({
      modal: !prevState.modal
    }))
  }

  const toggleModalAccept = () => {
    setAcceptModal(prevState => ({
      modalA: !prevState.modalA
    }))
  }

  const toggleModalReject = () => {
    setRejectModal(prevState => ({
      modalB: !prevState.modalB
    }))
  }

  const toggleModalCancel = () => {
    setCancelModal(prevState => ({
      modalC: !prevState.modalC
    }))
  }

  const toggleModalFinish = () => {
    setFinishModal(prevState => ({
      modalD: !prevState.modalD
    }))
  }

  const nextPage = (pageNumber) => {
    setLoading()
    getTrips(pageNumber)
  }


  const onDelete = (id) => {
    setLoading()
    deleteTrip(id);
  }


  if (loading) return <Spinner/>

  return (
    <Card>
      <CardHeader>
        <CardTitle>Trips</CardTitle>
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
  trip: state.tripList.trip
})

DataTableExpandableRows.propTypes = {
  trip: PropTypes.object.isRequired,
}

export default connect(mapStateToProps,
  {getTrips, setLoading, setCurrent, finishTrip, cancelTrip, acceptTrip, updateTrip, rejectTrip, deleteTrip}
  )(DataTableExpandableRows)
