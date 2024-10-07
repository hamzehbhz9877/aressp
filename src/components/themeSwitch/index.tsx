'use client'

import React, {useState} from 'react';
import Image from "next/image";
import Sun from "@/assets/images/sun.svg"
import Moon from "@/assets/images/moon.svg"
import {useTheme} from "next-themes";

// css
import "./index.scss"

const ThemeSwitch = () => {

    const [mount,setMount]=useState(false)

    const {setTheme,theme}=useTheme()

    return (
        <div className="themeSwitch">
            <Image onClick={()=>setTheme('dark')} src={Sun} alt={'sun'}/>
            <Image onClick={()=>setTheme('light')} src={Moon} alt={'moon'}/>
            <div className={`themeSwitch__toggle`}></div>
        </div>
    );
};

export default ThemeSwitch;