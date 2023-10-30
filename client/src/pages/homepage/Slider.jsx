import { Navigate } from "react-router-dom";
import React, { useState } from 'react';
import Slider1 from "../../../img/slider/slider1.png"
import Slider2 from "../../../img/slider/slider2.png"
import Slider3 from "../../../img/slider/slider3.png"
export default function Slider() {
    const slides = [
        { url: `${Slider1}` },
        { url: `${Slider2}` },
        { url: `${Slider3}` }
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };
    return (
        <div className="h-[550px] w-full m-auto relative ">
            <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className=" h-[550px]  w-full rounded-xl  bg-top 2xl:bg-cover duration-400 " >
            </div>
            {/* left arrow */}
            <div className=" absolute top-[50%] -translate-x-0 translate-y-[-50%] left-1 text-2xl rounded-full p-2  text-white cursor-pointer " onClick={prevSlide}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="duy-icon" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </div>
            {/* right arrow */}
            <div className=" absolute top-[50%] -translate-x-0 translate-y-[-50%] right-1 text-2xl rounded-full p-2  text-white cursor-pointer" onClick={nextSlide}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="duy-icon">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </div>
            <div className='inset-x-0 bottom-0 px-auto py-1  absolute flex justify-center '>
                {slides.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className={` p-1 mx-0.5 rounded-full cursor-pointer ${slideIndex === currentIndex ? 'bg-gray-500' : 'bg-slate-200'}`}
                    >

                    </div>
                ))}
            </div>
        </div>
    )
}