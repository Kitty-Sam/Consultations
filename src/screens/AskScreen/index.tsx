import React, { FC } from 'react';
import { Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackNavigationName, RootStackParamList } from '~navigation/RootStack/type.ts';

export const AskScreen: FC<NativeStackScreenProps<RootStackParamList, RootStackNavigationName.ASK>> = ({
    navigation,
}) => {
    return <Text>Ask</Text>;
};
