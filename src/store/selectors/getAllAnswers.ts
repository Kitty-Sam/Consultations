import { RootState } from '~store/store.ts';

export const getAllAnswers = (state: RootState) => state.answersStore.answers;
