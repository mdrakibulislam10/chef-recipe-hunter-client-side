import React from 'react';
import Banner from '../Banner/Banner';
import Chef from '../Chef/Chef';
import { useLoaderData } from 'react-router-dom';
import { Row } from 'react-bootstrap';

const Home = () => {
    const chefs = useLoaderData();
    // console.log(chefs);

    return (
        <>
            <Banner />

            <div id='chef' className='container my-5'>
                <h2 className='text-info border-start border-4 border-secondary ps-1'>Chefs</h2>
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
        </>
    );
};

export default Home;