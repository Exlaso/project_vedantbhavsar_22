'use server'
import {auth} from "@clerk/nextjs/server";


export async function getToken() {
    const session = await auth()
    return session?.getToken({
        template: 'supabase',
    });
}