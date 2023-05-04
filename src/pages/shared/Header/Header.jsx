import React from 'react';
import { useNavigate } from 'react-router-dom';
import ActiveLink from '../../../ActiveLink/ActiveLink';
import { Image, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    const navigate = useNavigate();

    return (
        <header>
            <Navbar bg="" variant="" className='d-flex flex-column flex-md-row justify-content-around align-items-center'>
                <h1 onClick={() => navigate("/")} className='text-info fw-bold' style={{ cursor: "pointer" }}>Recipe Haven</h1>

                <Nav className="d-flex gap-3 gap-md-5 align-items-center justify-content-center fw-bold flex-wrap">
                    <ActiveLink to={"/"}>Home</ActiveLink>
                    <ActiveLink to={"/blog"}>Blog</ActiveLink>

                    <Image src="holder.js/171x180" roundedCircle />
                    <button onClick={() => navigate("/user")} className='btn btn-warning fw-bold'>Login</button>
                </Nav>
            </Navbar>
        </header>
    );
};

export default Header;