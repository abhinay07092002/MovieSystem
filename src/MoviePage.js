import React, { useState, useEffect } from 'react';
import { Model } from './Model';
import { Picture } from './Picture.js'
import styles from "./Modal.module.css"

export const MoviePage = () => {
   const [movies, setMovies] = useState([]);
   const [filteredMovies, setFilteredMovies] = useState([]);
   const [searchInput, setSearchInput] = useState("");
   const [selectedItem, setSelectedItem] = useState(null)
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      setFilteredMovies(movies?.results)
   }, [movies])
   useEffect(() => {
      if (loading) setLoading(false)
   }, [filteredMovies])
   const handleChange = (e) => {
      setSearchInput(e.target.value)
   }
   useEffect(() => {
      setInterval(3000)
      setLoading(true)
      if (searchInput != "") {
         fetch(`https://api.themoviedb.org/3/search/movie?api_key=2dfc364d49ea605ccaab72f477647841&language=en-US&query=${searchInput}&page=1&include_adult=false`)
            .then((response) => response.json())
            .then((data) => {
               console.log(data);
               setMovies(data);
            })
            .catch((err) => {
               console.log(err.message);
            });
      }
      else {
         fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=2dfc364d49ea605ccaab72f477647841&language=en-US&page=1')
            .then((response) => response.json())
            .then((data) => {
               console.log(data);
               setMovies(data);
            })
            .catch((err) => {
               console.log(err.message);
            });
      }
   }, [searchInput])
   const handleClick = (item) => {
      console.log(item)
      setSelectedItem(item)
      document.body.style.overflow = 'unset';
   }
   const handleCancel = () => {
      setSelectedItem(null)
      document.body.style.overflow = 'unset';
   }
   return (<div className={styles.container}>
      <div className={styles.imageContainer}><img src="https://0xinsynkstudios.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F20b6ba00-80ca-4c92-80e6-8564f6f421cc%2FNew_Project.png?table=block&id=3c994a0c-5738-4b1f-b453-f41da118c2d3&spaceId=1144a376-1b4c-479a-be07-4915ac395319&width=2000&userId=&cache=v2" width='110px' height="45px" /></div>
      <input
         type="text"
         placeholder="Search For A Movie"
         onChange={handleChange}
         value={searchInput}
         className={styles.searchBox}
      />
      <hr />
      <div className={styles.heading}><b>Most Recent Movies</b></div>
      {!loading ? filteredMovies?.map((movie) => <div><Picture movie={movie} onClick={() => handleClick(movie)}></Picture></div>) : <img src="https://csshint.com/wp-content/uploads/2022/01/Pure-CSS-Skeleton-Loading-Animation-With-Shimmer.jpg" width="100%" height="100%"></img>}
      {selectedItem != null ? <Model item={selectedItem} onCancel={handleCancel}></Model> : <></>}
   </div>)
}