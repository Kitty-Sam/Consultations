import { ISpecialist } from '~store/slices/specialistsSlice.ts';
import { ETopic } from '~src/enums/topic.ts';

export interface IChatMessage {
    id: string;
    message: string;
    sentTime: any;
    sender: string;
    direction: 'incoming' | 'outgoing';
}

export interface IChat {
    id: string;
    specialistId: string;
    // userId: string;
    messages: IChatMessage[];
    topic: ETopic;
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
    [RootStackNavigationName.CHAT]: { chatId: string };
    [RootStackNavigationName.ASK]: { chatId?: string; specialistId?: string };
};
