import React from 'react';

import { NavigationNativeContainer } from '@react-navigation/native';
import { AppNavigator } from './src/navigation/AppNavigator';

const App: () => React$Node = () => {
    return (
        <NavigationNativeContainer>
            <AppNavigator />
        </NavigationNativeContainer>

    );
};

export default App;
