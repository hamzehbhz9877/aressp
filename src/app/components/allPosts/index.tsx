'use client'

import React, {useEffect, useRef, useState} from 'react';
import Search from "@/components/search";
import PostList from "@/components/posts/list";
import {useSuspenseQuery} from "@tanstack/react-query";
import {postsOption} from "@/services/post";
import {getQueryClient} from "@/utils/get-query-client";
import PostSkeletonCol from "@/components/posts/skeleton/col";
import {getPosts} from "@/services/shortLink";
import Paginate from "@/components/pagination";
import {MakePagination} from "@/hooks/usePagination/makePagination";
import {_scrollTo} from "@/utils/helpers-client";



const AllPosts = () => {

    const queryClient = getQueryClient()

    const [page,setPage]=useState(1)

    const goTo=(page:number)=>setPage(page)

    const [search, setSearch] = useState('')


    const { data ,isError,isRefetching} = useSuspenseQuery(postsOption(page,search))



    const handleSearchPosts = (searchValue: string) => {
        setSearch(searchValue)
        if (searchValue==='')
            setPage(1)
    }



    const makePagination = MakePagination(page, data.pages, goTo);






    // we can prefetch next page

    React.useEffect(() => {
        if (data.pages>page) {
            queryClient.prefetchQuery({
                queryKey: ['projects', page + 1],
                queryFn: () => getPosts(page + 1),
            })
        }
    }, [data.posts, queryClient])

    return (
        <div className="allPosts my-[30px]" id="posts">
            <div className="flex justify-between items-center gap-3 flex-wrap mb-[32px]">
               <h2  className="text-c1 dark:text-white font-semibold text-[24px]">All
                    blog posts</h2>
                <Search delay={500} onChange={(searchValue) => handleSearchPosts(searchValue)}
                        placeholder={"search ..."}/>
            </div>
            {isError ? <div>fetch posts failed</div> :
                isRefetching ? <div className="posts">{new Array(6).fill(0).map((_, index: number) =>
                    <PostSkeletonCol key={index}/>)}</div> : data.posts?.length > 0 ? <PostList posts={data.posts}/> : search!=='' && data.posts?.length==0? <strong className="dark:text-white">No Result</strong>:""}

            <div className={"mt-[50px]"}>
                <Paginate goTo={goTo} currentPage={page} nextPage={()=>setPage(page+1)} prevPage={()=>setPage(page-1)}  pages={makePagination} total={data.pages}/>
            </div>
        </div>
    );
};

export default AllPosts;