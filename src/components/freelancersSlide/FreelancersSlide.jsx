import React from 'react';
import "./FreelancersSlide.scss";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {projects} from "../../data";
import ProjectCard from '../projectCard/ProjectCard';


const FreelancersSlide = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (
    <div className="slide">
        <div className="container">
            <Carousel 
            responsive={responsive}
            infinite={true}
            swipeable={true}
            slidesToSlide={3}
            draggable={false}
            >
            {projects.map(project =>(
                <ProjectCard item={project} key={project.id}/> 
            ))}
        </Carousel>
        </div>
    </div>
  )
}

export default FreelancersSlide