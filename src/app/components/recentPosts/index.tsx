'use client'

import React from 'react';
import {useSuspenseQuery} from "@tanstack/react-query";
import {recentPostOption} from "@/services/post";
import Post from "@/components/posts/single";
import PostRow from "@/components/posts/singleRow";

import Image1 from "@/assets/images/Image (1).png"
import Image2 from "@/assets/images/Image (2).png"
import Image3 from "@/assets/images/Image (3).png"
import Image4 from "@/assets/images/Image (4).png"

// css
import "./index.scss"
import RecentPostSkeletonUi from "@/app/components/recentPosts/skeletonUi";

const RecentPosts = () => {
    const {data, isError, isFetching} = useSuspenseQuery(recentPostOption)

    return (
        <div className="recentPosts">

            <div className="flex justify-between items-center gap-3 flex-wrap mb-[32px]">
                <h2 className="text-c1 font-semibold text-[24px] dark:text-white">Recent posts</h2>
            </div>
            {isError ? <div>fetch posts failed</div> :
                isFetching ? <RecentPostSkeletonUi/> :
                    <div>
                        <div className="recentPosts__top">
                            <div className="recentPosts__top-left">
                                <Post image={Image3} userId={data.userId} id={data.id} title={data.title} body={data.body}/>
                            </div>
                            <div className="recentPosts__top-right">
                                <PostRow image={Image2} userId={data.userId} id={data.id} title={data.title} body={data.body}/>
                                <PostRow image={Image1} userId={data.userId} id={data.id} title={data.title} body={data.body}/>
                            </div>
                        </div>
                        <div className="recentPosts__bottom">
                            <PostRow image={Image4} userId={data.userId} id={data.id} title={data.title} body={data.body}/>
                        </div>
                    </div>

            }
        </div>
    );
};

export default RecentPosts;