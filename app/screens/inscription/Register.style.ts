/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from "react-native"
import { theme } from "../myscreen/myscreen.style"

export const registerstyle = StyleSheet.create({
  Button: {
    margin: 15,
    marginleft: 0,
    marginRight: 0,
    borderRadius: 20,
  },
  Content: {
    padding: 15,
    paddingTop: 0,
    backgroundColor: "#ffffff",
  },
  Icon: {
    color: theme.colors.primary,
  },
})
