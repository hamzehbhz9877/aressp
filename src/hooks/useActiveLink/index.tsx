'use client'

import {usePathname} from "next/navigation";

const UseActiveLink = () => {
    const pathname = usePathname();
    const isActive = (path:string) => {
        return path === pathname || (path==="/" && pathname.startsWith("/posts"))
    };

    return {isActive}
};

export default UseActiveLink;