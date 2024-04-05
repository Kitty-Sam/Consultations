import { ISpecialist } from '~store/slices/specialistsSlice.ts';
import { NavigatorScreenParams } from '@react-navigation/native';
import { ConsultationParamList } from '~navigation/ConsultationStack/type.ts';

export interface IChatMessage {
    message: string;
    sentTime: any;
    sender: string;
    direction: 'incoming' | 'outgoing';
    // position: 0 | 1 | 'normal' | 2 | 'single' | 'first' | 'last' | 3;
}

export interface IChat {
    id: string;
    messages: IChatMessage[];
}

export enum RootStackNavigationName {
    MAIN = 'Консультации',
    CONSULTATION = 'Консультация',
    PROFILE = 'Профайл',
    CHAT = 'Чат',
    ASK = 'Задать вопрос',
}

export type RootStackParamList = {
    [RootStackNavigationName.MAIN]: undefined;
    [RootStackNavigationName.CONSULTATION]: undefined;
    [RootStackNavigationName.PROFILE]: { item: ISpecialist };
    [RootStackNavigationName.CHAT]: { item: ISpecialist };
    [RootStackNavigationName.ASK]: { item: ISpecialist; chat: IChat };
};
