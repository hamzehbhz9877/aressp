'use client'

import React from 'react';
import {useParams} from "next/navigation";
import PostImage from "@/assets/images/post.png"
import Image from "next/image";


// css
import "../posts.scss"
import PostDetailsSkeletonUi from "@/components/posts/details/postDetailsSkeletonUi";
import {useQuery, useSuspenseQuery} from "@tanstack/react-query";
import Tags from "@/components/tags/tags";
import {AxiosError} from "axios";
import {postOption, postsOption} from "@/services/post";

const PostDetails = () => {


    const params=useParams()

    const { data ,isError,isFetching} = useSuspenseQuery(postOption(+params.id))


    if (isFetching)
        return <div className="postDetail"><PostDetailsSkeletonUi/></div>

    if (isError)
        return <div>fetch blog details failed</div>

    return (
        <div className="post postDetail">
            <span className={"post__author"}>Alec Whitten • 1 Jan 2023</span>
            <div className="post__title">
                <h2>{data?data?.title:""}</h2>
            </div>
            <Image className="w-full" src={PostImage} alt={data?.title as string} width={778} height={426}/>
            <p className={"post__description"}>{data?data?.body:""}</p>
            <Tags/>
        </div>
    );
};

export default PostDetails;