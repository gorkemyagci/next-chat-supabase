import { IMessage } from "@/store/messages";
import { User } from "@supabase/supabase-js";
import moment from "moment";
import Image from "next/image";

const MessageItem = ({ user, message, index }: { user: User | null, message: IMessage, index: number }) => {
    const userData = user?.user_metadata;
    return <div key={index} className="flex gap-2 items-center">
        <Image
            src={userData?.avatar_url}
            alt={userData?.full_name}
            width={32}
            height={32}
            className="rounded-full"
        />
        <div className="flex-1">
            <div className="flex items-center gap-2">
                <h1 className="font-bold">{userData?.full_name}</h1>
                <h1 className="text-sm">{moment(message.created_at).format("HH:mm")}</h1>
            </div>
            <p className="text-gray-300">
                {message.text}
            </p>
        </div>
    </div>
}

export default MessageItem;