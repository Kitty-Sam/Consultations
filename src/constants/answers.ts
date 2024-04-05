import { IAnswer } from '~store/slices/answersSlice.ts';
import { ETopic } from '~src/enums/topic.ts';

export const answersData: IAnswer[] = [
    {
        id: '1',
        user: {
            id: '1',
            name: 'Сидорова Ольга',
            experience: '5 лет',
            education: 'Магистр психологических наук, БГУ',
            avatar: 'https://pbs.twimg.com/media/FEvGwpCXEAEhf1P.png',
            about: '',
            shortDescription: '',
        },
        topic: ETopic.FAMILY,
    },
    {
        id: '2',
        user: {
            id: '2',
            name: 'Сидорова Инесса',
            experience: '5 лет',
            education: 'Магистр психологических наук, БГУ',
            avatar: 'https://images.wsj.net/im-491399?width=860&height=860',
            about: '',
            shortDescription: '',
        },

        topic: ETopic.SEX,
    },
    {
        id: '3',
        user: {
            id: '3',
            name: 'Сидорова Наталья',
            experience: '5 лет',
            education: 'БГТУ',
            avatar: 'https://yt3.googleusercontent.com/5RarOFS1Ckt2EWtOxtGLDNgbDo4dnXA4n8_9MFotaqkxGVyDiOy7fKeHgzNAubOUbrVQOvlKHQ=s900-c-k-c0x00ffffff-no-rj',
            about: '',
            shortDescription: '',
        },
        topic: ETopic.RELATIONSHIPS,
    },
];
