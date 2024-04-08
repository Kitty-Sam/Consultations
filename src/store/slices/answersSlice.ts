import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISpecialist } from '~store/slices/specialistsSlice.ts';
import { ETopic } from '~src/enums/topic.ts';

export interface IAnswer {
    id: string;
    user: ISpecialist;
    topic: ETopic;
    chatId: string;
}

export type AnswersState = {
    answers: IAnswer[];
};

const initialState: AnswersState = {
    answers: [],
};

export const answersSlice = createSlice({
    name: 'answers',
    initialState,
    reducers: {
        setAnswers(state, action: PayloadAction<IAnswer[]>) {
            state.answers = action.payload;
        },
        createNewAnswer(state, action: PayloadAction<IAnswer>) {
            state.answers = state.answers.concat(action.payload);
        },
    },
});

export default answersSlice.reducer;
export const { setAnswers, createNewAnswer } = answersSlice.actions;
