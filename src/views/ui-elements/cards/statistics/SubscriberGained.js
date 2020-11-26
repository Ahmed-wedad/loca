import React from "react"
import StatisticsCard from "../../../../components/@vuexy/statisticsCard/StatisticsCard"
import {Users} from "react-feather"
import {subscribersGained, subscribersGainedSeries} from "./StatisticsData"

const SubscriberGained = ({users}) => {
  return (
    <StatisticsCard
      icon={<Users className="primary" size={22}/>}
      stat={users}
      statTitle="Subscribers Gained"
      options={subscribersGained}
      series={subscribersGainedSeries}
      type="area"
    />
  )
}
export default SubscriberGained
