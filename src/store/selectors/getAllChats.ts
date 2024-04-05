import { RootState } from '~store/store.ts';

export const getAllChats = (state: RootState) => state.chatsStore.chats;
