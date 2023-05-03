import React from 'react';
import { Card } from 'react-bootstrap';

const RecipeTutorial = ({ tutorial }) => {
    const { recipe_name, description } = tutorial;
    // console.log(tutorial);

    return (
        <div className=''>
            <Card className=''>
                <Card.Body>
                    <div>
                        hi
                    </div>
                    <Card.Title className='mt-1 mb-3'>{recipe_name}</Card.Title>
                    <p title={description} className='text-secondary'>{description.slice(0, 140)}...</p>
                </Card.Body>
            </Card>
        </div>
    );
};

export default RecipeTutorial;