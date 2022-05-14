
/* eslint-disable react-native/no-inline-styles */

/* eslint-disable react-native/no-color-literals */
import { View, Text,Image,TextInput,StyleSheet, TouchableHighlight ,Alert,TouchableOpacity, Button, SafeAreaView } from 'react-native'
import CountryPicker, { CallingCode } from 'react-native-country-picker-modal'
import React,{useState} from 'react'
import { CountryCode, Country } from '../src/types'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Svg, { Path } from 'react-native-svg'



export default function VerfPhone({navigation}) {
     const [number, onChangeNumber] = React.useState(null);
  const [countryCode, setCountryCode] = useState<CountryCode>('TN')
  const [country, setCountry] = useState<Country>(null)
 
  const [callingCode, setCallingCode] = useState<CallingCode>("+216")

  const onSelect = (country) => {
    setCountryCode(country.cca2)
    setCountry(country)
    setCallingCode(country.callingCode)
  }
  const [inputValue, setInputValue] = useState('');

  const checkValueIsNumberOrNot = () => {
if((number==null)){
  alert('It is not a Number ');
  }
  else if (isNaN(number)||(number.toString().length!==8)) {
      alert('It is not a Number ');
    } else {
      const longOfNumber=number.toString();
      alert('+'+callingCode+longOfNumber);
      const phoneNumber='+'+callingCode+longOfNumber
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' , "Connection": "close"},
        body: JSON.stringify( {phoneNumber} )
    };
    fetch('http://localhost:8080/api/v1/sms', requestOptions)
        .catch((error)=>{
          console.log("Api call error");
          alert(error.message);
       });;
     navigation.navigate('ConfirmationPhone',{num : longOfNumber});
    }
  };
  return (
    <SafeAreaView style={{alignItems: 'center',flex:1,backgroundColor:"#1860EF",borderRadius:0,}}>
      <TouchableOpacity style={verif.return}>
        <Icon name="arrow-left" size={20} style={{color:'#fff',}} />
        </TouchableOpacity>
        <Icon name="sms" size={40} style={verif.icon} />
        <Image style={verif.phone} source={require('../images/Phone.png')}></Image>
        <Image style={verif.phoneShadow} source={require('../images/phone-shadow.png')}></Image>
        <View style={{width:"100%",height:110,}}><Svg  viewBox="0 0 1440 220"><Path fill="#fff" fill-opacity="1" d="M0,64L80,74.7C160,85,320,107,480,117.3C640,128,800,128,960,117.3C1120,107,1280,85,1360,74.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></Path></Svg>
        </View>

        <View style={{backgroundColor:"#fff", width:"100%",height:"100%", alignItems: 'center',marginTop:-3,}}>
        
        <TouchableOpacity style={verif.country} >
        
        <CountryPicker 
        {...{
          countryCode,
          withFilter:true,
          withFlag:true,
          withAlphaFilter:true,
          withCountryNameButton:true,
          withCallingCode:true,
          withEmoji:true,
          withCallingCodeButton:true,
          onSelect,
        }}
        visible withModal
      ></CountryPicker>
      <Icon name="angle-right" size={20} style={{color:'gray',alignItems:'flex-end',}}  />
        </TouchableOpacity>
        <TextInput
        style={verif.input}
        onChangeText={onChangeNumber}
        value={number}
        maxLength={8}
        placeholder="Votre Numero"
        keyboardType="numeric"
      />
      <TouchableHighlight
  style={verif.button}
  onPress={() =>checkValueIsNumberOrNot() }
  underlayColor='#fff'>
    <Text style={{color:'#fff'}} >Envoyé</Text>
</TouchableHighlight>
    </View>
     
      </SafeAreaView>

   
  )

}
const verif =StyleSheet.create({
  // eslint-disable-next-line react-native/no-color-literals
  button:{
   alignItems:'center',
    backgroundColor:"#1860EF",
    borderRadius:100,
    height:50,
    justifyContent:'center',
    marginTop:40,
    width:280,

   },
  country:{
    alignItems:'center',
    borderRadius:10,
    borderWidth:1,
    flexDirection: 'row',
    height:45,
    justifyContent:'space-between',
    marginTop:30,
    opacity:1,
    paddingLeft:15,
    paddingRight:15,
    width:300,
    
   },
  // eslint-disable-next-line react-native/no-color-literals
  icon:{
    color:"#253042",
    marginLeft:"22%",
    marginTop:"20%",
   },
   input:{
    borderRadius:10,
    borderWidth:1,
    height:45,
    marginTop:30,
    opacity:1,
    paddingLeft:15, 
    width:300,
   },
   phone:{
    height:"16%",
    width:"22%",
 
  },
   phoneShadow:{
    height:"6%",
    marginBottom:40,
    width:"20%",
  },
   return:{
    left:15,
    position:'absolute',
    top:48,
   }
})
