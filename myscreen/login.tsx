/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/sort-styles */
/* eslint-disable react-native/no-unused-styles */
/* eslint-disable react/jsx-no-undef */
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, Card, TextInput } from 'react-native-paper'
import { loginStyle } from './login.style'
import { HeaderComponent } from '../component/header/header.component'








export const Login = (props: { navigation: { navigate: (arg0: string) => void } }) => {
    return (
        <SafeAreaView style={loginStyle.Content}>

            <View style={loginStyle.View}>
                <Image
                    source={require('../Asset1.png')}
                    resizeMode='center'
                    style={styles.image}
                />

                <Card>
                    <Card.Title title="Login" titleStyle={loginStyle.CardTitle}></Card.Title>
                    <Card.Content>
                        <TextInput label="Email" keyboardType="email-address" right={<TextInput.Icon name="email" color="rgb(0,55,236)" />}></TextInput>
                        <TextInput label="Password" secureTextEntry={true} right={<TextInput.Icon name="lock" color="rgb(0,55,236)" />}></TextInput>
                        <Button uppercase={false} style={loginStyle.CardButton}>forgot email/password</Button>
                        <Button mode="contained" style={loginStyle.CardButton}>Login</Button>
                        <View style={{ flexDirection: 'row', marginVertical: 20 }}>
                            <Text style={{ color: "#1d1d1d" }}>dont have a account</Text>
                            <Text style={{ color: "rgb(0,55,236)" }} onPress={() => props.navigation.navigate('Register')}>     Register here</Text>
                        </View>
                    </Card.Content>
                </Card>
            </View>
        </SafeAreaView>

    )
}

export default Login

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 50,
        marginVertical: 10,
        marginHorizontal: 60,
        paddingVertical: 60,
        paddingTop: 50
    },
    text: {
        color: "#32cd32"

    }

})