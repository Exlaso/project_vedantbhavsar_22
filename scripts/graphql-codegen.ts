import type {CodegenConfig} from "@graphql-codegen/cli";
import dotenv from "dotenv";


dotenv.config();
const config: CodegenConfig = {
    overwrite:true,
    schema: {
        [process.env.NEXT_PUBLIC_SUPABASE_GRAPHQL_URL!]: {
            headers: {
                apiKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
            },

        },
    }, // Supabase GraphQL Endpoint
    documents: ["./lib/queries/*.graphql"], // Queries file
    config: {
        skipTypename: true,
        enumsAsTypes: true,
        scalars: {
            numeric: "number",
        },
    },
    generates: {
        "./lib/generated/": {
            preset: "client",
            config: {
                withHooks:true
            },
            plugins: [
            ],
        },
    },
};

export default config;

