"use client"
import {useClerk} from "@clerk/nextjs";
import {useRouter} from "next/navigation";


const Page = () => {
    const router = useRouter();
     useClerk().signOut()
}
export default Page