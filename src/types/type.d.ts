
type Api<T> = {
    data: T
}


type PostType={
    userId:number
    id:number
    title:string
    body:string
    image?:any
}

type CommentType={
    postId:number
    id:number
    name:string
    email:string
    body:string
}