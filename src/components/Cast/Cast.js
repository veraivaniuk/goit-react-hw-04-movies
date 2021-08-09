import {fetchCast} from '../../services/themoviedb-api';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

export const Cast = () => {
    const {movieId} = useParams();
    const [actors, setActors] = useState([]);
  
    useEffect(() => {
        fetchCast(movieId).then(res=>setActors(res.data.cast))
    }, [movieId])

    return (
        <ul>
            {actors?.map(({ id, profile_path, name, character }) => {
                return (<li key={id}>
                    <img src={"https://image.tmdb.org/t/p/w200"+profile_path} alt={name} />
                    <p>{name}</p>
                    <p>Character: {character}</p>
                </li>)
            })}
        </ul>
        
    )
}