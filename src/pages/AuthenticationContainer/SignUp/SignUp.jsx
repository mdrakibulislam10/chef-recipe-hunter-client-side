import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';

const SignUp = () => {
    const { signUp } = useContext(AuthContext);

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const image = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        // sign up
        signUp(email, password)
            .then(result => {
                console.log(result.user);
                updateUserProfile(result.user, name, image);

                form.reset();
                swal("Sign-up Successful", "Thanks for connect with us", "success");
            })
            .catch(err => {
                // console.log(err.message);
                swal({
                    title: err.message,
                    text: "Please try again",
                    icon: "warning",
                    // buttons: true,
                    dangerMode: true,
                })
            });
    };

    // update user profile
    const updateUserProfile = (user, name, image) => {
        updateProfile(user, {
            displayName: name,
            photoURL: image
        })
            .then(() => {
                // console.log();
            }).catch(err => {
                // console.log(err.message);
            });
    };

    return (
        <div className='custom-width mx-auto my-5 px-2'>
            <Form onSubmit={handleSignUp} className='border border-dark px-2 py-3 rounded'>
                <h2 className='pb-3 text-warning text-center'>Please Sign-up.</h2>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control type="text" name='name' required placeholder="Enter name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicImage">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' required placeholder="Paste your photo url from online" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' required placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' required placeholder="Password" />
                </Form.Group>

                <Button className='w-100' variant="primary" type="submit">
                    Sign-up
                </Button>

                <p className='mt-2 text-center'>Do you have an account? <Link style={{ textDecoration: "none" }} to={"/user/login"}><b>Login.</b></Link></p>
            </Form>
        </div>
    );
};

export default SignUp;