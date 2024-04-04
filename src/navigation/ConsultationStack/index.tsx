import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SpecialistsScreen } from '~screens/SpecialistsScreen';
import { AnswersScreen } from '~screens/AnswersScreen';
import { ConsultationParamList, ConsultationStackNavigationName } from '~navigation/ConsultationStack/type.ts';

export const TopTab = createMaterialTopTabNavigator<ConsultationParamList>();

export const ConsultationStack = () => {
    return (
        <TopTab.Navigator>
            <TopTab.Screen name={ConsultationStackNavigationName.SPECIALISTS} component={SpecialistsScreen} />
            <TopTab.Screen name={ConsultationStackNavigationName.ANSWERS} component={AnswersScreen} />
        </TopTab.Navigator>
    );
};
