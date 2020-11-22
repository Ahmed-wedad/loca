import React, {useState, useEffect} from "react"
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  CardBody,
  TabContent,
  TabPane, Form, FormGroup, Col, Input, CustomInput, Spinner
} from "reactstrap"
import {User, Mail, Smartphone} from "react-feather"
import { modalCentered } from "./ModalSourceCode"

const ModalCentered = ({current, clearErrors, modal, activeTab, toggleModal, verifyCar, msg}) => {
  const [car, setCar] = useState({
    name: '',
    make: '',
    isVerified: false,
    firstname: '',
    lastname: ''
  })

  const [verified, setVerified] = useState({
    isVerified: false
  })

  const [waiting, setWaiting] = useState(false);

  useEffect(() => {
    if (current !== null) {
      setCar({
        name: current.name,
        make: current.make,
        isVerified: current.isVerified,
        firstname: current.User.firstname,
        lastname: current.User.lastname
      })
    }

    if (msg) {
      setWaiting(false)
      clearErrors()
    }

    //eslint-disable-next-line
  }, [current, msg])

  const {name, lastname, firstname, make} = car;


  // const toggleTab = tab => {
  //   if (activeTab !== tab) {
  //     setState({ activeTab: tab })
  //   }
  // }

  const onChange = e => setVerified({...verified, [e.target.name]: e.target.value})


  const onSubmit = e => {
    e.preventDefault();
    setWaiting(true)
    verifyCar(current.car_id, verified)
  }


    return (
      <React.Fragment>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <Modal
                  isOpen={modal}
                  toggle={toggleModal}
                  className="modal-dialog-centered"
                >
                  <ModalHeader toggle={toggleModal}>
                   Edit Car Status
                  </ModalHeader>
                  <ModalBody>
                    <CardBody>
                      <Form onSubmit={onSubmit}>
                        <FormGroup row className="has-icon-left position-relative">
                          <Col md="4">
                            <span>Car Name</span>
                          </Col>
                          <Col md="8">
                            <Input
                              type="text"
                              name="name"
                              id="nameIcons"
                              placeholder="Car Name"
                              value={name}
                              onChange={onChange}
                            />
                            <div className="form-control-position">
                              <Smartphone size={15} />
                            </div>
                          </Col>
                        </FormGroup>

                        <FormGroup row className="has-icon-left position-relative">
                          <Col md="4">
                            <span>Car Make</span>
                          </Col>
                          <Col md="8">
                            <Input
                              type="text"
                              name="make"
                              id="truckIcons"
                              placeholder="Car Name"
                              value={make}
                              onChange={onChange}
                            />
                            <div className="form-control-position">
                              <Smartphone size={15} />
                            </div>
                          </Col>
                        </FormGroup>

                        <FormGroup row className="has-icon-left position-relative">
                          <Col md="4">
                            <span>First Name</span>
                          </Col>
                          <Col md="8">
                            <Input
                              type="text"
                              name="firstname"
                              id="nameIcons"
                              value={firstname}
                              placeholder="First Name"
                              onChange={onChange}
                            />
                            <div className="form-control-position">
                              <User size={15} />
                            </div>
                          </Col>
                        </FormGroup>

                        <FormGroup row className="has-icon-left position-relative">
                          <Col md="4">
                            <span>Last Name</span>
                          </Col>
                          <Col md="8">
                            <Input
                              type="text"
                              name="lastname"
                              id="nameIcons"
                              placeholder="Last Name"
                              value={lastname}
                              onChange={onChange}
                            />
                            <div className="form-control-position">
                              <Mail size={15} />
                            </div>
                          </Col>
                        </FormGroup>

                        <FormGroup row className="has-icon-left position-relative">
                          <Col md="4">
                            <span>Verify</span>
                          </Col>
                          <Col md="8">
                          <CustomInput
                            type="select"
                            name="isVerified"
                            id="exampleSelectCustom"
                            onChange={onChange}
                          >
                            <option>Select</option>
                            <option value='true'>True</option>
                            <option value='false'>False</option>
                          </CustomInput>
                          </Col>
                        </FormGroup>
                        <FormGroup row className="has-icon-left position-relative">
                          <Col md={{ size: 8, offset: 4 }}>
                            <Button.Ripple
                              color="primary"
                              type="submit"
                              className="mr-1 mb-1"
                            >
                              Submit
                              {waiting && <Spinner color="white" size="sm" />}
                            </Button.Ripple>
                          </Col>
                        </FormGroup>
                      </Form>
                    </CardBody>
                  </ModalBody>
                </Modal>
              </TabPane>
              <TabPane className="component-code" tabId="2">
                {modalCentered}
              </TabPane>
            </TabContent>
      </React.Fragment>
    )
}
export default ModalCentered
