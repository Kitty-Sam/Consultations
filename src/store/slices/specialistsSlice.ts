import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ISpecialist {
    id: string;
    name: string;
    experience: string;
    education: string;
    avatar: string;
    about: string;
}

export type SpecialistsState = {
    specialists: ISpecialist[];
};

const initialState: SpecialistsState = {
    specialists: [],
};

export const specialistsSlice = createSlice({
    name: 'specialists',
    initialState,
    reducers: {
        setSpecialists(state, action: PayloadAction<ISpecialist[]>) {
            state.specialists = action.payload;
        },
    },
});

export default specialistsSlice.reducer;
export const { setSpecialists } = specialistsSlice.actions;
