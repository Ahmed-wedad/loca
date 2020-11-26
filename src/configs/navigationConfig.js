import React from "react"
import * as Icon from "react-feather"
const navigationConfig = [
  {
    id: "dashboard",
    title: "Dashboard",
    type: "item",
    icon: <Icon.Home size={20} />,
    navLink: "/"
  },
  //eslint-disable-next-line
  {
    id: "cars",
    title: "Cars",
    type: "item",
    icon: <Icon.Truck size={20} />,
    navLink: "/cars"
  },
  {
    id: "trips",
    title: "Trips",
    type: "item",
    icon: <Icon.Map size={20} />,
    navLink: "/trips"
  },
  {
    id: "users",
    title: "Users",
    type: "item",
    icon: <Icon.Users size={20} />,
    navLink: "/users",
  },
  {
    id: "licenses",
    title: "Driver Licenses",
    type: "item",
    icon: <Icon.CreditCard size={20} />,
    navLink: "/licenses",
  },
  {
    id: "reviews",
    title: "Reviews",
    type: "item",
    icon: <Icon.Edit size={20} />,
    navLink: "/reviews",
  },
  {
    id: "ratings",
    title: "Ratings",
    type: "item",
    icon: <Icon.Star size={20} />,
    navLink: "/ratings",
  },
  {
    id: "payments",
    title: "Payments",
    type: "item",
    icon: <Icon.TrendingUp size={20} />,
    navLink: "/payments",
  },
]

export default navigationConfig
