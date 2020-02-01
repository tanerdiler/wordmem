import React from 'react';

import Signin from '../pages/signin/Signin';
import Signup from '../pages/signup/Signup';
import NewWord from "../pages/wordnew/NewWord";

import { createStackNavigator } from '@react-navigation/stack';
import WordList from "../pages/wordlist/WordList";
import WordDetail from "../pages/worddetail/WordDetail";

const Stack = createStackNavigator();

export const AppNavigator = (props): React.ReactElement => (
    <Stack.Navigator {...props} headerMode="none" initialRouteName="Signin">
        <Stack.Screen
            name="Signin"
            component={Signin}
            options={{
                gestureEnabled: false,
            }}
        />
        <Stack.Screen
            name="Signup"
            component={Signup}
            options={{
                gestureEnabled: false,
            }}
        />
        <Stack.Screen
            name="NewWord"
            component={NewWord}
            options={{
                gestureEnabled: false,
            }}
        />
        <Stack.Screen
            name="WordList"
            component={WordList}
            options={{
                gestureEnabled: false,
            }}
        />
        <Stack.Screen
            name="WordDetail"
            component={WordDetail}
            options={{
                gestureEnabled: true,
            }}
        />
    </Stack.Navigator>
);

