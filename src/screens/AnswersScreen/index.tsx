import React, { FC, useCallback } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '~screens/AnswersScreen/style.ts';
import { IAnswer } from '~store/slices/answersSlice.ts';
import { ETopic } from '~src/enums/topic.ts';
import { RootStackNavigationName, RootStackParamList } from '~navigation/RootStack/type.ts';
import { MaterialTopTabNavigationProp, MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs';
import { ConsultationParamList, ConsultationStackNavigationName } from '~navigation/ConsultationStack/type.ts';
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

const answersData: IAnswer[] = [
    {
        id: '1',
        name: 'Сидорова Ольга',
        experience: '5 лет',
        education: 'БГТУ',
        avatar: 'https://pbs.twimg.com/media/FEvGwpCXEAEhf1P.png',
        topic: ETopic.FAMILY,
    },
    {
        id: '2',
        name: 'Сидорова Инесса',
        experience: '5 лет',
        education: 'БГТУ',
        avatar: 'https://images.wsj.net/im-491399?width=860&height=860',
        topic: ETopic.SEX,
    },
    {
        id: '3',
        name: 'Сидорова Наталья',
        experience: '5 лет',
        education: 'БГТУ',
        avatar: 'https://yt3.googleusercontent.com/5RarOFS1Ckt2EWtOxtGLDNgbDo4dnXA4n8_9MFotaqkxGVyDiOy7fKeHgzNAubOUbrVQOvlKHQ=s900-c-k-c0x00ffffff-no-rj',
        topic: ETopic.RELATIONSHIPS,
    },
];

type AnswersScreenNavigationProp = CompositeNavigationProp<
    MaterialTopTabNavigationProp<ConsultationParamList, ConsultationStackNavigationName.ANSWERS>,
    StackNavigationProp<RootStackParamList>
>;

export const AnswersScreen = () => {
    const navigation = useNavigation<AnswersScreenNavigationProp>();
    const onAnswerPress = (item: IAnswer) => () => {
        navigation.navigate(RootStackNavigationName.CHAT, { item });
    };

    const renderAnswerItem = useCallback(({ item, index }: { item: IAnswer; index: number }) => {
        const { avatar, name, education, experience, topic } = item;
        return (
            <TouchableOpacity style={styles.container} onPress={onAnswerPress(item)}>
                <View style={styles.textWrapper}>
                    <Image source={{ uri: avatar }} style={styles.image} />

                    <View>
                        <Text style={styles.bold}>{name}</Text>
                        <Text style={styles.secondary}>{experience}</Text>
                        <Text style={styles.secondary}>{education}</Text>
                    </View>
                </View>

                {topic ? (
                    <View style={styles.topicWrapper}>
                        <Text style={styles.topic}>
                            <Text style={styles.bold}>Тема</Text> {item.topic}
                        </Text>
                        <Text>{'>'}</Text>
                    </View>
                ) : (
                    <></>
                )}
            </TouchableOpacity>
        );
    }, []);

    return (
        <View style={styles.rootWrapper}>
            <Text style={styles.title}>Ответы</Text>
            <View style={styles.wrapper}>
                <FlatList data={answersData} renderItem={renderAnswerItem} />
            </View>
        </View>
    );
};
