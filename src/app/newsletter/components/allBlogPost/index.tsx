import React from 'react';

// css
import "./index.scss"
import PostList from "@/components/posts/list";


const posts=[
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
]

const AllBlogPost = () => {
    return (
        <div className="allBlogPost my-[30px] container">
            <div className="flex justify-between items-center gap-3 flex-wrap mb-[32px]">
                <h2 className="text-c1 font-semibold text-[24px] dark:text-white">All blog posts</h2>
            </div>
            <PostList posts={posts}/>
        </div>
    );
};

export default AllBlogPost;