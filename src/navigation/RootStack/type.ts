import { ISpecialist } from '~store/slices/specialistsSlice.ts';
import { IAnswer } from '~store/slices/answersSlice.ts';
import { NavigatorScreenParams } from '@react-navigation/native';
import { ConsultationParamList } from '~navigation/ConsultationStack/type.ts';

export interface IChat {}

export enum RootStackNavigationName {
    MAIN = 'Консультации',
    CONSULTATION = 'Консультация',
    PROFILE = 'Профайл',
    CHAT = 'Чат',
    ASK = 'Задать вопрос',
}

export type RootStackParamList = {
    [RootStackNavigationName.MAIN]: undefined;
    [RootStackNavigationName.CONSULTATION]: NavigatorScreenParams<ConsultationParamList>;
    [RootStackNavigationName.PROFILE]: { item: ISpecialist };
    [RootStackNavigationName.CHAT]: { item: IAnswer };
    [RootStackNavigationName.ASK]: { item: IChat };
};
