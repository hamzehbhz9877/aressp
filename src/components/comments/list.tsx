'use client'

import React from 'react';
import {useParams} from "next/navigation";


import Comment from "@/components/comments/single";
// css
import "../posts/posts.scss"
import {useQuery, useSuspenseQuery} from "@tanstack/react-query";
import {AxiosError} from "axios";
import PostDetailsSkeletonUi from "@/components/posts/details/postDetailsSkeletonUi";
import CommentSkeletonUi from "@/components/comments/commentSkeletonUi";
import {commentsOption, postOption} from "@/services/post";

const PostDetailsPage = () => {


    const params = useParams()


    const { data ,isError,isFetching} = useSuspenseQuery(commentsOption(+params.id))


    if (isError)
        return <div>fetch comments failed</div>


    return (
        <div className="comments my-[50px]">
            <h2 className="mx-auto dark:text-white text-c1 font-semibold text-[24px] ">Comments</h2>
            {isFetching ? new Array(4).fill(0).map((_, index: number) => <CommentSkeletonUi key={index}/>) :
                data?.map((item:CommentType) => <Comment key={item.id} {...item}/>)}
        </div>
    );
};

export default PostDetailsPage;