import React, { FC, useState } from 'react';
import { TextInput as Input, View } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackNavigationName, RootStackParamList } from '~navigation/RootStack/type.ts';
import { styles } from '~screens/AskScreen/style.ts';
import RNPickerSelect from 'react-native-picker-select';
import { theme } from '~constants/theme.ts';
import { Button } from '~components/Button';
import { TextInput } from 'react-native-paper';
import { Card } from '~components/Card';
import { topics } from '~constants/topics.ts';
import { useAppDispatch, useAppSelector } from '~store/store.ts';
import { addMessagesToCurrentChat, createNewChat } from '~store/slices/chatSlice.ts';
import { getAllChats } from '~store/selectors/getAllChats.ts';
import { ETopic } from '~src/enums/topic.ts';
import { getAllSpecialists } from '~store/selectors/getAllSpecialists.ts';
import { createNewAnswer } from '~store/slices/answersSlice.ts';

export const AskScreen: FC<NativeStackScreenProps<RootStackParamList, RootStackNavigationName.ASK>> = ({
    route,
    navigation,
}) => {
    const { chatId, specialistId } = route.params;

    const [inputText, setInputText] = useState('');
    const [resultText, setResultText] = React.useState('');
    const [selectedTopic, setSelectedTopic] = useState<ETopic>(ETopic.OTHER);

    const newChatId = selectedTopic + Date.now().toString();

    const dispatch = useAppDispatch();

    const allChats = useAppSelector(getAllChats);
    const allSpecialists = useAppSelector(getAllSpecialists);

    const existedChat = allChats.find(
        (chat) => chat.topic === selectedTopic && chat.specialistId === selectedSpecialistId,
    );

    const getSelectedChatId = (): string => {
        if (existedChat) {
            return existedChat.id;
        }

        if (chatId) {
            return chatId;
        }
        return '';
    };

    const selectedSpecialistId = specialistId
        ? specialistId
        : allChats.filter((chat) => chat.id === chatId)[0].specialistId;

    const selectedSpecialist = allSpecialists.find((spec) => spec.id === selectedSpecialistId);

    const addMessagePress = () => {
        if (getSelectedChatId()) {
            dispatch(
                addMessagesToCurrentChat({
                    chatId: getSelectedChatId(),
                    messages: [
                        {
                            id: Date.now().toString(),
                            message: inputText,
                            direction: 'outgoing',
                            sender: 'User1',
                            sentTime: Date.now().toString(),
                        },
                    ],
                }),
            );
            setInputText('');
            navigation.navigate(RootStackNavigationName.CHAT, { chatId: getSelectedChatId() });
        } else {
            dispatch(
                createNewChat({
                    id: newChatId,
                    // userId: currentUserId,
                    topic: selectedTopic,
                    messages: [
                        {
                            id: Date.now().toString(),
                            message: inputText,
                            direction: 'outgoing',
                            sender: 'User1',
                            sentTime: Date.now().toString(),
                        },
                    ],
                    specialistId: selectedSpecialistId,
                }),
            );

            if (selectedSpecialist) {
                dispatch(
                    createNewAnswer({
                        id: Date.now().toString(),
                        chatId: newChatId,
                        user: selectedSpecialist,
                        topic: selectedTopic,
                    }),
                );
            }

            setInputText('');
            navigation.navigate(RootStackNavigationName.CHAT, { chatId: newChatId });
        }
    };

    return (
        <View style={styles.rootWrapper}>
            {selectedSpecialist ? (
                <View style={styles.cardWrapper}>
                    <Card item={selectedSpecialist} isChat={true} />
                </View>
            ) : (
                <></>
            )}

            {chatId ? (
                <></>
            ) : (
                <View style={styles.select}>
                    <RNPickerSelect
                        items={topics}
                        onValueChange={(value) => setSelectedTopic(value)}
                        value={selectedTopic}
                        placeholder={{ label: 'Выберите тему', value: null }}
                    />
                </View>
            )}

            <Input
                style={styles.input}
                multiline={true}
                onChangeText={setInputText}
                value={inputText}
                placeholder="Текст обращения"
            />
            <TextInput
                label="Желаемый результат"
                placeholder="Чего ждете?"
                value={resultText}
                onChangeText={(text) => setResultText(text)}
                mode={'outlined'}
                style={{
                    borderRadius: 4,
                    width: '100%',
                    color: theme.DIVIDER,
                }}
                placeholderTextColor={theme.DIVIDER}
                outlineColor={theme.DIVIDER}
                activeOutlineColor={theme.BUTTON_COLOR}
            />

            <Button title="Отправить" onClick={addMessagePress} />
        </View>
    );
};
