export enum RootStackNavigationName {
    SPECIALISTS = 'Специалисты',
    ANSWERS = 'Ответы',
}

export type RootStackParamList = {
    [RootStackNavigationName.SPECIALISTS]: undefined;
    [RootStackNavigationName.ANSWERS]: undefined;
};
