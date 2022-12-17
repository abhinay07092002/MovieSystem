import React, { useState, useEffect } from 'react';
import styles from "./Modal.module.css"
export const Model = (props) => {
    return (<div className={styles.darkBG}>
        <div className={styles.centered}>
            <a onClick={() => props.onCancel()} className={styles.sdj}><img src="https://img.icons8.com/ios-filled/50/null/delete-sign--v1.png" width="20px" height="20px" /></a>
            <div className={styles.shifting}><b>{props.item.original_title}</b>
            </div>

            <p>
                <div className={styles.imgcntr}><img src={"https://image.tmdb.org/t/p/original" + props.item.poster_path} width="95%" height="95%" alt={props.item.original_title}></img></div>
                <div className={styles.txtcntr}><b>Release Date: {new Date(props.item.release_date).toString().substr(4, 11)}</b><br></br>
                    <p>{props.item.overview}</p>
                    <b>{props.item.vote_average}</b>/10({props.item.vote_count} total votes)</div>
            </p>
        </div>
    </div>)
}