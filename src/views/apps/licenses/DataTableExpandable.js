import React, {useEffect, useState} from "react"
import {Badge, Card, CardBody, CardHeader, CardTitle, Table} from "reactstrap"
import DataTable from "react-data-table-component"
import {
  Trash,
  Edit
} from "react-feather"
import ModalCentered from "./ModalCentered"
import PaginationIconsAndText from '../pagination/Pagination'
import {connect} from 'react-redux'
import {
  getLicenses,
  setLoading,
  clearErrors,
  clearCurrent,
  setCurrent,
  deleteLicense,
  updateLicense
} from "../../../redux/actions/licenses/licenseAction";
import PropTypes from 'prop-types'
import Spinner from '../../ui-elements/Spinner'
import {useSnackbar} from 'react-simple-snackbar'

const DataTableExpandableRows = (
  {license: {licenses, loading, totalItems, currentPage, current, totalPages, error, msg},
    getLicenses, setLoading, setCurrent, deleteLicense, updateLicense, clearErrors}) => {

  const [openSnackbar] = useSnackbar();


  useEffect(() => {
    getLicenses();

    //eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (error) {
      openSnackbar(error);
      clearErrors();
      getLicenses()
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
      selector: "license_id"
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
  const data = licenses;
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
          <td>Image</td>
          <td>
            <img
            height="300"
            width="300"
            src={data.image}
            alt="img"
          /></td>
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
                onClick={() => onDelete(data.license_id)}
              />
              <ModalCentered
                activeTab={activeTab}
                modal={modal}
                current={current}
                clearCurrent={clearCurrent}
                clearErrors={clearErrors}
                toggleModal={toggleModal}
                updateLicense={updateLicense}
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
    getLicenses(pageNumber)
  }


  const onDelete = (id) => {
    setLoading()
    deleteLicense(id);
  }


  if (loading) return <Spinner/>

  return (
    <Card>
      <CardHeader>
        <CardTitle>Licenses</CardTitle>
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
  license: state.licenseList.license
})

DataTableExpandableRows.propTypes = {
  car: PropTypes.object.isRequired,
}

export default connect(mapStateToProps,
  {getLicenses, setLoading, setCurrent, deleteLicense, updateLicense, clearErrors}
  )(DataTableExpandableRows)
