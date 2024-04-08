import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISpecialist } from '~store/slices/specialistsSlice.ts';
import { IChat, IChatMessage } from '~navigation/RootStack/type.ts';
import { IAnswer } from '~store/slices/answersSlice.ts';

export type ChatsState = {
    chats: IChat[];
};

const initialState: ChatsState = {
    chats: [],
};

export const chatsSlice = createSlice({
    name: 'chats',
    initialState,
    reducers: {
        setAllChats(state, action: PayloadAction<IChat[]>) {
            state.chats = action.payload;
        },

        createNewChat(state, action: PayloadAction<IChat>) {
            state.chats = state.chats.concat(action.payload);
        },

        addMessagesToCurrentChat(state, action: PayloadAction<{ messages: IChatMessage[]; chatId: string }>) {
            const { chatId, messages } = action.payload;
            const chatIndex = state.chats.findIndex((chat) => chat.id === chatId);
            if (chatIndex !== -1) {
                state.chats[chatIndex].messages.push(...messages);
            } else {
                state.chats = initialState.chats;
            }
        },
    },
});

export default chatsSlice.reducer;
export const { addMessagesToCurrentChat, setAllChats, createNewChat } = chatsSlice.actions;
