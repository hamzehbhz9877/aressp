import React from 'react';
import Link from "next/link";

// css
import "./footer.scss"

const footerItems=['© 2023','Twitter','LinkedIn','Email','RSS feed','Add to Feedly']
const Footer = () => {
    return (
        <div className="footer container">
            <ul className="footer__social">
                {footerItems.map(item => <Link className="footer__social-item" key={item} href={"/"}>{item}</Link>)}
            </ul>
        </div>
    );
};

export default Footer;