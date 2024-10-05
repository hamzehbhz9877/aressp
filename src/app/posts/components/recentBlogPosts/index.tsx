import React from 'react';
import Post from "@/components/posts/single";
import Image from "@/assets/images/Image (1).png"

// css
import "./index.scss"

const RecentBlogPosts = () => {
    return (
        <div className="recentBlogPost">
            {new Array(3).fill(0).map((_,index)=>{
                return <Post key={index} image={Image} userId={index} id={index} title={"UX review presentations"}
                      body={'How do you create compelling presentations that wow your colleagues and impress your managers?'}/>
            })}

        </div>
    );
};

export default RecentBlogPosts;