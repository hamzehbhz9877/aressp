import {
    dehydrate,
    HydrationBoundary,
} from '@tanstack/react-query'
import AllPosts from "@/app/components/allPosts";
import {postsOption} from "@/services/post";
import {getQueryClient} from "@/utils/get-query-client";
import React, {Suspense} from "react";
import RecentPosts from "@/app/components/recentPosts";
import PageTitle from "@/components/pageTitle";

export default async function PostsPage() {

    const queryClient = getQueryClient()

    // we can use prefetchInfiniteQuery instead
    void queryClient.prefetchQuery(postsOption(1,''))

    return (
        <div className="posts-page">
            <PageTitle title={'THE BLOG'}/>
            <div className="container py-[30px]">
                <HydrationBoundary state={dehydrate(queryClient)}>
                    <RecentPosts/>
                    <AllPosts/>
                </HydrationBoundary>
            </div>

        </div>
    )
}