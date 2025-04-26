"use client";
import { useEffect, useRef } from "react";
import { User } from "@supabase/supabase-js";
import { useUserStore } from "./user";

const InitUser = ({ user }: { user: User | undefined }) => {
    const init = useRef(false);
    useEffect(() => {
        if (init.current) {
            useUserStore.setState({ user });
        };
        init.current = true;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return <></>;
}

export default InitUser;