import React, { FC } from 'react';
import { Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackNavigationName, RootStackParamList } from '~navigation/RootStack/type.ts';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { styles } from '~screens/ConsultationsScreen/style.ts';

export const ConsultationsScreen: FC<NativeStackScreenProps<RootStackParamList, RootStackNavigationName.MAIN>> = ({
    navigation,
}) => {
    const onConsultationPress = () => {
        navigation.navigate(RootStackNavigationName.CONSULTATION);
    };

    return (
        <SafeAreaView style={styles.rootWrapper}>
            <Button onPress={onConsultationPress} title="Go To Current Consultation"></Button>
        </SafeAreaView>
    );
};
