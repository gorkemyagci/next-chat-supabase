import { User } from "@supabase/supabase-js";
import ChatHeader from "../components/chat-header";
import ChatInput from "../components/chat-input";
import Messages from "../components/messages";

const ChatView = ({ user }: { user: User | undefined }) => {
    return (
        <div className="max-w-3xl mx-auto md:py-7 h-screen">
            <div className="h-full border rounded-md flex flex-col">
                <ChatHeader user={user} />
                <Messages initialUser={user ?? null} />
                <ChatInput />
            </div>
        </div>
    )
}

export default ChatView;