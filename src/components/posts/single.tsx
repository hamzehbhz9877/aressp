'use client'

import React from 'react';
import Link from "next/link";
import PostImage from "@/assets/images/post.png"
import TitleIcon from "@/assets/images/arrow-up-right.svg"
import TitleIconDark from "@/assets/images/postIconDark.svg"
import Image from "next/image";

import Tags from "@/components/tags/tags";
// css
import  "./posts.scss"
import {useTheme} from "next-themes";



const Post = ({id, title, body,image}: PostType) => {
    const {theme}=useTheme()
    return (
        <Link className={"post"} href={`/posts/${id}`}>
            <Image className="w-full"  src={image??PostImage} alt={title} width={384} height={240}/>
            <span className={"post__author"}>Alec Whitten • 1 Jan 2023</span>
            <div className="post__title">
                <h2>{title.substring(0, 20)}</h2>
                <Image className="w-auto" width={24} height={24} src={theme==='dark'?TitleIconDark: TitleIcon} alt={'TitleIcon'}/>
            </div>
            <p className={"post__description"}>{body.substring(0, 100)}</p>
            <div className="flex-grow"/>
            <Tags/>
        </Link>
    );
};

export default Post;