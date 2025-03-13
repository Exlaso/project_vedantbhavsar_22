'use server'
import {StreamCall, StreamVideo, StreamVideoClient} from '@stream-io/video-react-sdk';
import {MyUILayout} from "@/lib/my-u-i-layout";
import {useUser} from "@clerk/nextjs";
import { StreamVideoServerClient } from "@stream-io/video-node";




// set up the user object


export default async function App({
                                      STREAM_API_KEY,
                                      STREAM_TOKEN,
                                      STREAM_USER_ID,
                                      STREAM_CALL_ID,
                                  }:{
    STREAM_API_KEY:string;
    STREAM_TOKEN:string;
    STREAM_USER_ID:string;
    STREAM_CALL_ID:string;
}) {

    const user = useUser().user



    const client = new StreamVideoClient({
        apiKey: STREAM_API_KEY, user: {
            name: user?.fullName || "UNKNOWN",
            image: user?.imageUrl || "/",
            type: "authenticated",
            id: user?.id || "UNKNOWN",
        }, token: streamServerClient.createToken(userId)
    });
    const call = client.call('default', streamServerClient.createToken(userId));
    await call.join({create: true});
    return (
        <StreamVideo client={client}>
            <StreamCall call={call}>
                <MyUILayout/>
            </StreamCall>
        </StreamVideo>
    );
}

