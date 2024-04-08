import React, { FC } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { ISpecialist } from '~store/slices/specialistsSlice.ts';
import { styles } from '~components/Card/style.ts';

export interface IProps {
    item: ISpecialist;
    isChat?: boolean;
    onAvatarPress?: () => void;
    onNamePress?: () => void;
    onContainerPress?: () => void;
    topic?: string;
}

export const Card: FC<IProps> = ({ onAvatarPress, onNamePress, onContainerPress, isChat = false, item, topic }) => {
    const { avatar, name, experience, education } = item;

    return (
        <TouchableOpacity
            style={isChat ? styles.containerBg : styles.container}
            onPress={onContainerPress && onContainerPress}
        >
            <View style={styles.textWrapper}>
                {topic ? (
                    <Image source={{ uri: avatar }} style={styles.image} />
                ) : (
                    <TouchableOpacity onPress={onAvatarPress && onAvatarPress}>
                        <Image source={{ uri: avatar }} style={styles.image} />
                    </TouchableOpacity>
                )}

                <View>
                    {topic ? (
                        <Text style={styles.bold}>{name}</Text>
                    ) : (
                        <TouchableOpacity onPress={onNamePress && onNamePress}>
                            <Text style={styles.bold}>{name}</Text>
                        </TouchableOpacity>
                    )}

                    <Text style={styles.secondary}>{experience}</Text>
                    <Text style={styles.secondary}>{education}</Text>
                </View>
            </View>
            {topic ? (
                <View style={styles.topicWrapper}>
                    <Text style={styles.topic}>
                        <Text style={styles.bold}>Тема</Text> {topic}
                    </Text>
                    <Text>{'>'}</Text>
                </View>
            ) : (
                <View />
            )}
        </TouchableOpacity>
    );
};
