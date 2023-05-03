import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { FaStickyNote } from 'react-icons/fa';

const RecipeTutorial = ({ tutorial }) => {
    const { recipe_name, recipe_img, recipe_tutorial } = tutorial;
    // console.log(tutorial);

    const [isTruthy, setIsTruthy] = useState(false);

    return (
        <div className=''>
            <Card className=''>
                <div className='p-2'>
                    <Card.Img className='mx-auto img-fluid rounded' variant="top" src={recipe_img} style={{ height: "200px" }} />
                </div>

                <Card.Body className='d-flex flex-wrap align-items-center justify-content-between'>
                    <Card.Title className='fs-5'><b>{recipe_name}</b></Card.Title>
                    <button onClick={() => setIsTruthy(!isTruthy)} className='btn btn-outline-secondary' style={{ fontWeight: "500" }}>
                        {isTruthy ? "Hide" : "Show"} Tutorials
                        <FaStickyNote className='ms-1' />
                    </button>
                </Card.Body>

                {isTruthy &&
                    <>
                        <hr className='w-75 mx-auto' />

                        <div className='pb-2 px-3'>
                            <h5>Steps:</h5>
                            {
                                recipe_tutorial.steps.map((step, id) =>
                                    <li key={id}>{step}</li>
                                )
                            }
                        </div>

                        <div className='px-3 pb-3'>
                            <h5>Tips:</h5>
                            {
                                recipe_tutorial.tips.map((tip, id) =>
                                    <li key={id}>{tip}</li>
                                )
                            }
                        </div>
                    </>
                }
            </Card>
        </div>
    );
};

export default RecipeTutorial;