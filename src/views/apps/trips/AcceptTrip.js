import React, {useState, useEffect} from "react"
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  CardBody,
  TabContent,
  TabPane, Form, FormGroup, Col, Input, Spinner
} from "reactstrap"
import {User, Mail, Smartphone} from "react-feather"
import { modalCentered } from "./ModalSourceCode"

const AcceptTrip = ({current, clearErrors, modalA, activeTabA, toggleModalAccept, acceptTrip, msg}) => {
  const [trip, setTrip] = useState({
    reference: '',
    name: '',
    status: '',
    firstname: '',
    lastname: ''
  })


  const [waiting, setWaiting] = useState(false);

  useEffect(() => {
    if (current !== null) {
      setTrip({
        name: current.Car.name,
        status: current.status,
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

  const {name, lastname, firstname, status} = trip;


  // const toggleTab = tab => {
  //   if (activeTab !== tab) {
  //     setState({ activeTab: tab })
  //   }
  // }


  const onChange = e => {}

  const onSubmit = e => {
    e.preventDefault();
    setWaiting(true)
    acceptTrip(current.trip_id)
  }


    return (
      <React.Fragment>
            <TabContent activeTab={activeTabA}>
              <TabPane tabId="1">
                <Modal
                  isOpen={modalA}
                  toggle={toggleModalAccept}
                  className="modal-dialog-centered"
                >
                  <ModalHeader toggle={toggleModalAccept}>
                   Accept Trip
                  </ModalHeader>
                  <ModalBody>
                    <CardBody>
                      <Form>
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
                            <span>Status</span>
                          </Col>
                          <Col md="8">
                            <Input
                              type="text"
                              name="make"
                              id="truckIcons"
                              placeholder="Car Name"
                              value={status}
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
                          <Col md={{ size: 8, offset: 4 }}>
                            <Button.Ripple
                              color="primary"
                              type="submit"
                              className="mr-1 mb-1"
                              onClick={onSubmit}
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
export default AcceptTrip
