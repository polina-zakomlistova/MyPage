import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

import styles from './index.module.scss';

interface ImageCarouselProps {
    images: string[];
    href?: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, href }) => {
    // Определите, нужно ли скрыть контроллеры (стрелки)
    const hideControls = images.length <= 1;

    return (
        <Carousel
            controls={!hideControls} // Скрыть контроллеры, если изображение одно
            indicators={images.length > 1}
            className={styles.carousel}
        >
            {images.map((image, index) => (
                <Carousel.Item key={index}>
                    <a href={href} target="_blank">
                        <img
                            className={styles.image}
                            src={image}
                            alt={`Slide ${index}`}
                        />
                    </a>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};
export default ImageCarousel;
