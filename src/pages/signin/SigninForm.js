import React, {useState} from 'react';
import {StyleSheet, TextInput, View, TouchableOpacity, Text} from "react-native";
import { i18n } from "../../i18n/i18n";

export default function SigninForm({navigation, onSubmit}) {

    const [formData, setFormData] = useState({
        email: null,
        password: null,
    });

    const [formValidation, setFormValidation] = useState({
        email: undefined,
        password: undefined,
    });

    const validate=()=>{
        let emailMessage = null;
        if (!validateEmail(formData.email)) {

            emailMessage = i18n('validation.email.invalid');
        }

        let passwordMessage = null;
        if(!formData.password || formData.password.trim().length < 6){
            passwordMessage = i18n('validation.password.min');
        }

        setFormValidation({email: emailMessage, password : passwordMessage});
    }

    const isValid = ()=>{
        return formValidation.email === null && formValidation.password === null;
    }

    const onInputChange = (text, type) => {
        setFormData({...formData, [type]: text});
    }

    const validateEmail = (email) => {
        const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

        return expression.test(String(email).toLowerCase());
    }

    const submitCredentials=()=>{
        //validate();
        //if (isValid()) {
            onSubmit(formData);
        //}
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.inputBox}
                value={formData.email}
                onChangeText={(text) => onInputChange(text, 'email')}
                placeholder="Email"
                placeholderTextColor='#FFFFFF'
            />
            {formValidation.email?<Text  style={styles.validationMessage}>{formValidation.email}</Text>:null}

            <TextInput
                style={styles.inputBox}
                value={formData.password}
                onChangeText={(text) => onInputChange(text, 'password')}
                placeholder="Password"
                placeholderTextColor='#FFFFFF'
                secureTextEntry={true}
            />
            {formValidation.password?<Text  style={styles.validationMessage}>{formValidation.password}</Text>:null}
            <TouchableOpacity style={styles.button} onPress={submitCredentials}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
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
        fontSize: 16,
        color: '#FFFFFF',
        marginVertical: 10,
    },
    validationMessage: {
        color: '#84cef7',
        marginTop: -9,
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
