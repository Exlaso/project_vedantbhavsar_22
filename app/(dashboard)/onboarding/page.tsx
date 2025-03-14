import {Card, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {getSupabaseClient} from "@/lib/supabase/serverClient";
import {OnboardingForm} from "@/components/onboardingForm";
import {getCurrentProgress} from "@/action/db/updateProgress";
import {redirect} from "next/navigation";
import {auth} from "@clerk/nextjs/server";


const onBoardingPage = async () => {

    const supabase= await  getSupabaseClient();
    const questionsSnapshot = await supabase.from("general_questions").select("*").order('id',{ascending:true});
    if (questionsSnapshot.error) {
         return <div>
             Something went wrong...
         </div>
    }
    const questions  = questionsSnapshot.data;
    const initialProgress = await getCurrentProgress()
    if (questions.length <= initialProgress) {
        redirect("/dashboard")
    }


    return <div className={"h-screen w-full container  mx-auto justify-center items-center flex"}>
        <Card>
            <CardHeader>
                <CardTitle>Welcome to the Onboarding</CardTitle>
                <CardDescription className="text-muted-foreground">Let's get you set up with everything you need to get
                    started.</CardDescription>
            </CardHeader>
            <OnboardingForm questions={questions} currentIDX={initialProgress}/>
        </Card>
    </div>
}
export default onBoardingPage;