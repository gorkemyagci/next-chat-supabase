"use client";
import { useEffect, useRef } from "react";
import { IMessage, useMessagesStore } from "./messages";

const InitMessages = ({ messages }: { messages: IMessage[] }) => {
    const init = useRef(false);
    useEffect(() => {
        if (!init.current) {
            useMessagesStore.setState({ messages });
            init.current = true;
        }
    }, [messages]);
    return null;
}

export default InitMessages;