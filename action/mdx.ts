'use server'
import {compile, run} from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";


export async function renderMDX(mdxString: string) {
    const code = await compile(mdxString, {outputFormat: "function-body"});
    const {default: Content} = await run(code, runtime);
    return Content;
}