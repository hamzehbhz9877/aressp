import React from 'react';
import Link from "next/link";
import PostImage from "@/assets/images/post.png"
import TitleIcon from "@/assets/images/Icon wrap.png"
import Image from "next/image";
import Tags from "@/components/tags/tags";

// css
import  "./posts.scss"



const PostRow = ({id, title, body,image}: PostType) => {
    return (
        <Link className={"post row"} href={`/posts/${id}`}>
            <Image className="post__image w-full" src={image??PostImage} alt={title} width={384} height={240}/>
            <div className="post__content">
                <span className={"post__author"}>Alec Whitten • 1 Jan 2023</span>
                <div className="post__title">
                    <h2>{title.substring(0, 20)}</h2>
                    <Image className="w-auto" width={24} height={24} src={TitleIcon} alt={'TitleIcon'}/>
                </div>
                <p className={"post__description"}>{body.substring(0, 60)}</p>
                <Tags/>
            </div>
        </Link>
    );
};

export default PostRow;