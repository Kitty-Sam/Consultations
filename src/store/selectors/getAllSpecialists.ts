import { RootState } from '~store/store.ts';

export const getAllSpecialists = (state: RootState) => state.specialistsStore.specialists;
