import React, {useEffect, useState} from "react"
import {Button, Form, FormGroup, Row, Col, Input, Label, Spinner} from "reactstrap"
import {Lock} from "react-feather"
import PropTypes from "prop-types"
import {connect} from 'react-redux'
import {clearErrors, updatePassword} from "../../../redux/actions/auth/loginActions"
import {useSnackbar} from "react-simple-snackbar"


const ChangePassword = ({auth: {error, msg}, clearErrors, updatePassword}) => {
  const [state, setState] = useState({
    old_password: '',
    new_password: '',
    password2: ''
  })

  const [waiting, setWaiting] = useState(false)

  const [openSnackbar] = useSnackbar()

  useEffect(() => {
    if (error) {
      openSnackbar(error);
      clearErrors();
      setWaiting(false)
    }

    if (msg) {
      openSnackbar(msg)
      clearErrors()
      setWaiting(false)
    }

    //eslint-disable-next-line
  }, [msg, error])

  const onChange = (e) => setState({...state, [e.target.name]: e.target.value})

  const onSubmit = e => {
    e.preventDefault();
    if (new_password === '' || old_password === '' || password2 === '') {
      openSnackbar("All fields required")
    } else if (new_password !== password2) {
      openSnackbar("Password mismatch")
    } else {
      updatePassword({
        new_password,
        old_password
      })
      setWaiting(true)
      setState({
        old_password: '',
        new_password: '',
        password2: ''
      })
    }


  }

  const {old_password, password2, new_password} = state

  return (
    <React.Fragment>
      <Row className="pt-1">
        <Col sm="12">
          <Form onSubmit={onSubmit}>
            <Col sm="12">
              <FormGroup className="has-icon-left form-label-group position-relative">
                <Input
                  type="password"
                  name="old_password"
                  id="IconsPasswordFloating"
                  placeholder="Old Password"
                  value={old_password}
                  onChange={onChange}
                />
                <div className="form-control-position">
                  <Lock size={15}/>
                </div>
                <Label for="IconsPasswordFloating">Old Password</Label>
              </FormGroup>
            </Col>
            <Col sm="12">
              <FormGroup className="has-icon-left form-label-group position-relative">
                <Input
                  type="password"
                  name="new_password"
                  id="IconsPassworFloating"
                  placeholder="New Password"
                  value={new_password}
                  onChange={onChange}
                />
                <div className="form-control-position">
                  <Lock size={15}/>
                </div>
                <Label for="IconsPassworFloating">New Password</Label>
              </FormGroup>
            </Col>
            <Col sm="12">
              <FormGroup className="has-icon-left form-label-group position-relative">
                <Input
                  type="password"
                  name="password2"
                  id="IconsPasswordFloatin"
                  placeholder="Confirm Password"
                  value={password2}
                  onChange={onChange}
                />
                <div className="form-control-position">
                  <Lock size={15}/>
                </div>
                <Label for="IconsPasswordFloatin">Confirm Password</Label>
              </FormGroup>
            </Col>
            <div className="d-flex justify-content-start flex-wrap">
              <Button.Ripple
                className="mr-1 mb-1"
                color="primary"
                type="submit"
              >
                Save Changes
                {waiting && <Spinner color="white" size="sm" />}
              </Button.Ripple>
              <Button.Ripple
                className="mb-1"
                color="danger"
                type="reset"
                outline
              >
                Cancel
              </Button.Ripple>
            </div>
          </Form>
        </Col>
      </Row>
    </React.Fragment>
  )
}

ChangePassword.propTypes = {
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth.login
})
export default connect(mapStateToProps, {updatePassword, clearErrors})(ChangePassword)
