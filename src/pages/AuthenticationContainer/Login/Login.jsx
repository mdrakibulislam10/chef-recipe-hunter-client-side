import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import "./Login.css";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider/AuthProvider';
import swal from 'sweetalert';

const Login = () => {
    const { signIn, googleSignIn, gitHubSignIn } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    // console.log(location);

    const from = location?.state?.from?.pathname || "/";

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        // sign in
        signIn(email, password)
            .then(result => {
                // console.log(result.user);
                form.reset();
                swal("Login Successful", "You can explore recipe page now", "success");

                // redirect to right page
                navigate(from, { replace: true });
            })
            .catch(err => {
                // console.log(err.message);
                swal({
                    title: err.message,
                    text: "Please try again or create a new account",
                    icon: "warning",
                    // buttons: true,
                    dangerMode: true,
                })
            });
    };

    // google sign in handler
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                // console.log(result.user);
                swal("Login Successful", "You can explore recipe page now", "success");

                // redirect to right page
                navigate(from, { replace: true });
            })
            .catch(err => {
                // console.log(err.message);
                swal({
                    title: err.message,
                    text: "Please try again or create a new account",
                    icon: "warning",
                    // buttons: true,
                    dangerMode: true,
                })
            });
    };

    // github sign in handler
    const handleGitHubSignIn = () => {
        gitHubSignIn()
            .then(result => {
                // console.log(result.user);
                swal("Login Successful", "You can explore recipe page now", "success");

                // redirect to right page
                navigate(from, { replace: true });
            })
            .catch(err => {
                // console.log(err.message);
                swal({
                    title: err.message,
                    text: "Please try again or create a new account",
                    icon: "warning",
                    // buttons: true,
                    dangerMode: true,
                })
            });
    };

    return (
        <section className='px-2'>
            <div className='custom-width mx-auto my-5 border border-dark px-2 py-3 rounded'>
                <Form onSubmit={handleLogin} className=''>
                    <h2 className='pb-3 text-warning text-center'>Please Login.</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' required placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' required placeholder="Password" />
                    </Form.Group>

                    <Button className='w-100' variant="primary" type="submit">
                        Login
                    </Button>

                    <p className='mb-4 mt-3 text-center'>You don't have an account? <Link style={{ textDecoration: "none" }} to={"/user/sign-up"}><b>Please Sign-up.</b></Link></p>
                </Form>

                <hr className='w-75 mx-auto' />
                <p className='text-center'>or</p>
                {/* <hr className='w-75 mx-auto' /> */}

                <div>
                    <Button onClick={handleGoogleSignIn} className='w-100 mb-3' variant="outline-primary">Google Sign-in</Button>
                    <Button onClick={handleGitHubSignIn} className='w-100' variant="outline-primary">GitHub Sign-in</Button>
                </div>
            </div>
        </section>
    );
};

export default Login;