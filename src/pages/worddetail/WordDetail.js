import React, { Component } from 'react';
import {
    Image,
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity, FlatList
} from 'react-native';

export default function WordDetail({route, navigation}) {
    const word = route.params.word;
    return (
        <View style={{flex:1, flexDirection: 'column', justifyContent:'center', alignItems:'center', backgroundColor: "#455a64"}}>
            <View style={{marginTop: 50, flexGrow:1, width: '100%', backgroundColor: "#718792", padding:10}}>
                <Text style={{backgroundColor:'#4c9dc4', paddingVertical: 10, paddingHorizontal: 10, fontSize: 28, borderWidth:0.5,borderColor:'#b5ffff'}}>{word.word}</Text>
                <View style={{height: 400, backgroundColor:'#FFF', paddingVertical: 10, paddingHorizontal: 10, fontSize: 16, borderWidth:0.5,borderColor:'#b5ffff'}}>
                    <Text>{word.meaning}</Text>
                </View>

                {
                    word.sentences.map((s)=><Text>{s.text}</Text>)
                }
                {
                    word.labels.map((l)=><Text>{l.text}</Text>)
            }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
});

