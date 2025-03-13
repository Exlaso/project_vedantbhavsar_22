import App from "@/lib/steam-vc";


const Page = () => {
    const STREAM_API_KEY = process.env.STREAM_API_KEY
    const STREAM_TOKEN = process.env.STREAM_TOKEN
    const STREAM_USER_ID = process.env.STREAM_USER_ID
    const STREAM_CALL_ID = process.env.STREAM_CALL_ID
    if ((
        !STREAM_API_KEY ||
        !STREAM_TOKEN ||
        !STREAM_USER_ID ||
        !STREAM_CALL_ID
    )) {
        throw new Error("You must specify a valid API Key");
    }
    return <div>
        {/*<App*/}
        {/*    STREAM_API_KEY={STREAM_API_KEY}*/}
        {/*    STREAM_TOKEN={STREAM_TOKEN}*/}
        {/*    STREAM_USER_ID={STREAM_USER_ID}*/}
        {/*    STREAM_CALL_ID={STREAM_CALL_ID}*/}
        {/*/>*/}
    </div>
}
export default Page;