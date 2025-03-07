'use client'
import {Database} from "@/types/supabase";
import {createBrowserClient} from "@supabase/ssr";
import {useAuth} from "@clerk/nextjs";


export function getSupabaseClient() {

    const session = useAuth()

    // add custom function to supabase.uploadToPdf




    return createBrowserClient<Database>(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
            global: {
                // Get the custom Supabase token from Clerk
                fetch: async (url, options :Record<any, any> = {}) => {
                    const clerkToken = await session?.getToken({
                        template: 'supabase',
                    })
                    // Insert the Clerk Supabase token into the headers
                    const headers = new Headers(options?.headers)
                    headers.set('Authorization', `Bearer ${clerkToken}`)
                    return fetch(url, {
                        ...options,
                        headers,
                    })
                },
            },
        },
    )
}


