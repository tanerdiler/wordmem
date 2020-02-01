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

import NewWordForm from "./NewWordForm";

export default function NewWord({navigation}) {
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor: "#455a64"}}>
            <NewWordForm></NewWordForm>
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

