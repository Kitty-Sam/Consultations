import { IAnswer } from '~store/slices/answersSlice.ts';
import { ETopic } from '~src/enums/topic.ts';
import { specialistsData } from '~constants/spesiclists.ts';

export const answersData: IAnswer[] = [
    {
        id: '1',
        user: { ...specialistsData[0] },
        topic: ETopic.FAMILY,
        chatId: '1',
    },
    {
        id: '2',
        user: { ...specialistsData[1] },
        topic: ETopic.SEX,
        chatId: '2',
    },
    {
        id: '3',
        user: { ...specialistsData[2] },
        topic: ETopic.RELATIONSHIPS,
        chatId: '3',
    },
];
