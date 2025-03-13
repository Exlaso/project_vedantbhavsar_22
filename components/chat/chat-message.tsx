"use client";

import type {Message} from "@ai-sdk/react";
import {cn} from "@/lib/utils";
import {MedicineCard} from "./medicine-card";
import {RefObject, useEffect, useRef, useState} from "react";
import Image from "next/image";
import {Check, Files, RefreshCw} from "lucide-react";
import ReactMarkdown from "react-markdown";
import {Button} from "@/components/ui/button";
import {motion} from "framer-motion";


export interface Medicine {
    name: string;

    description: string;

    dosage?: string;

    imageUrl?: string;

    sideEffects?: string[];

    warnings?: string[];
}


interface ChatMessageProps {
    message?: Message,

    isLoading?: boolean,

    onRegenerate?: () => void,

    isLast?: boolean,

    onFocus?: (ref: RefObject<HTMLDivElement>) => void
}

const MessageTextRender = ({ text }: { text: string }) => {
    return (
        text.split("\n").map((line, index) => (
            <motion.div
                key={index}
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                }}
            >
                <ReactMarkdown>{line}</ReactMarkdown>
            </motion.div>
        ))
    );
};
// Helper component for code blocks
const CodeBlock = ({
                       children,
                       language,
                   }: {
    children: string;
    language: string;
}) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(children);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative w-full rounded-md bg-muted/50 my-3">
            <div className="flex items-center justify-between px-4 py-2 border-b">
                <span className="text-xs text-muted-foreground">{language}</span>
                <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 px-2"
                    onClick={handleCopy}
                >
                    {copied ? <Check size={16}/> : <Files size={16}/>}
                    <span className="sr-only">{copied ? "Copied" : "Copy code"}</span>
                </Button>
            </div>
            <pre className="overflow-x-auto p-4 text-sm">
        <code>{children}</code>
      </pre>
        </div>
    );
};

// Animated dots for loading state
const MessageLoading = () => {
    return (
        <span className="flex space-x-1 ml-1">
      <span className="animate-bounce delay-0">.</span>
      <span className="animate-bounce delay-100">.</span>
      <span className="animate-bounce delay-200">.</span>
    </span>
    );
};

export function ChatMessage({
                                message,
                                isLoading = false,
                                isLast,
                                onFocus
                            }: ChatMessageProps) {
    const divRef = useRef<HTMLDivElement | null>(null);
    const isUser = message?.role === "user";

    return (
        <div
            ref={divRef}
            className={cn(`flex items-start  gap-4 w-full p-2`,
                isUser ? "flex-row-reverse " : " "
            )}
        >
            <div className=" shrink-0">
                <Image
                    src={isUser ? "/assests/avatar.svg" : "/assests/assistent.svg"}
                    alt={`${isUser ? "User" : "Assistant"} icon`}
                    width={40}
                    className="rounded-full"
                    height={40}
                />
            </div>
            <div className=" self-center overflow-hidden">
                {(
                    isLast && isLoading
                ) ? (
                    <MessageLoading/>
                ) : (
                    <motion.div
                        initial={isUser ? "visible" : "hidden"}
                        animate="visible"
                        transition={{staggerChildren: .05}}
                        className={`relative flex flex-wrap gap-1 `}
                    >
                        <MessageTextRender text={message?.content || "ERROR"}/>
                    </motion.div>
                )}

            </div>
        </div>
    );
}
