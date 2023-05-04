import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { Rating } from '@smastrom/react-rating'
import toast, { Toaster } from 'react-hot-toast';
import "./ChefRecipe.css";
import '@smastrom/react-rating/style.css'
import { LazyLoadImage } from "react-lazy-load-image-component";

const ChefRecipe = ({ recipe }) => {
    const { recipe_name, recipe_picture, ingredients, cooking_method, rating, } = recipe;
    // console.log(recipe);
    const [isDisabled, setIsDisabled] = useState(false);

    const handleToast = (disabled) => {
        toast("Recipe added favorite list!");
        setIsDisabled(disabled);
    };

    return (
        <div className='p-2'>
            <Card className=''>
                <div className='p-2 position-relative'>
                    <LazyLoadImage
                        className='rounded-lg img-fluid w-100' variant="top" src={recipe_picture} style={{ height: "400px" }}
                    />
                    <Card.Title className='text-center bg-white rounded p-4 me-4 mb-4 fs-2 position-absolute bottom-0 end-0'><b>{recipe_name}</b></Card.Title>
                </div>
                <div className='px-2'>
                    <h4 className=''>Recipe Name: <b>{recipe_name}</b></h4>
                    <div className='d-flex flex-wrap justify-content-between align-items-center'>
                        <div className='d-flex flex-wrap'><span>Ratings:</span>
                            <Rating className='mx-1' style={{ maxWidth: 100 }} readOnly value={rating} />
                            <b>{rating}</b>
                        </div>

                        <button onClick={() => handleToast(true)} className='btn btn-warning' disabled={isDisabled} style={{ fontWeight: "500" }}>Favorite</button>
                        <Toaster />
                    </div>
                </div>
                <hr className='w-75 mx-auto' />
                <Card.Body>
                    <div className='d-flex flex-column flex-lg-row justify-content-between align-items-start custom-height-recipe-info'>
                        <div>
                            <h5>Ingredients:</h5>
                            {
                                ingredients?.map((items, id) =>
                                    <p key={id}>
                                        {id + 1}. {items}
                                    </p>
                                )
                            }
                        </div>

                        <div>
                            <h5>Cooking Method:</h5>
                            {
                                cooking_method?.map((items, id) =>
                                    <p key={id}>
                                        {id + 1}. {items}
                                    </p>
                                )
                            }
                        </div>
                    </div>

                    <div className='border px-2 pt-2'>
                        <p><i>
                            <b>Note:</b> <small>Stay safe in the kitchen: use oven mitts for hot objects, ensure good ventilation to prevent fire, and be cautious with sharp knives.</small>
                        </i></p>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ChefRecipe;