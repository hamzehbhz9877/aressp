import React from 'react';


// css
import  "../posts/posts.scss"

const Tags = () => {
    return (
        <ul className={"post__tags"}>
            <li className={"post__tagsItem text-[#6941C6] bg-[#F9F5FF]"}>Leadership</li>
            <li className={"post__tagsItem text-[#363F72] bg-[#F8F9FC]"}>Management</li>
        </ul>
    );
};

export default Tags;