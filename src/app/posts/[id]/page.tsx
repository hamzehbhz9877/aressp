import React from 'react';
import {dehydrate, HydrationBoundary} from "@tanstack/react-query";
import PostDetails from "@/components/posts/details/postDetails";
import PostComments from "@/components/comments/list";
import {getQueryClient} from "@/utils/get-query-client";
import {commentsOption, postOption} from "@/services/post";
import RecentBlogPosts from "@/app/posts/components/recentBlogPosts";
import NewsLetterSubscribe from "@/components/newsLetterSubscribe";

// export const revalidate = 10
// export const dynamic='force-static'

type Props = {
    params: {
        id: string;
    };
};

const Page = async ({params: {id}}: Props) => {


    const queryClient = getQueryClient()

    void queryClient.prefetchQuery(postOption(+id))

    void queryClient.prefetchQuery(commentsOption(+id))


    return (
        <div className="postDetails-page">
            <div className="container flex gap-[32px] mt-[30px]">
                <RecentBlogPosts/>
                <div>
                    <HydrationBoundary state={dehydrate(queryClient)}>
                        <PostDetails/>
                        <PostComments/>
                    </HydrationBoundary>
                    <NewsLetterSubscribe/>
                </div>

            </div>
        </div>
    );
};

export default Page;