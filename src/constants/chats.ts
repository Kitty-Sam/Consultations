import { IChat } from '~navigation/RootStack/type.ts';
import { ETopic } from '~src/enums/topic.ts';

export const currentUserId = '1';

export const chatsData: IChat[] = [
    {
        id: '1',
        specialistId: '1',
        // userId: currentUserId,
        messages: [
            {
                id: '1',
                message: 'Привет, чем могу помочь?',
                sentTime: '18.12.24',
                sender: 'Сидорова Ольга',
                direction: 'incoming',
            },
            {
                id: '2',
                message: 'Сколько стоят ваши услуги',
                sentTime: '18.12.24',
                sender: 'User',
                direction: 'outgoing',
            },
        ],
        topic: ETopic.FAMILY,
    },
    {
        id: '2',
        specialistId: '2',
        // userId: currentUserId,
        messages: [
            {
                id: '3',
                message: 'Привет, на связи специалист',
                sentTime: '20.12.24',
                sender: 'Сидорова Инесса',
                direction: 'incoming',
            },
            {
                id: '4',
                message: 'Мы можем встретиться?',
                sentTime: '20.12.24',
                sender: 'User2',
                direction: 'outgoing',
            },
        ],
        topic: ETopic.SEX,
    },
    {
        id: '3',
        specialistId: '3',
        // userId: currentUserId,
        messages: [
            {
                id: '5',
                message: 'Привет, как ваши дела?',
                sentTime: '19.12.24',
                sender: 'Сидорова Наталья',
                direction: 'incoming',
            },
            {
                id: '6',
                message: 'Хорошо, к вам можно?',
                sentTime: '19.12.24',
                sender: 'User3',
                direction: 'outgoing',
            },
        ],
        topic: ETopic.RELATIONSHIPS,
    },
];
