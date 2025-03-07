"use server";
import {createServerClient} from "@supabase/ssr";
import {cookies} from "next/headers";
import {Database} from "@/types/supabase";
import {auth} from "@clerk/nextjs/server";


export async function getSupabaseClient() {
    const cookieStore = await cookies();


    const session = await auth();

    return createServerClient<Database>(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
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
            cookies: {
                getAll: cookieStore.getAll,
                setAll(cookiesToSet) {
                    try {
                        cookiesToSet.forEach(({name, value, options}) =>
                            cookieStore.set(name, value, options),
                        );
                    } catch {
                        // The `setAll` method was called from a Server Component.
                        // This can be ignored if you have middleware refreshing
                        // user sessions.
                    }
                },
            },
        },
    );
}