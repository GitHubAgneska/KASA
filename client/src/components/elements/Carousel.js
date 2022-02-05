import React  from 'react';
import { useState } from 'react';
import CarouselItem from "./CarouselItem";

const Carousel = (props) => {

    const [activeIndex, setActiveIndex] = useState(0);
    const hasOnlyOnePicture = props.pictures.length === 1;

    const updateIndex = (newIndex) => {

        if ( newIndex < 0 ) { newIndex = (props.pictures).length -1 ; }
        else if (newIndex > (props.pictures).length -1 ){ newIndex = 0; }

        setActiveIndex(newIndex);
        // console.log('CURRENT INDEX===', newIndex)
    }

    return (
        <div className="carousel-wrapper">

            { !hasOnlyOnePicture? (

                <div className="carousel-wrapper__inner">
                
                    <div className="controls-wrapper">
                        <div className="control prev" onClick={() => { updateIndex(activeIndex - 1) }}>&#10094;</div>
                        <div className="control next" onClick={() => { updateIndex(activeIndex + 1) }}>&#10095;</div>
                    </div>
                    
                    <div className="pic-wrapper" style={{ transform: `translateX(-${activeIndex* 100}%)`}}>
                        {props.pictures.map((pic) => (<CarouselItem pic={pic} key={Math.random()} /> ))}
                    </div>

                </div>
                ): 
                <div className="carousel-wrapper__inner">
                    <div className="pic-wrapper"  style={{ transform: `translateX(-${activeIndex* 100}%)`}}>
                        <CarouselItem pic={props.pictures[0]} key={Math.random()} />
                    </div>
                </div>
            }

        </div>
    )
}
export default Carousel

