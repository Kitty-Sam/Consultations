import React, { FC } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { RootStackNavigationName, RootStackParamList } from '~navigation/RootStack/type.ts';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button } from '~components/Button';
import { useAppSelector } from '~store/store.ts';
import { getAllChats } from '~store/selectors/getAllChats.ts';
import { styles } from '~screens/ChatScreen/style.ts';
import { width } from '~constants/dimensions.ts';
import { theme } from '~constants/theme.ts';

export const ChatScreen: FC<NativeStackScreenProps<RootStackParamList, RootStackNavigationName.CHAT>> = ({
    navigation,
    route,
}) => {
    const { chatId } = route.params;

    const chats = useAppSelector(getAllChats);
    const selectedChat = chats.find((chat) => chat.id === chatId);

    const askPress = () => {
        navigation.navigate(RootStackNavigationName.ASK, { chatId });
    };

    return (
        <View style={styles.rootWrapper}>
            <Text>{selectedChat ? selectedChat.topic : ''}</Text>
            <ScrollView style={styles.wrapper}>
                {selectedChat?.messages.map((message, index) => {
                    if (message.direction === 'outgoing')
                        return (
                            <View key={index} style={styles.right}>
                                <Text>{message.message}</Text>
                            </View>
                        );
                    return (
                        <View key={index} style={styles.left}>
                            <Text>{message.message}</Text>
                        </View>
                    );
                })}
            </ScrollView>
            <Button title={'Спросить'} onClick={askPress} />
        </View>
    );
};
