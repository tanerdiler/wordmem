import React, {Component, useState} from 'react';
import {
    Image,
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity, TextInput
} from 'react-native';


export default function NewWordForm({navigation}) {
    const [formData, setFormData] = useState({
        word: 'lorem ipsum',
        meaning: 'Lorem ipsum dolor sit',
        sentences: [
            {text:'Lorem ipsum dolor sit amed', label:['XXX','YYY']},
            {text:'Lorem ipsum dolor sit amed', label:['YYY']}]
    });

    const onInputChange = (text, type) => {
        setFormData({...formData, [type]: text});
    }

    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor: "#455a64"}}>
            <TextInput
                style={styles.inputBox}
                value={formData.word}
                onChangeText={(text) => onInputChange(text, 'word')}
                placeholder="Word"
                placeholderTextColor='#FFFFFF'
            />
            <TextInput
                style={styles.inputBox}
                value={formData.meaning}
                onChangeText={(text) => onInputChange(text, 'meaning')}
                placeholder="Meaning"
                placeholderTextColor='#FFFFFF'
            />
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

