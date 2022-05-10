
import React from "react"
import { useColorScheme } from "react-native"
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import {  LicenseInfoSaisieScreen, VerifRootScreen } from "../screens"
import { navigationRef, useBackButtonHandler } from "./navigation-utilities"


export type NavigatorParamList = {
  verifRoot: undefined,
  licenseInfoSaisie: undefined
}


const Stack = createNativeStackNavigator<NavigatorParamList>()

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,}
      }
      initialRouteName="verifRoot"
    >
    <Stack.Screen name="verifRoot" component={VerifRootScreen} />
    <Stack.Screen name="licenseInfoSaisie" component={LicenseInfoSaisieScreen} />
      {/**  Your screens go here */}
    </Stack.Navigator>
  )
}

interface NavigationProps extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = (props: NavigationProps) => {
  const colorScheme = useColorScheme()
  useBackButtonHandler(canExit)
  return (
    <NavigationContainer
      ref={navigationRef}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      {...props}
    >
      <AppStack />
    </NavigationContainer>
  )
}

AppNavigator.displayName = "AppNavigator"

const exitRoutes = ["verifRoot"]
export const canExit = (routeName: string) => exitRoutes.includes(routeName)
