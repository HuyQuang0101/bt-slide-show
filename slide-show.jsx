import React, { useState, useEffect } from 'react';

const SlideShow = ({ slides, autoPlay = false, interval = 3000 }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Xử lý chuyển sang slide tiếp theo
    const nextSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === slides.length - 1 ? 0 : prevSlide + 1
        );
    };

    // Xử lý quay lại slide trước
    const prevSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? slides.length - 1 : prevSlide - 1
        );
    };

    // Tự động chuyển slide khi autoPlay là true
    useEffect(() => {
        if (autoPlay) {
            const slideInterval = setInterval(nextSlide, interval);
            return () => clearInterval(slideInterval); // Xóa bỏ khi component unmount
        }
    }, [autoPlay, interval]);

    return (
        <div className="slideshow">
            <div className="slides">
                {slides.map((slide, index) => (
                    <div
                        className={`slide ${index === currentSlide ? 'active' : ''}`}
                        key={index}
                    >
                        <img src={slide} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>
            <button onClick={prevSlide}>Previous</button>
            <button onClick={nextSlide}>Next</button>
        </div>
    );
};

export default SlideShow;

