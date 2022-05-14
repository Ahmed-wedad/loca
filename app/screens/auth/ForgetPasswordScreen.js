/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */

import React, {useState} from 'react';
import {View, Text,  ScrollView, TextInput, Button} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {forget} from "./login.style"

export const ForgetPasswordScreen = () => {
    const [username, setUsername] = useState('');

  
    const navigation = useNavigation();

  const onSendPressed = () => {
    navigation.navigate('NewPassword');
  };

  const onReturn = () => {
    navigation.navigate('SignIn');
  };


  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={forget.root}>
        <Text style={forget.title}>Reset your password</Text>

        <TextInput style = {forget.input}
               underlineColorAndroid = "transparent"
               placeholderTextColor = 'grey'
               autoCapitalize = "none"
               placeholder='Write your password'
            // eslint-disable-next-line react/jsx-no-comment-textnodes
            />

        
        <View style={{width : 20, height : 30} }/> 

       <Button
       style={forget.button}
       onPress={onSendPressed}
       title="Send">
      </Button>


      <View style={{width : 20, height : 30} }/> 
      <Text style={{color: 'gray'}}
      onPress={onReturn}> Go Back</Text>

      </View>
    </ScrollView>
  );
};
export default ForgetPasswordScreen