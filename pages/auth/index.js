/** React core **/
import {useEffect} from "react";

/** Next core **/
import { useRouter } from "next/router";

export default function Auth() {
    const router = useRouter();

    useEffect(() => {
        router.push('/auth/login');
    }, [router]);

    return null;
}
