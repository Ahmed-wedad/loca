import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle ,View, TextStyle, StatusBar} from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { Screen, Text ,Header, Button} from "../../components"
import * as css from "@svgr-iconkit/css-gg"
import * as themify from "@svgr-iconkit/themify-icons"
import * as xnix from "@svgr-iconkit/xnix"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, spacing, typography } from "../../theme"


const ROOT: ViewStyle = {
  
  flex: 1,
  backgroundColor: color.palette.white,
  paddingHorizontal: spacing.small,
}

const HEADER_CONTAINER: ViewStyle = {
  marginTop: 20,
  marginBottom: spacing.smaller,
}
const BODY_CONTAINER: ViewStyle = {
  marginTop: spacing.small,
  marginBottom: spacing.huge,
  marginHorizontal:spacing.smaller,
  backgroundColor:color.palette.offWhite,
  padding:spacing.smaller,
  height:350,
  borderRadius: 10,

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
//
const CONTENT: TextStyle = {
  ...TEXT,
  color: "#595a56",
  fontSize: 15,
  lineHeight: 15,
  marginLeft:spacing.huge,

}
const HEADER_TITLE: TextStyle = {
  fontSize: 15,
 color:color.palette.black,
  fontWeight: "bold",
  letterSpacing: 0.5
,
  lineHeight: 20,
  textAlign: "left",
marginLeft:spacing.medium
,marginTop:spacing.medium
}
const LIST_CONTAINER: ViewStyle = {
  alignItems: "center",
  flexDirection: "row",
  marginLeft:spacing.smaller
}
const ICON : ViewStyle={
  marginTop:spacing.medium
}


const CONTINUE : ViewStyle={
  marginBottom: spacing.tiny,
  backgroundColor:"#553eea"
  
}
export const VerifRootScreen: FC<StackScreenProps<NavigatorParamList, "verifRoot">> = observer(({navigation})=>{
  // Pull in one of our MST stores
  //const { driver } = useStores()
  const nextScreen = () => navigation.navigate("licenseInfoSaisie")
  
  // Pull in navigation via hook
  // const navigation = useNavigation()90
  return (
    <Screen style={ROOT} preset="fixed" statusBar="dark-content">

      <Header titleStyle={HEADER_TITLE}  leftIcon={{type:"Material",name:"close" }} onLeftPress={()=>{}}/>
      <View style={HEADER_CONTAINER}>
        <Text preset="header"   style = {TITLE} tx="verifRootScreen.header" />
      </View>
      <Text style={[TEXT,]}>
            pour aider a laisser le communaute de Loca securiser,nous avons besoin de verifier votre identiter avant de confirmer votre voyage
          </Text>
          <View style={BODY_CONTAINER}>
              <View style={LIST_CONTAINER}><xnix.Iconset style = {ICON} name="id-card" color="#6c6cd2"/>
                      <Text preset="header"   style = {HEADER_TITLE} tx="verifRootScreen.permis.title" /> 
              </View>
              <Text style={CONTENT} tx="verifRootScreen.permis.instructions"/>
                
               
              <View style={LIST_CONTAINER}><css.Iconset name="profile" color="#6c6cd2"/>
                    
                      <Text preset="header"   style = {HEADER_TITLE} tx="verifRootScreen.photo.title" />
              </View>
                <Text style={CONTENT} tx="verifRootScreen.photo.instructions"/>
                    
              
              <View style={LIST_CONTAINER}><themify.Iconset name="lock" color="#6c6cd2"/>
                 
                   <Text preset="header"   style = {HEADER_TITLE} tx="verifRootScreen.calme.title" />
              </View>
                   <Text style={CONTENT} tx="verifRootScreen.calme.instructions"/>
                   
          </View>
          <Button onPress={nextScreen} style={CONTINUE} tx="verifRootScreen.Continue"/>
    </Screen>
  )
})
