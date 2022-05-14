import { View, Text,TextStyle } from 'react-native'
import React from 'react'
const text : TextStyle={fontSize: 24, alignSelf: 'center'}
const index = () => {
  return (
    <View>
      <Text style={text}>Home, sweet home</Text>
    </View>
  )
}

export default index