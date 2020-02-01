import React, { Component } from 'react';
import {
    Image,
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity
} from 'react-native';

import Logo from './Logo';
import SigninForm from "./SigninForm";

export default function Login({navigation}) {

    const onSubmit = (formData)=>{
        navigation.navigate('WordList');
    }
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor: "#455a64"}}>
            <Logo></Logo>
            <SigninForm onSubmit={onSubmit}></SigninForm>
            <View style={styles.signupButtonCont}>
                <Text style={styles.signupText}>Don't have an account, yet?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Signup')}><Text style={styles.signupButton}> Signup</Text></TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "red",
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    signupButtonCont: {
        flexGrow:1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginVertical: 16,
        flexDirection: 'row',
    },
    signupText: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 16,
    },
    signupButton:{
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '500',
    }
});

