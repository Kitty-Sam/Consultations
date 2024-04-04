import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { RootStackNavigationName, RootStackParamList } from '~navigation/RootStack/type.ts';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export const ChatScreen: FC<NativeStackScreenProps<RootStackParamList, RootStackNavigationName.CHAT>> = ({
    navigation,
}) => {
    const askPress = () => {
        navigation.navigate(RootStackNavigationName.ASK, { item: '123' });
    };
    return (
        <TouchableOpacity onPress={askPress}>
            <Text>Chat</Text>
        </TouchableOpacity>
    );
};
