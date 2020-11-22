import React, {useState} from "react"
import {
  Pagination,
  PaginationItem,
  PaginationLink,
  TabContent,
  TabPane
} from "reactstrap"
import {ChevronsLeft, ChevronsRight} from "react-feather"
import {paginationIconsAndText} from "./PaginationSourceCode"

const PaginationIconsAndText = ({pages, nextPage, currentPage}) => {
  const [state] = useState({
    activeTab: "1"
  })

  const {activeTab} = state

  const pageLinks = []

  for (let i = 0; i < pages; i++) {
    if (currentPage === i) {
      pageLinks.push(
        <PaginationItem key={i} onClick={() => nextPage(i)} active>
          <PaginationLink>{i + 1}</PaginationLink>
        </PaginationItem>
      )
    } else {
      pageLinks.push(
        <PaginationItem key={i} onClick={() => nextPage(i)}>
          <PaginationLink>{i + 1}</PaginationLink>
        </PaginationItem>
      )
    }

  }



  // const toggleTab = tab => {
  //   if (activeTab !== tab) {
  //     setState({activeTab: tab})
  //   }
  // }

  return (
    <React.Fragment>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Pagination className="d-flex justify-content-center mt-3">
           {currentPage > 0 && <PaginationItem onClick={() => nextPage(currentPage - 1)}>
              <PaginationLink first>
                <ChevronsLeft/>{" "}
                <span className="d-none d-sm-inline-block">Prev</span>
              </PaginationLink>
            </PaginationItem>
           }
            {pageLinks}

            {currentPage < pages - 1 &&
            <PaginationItem onClick={() => nextPage(currentPage + 1)}>
              <PaginationLink last>
                <span className="d-none d-sm-inline-block">Next</span>{" "}
                <ChevronsRight/>
              </PaginationLink>
            </PaginationItem>
            }
          </Pagination>
        </TabPane>
        <TabPane className="component-code" tabId="2">{paginationIconsAndText}</TabPane>
      </TabContent>
    </React.Fragment>
  )
}
export default PaginationIconsAndText
