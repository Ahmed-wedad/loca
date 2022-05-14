/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/display-name */
/* eslint-disable react-native/no-unused-styles */
/* eslint-disable import/no-duplicates */
import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { createStackNavigator, StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { Provider as PaperProvider } from "react-native-paper"
import Login from "../auth/login"
import { theme } from "../myscreen/myscreen.style"
import Register from "./registerParticulier"
import { NavigationContainer, StackActions, useNavigation } from "@react-navigation/native"
import WlcScreen from "../myscreen/WlcScreen"
import registerParticulier from "./registerParticulier"




export type RouteParams = {
  Login: undefined,
  RegisterP: undefined,
  WlcScreen: undefined
}

const Stack = createStackNavigator<RouteParams>();


export const MyscreenScreen: FC<StackScreenProps<NavigatorParamList, "myscreen">> = observer(function MyscreenScreen() {

  const navigation = useNavigation()
  return (
    <PaperProvider theme={theme}>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Group screenOptions={{ headerShown: false, headerTintColor: "rgb(0,55,236)" }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="WlcScreen" component={WlcScreen} />
          <Stack.Screen name="RegisterP" component={registerParticulier} />
        </Stack.Group>
      </Stack.Navigator>
    </PaperProvider>
  )
})