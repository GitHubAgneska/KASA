import CollapsingBlock from '../elements/CollapsingBlock'
import Tag from '../elements/Tag'
import Rating from '../elements/Rating'
import Carousel from '../elements/Carousel'
import PropTypes from "prop-types"


const RentalInfos =  ({cover, title,location, pictures, description, hostName, hostPicture, rating, equipments, tags }) => {


    return (
        <div className="rental-wrapper">

            <div className="rental--pics">
                <Carousel pictures={pictures} cover={cover} />
            </div>

            <div className="rental-presentation">
                <div className="rental-presentation__titles">
                    <h1>{title}</h1>
                    <h2>{location}</h2>
                </div>

                <div className="rental-presentation__tags-list">
                    <ul className="tag-wrapper">
                        {tags.map(i => (
                            <li key={i} className="tag"><Tag tag={i} /></li>
                        ))}
                    </ul>
                </div>

                <div className="rental-presentation__owner">
                    <h3>{hostName}</h3>
                    <img src={hostPicture} alt={hostName} />
                </div>
                
                <div className="rental-presentation__rating">
                    <Rating rating={rating} />
                </div>
                
            </div>

            <div className="rental-presentation__description">
                <CollapsingBlock description={description} blockTitle="description" />
                <CollapsingBlock equipments={equipments} blockTitle="equipments" />
            </div>
        </div>
    )
}

RentalInfos.propTypes = { 
    cover: PropTypes.string,
    title: PropTypes.string,
    location: PropTypes.string,
    pictures: PropTypes.array,
    description: PropTypes.string,
    blockContent: PropTypes.string,
    hostName: PropTypes.string,
    hostPicture: PropTypes.string,
    rating: PropTypes.string,
    equipment: PropTypes.array,
    tags: PropTypes.array
}
export default RentalInfos