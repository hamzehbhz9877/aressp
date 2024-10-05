import {queryOptions} from '@tanstack/react-query'
import {getPosts, getRecentPosts, getRelatedPostComments, getSinglePost} from "@/services/shortLink";

export const postsOption =(page:number,search:string='') =>queryOptions({
    queryKey: ['posts',page,search],
    queryFn: async () => await getPosts(page,search),
})

export const recentPostOption = queryOptions({
    queryKey: ['recentPosts'],
    queryFn: async () => await getRecentPosts(),
})

export const commentsOption = (id:number) => queryOptions({
    queryKey: ['post-comments', id],
    queryFn: async () => await getRelatedPostComments(id),
})


export const postOption = (id:number) => queryOptions({
    queryKey: ['post', id],
    queryFn: async () => await getSinglePost(id),
})
