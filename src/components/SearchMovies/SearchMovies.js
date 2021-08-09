import Button from "../Button/Button";
import { useState } from "react";
import s from './SearchMovies.module.css'

export default function SearchMovies({ onSubmit }) {

  const [query, setQuery] = useState('');

  
  const handleChangeName = (e) => {
    setQuery(e.target.value);
  }

   const handleSubmit = (e) => {
    e.preventDefault();
     
    onSubmit(query);
    setQuery('');

 
  }

  return (
    <div className='SearchMovies'>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          className={s.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={query}
          onChange={handleChangeName}
        />
        <Button buttonName="Search" />
      </form>
    </div>
  );
}
