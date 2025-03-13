"use client";
import {Message, useChat} from "@ai-sdk/react";
import React, {Dispatch, SetStateAction, useCallback, useMemo, useRef, useState} from "react";
import {ChatInput} from "@/components/chat/chat-input";
import {ChatMessage} from "@/components/chat/chat-message";
import graphqlClient from "@/lib/graphql";
import {GetChatMessagesDocument, InsertChatMessagesDocument} from "@/lib/generated/graphql";
import {useQuery} from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroll-component";
import {Loader2} from "lucide-react";


async function storeMessage(message: string, isUser: boolean): Promise<void> {
    await graphqlClient.request(InsertChatMessagesDocument, {
        message: {
            message,
            isUser,
        },
    });
}

const getInitialMessages = async (setCursor: Dispatch<SetStateAction<string | null>>) => {
    const snapshot = await graphqlClient.request(GetChatMessagesDocument, {});

    const messages: Message[] = snapshot.message_listCollection?.edges.map((message) => (
        {
            role: message.node.isUser ? "user" : "system",
            content: message.node.message || "UNKNOWN",
            id: message.node.message_id || "",
            createdAt: message.node.created_at as Date,
        }
    )) || [];

    // Prevent unnecessary re-renders if cursor is the same
    setCursor((prevCursor) => {
        if (snapshot.message_listCollection?.pageInfo.hasPreviousPage) {
            const newCursor = snapshot.message_listCollection?.pageInfo.startCursor || null
            return prevCursor === newCursor ? prevCursor : newCursor;
        } else {
            return null
        }
    });

    return messages;
};
export default function ChatBox() {

    const messageContainer = useRef<HTMLDivElement | null>(null);
    const [cursor, setCursor] = useState<string | null>(null);


    const {data: initialMessages} = useQuery({
        queryKey: ["initialMessages"],
        queryFn: async () => await getInitialMessages(setCursor),
    });

    const {messages, input, handleInputChange, setMessages, handleSubmit, status, error} = useChat({
        initialMessages: initialMessages,
        onFinish: (message) => storeMessage(message.content, message.role === "user"),
    });

    async function fetchOlderMessages(): Promise<void> {
        if (!cursor) return;
        const snapshot = await graphqlClient.request(GetChatMessagesDocument, {cursor});
        const olderMessages: Message[] = snapshot.message_listCollection?.edges.map((message) => (
            {
                role: message.node.isUser ? "user" : "system",
                content: message.node.message || "UNKNOWN",
                id: message.node.message_id || "",
                createdAt: message.node.created_at as Date,
            }
        )) || [];
        if (olderMessages.length > 0) {
            setCursor((
                snapshot.message_listCollection?.pageInfo.hasPreviousPage
            ) ? (
                snapshot.message_listCollection?.pageInfo.startCursor || null
            ) : null);
            setMessages((prev) => [...olderMessages, ...prev]);
        }
    }

    async function handleSend(event: React.FormEvent<HTMLFormElement>): Promise<void> {
        handleSubmit(event);
        await storeMessage(input, true);
    }


    return (
        <div className="flex flex-col justify-between w-9/12 h-full p-4 mx-auto">
            {/* Messages area */}
            <div
                id="scrollableDiv"
                className="flex-1 overflow-y-auto py-20 hide-scrollbar   gap-4 flex flex-col-reverse"
                ref={messageContainer}>
                <InfiniteScroll

                    dataLength={messages.length}
                    next={fetchOlderMessages}
                    hasMore={!!cursor} // If cursor exists, fetch more
                    loader={<div className="text-center  flex justify-center items-center p-4">
                        <Loader2 className={"animate-spin "}/>
                    </div>}
                    style={{
                        display: 'flex',
                        flexDirection: 'column-reverse'
                    }} //To put endMessage and loader to the top.

                    inverse={true}
                    scrollableTarget={'scrollableDiv'}

                >
                    <div>
                        {messages.map((message, index) => (
                            <ChatMessage
                                message={message}
                                key={index}
                                isLast={index === messages.length - 1}
                                isLoading={status === "streaming" || status === "submitted"}
                            />
                        ))}

                        {status === "error" && <ChatMessage
                            message={{content: error?.message || "Something went wrong", id: "error", role: "system"}}
                            isLast={true}
                            isLoading={false}
                        />}
                    </div>
                </InfiniteScroll>
            </div>
            <ChatInput input={input} handleInputChange={handleInputChange} handleSubmit={handleSend} status={status}/>
        </div>
    );
}
