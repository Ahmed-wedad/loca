import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { StatusBar, TextStyle, ViewStyle , View} from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { Header, Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, spacing, typography } from "../../theme"
//import CountryPicker from "react-native-region-country-picker";
const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
}

const HEADER_TITLE: TextStyle = {
  fontSize: 15,
 color:color.palette.black,
  fontWeight: "bold",
  letterSpacing: 0.5
,
  lineHeight: 20,
  textAlign: "left",
  marginVertical:spacing.smaller
}
const HEADER_CONTAINER: ViewStyle = {
  marginTop: 20,
  marginBottom: spacing.smaller,
}
const TEXT: TextStyle = {
  color: color.palette.black,
  fontFamily: typography.primary,
}
const BOLD: TextStyle = { fontWeight: "bold" }
const TITLE: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 28,
  lineHeight: 45,
  textAlign: "left",

}
const CONTENT: TextStyle = {
  ...TEXT,
  color: "#595a56",
  fontSize: 15,
  lineHeight: 15,
  marginLeft:spacing.medium,

}
export const LicenseInfoSaisieScreen: FC<StackScreenProps<NavigatorParamList, "licenseInfoSaisie">> = observer(function LicenseInfoSaisieScreen() {
  
  return (
    <Screen style={ROOT} preset="scroll">
      <StatusBar
    barStyle="dark-content"
    backgroundColor="#f9fafa"
      />
      <Header titleStyle={HEADER_TITLE} headerTx="verifRootScreen.header" leftIcon={{type:"Material",name:"arrow-back"}}/>
      <View style={HEADER_CONTAINER}>
        <Text preset="header"   style = {TITLE} tx="licensecountry.title"/>
      </View>
      <Text style={CONTENT} tx="licensecountry.desc"/>
  
    </Screen>
  )
})
