import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="d-flex flex-column flex-md-row text-center text-md-start g-3 g-md-0 p-3 justify-content-around p-10 bg-secondary text-white">
            <div className='d-flex flex-column'>
                <h4 className="my-3"><b>SERVICES</b></h4>
                <span className="">Hire chef</span>
                <span className="">Daily recipe post</span>
                <span className="">Book recommendation</span>
                <span className="">Recipe tutorial</span>
            </div>
            <div className='d-flex flex-column'>
                <h4 className="my-3"><b>CONTACT</b></h4>
                <span className="">Cell: 019........</span>
                <span className="">GitHub: <a className='text-warning' style={{ textDecoration: "none" }} href="https://github.com/mdrakibulislam10" target='_blank'>Visit GitHub</a></span>
                <span className="">Twitter: <a className='text-warning' style={{ textDecoration: "none" }} href="https://twitter.com/Rokib74664686" target='_blank'>Visit Twitter</a></span>
            </div>
            <div className='d-flex flex-column'>
                <h4 className="my-3"><b>EXPLORE</b></h4>
                <Link className='text-warning' style={{ textDecoration: "none" }} to={"/"}>Go Homepage</Link>
                <Link className='text-warning' style={{ textDecoration: "none" }} to={"/blog"}>Go Blog</Link>
            </div>
        </footer>
    );
};

export default Footer;