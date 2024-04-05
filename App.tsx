import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RootStack } from '~navigation/RootStack';
import { PaperProvider } from 'react-native-paper';

export const App = (): React.JSX.Element => {
    return (
        <PaperProvider>
            <NavigationContainer>
                <RootStack />
            </NavigationContainer>
        </PaperProvider>
    );
};
