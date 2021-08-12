import {fetchCast} from '../../services/themoviedb-api';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import s from './Cast.module.css'
import img from '../../images/film.png';

export const Cast = () => {
    const {movieId} = useParams();
    const [actors, setActors] = useState([]);
  
    useEffect(() => {
        fetchCast(movieId).then(res=>setActors(res.data.cast))
    }, [movieId])

    return (
        <ul className={ s.cast }>
            {actors?.map(({ id, profile_path, name, character }) => {
                return (<li key={id} className={s.item} >
                    <img src={profile_path ?`https://image.tmdb.org/t/p/w200${profile_path}`: img } alt={name} />
                    <p>{name}</p>
                    <p>Character: {character}</p>
                </li>)
            })}
        </ul>
        
    )
}