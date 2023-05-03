import React, { useEffect, useState } from 'react';
import RecipeTutorial from '../RecipeTutorial/RecipeTutorial';
import { Row } from 'react-bootstrap';

const RecipeTutorials = () => {
    const [tutorials, setTutorials] = useState([]);

    useEffect(() => {
        fetch("https://chef-recipe-hunter-server-side-topaz.vercel.app/recipe-tutorials")
            .then(res => res.json())
            .then(tutorials => setTutorials(tutorials))
    }, []);
    // console.log(tutorials);

    return (
        <>
            <h2 className='text-info border-start border-4 border-secondary ps-1'>Recipe Tutorials</h2>
            <p>Read our recipe tutorial, learn and try recipe at your kitchen</p>

            <Row xs={1} md={2} lg={3} className='gy-2 g-md-3'>
                {
                    tutorials.map(tutorial =>
                        <RecipeTutorial
                            key={tutorial.id}
                            tutorial={tutorial}
                        />
                    )
                }
            </Row>
        </>
    );
};

export default RecipeTutorials;