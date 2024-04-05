import React, { useCallback } from 'react';
import { FlatList, Text, View } from 'react-native';
import { styles } from '~screens/AnswersScreen/style.ts';
import { IAnswer } from '~store/slices/answersSlice.ts';
import { RootStackNavigationName, RootStackParamList } from '~navigation/RootStack/type.ts';
import { MaterialTopTabNavigationProp } from '@react-navigation/material-top-tabs';
import { ConsultationParamList, ConsultationStackNavigationName } from '~navigation/ConsultationStack/type.ts';
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Card } from '~components/Card';
import { answersData } from '~constants/answers.ts';
import { useAppSelector } from '~store/store.ts';
import { getAllAnswers } from '~store/selectors/getAllAnswers.ts';

type AnswersScreenNavigationProp = CompositeNavigationProp<
    MaterialTopTabNavigationProp<ConsultationParamList, ConsultationStackNavigationName.ANSWERS>,
    StackNavigationProp<RootStackParamList>
>;

export const AnswersScreen = () => {
    const navigation = useNavigation<AnswersScreenNavigationProp>();
    const onAnswerPress = (chatId: string) => () => {
        navigation.navigate(RootStackNavigationName.CHAT, { chatId });
    };

    const allAnswers = useAppSelector(getAllAnswers);

    const renderAnswerItem = useCallback(({ item, index }: { item: IAnswer; index: number }) => {
        const { topic } = item;
        return <Card onContainerPress={onAnswerPress(item.chatId)} item={item.user} topic={topic} />;
    }, []);

    return (
        <View style={styles.rootWrapper}>
            <Text style={styles.title}>Ответы</Text>
            <View style={styles.wrapper}>
                <FlatList data={allAnswers} renderItem={renderAnswerItem} showsVerticalScrollIndicator={false} />
            </View>
        </View>
    );
};
