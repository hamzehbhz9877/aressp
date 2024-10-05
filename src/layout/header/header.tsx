'use client'


import React, {useEffect, useState} from 'react';
import Image from "next/image";
import MenuDark from "@/assets/images/menu.svg"
import Menu from "@/assets/images/menuLight.svg"
import CloseDark from "@/assets/images/close.svg"
import Close from "@/assets/images/closeLight.svg"
import {useTheme} from "next-themes";

// css
import "./header.scss"
import {usePathname} from "next/navigation";
import HeaderRight from "@/layout/header/headerRight";

const headerItems = [{
    text: 'Blog',
    href: '/'
}, {
    text: 'Projects',
    href: '/projects'
}, {
    text: 'About',
    href: '/about'
}, {
    text: 'Newsletter',
    href: '/newsletter'
}]

const Header = () => {
    const {theme} = useTheme()
    const [isOpen, setIsOpen] = useState(false as boolean)
    const handleMenu = () => setIsOpen(!isOpen)

    const [mount,setMount]=useState(false)

    useEffect(()=>setMount(true),[])

    return (
        <div className="header">
            <span className="header__left">Hamzeh Bahrami</span>
            {mount?
            <Image onClick={handleMenu} src={theme==='light'?Menu:MenuDark}
                                    className="block md:hidden cursor-pointer" alt={'hamburgerMenu'}/>:""}


           <HeaderRight headerItems={headerItems}/>

            <div className={`header__mobile ${isOpen ? "header__mobile--active" : ""}`}>
                <span className="header__left">Hamzeh Bahrami</span>
                <HeaderRight headerItems={headerItems} isOpen={isOpen} setIsOpen={setIsOpen}/>
                <Image className="cursor-pointer header__mobile-close" width={32} height={32} onClick={handleMenu} src={
                    theme && theme === 'dark' ? CloseDark : Close} alt={'close'}/>
            </div>
        </div>
    );
};

export default Header;