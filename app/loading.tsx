import {Loader2} from "lucide-react";


const Loading = () => {
    return <div className={"bg-black/20 flex h-screen justify-center items-center "}>
        <Loader2 className={"animate-spin"} />
    </div>
}
export default Loading;