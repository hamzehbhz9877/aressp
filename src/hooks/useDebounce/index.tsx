import {useEffect} from "react";

export const UseDebouncedEffect = (
    onChange:(data:string)=>void,
    delay:number,
    value:string
) => {
    useEffect(() => {
        const handler = setTimeout(() => onChange(value), delay);
        return () => clearTimeout(handler);
    }, [value]);
};