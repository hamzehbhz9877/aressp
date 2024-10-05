import React from 'react';
import SimpleInput from "@/components/input/simple";

// css
import "./index.scss"

const NewsLetterSubscribe = () => {
    return (
        <div className="newsLetterSubscribe">
            <span>Newlatters</span>
            <h3>Stories and interviews</h3>
            <p>Subscribe to learn about new product features, the latest in technology, solutions, and updates.</p>
            {/*we can use formik for handle forms in nextjs*/}
            <form className="newsLetterSubscribe__form">
                <div>
                    <SimpleInput type={"email"} required placeholder="Enter your email" className="!w-[min(360px,100%)]"/>
                    <span className="text-left block pt-[6px]">We care about your data in our <a href={"#"} className="underline">privacy policy</a></span>
                </div>
                <button>Subscribe</button>
            </form>
        </div>
    );
};

export default NewsLetterSubscribe;