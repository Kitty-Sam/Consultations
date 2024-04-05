import React, { useCallback } from 'react';
import { FlatList, Text, View } from 'react-native';
import { styles } from '~screens/SpecialistsScreen/style.ts';
import { ISpecialist } from '~store/slices/specialistsSlice.ts';
import { RootStackNavigationName, RootStackParamList } from '~navigation/RootStack/type.ts';
import { ConsultationParamList, ConsultationStackNavigationName } from '~navigation/ConsultationStack/type.ts';
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import { MaterialTopTabNavigationProp } from '@react-navigation/material-top-tabs';
import type { StackNavigationProp } from '@react-navigation/stack';
import { Card } from '~components/Card';
import { specialistsData } from '~constants/spesiclists.ts';

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

    const renderSpecialistItem = useCallback(({ item }: { item: ISpecialist }) => {
        return <Card onAvatarPress={onAvatarPress(item)} onNamePress={onNamePress(item)} item={item} />;
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
