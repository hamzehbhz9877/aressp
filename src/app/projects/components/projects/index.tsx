import React from 'react';
import Image from "@/assets/images/Image (5).png"
import Image2 from "@/assets/images/Image.svg"

import Post from "@/components/posts/single";

const Projects = () => {
    return (
        <div className="listProjects my-[30px] container">
            <div className="flex justify-between items-center gap-3 flex-wrap mb-[32px]">
                <h2 className="text-c1 font-semibold text-[24px] dark:text-white">Recent Project</h2>
            </div>
            <div className="flex flex-col gap-[32px]">
                <div className="flex flex-col md:flex-row  gap-[32px]">
                    <Post image={Image} userId={1} id={1} title={'User Experience Design Dashboard Hotel Management'}
                          body={'n the context of user experience (UX) design, a hotel management dashboard should be designed with the needs and goals of the hotel staff in mind. This means creating a clear and intuitive interface that allows staff to easily access and use the various tools and features of the dashboard.'}/>
                    <Post image={Image} userId={1} id={1} title={'User Experience Design Dashboard Hotel Management'}
                          body={'n the context of user experience (UX) design, a hotel management dashboard should be designed with the needs and goals of the hotel staff in mind. This means creating a clear and intuitive interface that allows staff to easily access and use the various tools and features of the dashboard.'}/>
                </div>

                <Post image={Image2} userId={1} id={1} title={'User Experience Design Dashboard Hotel Management'}
                      body={'n the context of user experience (UX) design, a hotel management dashboard should be designed with the needs and goals of the hotel staff in mind. This means creating a clear and intuitive interface that allows staff to easily access and use the various tools and features of the dashboard.'}/>
                <div className="flex flex-col md:flex-row  gap-[32px]">
                    <Post image={Image} userId={1} id={1} title={'User Experience Design Dashboard Hotel Management'}
                          body={'n the context of user experience (UX) design, a hotel management dashboard should be designed with the needs and goals of the hotel staff in mind. This means creating a clear and intuitive interface that allows staff to easily access and use the various tools and features of the dashboard.'}/>
                    <Post image={Image} userId={1} id={1} title={'User Experience Design Dashboard Hotel Management'}
                          body={'n the context of user experience (UX) design, a hotel management dashboard should be designed with the needs and goals of the hotel staff in mind. This means creating a clear and intuitive interface that allows staff to easily access and use the various tools and features of the dashboard.'}/>
                </div>
            </div>


        </div>
    );
};

export default Projects;