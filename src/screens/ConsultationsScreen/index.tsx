import React, { FC, useEffect } from 'react';
import { Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackNavigationName, RootStackParamList } from '~navigation/RootStack/type.ts';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { styles } from '~screens/ConsultationsScreen/style.ts';
import { useAppDispatch } from '~store/store.ts';
import { setAllChats } from '~store/slices/chatSlice.ts';
import { chatsData } from '~constants/chats.ts';
import { specialistsData } from '~constants/spesiclists.ts';
import { setSpecialists } from '~store/slices/specialistsSlice.ts';
import { setAnswers } from '~store/slices/answersSlice.ts';
import { answersData } from '~constants/answers.ts';

export const ConsultationsScreen: FC<NativeStackScreenProps<RootStackParamList, RootStackNavigationName.MAIN>> = ({
    navigation,
}) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setAllChats(chatsData));
        dispatch(setSpecialists(specialistsData));
        dispatch(setAnswers(answersData));
    }, []);

    const onConsultationPress = () => {
        navigation.navigate(RootStackNavigationName.CONSULTATION);
    };

    return (
        <SafeAreaView style={styles.rootWrapper}>
            <Button onPress={onConsultationPress} title="Go To Current Consultation"></Button>
        </SafeAreaView>
    );
};
