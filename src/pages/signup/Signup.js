import React, { Component } from 'react';
import {
    Image,
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';

import Logo from '../signin/Logo';
import SignupForm from "./SignupForm";

export default function Signup({ navigation }) {
        return (
            <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor: "#455a64"}}>
                <Logo></Logo>
                <SignupForm></SignupForm>
                <View style={styles.signupButtonCont}>
                    <Text style={styles.signupText}>Already have an account?</Text>
                    <Text style={styles.signupButton} onPress={() => navigation.navigate('Signin')}> Sign in</Text>
                </View>
            </View>
        )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#455a64",
        flexGrow:1,
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

