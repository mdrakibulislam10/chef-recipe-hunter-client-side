import React from 'react';

const Blog = () => {
    return (
        <div className='container mx-auto px-md-5 my-5'>
            <article className='mb-4'>
                <h4 className='text-primary'>1. Tell us the differences between uncontrolled and controlled components.</h4>
                <p>* Controlled components provide more control and flexibility over form inputs. And uncontrolled components offer simplicity and rely on the browser's default behavior for form management. </p>
            </article>
            <article className='mb-4'>
                <h4 className='text-primary'>2. How to validate React props using PropTypes.</h4>
                <p>* PropTypes are used to type checking on React component props, provide warnings if the passed props do not match the defined types.. PropTypes is used for props validation. There are some validators of the PropTypes. Such as: PropTypes.number, PropTypes.string, PropTypes.boolean, etc.</p>
            </article>
            <article className='mb-4'>
                <h4 className='text-primary'>3. Tell us the difference between nodejs and express js.</h4>
                <p>* Node.js is javascript package. Node.js is allows you run JavaScript code on the server-side. And Express.js is frameworks of Node.js. Express.js used for making JSON data and send response from the server.</p>
            </article>
            <article className='mb-4'>
                <h4 className='text-primary'>4. What is a custom hook, and why will you create a custom hook?</h4>
                <p>* If you use a hook made by yourself, it is called a custom hook. Custom hook makes code cleaner and reduce code repetition. The same code can be written once and used again and again. </p>
            </article>
        </div>
    );
};

export default Blog;