import React from 'react';
import PageTitle from "@/components/pageTitle";
import Projects from "./components/projects";

const Page = () => {
    return (
        <div className="projects-page">
            <PageTitle title={'PROJECTS'}/>
            <Projects/>
        </div>
    );
};

export default Page;