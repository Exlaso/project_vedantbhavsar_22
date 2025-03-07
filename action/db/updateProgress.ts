'use server'
import {getSupabaseClient} from "@/lib/supabase/serverClient";
import {auth} from "@clerk/nextjs/server";


export const updateProgress = async (nextIndex: number) => {
    const user_id = await auth()
    const supabase = await getSupabaseClient()
    const data = await  supabase.from('users').update({
        onboarding_progress: nextIndex
    }).eq("user_id",user_id?.userId || "UNKNOWN")
    console.log({data})
    return data.data
}
export const getCurrentProgress = async () => {
    const supabase = await getSupabaseClient()
    const data =  await supabase.from('users').select("onboarding_progress").single()

    const isNoUserRecordFound = data.error?.code === 'PGRST116'
    if (isNoUserRecordFound) {
       const res =  await supabase.from('users').insert({onboarding_progress:0,isOnboard:false})
    }

    return data.data?.onboarding_progress || 0
}