/* eslint-disable import/no-duplicates */
import { SafeAreaView, ScrollView, View, } from 'react-native'
import React from 'react'
import { TextInput, Button } from 'react-native-paper'
import { registerstyle } from './Register.style'
import { HeaderComponent } from '../component/header/header.component'

const register = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <HeaderComponent tilte="Register" />
                <View style={registerstyle.Content}>
                    <TextInput label="Name" />
                    <TextInput label="Email" keyboardType="email-address" />
                    <TextInput label="Passwword" secureTextEntry={true} right={<TextInput.Icon name="eye-off-outline" color={registerstyle.Icon.color} />} />
                    <TextInput label="Confirm password" secureTextEntry={true} right={<TextInput.Icon name="eye-off-outline" color={registerstyle.Icon.color} />} />
                    <TextInput label="Phone Number" keyboardType="phone-pad" />
                    <Button mode="contained" style={registerstyle.Button}>Register</Button>
                </View>


            </ScrollView>

        </SafeAreaView>
    )
}

export default register

