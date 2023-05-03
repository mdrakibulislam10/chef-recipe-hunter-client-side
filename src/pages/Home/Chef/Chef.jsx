import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';

const Chef = ({ chef }) => {
    const { chef_picture, chef_name, years_of_experience, recipe_info, likes } = chef;
    // console.log(chef);

    return (
        <div className='p-2'>
            <Card className='pt-4 pb-2 shadow border-0'>
                <Card.Img className='rounded-circle mx-auto img-fluid' variant="top" src={chef_picture} style={{ height: "200px", width: "200px" }} />
                <Card.Body>
                    <Card.Title className='text-center mb-5'><b>{chef_name}</b></Card.Title>
                    <div>
                        <p className='text-secondary d-flex justify-content-between align-items-center flex-wrap px-3'>
                            <span>
                                Experience: <b>{years_of_experience}yr.</b>
                            </span>
                            <span>
                                Total Recipes: <b>{recipe_info.length}</b>
                            </span>
                        </p>

                        <p className='text-secondary d-flex justify-content-between align-items-center flex-wrap px-3'>
                            <span>
                                Likes: <b>{likes}</b>
                            </span>
                            <Button variant="warning" style={{ fontWeight: "500" }}>View Recipes
                                <FaArrowRight className='ms-1' />
                            </Button>
                        </p>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Chef;