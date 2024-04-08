import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import specialistsReducer from './slices/specialistsSlice.ts';
import answersReducer from './slices/answersSlice.ts';
import chatsReducer from './slices/chatSlice.ts';

const rootReducer = combineReducers({
    specialistsStore: specialistsReducer,
    answersStore: answersReducer,
    chatsStore: chatsReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
