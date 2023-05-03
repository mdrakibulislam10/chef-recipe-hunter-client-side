import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from "../../../../public/img/banner1.avif";
import banner2 from "../../../../public/img/banner2.jpg";
import banner3 from "../../../../public/img/banner3.jpg";

const Banner = () => {
    return (
        <Carousel className=''>
            <Carousel.Item>
                <img
                    style={{ height: "600px" }}
                    className="d-block w-100"
                    src={banner2}
                    alt="First slide"
                />
                <Carousel.Caption className='mb-5'>
                    <h1 className='text-info'>A Culinary Journey through Japanese Cuisine</h1>
                    <h5 className='text-secondary my-4'>Explore the exquisite world of traditional Japanese sushi with our fresh, handcrafted rolls and sashimi delights.</h5>
                    <button className='btn btn-warning' style={{ fontWeight: "500" }}><a href='#chef'>View our chef and recipe</a></button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ height: "600px" }}
                    className="d-block w-100"
                    src={banner1}
                    alt="Second slide"
                />

                <Carousel.Caption className='mb-5'>
                    <h1 className='text-info'>A Journey into Exquisite Culinary Traditions</h1>
                    <h5 className='text-secondary my-4'>Experience the vibrant and soothing flavors of matcha tea with our premium powders and discover the ancient art of the Japanese tea ceremony.</h5>
                    <button className='btn btn-warning' style={{ fontWeight: "500" }}><a href='#chef'>View our chef and recipe</a></button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ height: "600px" }}
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption className='mb-5'>
                    <h1 className='text-info'>Discover Authentic Japanese Food</h1>
                    <h5 className='text-secondary my-4'>
                        Dive into a bowl of authentic ramen, filled with flavorful broths, springy noodles, and mouthwatering toppings at RamenRealm.
                    </h5>
                    <button className='btn btn-warning' style={{ fontWeight: "500" }}><a href='#chef'>View our chef and recipe</a></button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;