import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { RootStackNavigationName, RootStackParamList } from '~navigation/RootStack/type.ts';
import { SpecialistsScreen } from '~screens/SpecialistsScreen';
import { AnswersScreen } from '~screens/AnswersScreen';
import { heightStatus } from '~constants/dimensions.ts';

export const TopTab = createMaterialTopTabNavigator<RootStackParamList>();

export const RootStack = () => {
    return (
        <TopTab.Navigator style={{ marginTop: heightStatus }}>
            <TopTab.Screen name={RootStackNavigationName.SPECIALISTS} component={SpecialistsScreen} />
            <TopTab.Screen name={RootStackNavigationName.ANSWERS} component={AnswersScreen} />
        </TopTab.Navigator>
    );
};
