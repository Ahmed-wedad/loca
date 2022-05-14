/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
import { View, Text,SafeAreaView,TouchableOpacity,StyleSheet, TextInput} from 'react-native'
import React,{useState} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import VirtualKeyboard from 'react-native-virtual-keyboard';

export default function ConfirmationPhone({navigation,route}) {
  const [number, setnumber] = useState<string>('')
  const checkValueIsCorrectCode = (number) => {
  alert('It is a Code ');
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' , "Connection": "close"},
    body: JSON.stringify( {number} )
};
fetch('http://localhost:8080/api/v1/sms/verife', requestOptions)
    .catch((error)=>{
      console.log("Api call error");
      alert(error.message);
   });;
  }
 const functionCombined=(number) =>{
   if(number.length<4){
    setnumber(number);}
    else{
      setnumber(number);
    checkValueIsCorrectCode(number);
  }

  } 
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <SafeAreaView style={{alignItems: 'center',flex:1,backgroundColor:"#1860EF"}}>
      <TouchableOpacity style={styles.return} onPressIn={() => navigation.goBack()}>
    
        <Icon name="arrow-left" size={20} style={{color:'#fff',}} />
        </TouchableOpacity>
        

        <Text  style={{color:'#fff',marginTop:100, fontWeight: 'bold', fontSize:25,}}>Verification Code</Text>
        <Text style={{width:250,textAlign:"center",marginTop:12,color:'#a2b2fd'}}>Veuillez saisir le code de verification envoyé au {route.params.num}  </Text>
        <View  style={{flexDirection:'row',justifyContent:'space-between'}}> 
        <Text style={styles.textin}>{number[0]}</Text>
        <Text style={styles.textin}>{number[1]}</Text>
        <Text style={styles.textin}>{number[2]}</Text>
        <Text style={styles.textin}>{number[3]}</Text>
        </View>
        <VirtualKeyboard color='#fff' pressMode='string' onPress={(number) => functionCombined(number)} />
        

        </SafeAreaView>
  )
}
const styles =StyleSheet.create({
    
       return:{
        left:15,
        position:'absolute',
        top:48,
       },
       // eslint-disable-next-line react-native/no-color-literals
       textin:{
        backgroundColor:"#8BB5F9",borderRadius:10,color:'white',fontSize:30,height:50,marginBottom:"15%",marginLeft:5,marginTop:'30%',padding:0,textAlign:'center',textAlignVertical:'center',width:40
       },
})
function functionCombined(number: string) {
  throw new Error('Function not implemented.');
}

