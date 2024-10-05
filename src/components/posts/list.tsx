import Post from "@/components/posts/single";


// css
import "./posts.scss"

type Props={
    posts:PostType[]
}
const PostList = ({posts}:Props) => {
    return (
            <div className="posts">
                { posts?.map(item => <Post key={item.id} {...item}/>)}
            </div>
    )
};

export default PostList;