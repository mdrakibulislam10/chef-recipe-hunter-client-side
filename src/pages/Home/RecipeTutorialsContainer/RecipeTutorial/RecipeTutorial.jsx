import React from 'react';
import { Card } from 'react-bootstrap';

const RecipeTutorial = ({ tutorial }) => {
    const { video_url, recipe_name, description } = tutorial;
    console.log(tutorial);

    return (
        <div className=''>
            <Card className=''>
                <Card.Body>
                    <div>
                        <iframe
                            className='w-100'
                            style={{ height: "220px" }}
                            src={video_url}
                            title={recipe_name}
                            frameborder="0"
                            // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                    </div>
                    <Card.Title className='mt-1 mb-3'>{recipe_name}</Card.Title>
                    <p title={description} className='text-secondary'>{description.slice(0, 140)}...</p>
                </Card.Body>
            </Card>
        </div>
    );
};

export default RecipeTutorial;