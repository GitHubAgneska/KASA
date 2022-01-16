import React, {useEffect, useState } from 'react';
import { GalleryItem } from './GalleryItem'

const Gallery = () =>  {
    const [ data, setData ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(null);


    const fetchRentals = async () => {
        setLoading(true)
        try {
            const data = await fetch('/api') // uses proxy to send to server port (5000)
            const json = await data.json()
            const rentals = json
            setData(rentals)
        }
        catch (error) { setError(error) }
        setLoading(false)
    }

    useEffect(()=> {
        fetchRentals()
    }, []) 

    if (loading) return 'Loading..';
    if (error) return 'Error!';
    
    return (

        <div className="gallery-wrapper">
            <ul>
                { data.length > 0 ? data.map(i => (
                    <GalleryItem key = {Math.random()} rental= {i} />
                )): loading}
            </ul>
        </div>
    )
}

export default Gallery

/* CONTENT REFLOW ISSUE */
/* => gallery images 'content reflow' (due to server's pictures' size and images loading in each child unsynchronously) */
/* using Promise.all  => not enough : issue does not come from fetching the urls but from browser loading */
/* const fetchAllImgs = async () => {
    let response = await fetch(myRequest);
    
    if (response.ok) { 
        const jsonResponse = await response.json();
        console.log('jsonResponse==', jsonResponse); // array of objects
        
        let dataImgs = jsonResponse.map( async i => {
            // console.log(i);
            let preFetchData =  await fetch(i.cover);
            return preFetchData;
        })
        let covers = await Promise.all(dataImgs);
        let allUrls = ( await Promise.all(covers)).map(cover => {
            
            return cover = cover.url;
        })
        console.log(allUrls)
        setData(allUrls);
    }
}
fetchAllImgs();
setLoading(false); 
*/



