export enum ConsultationStackNavigationName {
    SPECIALISTS = 'Специалисты',
    ANSWERS = 'Ответы',
}

export type ConsultationParamList = {
    [ConsultationStackNavigationName.SPECIALISTS]: undefined;
    [ConsultationStackNavigationName.ANSWERS]: undefined;
};
