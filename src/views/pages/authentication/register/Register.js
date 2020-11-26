import React, {useState, useEffect} from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Row,
  Col, Form, Label, FormGroup, Input, Button, Spinner
} from "reactstrap"
import registerImg from "../../../../assets/img/logo/Cajeq-01.png"
import "../../../../assets/scss/pages/authentication.scss"
import {Lock, Mail, User} from "react-feather";
import {connect} from "react-redux"
import {register, clearErrors} from '../../../../redux/actions/auth/registerActions'
import PropTypes from 'prop-types'
import {useSnackbar} from 'react-simple-snackbar';
import {history} from "../../../../history";

const Register = ({auth: {error, isAuthenticated}, register, clearErrors}) => {

  const [waiting, setWaiting] = useState(false)

  const [openSnackbar] = useSnackbar();

  useEffect(() => {
    if (isAuthenticated) {
      history.push('/');
    }

    if (error) {
      openSnackbar(error)
      setWaiting(false);
      clearErrors();
    }
    //eslint-disable-next-line
  }, [error, isAuthenticated]);

  const [user, setUser] = useState({
    username: '',
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    password2: '',
  });

  const {username, firstname, lastname, email, password, password2} = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });


  const onSubmit = (e) => {
    e.preventDefault();
    setWaiting(true)
    if (username === '' || firstname === '' || lastname === '' || email === '' || password === '' || password2 === '') {
      openSnackbar('All fields required');
      setWaiting(false);
    } else if (password !== password2) {
      openSnackbar('Password mismatch!');
      setWaiting(false)
    } else {
      register({
        username,
        firstname,
        lastname,
        password,
        email
      });
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
        <Card className="bg-authentication rounded-0 mb-0 w-100">
          <Row className="m-0">
            <Col
              lg="6"
              className="d-lg-block d-none text-center align-self-center px-1 py-0"
            >
              <img className="mr-1" width="300px" height="300px" src={registerImg} alt="registerImg"/>
            </Col>
            <Col lg="6" md="12" className="p-0">
              <Card className="rounded-0 mb-0 p-2">
                <CardHeader className="pb-1">
                  <CardTitle>
                    <h4 className="mb-0">Create Account</h4>
                  </CardTitle>
                </CardHeader>
                <p className="px-0 auth-title mb-0">
                  Fill the below form to create a new account.
                </p>
                <CardBody className="pt-1 pb-50">
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
                            value={username}
                          />
                          <div className="form-control-position">
                            <User size={15}/>
                          </div>
                          <Label for="nameFloatingIcons">Username</Label>
                        </FormGroup>
                      </Col>
                      <Col sm="12">
                        <FormGroup className="has-icon-left form-label-group position-relative">
                          <Input
                            type="text"
                            name="firstname"
                            id="nameFloatingIcons"
                            placeholder="First Name"
                            onChange={onChange}
                            value={firstname}
                          />
                          <div className="form-control-position">
                            <User size={15}/>
                          </div>
                          <Label for="nameFloatingIcons">First Name</Label>
                        </FormGroup>
                      </Col>
                      <Col sm="12">
                        <FormGroup className="has-icon-left form-label-group position-relative">
                          <Input
                            type="text"
                            name="lastname"
                            id="nameFloatingIcons"
                            placeholder="Last Name"
                            onChange={onChange}
                            value={lastname}
                          />
                          <div className="form-control-position">
                            <User size={15}/>
                          </div>
                          <Label for="nameFloatingIcons">Last Name</Label>
                        </FormGroup>
                      </Col>
                      <Col sm="12">
                        <FormGroup className="has-icon-left form-label-group position-relative">
                          <Input
                            type="email"
                            name="email"
                            id="EmailFloatingIcons"
                            placeholder="Email"
                            value={email}
                            onChange={onChange}
                          />
                          <div className="form-control-position">
                            <Mail size={15}/>
                          </div>
                          <Label for="EmailFloatingIcons">Email</Label>
                        </FormGroup>
                      </Col>
                      <Col sm="12">
                        <FormGroup className="has-icon-left form-label-group position-relative">
                          <Input
                            type="password"
                            name="password"
                            id="IconsPasswordFloating"
                            placeholder="Password"
                            value={password}
                            onChange={onChange}
                          />
                          <div className="form-control-position">
                            <Lock size={15}/>
                          </div>
                          <Label for="IconsPasswordFloating">Password</Label>
                        </FormGroup>
                      </Col>
                      <Col sm="12">
                        <FormGroup className="has-icon-left form-label-group position-relative">
                          <Input
                            type="password"
                            name="password2"
                            id="IconsPasswordFloating"
                            placeholder="Confirm Password"
                            value={password2}
                            onChange={onChange}
                          />
                          <div className="form-control-position">
                            <Lock size={15}/>
                          </div>
                          <Label for="IconsPasswordFloating">Confirm Password</Label>
                        </FormGroup>
                      </Col>
                      <Col sm="12">
                        <FormGroup className="has-icon-left form-label-group position-relative">
                          <Button.Ripple
                            color="primary"
                            type="submit"
                            className="mr-1 mb-1"
                          >
                            Register
                            {waiting && <Spinner color="white" size="sm" />}
                          </Button.Ripple>
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                  <p>Already have an account, login <a href="/pages/login">here</a></p>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  )
}

Register.propTypes = {
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth.register
})

export default connect(mapStateToProps, {register, clearErrors})(Register)
