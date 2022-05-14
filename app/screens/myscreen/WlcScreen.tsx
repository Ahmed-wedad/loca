/* eslint-disable react-native/sort-styles */
/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-unused-styles */
/* eslint-disable react/jsx-no-undef */
import { StyleSheet, Text, View, Image, Button } from 'react-native'
import React from 'react'
import { IconButton } from 'react-native-paper'

const WlcScreen = (props: { navigation: { navigate: (arg0: string) => void } }) => {
    return (
        <View style={{ backgroundColor: "#ffffff" }}>
            <Image
                source={require('./Asset1.png')}
                resizeMode='center'
                style={styles.image}
            />
            <Text style={styles.Text1}>Welcome</Text>
            <Text style={styles.Text2}>Please choose your registration mode</Text>
            <View style={{ flexDirection: 'row', marginVertical: 5, marginHorizontal: 80, justifyContent: 'space-between' }}>

                <IconButton icon='desk' size={50} color={"rgb(29,74,220)"}></IconButton>
                <IconButton icon='account' size={50} color={"rgb(99,218,48)"}></IconButton>
            </View>
            <View style={{ flexDirection: 'row', marginVertical: 0, marginHorizontal: 100, justifyContent: 'space-between' }}>
                <Button title='Agency' color={"rgb(29,74,220)"}  ></Button>
                <Text>{"    ou     "}</Text>
                <Button title='Particular' color={"rgb(99,218,48)"} onPress={() => props.navigation.navigate('RegisterP')}></Button>
            </View>
            <View style={{ flexDirection: 'row', marginVertical: 30, marginHorizontal: 100 }}>
                <Text style={{ color: "#1d1d1d" }}>Already registred</Text>
                <Text style={{ color: "rgb(29,74,220)" }} onPress={() => props.navigation.navigate('Login')}>     Login</Text>
            </View>
        </View >

    )
}

export default WlcScreen

const styles = StyleSheet.create({
    Text1: {
        alignItems: 'center',
        color: "#222522",
        fontSize: 50,
        marginHorizontal: 80,

    },
    Text2: {
        color: "#222522",
        marginHorizontal: 100,
        fontSize: 15,
        marginTop: 5
    },
    image: {
        height: 50,
        marginHorizontal: 90,
        marginVertical: 100,
        width: 200,


    }


})