import React from 'react';
import Link from "next/link";
import ThemeSwitch from "@/components/themeSwith";
import {usePathname} from "next/navigation";
import IsActiveLink from "../../hooks/useActiveLink";
import UseActiveLink from "../../hooks/useActiveLink";


type Props={
    headerItems:Array<{text:string,href:string}>
    isOpen?:boolean
    setIsOpen?:(isOpen:boolean)=>void
}
const HeaderRight = ({headerItems,isOpen,setIsOpen}:Props) => {

    const {isActive}=UseActiveLink()
    return (
        <ul className="header__right">
            {headerItems.map(item => <Link
                onClick={isOpen?setIsOpen?()=>setIsOpen(!isOpen):()=>{}:()=>{}}
                className={`header__right-item ${isActive(item.href) ? 'header__right-item--active' : ""}`}
                 key={item.text}
                href={item.href}>{item.text}</Link>)}
            <li><ThemeSwitch/></li>
        </ul>
    );
};

export default HeaderRight;