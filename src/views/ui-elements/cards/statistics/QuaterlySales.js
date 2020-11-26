import React from "react"
import StatisticsCard from "../../../../components/@vuexy/statisticsCard/StatisticsCard"
import {Truck} from "react-feather"
import {quaterlySales, quaterlySalesSeries} from "./StatisticsData"

const QuaterlySales = ({cars}) => {
  return (
    <StatisticsCard
      icon={<Truck className="danger" size={22}/>}
      iconBg="danger"
      stat={cars}
      statTitle="Cars"
      options={quaterlySales}
      series={quaterlySalesSeries}
      type="area"
    />
  )
}
export default QuaterlySales
