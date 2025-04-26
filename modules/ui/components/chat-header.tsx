"use client"
import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/client";
import { User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";

const ChatHeader = ({ user }: { user: User | undefined }) => {

    const router = useRouter();

    const login = () => {
        const supabase = createClient();
        supabase.auth.signInWithOAuth({
            provider: "github",
            options: {
                redirectTo: `${window.location.origin}/auth/callback`,
            }
        })
    };

    const logout = async () => {
        const supabase = createClient();
        await supabase.auth.signOut();
        router.refresh();
    };

    return (
        <div className="h-20">
            <div className="p-5 border-b flex justify-between items-center h-full">
                <div className="flex flex-col items-start gap-1">
                    <h1 className="text-xl font-bold">Daily Chat</h1>
                    <div className="flex items-center gap-1.5">
                        <div className="h-4 w-4 bg-green-500 rounded-full animate-pulse" />
                        <h1 className="text-sm text-gray-400">2 onlines</h1>
                    </div>
                </div>
                {user ?
                    <Button onClick={logout}>
                        Logout
                    </Button> :
                    <Button onClick={login}>
                        Login
                    </Button>}
            </div>
        </div>
    )
}

export default ChatHeader;