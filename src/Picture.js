import React, { useState, useEffect } from 'react';
import styles from "./Modal.module.css"
export const Picture = (props) => {
	return (<div className={styles.picture}>
		<a onClick={() => props.onClick()}><img src={"https://image.tmdb.org/t/p/original" + props.movie.poster_path} width="97.5%" height="350px" alt="No Poster available For"></img><br></br>{props.movie?.original_title}</a>
	</div>)
}