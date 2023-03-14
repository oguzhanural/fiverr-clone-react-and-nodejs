import React, { useState } from 'react'
import { gigSliderData } from '../../data'
import "./GigSlider.scss"
import BtnSlider from './BtnSlider'

const GigSlider = () => {
  const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== gigSliderData.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === gigSliderData.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(gigSliderData.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div className="container-slider">
            {gigSliderData.map((obj, index) => {
                return (
                    <div
                    key={obj.id}
                    className={slideIndex === index + 1 ? "gigSlide active-anim" : "gigSlide"}
                    >
                        <img 
                        src={`/img/gigSlider/img${index + 1}.jpg`} 
                        />
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

            <div className="container-dots">
                {Array.from({length: 5}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "gigSliderDot active" : "gigSliderDot"}
                    ></div>
                ))}
            </div>
        </div>
    )
}

export default GigSlider