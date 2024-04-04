import { ISpecialist } from '~store/slices/specialistsSlice.ts';
import { IAnswer } from '~store/slices/answersSlice.ts';

export enum RootStackNavigationName {
    MAIN = 'Консультации',
    CONSULTATION = 'Консультация',
    PROFILE = 'Профайл',
    CHAT = 'Чат',
}

export type RootStackParamList = {
    [RootStackNavigationName.MAIN]: undefined;
    [RootStackNavigationName.CONSULTATION]: undefined;
    [RootStackNavigationName.PROFILE]: { item: ISpecialist };
    [RootStackNavigationName.CHAT]: { item: IAnswer };
};
