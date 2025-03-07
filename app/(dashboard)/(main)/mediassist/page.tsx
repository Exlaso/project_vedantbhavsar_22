"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { ChatInput } from "@/components/chat/chat-input";
import { ChatMessage } from "@/components/chat/chat-message";
import { Medicine } from "@/components/chat/medicine-card";
import {
  AlertCircle,
  FileText,
  FileWarning,
  Languages,
  Pill,
  Search,
  SendIcon,
  Stethoscope,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
// Define the message type
interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  medicines?: Medicine[];
}

const QuickActions = [
  {
    action: "Get medication advice",
    icon: Pill,
    gradient: "from-zinc-900/50 to-black/50",
    hoverGradient: "hover:from-zinc-800/50 hover:to-zinc-900/50",
  },

  {
    action: "Find medication for symptoms",
    icon: Stethoscope,
    gradient: "from-zinc-900/50 to-black/50",
    hoverGradient: "hover:from-zinc-800/50 hover:to-zinc-900/50",
  },
  {
    action: "Understanding side effects",
    icon: FileWarning,
    gradient: "from-zinc-900/50 to-black/50",
    hoverGradient: "hover:from-zinc-800/50 hover:to-zinc-900/50",
  },
];

export default function Chat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Function to add items to cart
  const addToCart = (medicine: Medicine) => {
    console.log("Adding to cart:", medicine);
    // Add your cart functionality here
    alert(`Added ${medicine.name} to cart!`);
  };

  // Function to regenerate a response
  const handleRegenerate = async (messageId: string) => {
    // Find the last user message before this assistant message
    const messageIndex = messages.findIndex((msg) => msg.id === messageId);
    if (messageIndex <= 0) return;

    // Find the last user message before this
    let userMessageIndex = messageIndex - 1;
    while (
      userMessageIndex >= 0 &&
      messages[userMessageIndex].role !== "user"
    ) {
      userMessageIndex--;
    }

    if (userMessageIndex < 0) return;

    // Remove the assistant message we're regenerating
    const updatedMessages = messages.slice(0, messageIndex);
    setMessages(updatedMessages);

    // Now send the user message again to get a new response
    const userMessage = messages[userMessageIndex];
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: updatedMessages.map((msg) => ({
            role: msg.role,
            content: msg.content,
          })),
          structuredFormat: true,
        }),
      });

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const data = await response.json();
      console.log("Regenerated Response:", data);

      const assistantMessage: ChatMessage = {
        id: Date.now().toString(), // New ID for the regenerated message
        role: "assistant",
        content: data.content || "I'm sorry, I couldn't process your request.",
        medicines: data.medicines || [],
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error regenerating message:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          role: "assistant",
          content:
            "Sorry, there was an error regenerating the response. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // Function to handle sending messages
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    // Add user message to chat
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);
    setInput("");

    try {
      // Make direct fetch request to API
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((msg) => ({
            role: msg.role,
            content: msg.content,
          })),
          structuredFormat: true,
        }),
      });

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const data = await response.json();
      console.log("API Response:", data);

      // Create assistant message with medicines if available
      const assistantMessage: ChatMessage = {
        id: data.id || Date.now().toString(),
        role: "assistant",
        content: data.content || "I'm sorry, I couldn't process your request.",
        medicines: data.medicines || [],
      };

      console.log("Assistant message with medicines:", assistantMessage);
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      // Add error message
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          role: "assistant",
          content:
            "Sorry, there was an error processing your request. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // Debug logging for messages
  useEffect(() => {
    console.log("Current messages:", messages);
    // Check if any messages have medicines
    const medicineMessages = messages.filter(
      (msg) => msg.medicines && msg.medicines.length > 0
    );
    if (medicineMessages.length > 0) {
      console.log("Messages with medicines:", medicineMessages);
    }
  }, [messages]);

  return (
    <div className="flex flex-col h-full w-full p-4 mx-auto">
      {/* Messages area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 ? (
          <div className="text-center text-muted-foreground p-8">
            <div className="flex items-center justify-center flex-col gap-4 w-full max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
                className={cn("text-center mb-10", "opacity-100 scale-100")}
              >
                <h1 className="text-5xl md:text-6xl font-medium mb-4 tracking-tighter bg-clip-text bg-gradient-to-b from-black to-black/70 ">
                  Welcome to MediAssist
                </h1>
              </motion.div>
              <div className="grid sm:grid-cols-3 gap-2 w-full">
                {QuickActions.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{
                        delay: 0.1 * index,
                        duration: 0.4,
                        ease: "easeOut",
                      }}
                      key={index}
                      className={`${
                        index > 1 ? "hidden sm:block" : "block"
                      } h-full`}
                    >
                      <button
                        type="button"
                        className="group w-full h-full text-left rounded-lg p-2.5
                                    bg-zinc-900 hover:bg-zinc-800
                                    border border-zinc-800 hover:border-zinc-700
                                    transition-colors duration-300
                                    flex flex-col justify-between"
                      >
                        <div className="flex items-center gap-2">
                          <div className="p-1.5 rounded-md bg-zinc-800 border border-zinc-700">
                            <Icon size={14} className="text-zinc-100" />
                          </div>
                          <div className="text-xs text-zinc-100 font-medium">
                            {item.action}
                          </div>
                        </div>
                      </button>
                    </motion.div>
                  );
                })}
              </div>
            </div>{" "}
          </div>
        ) : (
          messages.map((message) => (
            <ChatMessage
              key={message.id}
              message={{
                id: message.id,
                role: message.role,
                content: message.content,
              }}
              medicines={message.medicines}
              addToCart={addToCart}
              onRegenerate={
                message.role === "assistant"
                  ? () => handleRegenerate(message.id)
                  : undefined
              }
            />
          ))
        )}

        {/* Loading indicator */}
        {isLoading && (
          <ChatMessage
            message={{
              id: "loading",
              role: "assistant",
              content: "",
            }}
            isLoading={true}
            addToCart={addToCart}
          />
        )}
      </div>

      {/* Input area */}
      <div className="">
        <ChatInput
          input={input}
          handleInputChange={(e) => setInput(e.target.value)}
          handleSubmit={handleSendMessage}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}
