import React from 'react';
import Banner from '../Banner/Banner';
import Chef from '../Chef/Chef';
import { useLoaderData } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import RecipeTutorials from '../RecipeTutorialsContainer/RecipeTutorials/RecipeTutorials';
import BooksRecommend from '../BooksRecommendContainer/BooksRecommend/BooksRecommend';
import SinglePhotoBanner from '../SinglePhotoBanner/SinglePhotoBanner';

const Home = () => {
    const chefs = useLoaderData();

    return (
        <>
            <Banner />
            <SinglePhotoBanner />

            <div id='chef' className='container my-5'>
                <h2 className='text-info border-start border-4 border-secondary ps-1'>Chefs Corner</h2>
                <p>See chefs profiles and visit their recipes</p>
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

            <div className='container'>
                <BooksRecommend />
            </div>
        </>
    );
};

export default Home;