import React, {useEffect, useState} from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  Row,
  Col,
  CardBody,
  Form, Label, FormGroup, Input, Button, Spinner
} from "reactstrap"
import loginImg from "../../../../assets/img/pages/login.png"
import "../../../../assets/scss/pages/authentication.scss"
import {Lock, User} from "react-feather"
import {connect} from 'react-redux'
import {login, clearErrors} from '../../../../redux/actions/auth/loginActions'
import PropTypes from 'prop-types'
import {useSnackbar} from 'react-simple-snackbar';
import {history} from "../../../../history";


const Login = ({auth: {error, isAuthenticated}, login, clearErrors}) => {

  const [openSnackbar] = useSnackbar();

  const [waiting, setWaiting] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      history.push('/');
    }

    if (error) {
      openSnackbar(error);
      clearErrors();
      setWaiting(false)
    }
    //eslint-disable-next-line
  }, [error, isAuthenticated]);

  const [user, setUser] = useState({
    username: '',
    password: ''
  });

  const {username, password} = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (username === '' || password === '') {
      openSnackbar('All fields required');
    } else {
      login({
        username,
        password
      })
      setWaiting(true)
    }
  };

  return (
    <Row className="m-0 justify-content-center">
      <Col
        sm="8"
        xl="7"
        lg="10"
        md="8"
        className="d-flex justify-content-center"
      >
        <Card className="bg-authentication login-card rounded-0 mb-0 w-100">
          <Row className="m-0">
            <Col
              lg="6"
              className="d-lg-block d-none text-center align-self-center px-1 py-0"
            >
              <img src={loginImg} alt="loginImg"/>
            </Col>
            <Col lg="6" md="12" className="p-0">
              <Card className="rounded-0 mb-0 px-2 login-tabs-container">
                <CardHeader className="pb-1">
                  <CardTitle>
                    <h4 className="mb-0">Login</h4>
                  </CardTitle>
                </CardHeader>
                <p className="px-2 auth-title">
                  Welcome back, please login to your account.
                </p>
                <CardBody>
                  <Form className="mt-2" onSubmit={onSubmit}>
                    <Row>
                      <Col sm="12">
                        <FormGroup className="has-icon-left form-label-group position-relative">
                          <Input
                            type="text"
                            name="username"
                            id="nameFloatingIcons"
                            placeholder="Username"
                            onChange={onChange}
                          />
                          <div className="form-control-position">
                            <User size={15} />
                          </div>
                          <Label for="nameFloatingIcons">Username</Label>
                        </FormGroup>
                      </Col>
                      <Col sm="12">
                        <FormGroup className="has-icon-left form-label-group position-relative">
                          <Input
                            type="password"
                            name="password"
                            id="IconsPasswordFloating"
                            placeholder="Password"
                            onChange={onChange}
                          />
                          <div className="form-control-position">
                            <Lock size={15}/>
                          </div>
                          <Label for="IconsPasswordFloating">Password</Label>
                          <p style={{textAlign: 'right', fontSize: '12px', paddingTop: '8px'}}><a
                            href="/pages/forgot-password">Forgot Password?</a></p>
                        </FormGroup>
                      </Col>
                      <Col sm="12">
                        <FormGroup className="has-icon-left form-label-group position-relative">
                          <Button.Ripple
                            color="primary"
                            type="submit"
                            className="mr-1 mb-1"
                          >
                            Login
                           {waiting && <Spinner color="white" size="sm" />}
                          </Button.Ripple>
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                  <p>Don't have an account? <a href="/pages/register">Sign Up</a></p>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  )
}

Login.propTypes = {
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth.login
})

export default connect(mapStateToProps, {login, clearErrors})(Login)
