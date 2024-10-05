import React from 'react';
import PageTitle from "@/components/pageTitle";
import About from "@/app/about/components/about";

const Page = () => {
    return (
        <div className="abput-page">
            <PageTitle title={'HAMZEH'}/>
            <About/>
        </div>
    );
};

export default Page;