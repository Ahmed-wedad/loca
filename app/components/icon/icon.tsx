import * as React from "react"
import { View,  } from "react-native"
import { IconProps } from "./icon.props"
import { icons } from "./icons"


export function Icon(props: IconProps) {
  const { icon,name,  containerStyle } = props
const Icone = icons[icon]
  return (
    <View style={containerStyle}>
      <Icone name={name} color="#040404"/>
    </View>
  )
}
