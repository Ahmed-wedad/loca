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

const ModalCentered = ({current, clearErrors, modal, activeTab, toggleModal, updateTrip, msg}) => {
  const [trip, setTrip] = useState({
    name: '',
    firstname: '',
    lastname: ''
  })

  const [date, setDate] = useState({
    start_date: '',
    end_date: ''
  })

  const [waiting, setWaiting] = useState(false);

  useEffect(() => {
    if (current !== null) {
      setTrip({
        name: current.Car.name,
        firstname: current.User.firstname,
        lastname: current.User.lastname
      })

      setDate({
        start_date: current.start_date,
        end_date: current.end_date,
      })
    }

    if (msg) {
      setWaiting(false)
      clearErrors()
    }

    //eslint-disable-next-line
  }, [current, msg])

  const {name, lastname, firstname} = trip
  const {start_date, end_date} = date


  // const toggleTab = tab => {
  //   if (activeTab !== tab) {
  //     setState({ activeTab: tab })
  //   }
  // }

  const onChange = e => setDate({...date, [e.target.name]: e.target.value})


  const onSubmit = e => {
    e.preventDefault();
    setWaiting(true)
    updateTrip(current.trip_id, date)
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
                            <span>Start Date</span>
                          </Col>
                          <Col md="8">
                            <Input
                              type="date"
                              name="start_date"
                              id="calendarIcons"
                              placeholder="End Date"
                              value={start_date}
                              onChange={onChange}
                            />
                            <div className="form-control-position">
                              <Smartphone size={15} />
                            </div>
                          </Col>
                        </FormGroup>
                        <FormGroup row className="has-icon-left position-relative">
                          <Col md="4">
                            <span>End Date</span>
                          </Col>
                          <Col md="8">
                            <Input
                              type="date"
                              name="end_date"
                              id="calendarIcons"
                              placeholder="End Date"
                              value={end_date}
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
