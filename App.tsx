import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RootStack } from '~navigation/RootStack';

export const App = (): React.JSX.Element => {
    return (
        <NavigationContainer>
            <RootStack />
        </NavigationContainer>
    );
};
