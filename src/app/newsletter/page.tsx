import React from 'react';
import NewsLetterSubscribe from "@/components/newsLetterSubscribe";
import AllBlogPost from "@/app/newsletter/components/allBlogPost";

const Page = () => {
    return (
        <div className="projects-page">
            <NewsLetterSubscribe/>
            <AllBlogPost/>
        </div>
    );
};

export default Page;