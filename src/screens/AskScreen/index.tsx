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

export const AskScreen: FC<NativeStackScreenProps<RootStackParamList, RootStackNavigationName.ASK>> = ({ route }) => {
    const { item } = route.params;

    const [inputText, setInputText] = useState('');
    const [resultText, setResultText] = React.useState('');
    const [selectedTopic, setSelectedTopic] = useState(null);

    return (
        <View style={styles.rootWrapper}>
            <View style={styles.cardWrapper}>
                <Card item={item} isChat={true} />
            </View>

            <View style={styles.select}>
                <RNPickerSelect
                    items={topics}
                    onValueChange={(value) => setSelectedTopic(value)}
                    value={selectedTopic}
                    placeholder={{ label: 'Выберите тему', value: null }}
                />
            </View>

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

            <Button title="Отправить" onClick={() => {}} />
        </View>
    );
};
