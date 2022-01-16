const CarouselItem = (props) => {
    return (
        <div className="carousel-img" style={{width:props.width}}>
            <img src={props.pic} alt=""/>
        </div>
    )
}
export default CarouselItem