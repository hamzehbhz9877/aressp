import React from 'react';


type Props = {
    title: string
}
const PageTitle = ({title}: Props) => {
    return (
        <div className="page-title text-center container my-[30px]">
            <hr className="text-c1  2px"/>
            <h1 className="text-[53px] sm:text-[64px] md:text-[134px] lg:text-[160px] xl:text-[221px] text-c1 dark:text-white font-bold">
                {title}</h1>
            <hr className="text-c1 2px"/>
        </div>
    );
};

export default PageTitle;