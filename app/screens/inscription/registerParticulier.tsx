/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
/* eslint-disable node/handle-callback-err */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/sort-styles */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable import/no-duplicates */
import { SafeAreaView, ScrollView, View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native'
import React, { useState } from 'react'
import { TextInput, Button } from 'react-native-paper'
import { registerstyle } from './Register.style'
import { HeaderComponent } from '../myscreen/component/header/header.component'



const isValidObjField = (obj: { [s: string]: string } | ArrayLike<string>) => {
    return Object.values(obj).every(value => value.trim())
}

const UpdateError = (error: string, stateUpdater: { (value: React.SetStateAction<string>): void; (value: React.SetStateAction<string>): void; (value: React.SetStateAction<string>): void; (value: React.SetStateAction<string>): void; (arg0: string): void }) => {
    stateUpdater(error),
        setTimeout(() => {
            stateUpdater('')
        }, 2500);
}
const Register = (props: { navigation: { navigate: (arg0: string) => void } }) => {
    const [userInfo, setUserInfo] = useState({
        Name: '',
        Email: '',
        Phone: '',
        Password: '',
        ConfirmPassword: ''

    })

    const [error, setError] = useState('')

    const { Name, Email, Phone, Password, ConfirmPassword } = userInfo

    const handleOnChangeText = (value, fieldName) => {
        setUserInfo({ ...userInfo, [fieldName]: value });
    }

    const isValideForm = () => {
        if (!isValidObjField(userInfo)) return UpdateError('Require all fields!', setError)
        if (!Name.trim() || Name.length < 3) return UpdateError('invalid name!', setError)
        if (!Password.trim() || Password.length < 8) return UpdateError('Password is less than 8 characters!', setError)
        if (Password !== ConfirmPassword) return UpdateError('Password does not match!', setError)
    return false
    }

    const submitForm = () => {
        if (isValideForm()) {

            console.log(userInfo)
        }
    }


    return (
        <SafeAreaView>
            <ScrollView>
                <HeaderComponent tilte="Register" />
                <View style={registerstyle.Content}>
                    <Image
                        source={require('../Asset1.png')}
                        resizeMode='center'
                        style={styles.image}
                    />
                    {error ? <Text style={{ color: 'red', fontSize: 18, textAlign: 'center' }}>{error}</Text> : null}
                    <TextInput label="Name"
                        value={Name}
                        onChangeText={(value) => handleOnChangeText(value, 'Name')} />

                    <TextInput label="Email"
                        keyboardType="email-address"
                        value={Email}
                        onChangeText={(value) => handleOnChangeText(value, 'Email')} />

                    <TextInput label="Phone"
                        keyboardType="phone-pad"
                        value={Phone}
                        onChangeText={(value) => handleOnChangeText(value, 'Phone')} />

                    <TextInput label="Passwword"
                        value={Password}
                        secureTextEntry={true}
                        onChangeText={(value) => handleOnChangeText(value, 'Password')}
                    />

                    <TextInput label="ConfirmPassword"
                        value={ConfirmPassword}
                        secureTextEntry={true}
                        onChangeText={(value) => handleOnChangeText(value, 'ConfirmPassword')}
                    />

                    <Button mode="contained"
                        onPress={submitForm}
                        style={registerstyle.Button}>Register</Button>
                    <View style={{ flexDirection: 'row', marginVertical: 0, marginHorizontal: 100 }}>
                        <Text style={{ color: "#1d1d1d" }}>Already registred</Text>
                        <Text style={{ color: "rgb(0,55,236)" }} onPress={() => props.navigation.navigate('Login')}>     Login</Text>
                    </View>


                </View>


            </ScrollView>

        </SafeAreaView>
    )
}

export default Register

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 50,
        marginVertical: 50,
        marginHorizontal: 80,
    },

})



