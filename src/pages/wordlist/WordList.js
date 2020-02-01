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

export default function WordList({navigation}) {
    return (
        <View style={{flex:1, flexDirection: 'column', justifyContent:'center', alignItems:'center', backgroundColor: "#455a64"}}>
            <FlatList style={{marginTop: 50, flexGrow:1, width: '100%', backgroundColor: "#718792", padding:10}}
                data={[
                    {
                        word: '..not only..but also..',
                        meaning: 'Sadece bunu yapmıyor ayrıca bunu da yapıyor.',
                        sentences: [
                            {text:'He is not only playing football but also basketball.'},
                            {text:'He is not only smart but also funny.'}],
                        labels: [
                            {text:'TDD'},
                            {text:'DDD'},
                            {text:'DEVOPS'}
                        ]
                    },                    {
                        word: 'lorem ipsum',
                        meaning: 'Lorem ipsum dolor sit',
                        sentences: [
                            {text:'Lorem ipsum dolor sit amed'},
                            {text:'Lorem ipsum dolor sit amed'}],
                        labels: [
                            {text:'TDD'},
                            {text:'DDD'},
                            {text:'DEVOPS'}
                        ]
                    },                    {
                        word: 'lorem ipsum',
                        meaning: 'Lorem ipsum dolor sit',
                        sentences: [
                            {text:'Lorem ipsum dolor sit amed'},
                            {text:'Lorem ipsum dolor sit amed'}],
                        labels: [
                            {text:'TDD'},
                            {text:'DDD'},
                            {text:'DEVOPS'}
                        ]
                    },                    {
                        word: 'lorem ipsum',
                        meaning: 'Lorem ipsum dolor sit',
                        sentences: [
                            {text:'Lorem ipsum dolor sit amed'},
                            {text:'Lorem ipsum dolor sit amed'}],
                        labels: [
                            {text:'TDD'},
                            {text:'DDD'},
                            {text:'DEVOPS'}
                        ]
                    },                    {
                        word: 'lorem ipsum',
                        meaning: 'Lorem ipsum dolor sit',
                        sentences: [
                            {text:'Lorem ipsum dolor sit amed'},
                            {text:'Lorem ipsum dolor sit amed'}],
                        labels: [
                            {text:'TDD'},
                            {text:'DDD'},
                            {text:'DEVOPS'}
                        ]
                    },                    {
                        word: 'lorem ipsum',
                        meaning: 'Lorem ipsum dolor sit',
                        sentences: [
                            {text:'Lorem ipsum dolor sit amed'},
                            {text:'Lorem ipsum dolor sit amed'}],
                        labels: [
                            {text:'TDD'},
                            {text:'DDD'},
                            {text:'DEVOPS'}
                        ]
                    },                    {
                        word: 'lorem ipsum',
                        meaning: 'Lorem ipsum dolor sit',
                        sentences: [
                            {text:'Lorem ipsum dolor sit amed'},
                            {text:'Lorem ipsum dolor sit amed'}],
                        labels: [
                            {text:'TDD'},
                            {text:'DDD'},
                            {text:'DEVOPS'}
                        ]
                    },                    {
                        word: 'lorem ipsum',
                        meaning: 'Lorem ipsum dolor sit',
                        sentences: [
                            {text:'Lorem ipsum dolor sit amed'},
                            {text:'Lorem ipsum dolor sit amed'}],
                        labels: [
                            {text:'TDD'},
                            {text:'DDD'},
                            {text:'DEVOPS'}
                        ]
                    },                    {
                        word: 'lorem ipsum',
                        meaning: 'Lorem ipsum dolor sit',
                        sentences: [
                            {text:'Lorem ipsum dolor sit amed'},
                            {text:'Lorem ipsum dolor sit amed'}],
                        labels: [
                            {text:'TDD'},
                            {text:'DDD'},
                            {text:'DEVOPS'}
                        ]
                    },                    {
                        word: 'lorem ipsum',
                        meaning: 'Lorem ipsum dolor sit',
                        sentences: [
                            {text:'Lorem ipsum dolor sit amed'},
                            {text:'Lorem ipsum dolor sit amed'}],
                        labels: [
                            {text:'TDD'},
                            {text:'DDD'},
                            {text:'DEVOPS'}
                        ]
                    },
                ]}
                      renderItem={({item}) =>
                            <TouchableOpacity onPress={() => navigation.navigate('WordDetail', {word:item})}>
                                <View style={styles.item}><Text style={styles.itemText}>{item.word}</Text></View>
                            </TouchableOpacity>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        height: 60,
        borderBottomWidth: 0.5,
        borderBottomColor: "#455a64",
        backgroundColor: 'rgba(255, 255, 255, 1)',
        paddingHorizontal: 5,
        marginBottom: 5,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 1,
        shadowOffset: {
            width: 3,
            height: 3
        },
    },
    itemText:{
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize:16,
        lineHeight: 58,
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

