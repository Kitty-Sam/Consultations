import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IAnswer {
    id: string;
    name: string;
    experience: string;
    education: string;
    avatar: string;
    topic: string;
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
    },
});

export default answersSlice.reducer;
export const { setAnswers } = answersSlice.actions;
