import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RootStack } from '~navigation/RootStack';
import { PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { store } from '~store/store.ts';

export const App = (): React.JSX.Element => {
    return (
        <PaperProvider>
            <Provider store={store}>
                <NavigationContainer>
                    <RootStack />
                </NavigationContainer>
            </Provider>
        </PaperProvider>
    );
};
