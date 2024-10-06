
import {instant} from "./httpservice";

// posts

export const getRecentPosts = async () => {
    const data = await instant.get("/posts?_start=0&_limit=1")
    return data.data[0]
}
export const getPosts = async (page:number, search:string = '') => {
    // simulate pagination backend
    const queryCount = await instant.get(`/posts?title_like=${search}`)
    const skip = (page - 1) * 6

    const pageCount = Math.ceil(queryCount.data.length / 6)


    const data = await instant.get(`/posts?_page=${page}&_start=${skip}&_limit=6&title_like=${search}`)

    return {  posts:data.data,pages:pageCount}
}
export const getSinglePost = async (id: number) => {
    const data = await instant.get(`/posts/${id}`)
    return data.data
}
export const getRelatedPostComments = async (id: number) => {
    // await new Promise(resolve => setTimeout(resolve, 3000)); // 3 sec
    const data = await instant.get(`/posts/${id}/comments`)
    return data.data
}
