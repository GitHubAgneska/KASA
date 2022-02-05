const CarouselItem = (props) => {
    return (
        <div className="carousel-img" loading='lazy' style={{width:props.width}}>
            <img src={props.pic} alt=""/>
        </div>
    )
}
export default CarouselItem