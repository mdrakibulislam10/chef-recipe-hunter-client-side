import { useLoaderData } from 'react-router-dom';
import ChefRecipe from '../ChefRecipe/ChefRecipe';
import { Col, Row } from 'react-bootstrap';
import "./ChefRecipes.css";
import { FaThumbsUp } from 'react-icons/fa';
// import LazyLoad from 'react-lazy-load';
import { LazyLoadImage } from "react-lazy-load-image-component";

const ChefRecipes = () => {
    const chef = useLoaderData();
    // console.log(chef.recipe_info);
    const { recipe_info, chef_picture, chef_name, short_bio, years_of_experience, numbers_of_recipes, likes, profession } = chef;

    return (
        <section>
            {/* chef's banner */}
            <div className='bg-primary mt-4'>
                <Row xs={1} lg={2} className='py-5 container mx-auto align-items-center gy-4 lg-g-3'>
                    <Col className='text-white border-start border-2'>
                        <h1 className='text-warning'><b>{chef_name}</b></h1>
                        <h4>{profession}</h4>
                        <hr className='w-75 border border-2 border-white' />
                        <h6 className='mb-3'>Bio: {short_bio}</h6>
                        <h6 className='d-flex align-items-center'>
                            <span className='me-2'>Likes: {likes}</span>
                            <FaThumbsUp className='fs-5' style={{ cursor: "pointer" }} />
                        </h6>
                        <h6>Total Recipe: {numbers_of_recipes}</h6>
                        <h6>Experience: {years_of_experience} year</h6>
                    </Col>

                    <Col>
                        {/* <LazyLoad offset={300} threshold={0.95}>
                            <img className='img-fluid rounded-circle mx-auto d-block custom-chef-img-size' src={chef_picture} alt="" />
                        </LazyLoad> */}

                        <LazyLoadImage
                            className='img-fluid rounded-circle mx-auto d-block custom-chef-img-size' src={chef_picture} alt=""
                        />
                    </Col>
                </Row>

            </div>
            {/* recipes */}
            <div className='my-5 container mx-auto'>
                <h2 className='text-success border-start border-4 border-secondary ps-1'>This Chef's Recipes</h2>
                <p>See all recipes by <b>{chef_name}</b>, you can try your kitchen.</p>
                <Row xs={1} lg={2} className=''>
                    {
                        recipe_info?.map(recipe =>
                            <ChefRecipe
                                key={recipe.id}
                                recipe={recipe}
                            />
                        )
                    }
                </Row>
            </div>
        </section>
    );
};

export default ChefRecipes;