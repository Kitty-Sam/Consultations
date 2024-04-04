import React, { FC, useCallback } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '~screens/SpecialistsScreen/style.ts';
import { ISpecialist } from '~store/slices/specialistsSlice.ts';
import { useNavigation } from '@react-navigation/native';
import { RootStackNavigationName, RootStackParamList } from '~navigation/RootStack/type.ts';
import { MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs';
import { ConsultationStackNavigationName } from '~navigation/ConsultationStack/type.ts';

const specialistsData: ISpecialist[] = [
    {
        id: '1',
        name: 'Петров Юрий',
        experience: '5 лет',
        education: 'Магистр психологических наук, БГУ',
        avatar: 'https://assets.entrepreneur.com/content/3x2/2000/1651673015-shutterstock-2098527055.jpg',
        about: 'Моя страсть к психологии вдохновляет меня каждый день. Исследование человеческого разума и поведения захватывает меня с детства, и я с удовольствием погружаюсь в ее изучение. Мои знания и понимание в этой области постоянно растут благодаря постоянному обучению и практике. Я наслаждаюсь анализом различных аспектов человеческой психики, от основных механизмов мышления до сложных взаимосвязей в социальном окружении. Благодаря своей любви к психологии и глубокому пониманию ее принципов, я стремлюсь помогать другим понять себя лучше и найти пути к психологическому благополучию."й',
    },
    {
        id: '2',
        name: 'Петров Олег',
        experience: '5 лет',
        education: 'Магистр психологических наук, БГУ',
        avatar: 'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2022/08/bored_ape_yacht_club.jpeg-1.jpg',
        about: 'Моя страсть к психологии вдохновляет меня каждый день. Исследование человеческого разума и поведения захватывает меня с детства, и я с удовольствием погружаюсь в ее изучение. Мои знания и понимание в этой области постоянно растут благодаря постоянному обучению и практике. Я наслаждаюсь анализом различных аспектов человеческой психики, от основных механизмов мышления до сложных взаимосвязей в социальном окружении. Благодаря своей любви к психологии и глубокому пониманию ее принципов, я стремлюсь помогать другим понять себя лучше и найти пути к психологическому благополучию."',
    },
    {
        id: '3',
        name: 'Петров Иван',
        experience: '5 лет',
        education: 'Магистр психологических наук, БГУ',
        avatar: 'https://nft-monkey.com/wp-content/uploads/2023/03/7bd01f7b2ba60ab9c6a97d9a0037b70e-1.png',
        about: 'Моя страсть к психологии вдохновляет меня каждый день. Исследование человеческого разума и поведения захватывает меня с детства, и я с удовольствием погружаюсь в ее изучение. Мои знания и понимание в этой области постоянно растут благодаря постоянному обучению и практике. Я наслаждаюсь анализом различных аспектов человеческой психики, от основных механизмов мышления до сложных взаимосвязей в социальном окружении. Благодаря своей любви к психологии и глубокому пониманию ее принципов, я стремлюсь помогать другим понять себя лучше и найти пути к психологическому благополучию."',
    },
];

export const SpecialistsScreen: FC<
    MaterialTopTabScreenProps<
        RootStackParamList,
        RootStackNavigationName.CONSULTATION,
        ConsultationStackNavigationName.SPECIALISTS
    >
> = ({ navigation }) => {
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
                            <Text>{name}</Text>
                        </TouchableOpacity>
                        <Text>{experience}</Text>
                        <Text>{education}</Text>
                    </View>
                </View>
            </View>
        );
    }, []);

    return (
        <SafeAreaView>
            <Text>Специалисты</Text>
            <View style={styles.wrapper}>
                <View>
                    <FlatList data={specialistsData} renderItem={renderSpecialistItem} />
                </View>
            </View>
        </SafeAreaView>
    );
};
