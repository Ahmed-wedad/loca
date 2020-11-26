import React from "react"
import StatisticsCard from "../../../../components/@vuexy/statisticsCard/StatisticsCard"
import {CreditCard} from "react-feather"
import {revenueGeneratedSeries, revenueGenerated} from "./StatisticsData"

const RevenueGenerated = ({payment}) => {
  return (
    <StatisticsCard
      icon={<CreditCard className="success" size={22}/>}
      iconBg="success"
      stat={payment}
      statTitle="Revenue Generated"
      options={revenueGenerated}
      series={revenueGeneratedSeries}
      type="area"
    />
  )
}
export default RevenueGenerated
