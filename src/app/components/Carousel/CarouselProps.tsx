import React from 'react';
import Slider from 'react-slick';
import './carousel.css'

interface CarouselProps {
    images: string[];
}

export const Carousel: React.FC<CarouselProps> = ({ images }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
    };

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt={`Slide ${index}`} style={{ width: '100%', height: 'auto' }} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};