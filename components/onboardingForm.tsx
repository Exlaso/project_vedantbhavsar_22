"use client"
import {CardContent} from "@/components/ui/card";
import {Tables} from "@/types/supabase";
import {useMutation, useQuery} from "@tanstack/react-query";
import {getCurrentProgress, updateProgress} from "@/action/db/updateProgress";
import {AutoForm, fieldConfig} from "@/components/ui/autoform";
import {ZodProvider} from "@autoform/zod";
import {z} from "zod";
import {useState} from "react";
import {Button} from "@/components/ui/button";
import {Loader2} from "lucide-react";
import {getSupabaseClient} from "@/lib/supabase/client";
import {useRouter} from "next/navigation";


function createZodEnum<T extends string[]>(values: T) {
    // @ts-ignore
    const e = z.enum(values).optional();
    console.log({e})
    return e;
}

export function OnboardingForm({questions, currentIDX}: {
    questions: Tables<'general_questions'>[],
    currentIDX: number
}) {
    const router = useRouter();
    const [index, setIndex] = useState<number>(currentIDX);
    const supabase = getSupabaseClient()
    const {mutate, isPending, error} = useMutation({
        mutationFn: async (values: Record<string, string | undefined>) => {
            const main_ans = Object.values(values)
            const data = await supabase.from('user_answers').upsert({
                answer: main_ans?.at(0),
                follow_up_answer: main_ans?.at(1),
                question_id: question?.id || 0
            });
            if (data.error) throw data.error;
            return data.data
        },
        onSuccess: async () => {
            const nextIndex = (
                index || 0
            ) + 1
            const isLast = nextIndex >= questions.length
            updateProgress(nextIndex, isLast).then()

            if (isLast) {
                router.push("/dashboard")
            } else {
                setIndex(nextIndex)
            }

        }
    })
    const [choosen_answer, setChoosen_answer] = useState<string>("");
    const question = questions.at(index || 0)
    if (!question) {
        return <div>
            Something went wrong.
        </div>
    }
    const shouldFollowup = question?.follow_up_conditions?.includes(question.options.indexOf(choosen_answer)) || false
    console.log({shouldFollowup, question})
    const schema = new ZodProvider(z.object({
        [`${question.id}: ${question?.question}`]: createZodEnum(question?.options || []),
        ...(
            shouldFollowup ? {[`${question.follow_up_question}`]: z.string().optional().superRefine(fieldConfig({fieldType: "textArea"}))} : {}
        )
    }))
    return <CardContent className="">
        <div className={"flex "}><AutoForm
            onSubmit={values => {
                mutate(values)
            }}
            schema={schema} onFormInit={form => {
            form.watch(values => {
                setChoosen_answer(values[`${question.id}: ${question?.question}`] || "0");
            })
            form.formState.isDirty
        }}

        >
            <Button disabled={isPending} type="submit" className={"flex justify-center items-center w-full gap-2"}>
                {isPending && <Loader2 className={"animate-spin"}/>} Submit
            </Button>
            <span>{error?.message}</span>
        </AutoForm>
        </div>
    </CardContent>;
}