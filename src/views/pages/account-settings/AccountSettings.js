import React, {useState, useEffect} from "react"
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  CardBody
} from "reactstrap"
import classnames from "classnames"
import {Settings, Lock} from "react-feather"
import GeneralTab from "./General"
import ChangePassword from "./ChangePassword"
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"

import "../../../assets/scss/pages/account-settings.scss"
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {loadUser, setLoading} from "../../../redux/actions/auth/loginActions"
import Spinner from "../../ui-elements/Spinner";

const AccountSettings = ({auth: {user, loading}, loadUser, setLoading}) => {
  useEffect(() => {
    setLoading()
    loadUser()

    //eslint-disable-next-line
  }, [])
  const [state, setState] = useState({
    activeTab: "1",
    windowWidth: null
  })

  let toggle = tab => {
    setState({
      activeTab: tab
    })
  }

  let updateWidth = () => {
    setState({windowWidth: window.innerWidth})
  }

  useEffect(() => {
    if (window !== undefined) {
     updateWidth()
      window.addEventListener("resize", updateWidth)
    }

    //eslint-disable-next-line
  }, [])


  let {windowWidth, activeTab} = state

  if (loading) return <Spinner/>
  return (
    <React.Fragment>
      <Breadcrumbs
        breadCrumbTitle="Account"
        breadCrumbParent="Account Settings"
      />
      <div className={`${windowWidth >= 769 ? "nav-vertical" : "account-setting-wrapper"}`}>
        <Nav className="account-settings-tab nav-left mr-0 mr-sm-3" tabs>
          <NavItem>
            <NavLink
              className={classnames({
                active: activeTab === "1"
              })}
              onClick={() => {
                toggle("1")
              }}
            >
              <Settings size={16}/>
              <span className="d-md-inline-block d-none align-middle ml-1">General</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({
                active: activeTab === "2"
              })}
              onClick={() => {
                toggle("2")
              }}
            >
              <Lock size={16}/>
              <span className="d-md-inline-block d-none align-middle ml-1">Change Password</span>
            </NavLink>
          </NavItem>
        </Nav>
        <Card>
          <CardBody>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <GeneralTab user={user}/>
              </TabPane>
              <TabPane tabId="2">
                <ChangePassword user={user} />
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </div>
    </React.Fragment>
  )
}

AccountSettings.propTypes = {
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth.login
})

export default connect(mapStateToProps, {loadUser, setLoading})(AccountSettings)
