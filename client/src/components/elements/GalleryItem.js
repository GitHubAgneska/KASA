import { useHistory } from "react-router-dom";
import React from 'react';

export const GalleryItem =({rental}) =>  {

    const history = useHistory();
    function handleClick(id) { history.push("/rental/"+id); console.log(id)}
    /* const [ imgLoaded, setImgLoaded ] = useState(false); */

    /* better alternative to event handler :  binding event in class constructor */
    /*  ( -> to avoid multi rendering of a different callback everytime the event is called )*/
    /* about event handling of stateless components :  */
    /* https://stackoverflow.com/questions/39260595/event-handlers-in-react-stateless-components */
        
        return  (
            <li onClick={() => handleClick(rental.id)}>
                <figure className="galleryItem">
                    <img src={rental.cover} alt="" />
                    {/* <img src={rental.cover} alt="" className={imgLoaded? 'loading': null} onLoad={() =>setImgLoaded(true)}/> */}
                    <figcaption>{rental.title}</figcaption>
                </figure>
            </li>
        ) 
}
