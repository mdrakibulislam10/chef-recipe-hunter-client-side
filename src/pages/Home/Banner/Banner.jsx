import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from "../../../../public/img/banner1.avif";
import banner2 from "../../../../public/img/banner2.jpg";
import banner3 from "../../../../public/img/banner3.jpg";
import "./Banner.css";

const Banner = () => {
    return (
        <Carousel className=''>
            <Carousel.Item>
                <img
                    className="d-block w-100 custom-height"
                    src={banner2}
                    alt="First slide"
                />
                <Carousel.Caption className=''>
                    <h2 className='text-info'>A Culinary Journey through Japanese Cuisine</h2>
                    <p className='text-secondary my-4' style={{ fontSize: "18px" }}>Explore the exquisite world of traditional Japanese sushi with our fresh, handcrafted rolls and sashimi delights.</p>
                    <button className='btn btn-warning'><a style={{ fontWeight: "500", textDecoration: "none" }} className='text-black' href='#chef'>Explore Chef And Recipe</a></button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 custom-height"
                    src={banner1}
                    alt="Second slide"
                />

                <Carousel.Caption className=''>
                    <h2 className='text-info'>A Journey into Exquisite Culinary Traditions</h2>
                    <p className='text-secondary my-4' style={{ fontSize: "18px" }}>Experience the vibrant and soothing flavors of matcha tea with our premium powders and discover the ancient art of the Japanese tea ceremony.</p>
                    <button className='btn btn-warning'><a style={{ fontWeight: "500", textDecoration: "none" }} className='text-black' href='#chef'>Explore Chef And Recipe</a></button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 custom-height"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption className=''>
                    <h2 className='text-info'>Discover Authentic Japanese Food</h2>
                    <p className='text-secondary my-4' style={{ fontSize: "18px" }}>
                        Dive into a bowl of authentic ramen, filled with flavorful broths, springy noodles, and mouthwatering toppings at RamenRealm.
                    </p>
                    <button className='btn btn-warning'><a style={{ fontWeight: "500", textDecoration: "none" }} className='text-black' href='#chef'>Explore Chef And Recipe</a></button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;