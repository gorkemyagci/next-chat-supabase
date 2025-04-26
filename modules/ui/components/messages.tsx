"use client";
import { useMessagesStore } from "@/store/messages";
import { createClient } from "@/utils/supabase/client";
import MessageItem from "./message-item";
import { User } from "@supabase/supabase-js";

const Messages = ({ initialUser }: { initialUser: User | null }) => {
    const { messages } = useMessagesStore();
    return (
        <div className="flex-1 flex flex-col p-5 pb-2">
            <div className="flex-1">
                <div className="space-y-7 h-[calc(100vh-14.75rem)] overflow-y-auto custom-scrollbar">
                    {messages?.map((message: any, index: number) => (
                        <MessageItem key={index} user={initialUser} message={message} index={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Messages;