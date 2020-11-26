import React, {useEffect, useState} from "react"
import {
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap"
import axios from "axios"
import * as Icon from "react-feather"
import {history} from "../../../history"
import {connect} from "react-redux"
import {loadUser, setLoading, logout} from "../../../redux/actions/auth/loginActions"
import PropTypes from "prop-types"
import userImg from "../../../assets/img/portrait/user.png"

const handleNavigation = (e, path) => {
  e.preventDefault()
  history.push(path)
}

const UserDropdown = (props, {logout}) => {
  const onLogout = () => {
    logout()
  }
  return (
    <DropdownMenu right>
      <DropdownItem
        tag="a"
        href="#"
        onClick={e => handleNavigation(e, "/pages/account-settings")}
      >
        <Icon.User size={14} className="mr-50"/>
        <span className="align-middle">Edit Profile</span>
      </DropdownItem>
      <DropdownItem
        tag="a"
        href="#"
        onClick={e => handleNavigation(e, "/email/inbox")}
      >
        <Icon.Mail size={14} className="mr-50"/>
        <span className="align-middle">My Inbox</span>
      </DropdownItem>
      <DropdownItem
        tag="a"
        href="#"
        onClick={e => handleNavigation(e, "/todo/all")}
      >
        <Icon.CheckSquare size={14} className="mr-50"/>
        <span className="align-middle">Tasks</span>
      </DropdownItem>
      <DropdownItem divider/>
      <DropdownItem
        tag="a"
        href="/pages/login"
        onClick={e => {history.push("/pages/login"); onLogout()}}
      >
        <Icon.Power size={14} className="mr-50" />
        <span className="align-middle">Log Out</span>
      </DropdownItem>
    </DropdownMenu>
  )
}

const NavbarUser = props => {
  //eslint-disable-next-line
  const [state, setState] = useState({
    suggestions: []
  })

  useEffect(() => {
    axios.get("/api/main-search/data").then(({data}) => {
      setState({
        suggestions: data.searchResult
      })
    })

    //eslint-disable-next-line
  }, [])


  return (
    <ul className="nav navbar-nav navbar-nav-user float-right">
      <UncontrolledDropdown tag="li" className="dropdown-user nav-item">
        <DropdownToggle tag="a" className="nav-link dropdown-user-link">
          <div className="user-nav d-sm-flex d-none">
              <span className="user-name text-bold-600">
                {props.userName}
              </span>
            <span className="user-status">Available</span>
          </div>
          <span data-tour="user">
              <img
                src={userImg}
                className="round"
                height="40"
                width="40"
                alt="avatar"
              />
            </span>
        </DropdownToggle>
        <UserDropdown {...props} />
      </UncontrolledDropdown>
    </ul>
  )
}

NavbarUser.propTypes = {
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth.login
})

export default connect(mapStateToProps, {setLoading, loadUser, logout})(NavbarUser)
