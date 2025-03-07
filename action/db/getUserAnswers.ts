import {getSupabaseClient} from "@/lib/supabase/serverClient";


export const getUserAnswers = async () => {
    const supabase = await getSupabaseClient()

    const data = await  supabase.from('user_answers').select(`
    *,
    general_questions (*)
    `)
    console.log({data})
    return data



}