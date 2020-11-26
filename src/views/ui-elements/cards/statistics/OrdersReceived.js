import React from "react"
import StatisticsCard from "../../../../components/@vuexy/statisticsCard/StatisticsCard"
import {Package} from "react-feather"
import {ordersReceived, ordersReceivedSeries} from "./StatisticsData"

const OrdersReceived = ({trips}) => {
  return (
    <StatisticsCard
      icon={<Package className="warning" size={22}/>}
      iconBg="warning"
      stat={trips}
      statTitle="Trips Booked"
      options={ordersReceived}
      series={ordersReceivedSeries}
      type="area"
    />
  )
}
export default OrdersReceived
