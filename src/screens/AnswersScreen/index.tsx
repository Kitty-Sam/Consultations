import React, { FC, useCallback } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '~screens/AnswersScreen/style.ts';
import { IAnswer } from '~store/slices/answersSlice.ts';
import { ETopic } from '~src/enums/topic.ts';
import { useNavigation } from '@react-navigation/native';
import { ISpecialist } from '~store/slices/specialistsSlice.ts';
import { RootStackNavigationName, RootStackParamList } from '~navigation/RootStack/type.ts';
import { MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs';
import { ConsultationStackNavigationName } from '~navigation/ConsultationStack/type.ts';

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

export const AnswersScreen: FC<
    MaterialTopTabScreenProps<
        RootStackParamList,
        RootStackNavigationName.CONSULTATION,
        ConsultationStackNavigationName.ANSWERS
    >
> = ({ navigation }) => {
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
                        <Text>{name}</Text>
                        <Text>{experience}</Text>
                        <Text>{education}</Text>
                    </View>
                </View>

                {topic ? (
                    <View style={styles.topicWrapper}>
                        <Text style={{ fontSize: 18 }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Тема</Text> {item.topic}
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
        <SafeAreaView>
            <Text>Ответы</Text>
            <View style={styles.wrapper}>
                <View>
                    <FlatList data={answersData} renderItem={renderAnswerItem} />
                </View>
            </View>
        </SafeAreaView>
    );
};
