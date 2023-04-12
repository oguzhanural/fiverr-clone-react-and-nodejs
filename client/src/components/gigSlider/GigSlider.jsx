import React, { useState } from 'react'
import { gigSliderData } from '../../data'
import "./GigSlider.scss"
import BtnSlider from './BtnSlider'
import { useQuery } from '@tanstack/react-query'
import newRequest from '../../utils/newRequest'
import { useParams } from 'react-router-dom'

const GigSlider = () => {

    const { id } = useParams();
    const { isLoading, error, data } = useQuery({
        queryKey: ['gig'],
        queryFn: () =>
          newRequest.get(
            `/gigs/single/${id}`)
            .then((res)=>{
            return res.data;
          }),
      });

  const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== data.images.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === data.images.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(data.images.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div className="container-slider">
            {data.images.map((obj, index) => (
                    <div
                    key={obj._id}
                    className={slideIndex === index + 1 ? "gigSlide active-anim" : "gigSlide"}
                    >
                        <img 
                        src= {obj}
                        // {`/img/gigSlider/img${index + 1}.jpg`} 
                        />
                    </div>
                
            ))}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

            <div className="container-dots">
                {Array.from({length: data.images.length}).map((item, index) => (
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

