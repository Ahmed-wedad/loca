import React, {useState, useEffect} from "react"
import {
  Button,
  Media,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Col,
  Spinner
} from "reactstrap"
import img from "../../../assets/img/portrait/user.png"
import {connect} from "react-redux"
import {updateUser, clearErrors, uploadProfilePhoto} from "../../../redux/actions/auth/loginActions";
import PropTypes from "prop-types"
import {useSnackbar} from "react-simple-snackbar"


const General = ({auth: {error, msg, loading}, updateUser, clearErrors, uploadProfilePhoto, user}) => {
  const [state, setState] = useState({
    firstname: '',
    lastname: '',
    email: '',
    image: '',
    phone: '',
    address: ''
  })

  const [openSnackbar] = useSnackbar()

  const [waiting, setWaiting] = useState(false)
  const [waitingB, setWaitingB] = useState(false)

  useEffect(() => {
    if (user !== {} && user !== null) {
      setState({
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        image: user.image,
        address: user.address,
        phone: user.phone
      })
    }

    if (error) {
      openSnackbar(error);
      clearErrors();
      setWaiting(false)
      setWaitingB(false)
    }

    if (msg) {
      openSnackbar(msg)
      clearErrors()
      setWaiting(false)
      setWaitingB(false)
    }

    //eslint-disable-next-line
  }, [msg, error, user])

  const onChange = (e) => setState({...state, [e.target.name]: e.target.value})

  const onImageChange = e => setState({...state, image: e.target.files[0]});

  const onSubmit = e => {
    e.preventDefault();
    updateUser(state)
    setWaiting(true)
  }

  const onSubmitImage = e => {
    e.preventDefault()
    const formData = new FormData()

    formData.append('image', state.image)
    uploadProfilePhoto(formData)
    setWaitingB(true)
  }


  const {firstname, lastname, email, image, phone, address} = state


  return (
    <React.Fragment>
      <Media>
        <Media className="mr-1" left href="#">
          <Media
            className="rounded-circle"
            object
            src={image !== null && loading === false ? image : img}
            alt="User"
            height="64"
            width="64"
          />
        </Media>
        <Media className="mt-25" body>
          <div className="d-flex flex-sm-row flex-column justify-content-start px-0">
            <Form onSubmit={onSubmitImage}>
              <Input type="file" name="image" onChange={onImageChange} />
              <Button.Ripple className="mr-50" type="submit" color="primary">
                Upload Image
                {waitingB && <Spinner color="white" size="sm" />}
              </Button.Ripple>
            </Form>
          </div>
          <p className="text-muted mt-50">
            <small>Allowed JPG, GIF or PNG. Max size of 800kB</small>
          </p>
        </Media>
      </Media>
      <Form className="mt-2" onSubmit={onSubmit}>
        <Row>
          <Col sm="12">
            <FormGroup>
              <Label for="firstname">First Name</Label>
              <Input id="firstname" value={firstname} onChange={onChange} name="firstname" />
            </FormGroup>
          </Col>
          <Col sm="12">
            <FormGroup>
              <Label for="name">Last Name</Label>
              <Input id="name" name="lastname" value={lastname} onChange={onChange} />
            </FormGroup>
          </Col>
          <Col sm="12">
            <FormGroup>
              <Label for="email">Email</Label>
              <Input id="email" name="email" value={email} onChange={onChange} />
            </FormGroup>
          </Col>
          <Col sm="12">
            <FormGroup>
              <Label for="address">Address</Label>
              <Input id="address" name="address" value={address} onChange={onChange} />
            </FormGroup>
          </Col>
          <Col sm="12">
            <FormGroup>
              <Label for="phone">Phone Number</Label>
              <Input id="phone" name="phone" value={phone} onChange={onChange} />
            </FormGroup>
          </Col>
          <Col className="d-flex justify-content-start flex-wrap" sm="12">
            <Button.Ripple className="mr-50" type="submit" color="primary">
              Save Changes
              {waiting && <Spinner color="white" size="sm" />}
            </Button.Ripple>
            <Button.Ripple type="submit" color="danger">
              Cancel
            </Button.Ripple>
          </Col>
        </Row>
      </Form>
    </React.Fragment>
  )
}

General.propTypes = {
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth.login
})
export default connect(mapStateToProps, {updateUser, clearErrors, uploadProfilePhoto})(General)
