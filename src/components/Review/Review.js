import { fetchReviews } from '../../services/themoviedb-api';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

export const Review = () => {
    const {movieId} = useParams();
    const [description, setDescription] = useState([]);
    console.log(movieId);
  
    useEffect(() => {
        fetchReviews(movieId).then(res=>setDescription(res.data.results))
    }, [movieId])

    return (
        <div>
            {description?.length>0 ? <ul>
                {description?.map(({ id, author, content }) => {
                return (<li key={id}>
                    <p>Author: {author}</p>
                    <p>{content}</p>
                </li>)
                })}
            </ul> : <h4>We don't have any reviews of this movie</h4>}
        </div>   
    )
}