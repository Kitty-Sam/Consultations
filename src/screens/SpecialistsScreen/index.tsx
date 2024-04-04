import React, { FC, useCallback } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '~screens/SpecialistsScreen/style.ts';
import { ISpecialist } from '~store/slices/specialistsSlice.ts';
import { RootStackNavigationName, RootStackParamList } from '~navigation/RootStack/type.ts';
import { ConsultationParamList, ConsultationStackNavigationName } from '~navigation/ConsultationStack/type.ts';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import { MaterialTopTabNavigationProp, MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs';
import type { StackNavigationProp } from '@react-navigation/stack';

const specialistsData: ISpecialist[] = [
    {
        id: '1',
        name: 'Петров Юрий',
        experience: '5 лет',
        education: 'Магистр психологических наук, БГУ',
        shortDescription: 'Клинический психолог, психотерапевт',
        avatar: 'https://assets.entrepreneur.com/content/3x2/2000/1651673015-shutterstock-2098527055.jpg',
        about: 'Моя страсть к психологии вдохновляет меня каждый день. Исследование человеческого разума и поведения захватывает меня с детства, и я с удовольствием погружаюсь в ее изучение. Мои знания и понимание в этой области постоянно растут благодаря постоянному обучению и практике. Я наслаждаюсь анализом различных аспектов человеческой психики, от основных механизмов мышления до сложных взаимосвязей в социальном окружении. Благодаря своей любви к психологии и глубокому пониманию ее принципов, я стремлюсь помогать другим понять себя лучше и найти пути к психологическому благополучию. Благодаря своей любви к психологии и глубокому пониманию ее принципов, я стремлюсь помогать другим понять себя лучше и найти пути к психологическому благополучию.Благодаря своей любви к психологии и глубокому пониманию ее принципов, я стремлюсь помогать другим понять себя лучше и найти пути к психологическому благополучию.Моя страсть к психологии вдохновляет меня каждый день. Исследование человеческого разума и поведения захватывает меня с детства, и я с удовольствием погружаюсь в ее изучение.',
    },
    {
        id: '2',
        name: 'Петров Олег',
        experience: '5 лет',
        shortDescription: 'Клинический психолог, психотерапевт',
        education: 'Магистр психологических наук, БГУ',
        avatar: 'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2022/08/bored_ape_yacht_club.jpeg-1.jpg',
        about: 'Моя страсть к психологии вдохновляет меня каждый день. Исследование человеческого разума и поведения захватывает меня с детства, и я с удовольствием погружаюсь в ее изучение. Мои знания и понимание в этой области постоянно растут благодаря постоянному обучению и практике. Я наслаждаюсь анализом различных аспектов человеческой психики, от основных механизмов мышления до сложных взаимосвязей в социальном окружении. Благодаря своей любви к психологии и глубокому пониманию ее принципов, я стремлюсь помогать другим понять себя лучше и найти пути к психологическому благополучию.',
    },
    {
        id: '3',
        name: 'Петров Иван',
        experience: '5 лет',
        shortDescription: 'Клинический психолог, психотерапевт',
        education: 'Магистр психологических наук, БГУ',
        avatar: 'https://nft-monkey.com/wp-content/uploads/2023/03/7bd01f7b2ba60ab9c6a97d9a0037b70e-1.png',
        about: 'Моя страсть к психологии вдохновляет меня каждый день. Исследование человеческого разума и поведения захватывает меня с детства, и я с удовольствием погружаюсь в ее изучение. Мои знания и понимание в этой области постоянно растут благодаря постоянному обучению и практике. Я наслаждаюсь анализом различных аспектов человеческой психики, от основных механизмов мышления до сложных взаимосвязей в социальном окружении. Благодаря своей любви к психологии и глубокому пониманию ее принципов, я стремлюсь помогать другим понять себя лучше и найти пути к психологическому благополучию.',
    },
    {
        id: '4',
        name: 'Петров Валерий',
        experience: '5 лет',
        shortDescription: 'Клинический психолог, психотерапевт',
        education: 'Магистр психологических наук, БГУ',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlp96wI8lMFTtNaQ0Lm0Es5nLe3eY8uL5aXrXKPonkKRJ58o3ZxcSVKfKwX6CHWKwVRGA&usqp=CAU',
        about: 'Моя страсть к психологии вдохновляет меня каждый день. Исследование человеческого разума и поведения захватывает меня с детства, и я с удовольствием погружаюсь в ее изучение. Мои знания и понимание в этой области постоянно растут благодаря постоянному обучению и практике. Я наслаждаюсь анализом различных аспектов человеческой психики, от основных механизмов мышления до сложных взаимосвязей в социальном окружении. Благодаря своей любви к психологии и глубокому пониманию ее принципов, я стремлюсь помогать другим понять себя лучше и найти пути к психологическому благополучию.',
    },
    {
        id: '5',
        name: 'Петров Алексей',
        experience: '5 лет',
        shortDescription: 'Клинический психолог, психотерапевт',
        education: 'Магистр психологических наук, БГУ',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf_tyN_Ajve1kNlb3WFHaRFKNUJLeQUQZRkCCiilDxJBN_NSf2LxyiP9jEqAuqHuoCcj8&usqp=CAU',
        about: 'Моя страсть к психологии вдохновляет меня каждый день. Исследование человеческого разума и поведения захватывает меня с детства, и я с удовольствием погружаюсь в ее изучение. Мои знания и понимание в этой области постоянно растут благодаря постоянному обучению и практике. Я наслаждаюсь анализом различных аспектов человеческой психики, от основных механизмов мышления до сложных взаимосвязей в социальном окружении. Благодаря своей любви к психологии и глубокому пониманию ее принципов, я стремлюсь помогать другим понять себя лучше и найти пути к психологическому благополучию.',
    },
];

type SpecialistsScreenNavigationProp = CompositeNavigationProp<
    MaterialTopTabNavigationProp<ConsultationParamList, ConsultationStackNavigationName.SPECIALISTS>,
    StackNavigationProp<RootStackParamList>
>;

export const SpecialistsScreen = () => {
    const navigation = useNavigation<SpecialistsScreenNavigationProp>();
    const onAvatarPress = (item: ISpecialist) => () => {
        navigation.navigate(RootStackNavigationName.PROFILE, { item });
    };

    const onNamePress = (item: ISpecialist) => () => {
        navigation.navigate(RootStackNavigationName.PROFILE, { item });
    };

    const renderSpecialistItem = useCallback(({ item, index }: { item: ISpecialist; index: number }) => {
        const { avatar, name, education, experience } = item;
        return (
            <View style={styles.container}>
                <View style={styles.textWrapper}>
                    <TouchableOpacity onPress={onAvatarPress(item)}>
                        <Image source={{ uri: avatar }} style={styles.image} />
                    </TouchableOpacity>

                    <View>
                        <TouchableOpacity onPress={onNamePress(item)}>
                            <Text style={styles.bold}>{name}</Text>
                        </TouchableOpacity>
                        <Text style={styles.secondary}>{experience}</Text>
                        <Text style={styles.secondary}>{education}</Text>
                    </View>
                </View>
            </View>
        );
    }, []);

    return (
        <View style={styles.rootWrapper}>
            <Text style={styles.title}>Специалисты</Text>
            <View style={styles.wrapper}>
                <FlatList
                    data={specialistsData}
                    renderItem={renderSpecialistItem}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    );
};
