import React from 'react'
import css from "./css/App.css"

export default function PostItemAPI(post) {
    const {id, user, type, tags, webformatURL} = post

    return (
        <div className={css.SearchItem} key={id}>
            <p>{type}</p>
            <p>{user}</p>
            <img src={webformatURL} alt=""></img>
            <p>{tags}</p>
        </div>
    )
}