import React from 'react';
import Banner from '../Banner/Banner';
import Chef from '../Chef/Chef';
import { useLoaderData } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import RecipeTutorials from '../RecipeTutorialsContainer/RecipeTutorials/RecipeTutorials';

const Home = () => {
    const chefs = useLoaderData();
    // console.log(chefs);

    return (
        <>
            <Banner />

            <div id='chef' className='container my-5'>
                <h2 className='text-info border-start border-4 border-secondary ps-1'>Chef's Corner</h2>
                <p>See chef's profiles and visit their recipes</p>
                <Row xs={1} md={3} lg={4} className=''>
                    {
                        chefs.map(chef =>
                            <Chef
                                key={chef.id}
                                chef={chef}
                            />
                        )
                    }
                </Row>
            </div>

            <div className='container'>
                <RecipeTutorials />
            </div>

            <div className='container my-5'>

                Recipe Book Shop" purchase
            </div>
        </>
    );
};

export default Home;