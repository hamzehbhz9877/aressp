import React from 'react';
import Post from "@/components/posts/single";
import Image3 from "@/assets/images/Image (3).png";
import PostRow from "@/components/posts/singleRow";
import Image2 from "@/assets/images/Image (2).png";
import Image1 from "@/assets/images/Image (1).png";
import Image4 from "@/assets/images/Image (4).png";
import Image from "next/image";
import PostImage from "@/assets/images/post.png";
import TitleIcon from "@/assets/images/Icon wrap.png";
import Tags from "@/components/tags/tags";
import PostSkeletonCol from "@/components/posts/skeleton/col";
import PostSkeletonRow from "@/components/posts/skeleton/row";


const RecentPostSkeletonUi = () => {
    return (
        <div>
            <div className="recentPosts__top">
                <div className="recentPosts__top-left">
                    <PostSkeletonCol/>
                </div>
                <div className="recentPosts__top-right">
                    <PostSkeletonRow/>
                    <PostSkeletonRow/>
                </div>
            </div>
            <div className="recentPosts__bottom">
                <PostSkeletonRow/>
            </div>
        </div>
    );
};

export default RecentPostSkeletonUi;