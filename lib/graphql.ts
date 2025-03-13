import {GraphQLClient} from "graphql-request";
import {auth} from "@clerk/nextjs/server";
import {getToken} from "@/action/clerk/getToken";


const graphqlClient = new GraphQLClient(
    process.env.NEXT_PUBLIC_SUPABASE_GRAPHQL_URL || "",
    {
        headers: {
            apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
        },

        fetch: async (url, options) => {
            const clerkToken = await getToken()
            // Insert the Clerk Supabase token into the headers
            const headers = new Headers(options?.headers)
            headers.set('Authorization', `Bearer ${clerkToken}`)
            const headerObj = Object.fromEntries(headers.entries());
            return fetch(url, {
                ...options,
                headers:headerObj,
            })
        },
    },
);


export default graphqlClient;
