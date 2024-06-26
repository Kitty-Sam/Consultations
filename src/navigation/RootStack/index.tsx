import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ChatScreen } from '~screens/ChatScreen';
import { ProfileScreen } from '~screens/ProfileScreen';
import { ConsultationStack } from '~navigation/ConsultationStack';
import { RootStackNavigationName, RootStackParamList } from '~navigation/RootStack/type.ts';
import { AskScreen } from '~screens/AskScreen';
import { ConsultationsScreen } from '~screens/ConsultationsScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();
export const RootStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={RootStackNavigationName.MAIN} component={ConsultationsScreen} />
            <Stack.Screen
                name={RootStackNavigationName.CONSULTATION}
                component={ConsultationStack}
                options={{
                    headerBackTitleVisible: false,
                }}
            />
            <Stack.Screen
                name={RootStackNavigationName.CHAT}
                component={ChatScreen}
                options={{
                    headerBackTitleVisible: false,
                }}
            />
            <Stack.Screen
                name={RootStackNavigationName.PROFILE}
                component={ProfileScreen}
                options={{
                    headerBackTitleVisible: false,
                }}
            />
            <Stack.Screen
                name={RootStackNavigationName.ASK}
                component={AskScreen}
                options={{
                    headerBackTitleVisible: false,
                }}
            />
        </Stack.Navigator>
    );
};
