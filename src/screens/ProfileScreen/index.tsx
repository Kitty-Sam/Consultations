import React, { FC } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { IChatMessage, RootStackNavigationName, RootStackParamList } from '~navigation/RootStack/type.ts';
import { styles } from '~screens/ProfileScreen/style.ts';
import { Button } from '~components/Button';

export const ProfileScreen: FC<NativeStackScreenProps<RootStackParamList, RootStackNavigationName.PROFILE>> = ({
    route,
    navigation,
}) => {
    const { item } = route.params;
    const { avatar, about, name, experience, education, shortDescription, id } = item;

    const addAdvicePress = () => {
        navigation.navigate(RootStackNavigationName.ASK, {
            specialistId: id,
        });
    };

    return (
        <View style={styles.rootWrapper}>
            <ScrollView contentContainerStyle={{ paddingVertical: 60 }} showsVerticalScrollIndicator={false}>
                <View style={styles.textWrapper}>
                    <Image source={{ uri: avatar }} style={styles.image} />
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.experience}>Опыт: {experience}</Text>
                    <Text style={styles.note}>Note</Text>
                    <Text>{shortDescription}</Text>
                </View>
                <View style={styles.divider} />

                <Text style={styles.education}>Образование</Text>
                <Text>{education}</Text>
                <Text style={styles.about}>Oбо мне</Text>
                <Text>{about}</Text>
            </ScrollView>
            <Button title={'Посоветоваться'} onClick={addAdvicePress} />
        </View>
    );
};
