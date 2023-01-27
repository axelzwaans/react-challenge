import React from 'react'
import css from "./css/App.css"
import { savedPosts } from '../posts.json';

export default function PostItem(post) {
    return (
        savedPosts.map(post => {
            return (
                <div className={css.SearchItem}>
                    <p>{post.title}</p>
                    <p>{post.name}</p>
                    <img src={post.image} alt=""></img>
                    <p>{post.description}</p>
                </div>
            )
        })
    )
}
