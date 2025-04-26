import ChatView from "@/modules/ui/views/chat-view";
import InitMessages from "@/store/init-messages";
import InitUser from "@/store/init-user";
import { createClient } from "@/utils/supabase/server";

export const dynamic = 'force-dynamic'

export default async function Home() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getSession();
  const { data: messages } = await supabase.from("messages").select("*");
  return <>
    <ChatView user={data.session?.user} />
    <InitUser user={data.session?.user} />
    <InitMessages messages={messages || []} />
  </>
}
