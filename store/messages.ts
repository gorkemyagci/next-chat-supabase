import { User } from "@supabase/supabase-js";
import { create } from "zustand";

export type IMessage = {
  created_at: string;
  id: string;
  is_edit: boolean;
  send_by: string;
  text: string;
};

interface MessagesState {
  messages: IMessage[];
  setMessages: (messages: IMessage[]) => void;
}

export const useMessagesStore = create<MessagesState>((set) => ({
  messages: [],
  setMessages: (messages) => set({ messages }),
}));
