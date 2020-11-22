import React, {useState} from "react"
import {
  UncontrolledCarousel,
  Card,
  CardBody,
  TabContent,
  TabPane
} from "reactstrap"
import { carouselUncontrolled } from "./CarouselSourceCode"



const CarouselUncontrolled = ({images}) => {
  const [state] = useState({
    activeTab: "1"
  })

  const items = images.map(image => (
    {
      src: image,
      caption: ''
    }
  ))

  const {activeTab} = state

  // const toggleTab = tab => {
  //   if (activeTab !== tab) {
  //     setState({ activeTab: tab })
  //   }
  // }

    return (
      <React.Fragment>
        <Card>
          <CardBody>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <UncontrolledCarousel items={items} />
              </TabPane>
               <TabPane className="component-code" tabId="2">{carouselUncontrolled}</TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
}
export default CarouselUncontrolled
