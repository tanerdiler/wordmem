import React, {useState} from 'react';
import {StyleSheet, TextInput, View, TouchableOpacity, Text} from "react-native";


export default function SignupForm () {

        return(
            <View style={styles.container}>
                <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Email"
                    placeholderTextColor='#FFFFFF'
                />
                <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Password"
                    placeholderTextColor='#FFFFFF'
                    secureTextEntry={true}
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Signup</Text>
                </TouchableOpacity>
            </View>
        )
}

const styles = StyleSheet.create({
    container:{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputBox: {
        width: 300,
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 25,
        paddingHorizontal: 16,
        paddingVertical: 10,
        fontSize:16,
        color: '#FFFFFF',
        marginVertical: 10,
    },
    button: {
        width: 300,
        backgroundColor: '#1c313a',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 10,
    },
    buttonText: {

        fontSize: 16,
        fontWeight: '500',
        color: '#FFFFFF',
        textAlign: 'center'
    }
})
