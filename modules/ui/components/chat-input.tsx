"use client";

import { Input } from "@/components/ui/input";
import { useMessagesStore } from "@/store/messages";
import { useUserStore } from "@/store/user";
import { createClient } from "@/utils/supabase/client";
import { toast } from "sonner";
import { v4 as uuidv4 } from 'uuid';

const ChatInput = () => {
    const supabase = createClient();
    const { setMessages, messages } = useMessagesStore();
    const { user } = useUserStore();
    const handleSend = async (text: string) => {
        const { error } = await supabase.from("messages").insert({ text });
        if (error) {
            toast.error(error.message);
        }
        setMessages([...messages, { text, id: uuidv4(), created_at: new Date().toISOString(), is_edit: false, send_by: user?.id ?? "" }]);
    }
    return (
        <div className="p-5">
            <Input placeholder="Send Message" onKeyDown={(e) => {
                if (e.key === "Enter") {
                    handleSend(e.currentTarget.value);
                    e.currentTarget.value = "";
                }
            }} />
        </div>
    )
}

export default ChatInput;