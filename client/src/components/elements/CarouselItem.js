const CarouselItem = (props) => {
    return (
        <div className="carousel-img" style={{width:props.width}}>
            <img src={props.pic} alt="alt-pic" loading='lazy'/>
        </div>
    )
}
export default CarouselItem