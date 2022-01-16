import { Component } from "react";
import PropTypes from "prop-types";
import star  from '../../assets/logos/star.png'
import noStar from '../../assets/logos/noStar.png'


class Rating extends Component {

    constructor(props) {
        super(props);
        this.rate = this.rate.bind(this);
    }

    rate(rating){
        
        let stars = [];
        let n = parseInt(rating);
       /*  console.log('N==', n); */
        let m = 5 - n;
        try {
            stars.push([...Array(n)].map((e, i) => 
                <img src={star} key={i} alt="" />
            )
            .concat([...Array(m)].map((e, j) =>
                <img src={noStar} key={Math.random()}  alt="" />
            )));
            /* console.log('Array==',stars); */
            return stars;
        }
        catch(error) {console.log(error)}
    }

    render(){
            return (<div className="rating">{this.props.rating?this.rate(this.props.rating):'LOADING'}</div>)
    }
}

Rating.protoTypes = {
    rating: PropTypes.string
}

export default Rating