"use client";

import type { Message } from "@ai-sdk/react";
import { cn } from "@/lib/utils";
import { MedicineCard } from "./medicine-card";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Check, Files, RefreshCw } from "lucide-react";
// import ReactMarkdown from "react-markdown";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export interface Medicine {
  name: string;
  description: string;
  dosage?: string;
  imageUrl?: string;
  sideEffects?: string[];
  warnings?: string[];
}

interface ChatMessageProps {
  message: Message;
  addToCart: (medicine: Medicine) => void;
  medicines?: Medicine[];
  isLoading?: boolean;
  onRegenerate?: () => void;
}

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
          {copied ? <Check size={16} /> : <Files size={16} />}
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
  addToCart,
  medicines: propMedicines,
  isLoading = false,
  onRegenerate,
}: ChatMessageProps) {
  const isUser = message.role === "user";
  const [medicines, setMedicines] = useState<Medicine[]>([]);
  const [displayContent, setDisplayContent] = useState<string>(
    typeof message.content === "string" ? message.content : ""
  );
  const [parseError, setParseError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);

  // Character limit for user messages
  const CHAR_LIMIT = 300;
  const isLongUserMessage = isUser && displayContent.length > CHAR_LIMIT;

  const finalDisplayContent =
    isLongUserMessage && !expanded
      ? displayContent.slice(0, CHAR_LIMIT).trim() + "..."
      : displayContent;

  const handleCopy = () => {
    navigator.clipboard.writeText(displayContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    if (isUser || typeof message.content !== "string") return;

    try {
      // Check if medicines are passed directly as props
      if (propMedicines && propMedicines.length > 0) {
        setMedicines(propMedicines);
        setParseError(null);
        setDisplayContent(message.content);
        return;
      }

      // Check if medicines property exists directly on the message object
      if (
        (message as any).medicines &&
        Array.isArray((message as any).medicines)
      ) {
        setMedicines((message as any).medicines);
        setDisplayContent(message.content);
        setParseError(null);
        return;
      }

      // No medicines found, just display the content as is
      setDisplayContent(message.content);
      setMedicines([]);
      setParseError(null);
    } catch (e) {
      console.error("Error processing message content:", e);
      setParseError(
        `Error processing message: ${
          e instanceof Error ? e.message : String(e)
        }`
      );
      setDisplayContent(message.content);
      setMedicines([]);
    }
  }, [isUser, message, propMedicines, message.content]);

  return (
    <div
      className={`flex items-start ${
        isUser ? "px-4" : "bg-card border rounded-lg p-4"
      } mb-6`}
    >
      <div className="flex-shrink-0 mr-4">
        <Image
          src={isUser ? "/assests/avatar.svg" : "/assests/assistent.svg"}
          alt={`${isUser ? "User" : "Assistant"} icon`}
          width={40}
          className="rounded-full"
          height={40}
        />
      </div>
      <div className="flex-grow max-w-full self-center overflow-hidden">
        {isLoading ? (
          <div className="flex flex-col gap-2">
            <div className="flex items-center">
              <div className="w-5 h-6 mr-1.5 mt-1">
                <svg
                  enableBackground="new 0 0 128 128"
                  viewBox="0 0 128 128"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m61.53 89.7s1.87 7.96 12.23 13.88c6.53 3.73 20.26 7.6 27.27 2.42 7.98-5.9 9.7-11.74 10.08-13.89s-.76-8.08-.76-8.08l-13.13-4.67s-21.71 5.3-22.09 5.3c-.37.01-13.6 5.04-13.6 5.04z"
                    fill="#e06767"
                  />
                  <path
                    d="m110.39 94.67c.29-.75.47-1.39.6-1.92-2.32-.62-5.01-1.62-7.45-2.66.2-.09.4-.18.59-.28 1.2-.61 2.38-1.32 3.23-2.36.92-1.12 1.34-2.57 1.29-4.02l-11.43-4.07s-21.71 5.3-22.09 5.3-13.6 5.03-13.61 5.04c-.17.06 1.23 3 1.32 3.15 1.27 2.37 4.19 5.67 6.19 7.46 0 0-.92-2.12.82-2.91.77-.35 1.7-.18 2.49.13 1.98.79 4.46 3.83 10.66 7.09 4.21 2.22 8.54 3.92 9.94 3.86 1.87-.08 5.26-.99 5.26-.99s-4.32-.41-11.26-3.64c-2.1-.98-9.87-4.8-10.61-6.93-.21-.6-.96-1.66.4-2.26 2.08-.93 7.75 3.96 12.62 6.2 5.8 2.66 12.12 4.79 12.12 4.79.68-.52 1.32-1.04 1.92-1.56-3.23-.83-6.39-1.97-9.44-3.3-3.04-1.32-6.02-3.03-8.77-4.91-1.75-1.2-2.96-3.22-1.08-3.48 3.08-.43 7.06 2.5 11.05 4.57 3.6 1.87 7.92 2.73 11.97 3.24.52-.65 1.37-1.89 1.37-1.89s-1.53-.26-6.05-1.26c-1.98-.44-3.9-1.01-5.66-2-.46-.26-2.07-1.91.13-2.67s4.29.75 7.61 1.52c3.33.79 5.84.83 5.87.76z"
                    fill="#b05353"
                  />
                  <path
                    d="m118 53.3s-.25-8.1-4.6-15.27c-3.75-6.18-9.1-6.81-9.1-6.81s-1.06-3.89-4.78-6.87-11.37-5.47-11.37-5.47c-15.32-6.9-24.87-1.25-24.87-1.25s-22.72-5.4-40.91 10.03c0 0-9.18 4.32-12.93 12.48-2.07 4.52-1.18 11.89-1.18 11.89-6.37 7.4-4.62 19.12 2.53 24.99 3.41 2.79 7.62 4.64 12.01 5.11 1.72.18 2.59-.23 3.31 1.52 1.06 2.58 1.89 5.23 4.02 7.08 2.17 1.88 4.7 3.34 7.39 4.34 5.22 1.93 11.12 2.14 16.39.25 1.75-.63 7.36-.69 7.36-.69s2.97 2.45 13.51 2.06 14.99-4.94 17.4-5.79c1.85-.65 4.12-2.08 6.14-1.71 1.15.21 2.18.8 3.23 1.3 2.94 1.41 6.24 2.18 9.48 1.88 12.25-1.13 13.54-15.24 12.33-24.94-1.22-9.79-5.36-14.13-5.36-14.13z"
                    fill="#ffb3b3"
                  />
                </svg>
              </div>
              <span className="mr-[0.3rem]">Generating</span>
              <MessageLoading />
            </div>
            <Skeleton className="w-full h-11" />
          </div>
        ) : (
          <div
            className={`relative ${isLongUserMessage ? "cursor-pointer" : ""}`}
            onClick={isLongUserMessage ? toggleExpand : undefined}
          >
            {finalDisplayContent}

            {isLongUserMessage && (
              <p className="text-blue-500 mt-2">
                {expanded ? "Show Less" : "Show More"}
              </p>
            )}
          </div>
        )}

        {medicines.length > 0 && !isLoading && (
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {medicines.map((medicine, index) => (
              <MedicineCard
                key={index}
                medicine={medicine}
                onAddToCart={() => addToCart(medicine)}
              />
            ))}
          </div>
        )}

        {!isUser && !isLoading && (
          <div className="mt-6 flex space-x-2">
            <Button
              onClick={handleCopy}
              variant="outline"
              size="sm"
              className="flex items-center"
            >
              {copied ? <Check size={16} /> : <Files size={16} />}
              <span className="ml-1">{copied ? "Copied" : "Copy"}</span>
            </Button>
            {onRegenerate && (
              <Button
                onClick={onRegenerate}
                variant="outline"
                size="sm"
                className="flex items-center"
              >
                <RefreshCw size={16} />
                <span className="ml-1">Regenerate</span>
              </Button>
            )}
          </div>
        )}

        {parseError && !isUser && (
          <div className="mt-2 text-xs text-destructive">
            <p>Debug info: {parseError}</p>
          </div>
        )}
      </div>
    </div>
  );
}
