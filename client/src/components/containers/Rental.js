import RentalInfos from '../elements/RentalInfos'
import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import { Route } from 'react-router-dom'
import NotFoundPage from './404'


const apiUrl = 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json'
const myHeaders = new Headers();
const myRequest = new Request( apiUrl, {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders,
    mode: 'cors', //  mode: 'no-cors' ? 
    cache: 'default',
    credentials: 'include',
    
});

const Rental =  ({match: {params : {id}}}) => {

    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(false);
    
    const [ cover, setCover ] = useState();
    const [ title, setTitle ] = useState();
    const [ location, setLocation ] = useState();
    const [ pictures, setPictures ] = useState([]);
    const [ description, setDescription] = useState();
    const [ hostName, setHostName] = useState();
    const [ hostPicture, setHostPicture] = useState();
    const [ rating, setRating] = useState();
    const [ equipments, setEquipment] = useState([]);
    const [ tags, setTags] = useState([]);


    useEffect(()=> {
        // fetch(myRequest)
        fetch(myRequest, {id})
            .then(response => {
                if (response.ok) { return response.json() } throw response })
            .then(data => {

                let rental = data.filter(rental => rental.id === id )[0]; // ! filter returns ARRAY
                    setCover(rental.cover);
                    setTitle(rental.title);
                    setLocation(rental.location);
                    setPictures(rental.pictures);
                    setDescription(rental.description);
                    setHostName(rental.host.name);
                    setHostPicture(rental.host.picture);
                    setRating(rental.rating);
                    setEquipment(rental.equipments);
                    setTags(rental.tags);

                    setLoading(false); 
            })
            .catch(error => {
                // console.error('Error fetching data:', error);
                setError(true);
            })
            .finally(()=> { setLoading(false); })
    }, [id]);


    return (

        error === false?
            <section className="rentalPage-wrapper page">
                <RentalInfos {...{loading, cover, title,location, pictures, description, hostName, hostPicture, rating, equipments, tags }} /> 
            </section>
        : <Route component={NotFoundPage} />
    )
}

Rental.propTypes = { match: PropTypes.object.isRequired }

export default Rental