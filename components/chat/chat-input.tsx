"use client";

import React, {FormEvent} from "react";
import {useEffect, useRef, useState} from "react";
import {SendHorizontal, CircleStop, Triangle} from "lucide-react";
import {Button} from "../ui/button";
import {Textarea} from "../ui/textarea";
import {AnimatePresence, motion} from "framer-motion";
import {string} from "yup";


interface ChatInputProps {
    input: string,

    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void,

    handleSubmit: (e: FormEvent<HTMLFormElement>) => void,


    status?: "submitted" | "streaming" | "ready" | "error"
}


const buttonVariants = {
    hidden: {x: 1, opacity: 0, scale: 0.7},
    visible: {
        x: 0,
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 20,
        },
    },
    exit: {
        x: 1,
        opacity: 0,
        scale: 0.9,
        transition: {
            type: "spring",
            duration: 0.2,
        },
    },
};

const RoundSpinner = ({size, color}: { size: string; color: string }) => (
    <svg
        className="animate-spin"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        width={size === "md" ? 24 : 20}
        height={size === "md" ? 24 : 20}
    >
        <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
        ></circle>
        <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
    </svg>
);

export function ChatInput({
                              input,
                              handleInputChange,
                              handleSubmit,
                              status
                          }: ChatInputProps) {
    const [maxHeight, setMaxHeight] = useState("max-h-10");
    const isLoading = status==="streaming"
    const [flexDirection, setFlexDirection] = useState("flex-row");
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const adjustTextareaHeight = () => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = `${Math.min(
                textareaRef.current.scrollHeight,
                120
            )}px`;
        }
    };

    const updateLayout = (charCount: number) => {
        if (charCount >= 160) {
            setMaxHeight("max-h-[120px]");
            setFlexDirection("flex-col");
        } else if (charCount >= 140) {
            setMaxHeight("max-h-[100px]");
            setFlexDirection("flex-col");
        } else if (charCount >= 120) {
            setMaxHeight("max-h-[60px]");
            setFlexDirection("flex-col");
        } else {
            setMaxHeight("max-h-[40px]");
            setFlexDirection("flex-row");
        }
    };

    useEffect(() => {
        adjustTextareaHeight();
        updateLayout(input.length);
    }, [input]);

    return (
        <div className="relative  ">
            <div className="flex py-size-2 max-md:px-size-1 w-full justify-center">
                <form
                    onSubmit={handleSubmit}
                    className={`w-full border border-input focus-visible:outline-none focus-visible:ring-1 focus-within:outline-none focus-within:ring-1 focus-visible:ring-ring flex justify-center rounded-xl`}
                >
                    <div
                        className={`flex justify-center w-full ${
                            flexDirection === "flex-col" && "pb-2.5"
                        } gap-2 ${flexDirection}`}
                    >
                        <Textarea
                            ref={textareaRef}
                            value={input}
                            onChange={(e) => {
                                // Adapt to match the original handleInputChange interface
                                handleInputChange(
                                    e as unknown as React.ChangeEvent<HTMLInputElement>
                                );
                                updateLayout(e.target.value.length);
                            }}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" && !e.shiftKey) {
                                    e.preventDefault();
                                    handleSubmit(e as unknown as FormEvent<HTMLFormElement>);
                                }
                            }}
                            autoComplete="off"
                            placeholder={status==="error" ? "Something Went Wrong." :"Enter Your Text..."}
                            className={`py-5 px-6 ${maxHeight} rounded-xl bg-transparent text-sm placeholder:text-muted-foreground focus-visible:outline-none shadow-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 w-full flex items-center resize-none text-left border-none focus-visible:ring-0 flex-grow`}
                            disabled={isLoading}
                        />

                        <AnimatePresence>
                            {(
                                isLoading || input.trim().length > 0
                            ) && (
                                <motion.div
                                    variants={buttonVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    className={`${
                                        flexDirection === "flex-row"
                                            ? "flex justify-end items-center w-fit"
                                            : "w-full "
                                    } flex`}
                                >
                                    <Button
                                        type="submit"
                                        variant="ghost"
                                        className={`${
                                            flexDirection === "flex-row"
                                                ? "flex items-center justify-center h-full w-fit"
                                                : "items-end justify-end h-full mx-6 "
                                        } px-3.5 py-3 bg-foreground rounded-xl hover:bg-foreground  
                    ${
                                            isLoading &&
                                            "bg-gradient-to-br from-indigo-400 to-indigo-600 cursor-not-allowed"
                                        } 
                    `}
                                        disabled={isLoading}
                                    >
                                        {isLoading ? (
                                            <div className="flex items-center h-[2rem] w-[2rem] justify-center">
                                                <RoundSpinner size="md" color="white"/>
                                            </div>
                                        ) : (
                                            <Triangle
                                                size={100}
                                                className="h-[2rem] w-[2rem] fill-card"
                                            />
                                        )}
                                    </Button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </form>
            </div>
        </div>
    );
}
