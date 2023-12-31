import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ActiveLink from '../../../ActiveLink/ActiveLink';
import { Image, Nav, Navbar } from 'react-bootstrap';
import { AuthContext } from '../../../providers/AuthProvider/AuthProvider';
import { FaSignOutAlt } from 'react-icons/fa';
import swal from 'sweetalert';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';
import logo from "../../../../public/favicon-chef.png";

const Header = () => {
    const navigate = useNavigate();
    const { user, logOut } = useContext(AuthContext);
    // console.log(user && user);

    // handle log out
    const handleLogOut = () => {
        logOut()
            .then(() => {
                swal("Sign-out successful");
            }).catch((err) => {
                //    console.log(err.message);
            });
    };

    return (
        <header className='mb-4 mt-4'>
            <Navbar bg="" variant="" className='d-flex flex-column flex-md-row justify-content-between mx-1 mx-md-5 align-items-center'>
                <div className='d-flex align-items-center gap-2'>
                    <img onClick={() => navigate("/")} className='' width={"70px"} height={"70px"} style={{ cursor: "pointer" }} src={logo} alt="" />
                    <h1 onClick={() => navigate("/")} className='text-info fw-bold' style={{ cursor: "pointer" }}>Recipe Haven</h1>
                </div>

                <Nav className="d-flex gap-3 gap-md-5 align-items-center justify-content-center fw-bold flex-wrap">
                    {/* replace slash(/) route with /home route for Link Active */}
                    <ActiveLink to={"/home"}>Home</ActiveLink>
                    <ActiveLink to={"/blog"}>Blog</ActiveLink>

                    {
                        user
                            ? <>
                                <Image data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName && user?.displayName} style={{ height: "35px", width: "35px" }} src={user?.photoURL && user?.photoURL} roundedCircle />
                                <Tooltip id="my-tooltip" />

                                <span onClick={handleLogOut} title='Sign-out' style={{ cursor: "pointer" }} className='fw-bold'>
                                    <FaSignOutAlt />
                                </span>
                            </>
                            : <button onClick={() => navigate("/user")} className='btn btn-warning fw-bold'>Login</button>
                    }
                </Nav>
            </Navbar>
        </header>
    );
};

export default Header;