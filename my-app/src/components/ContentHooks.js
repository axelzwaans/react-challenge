import React, { useState, useEffect } from 'react'
import css from "./css/App.css";
import PostItem from './PostItem';
import Loader from './Loader';
import { savedPosts } from '../posts.json';

function ContentHooks() {
    const [fetchedPosts, setFetchedPosts] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(()=>{
        setTimeout(() => {
            setIsLoaded(true);
            setFetchedPosts(savedPosts);
        }, 2000)
    }, []);

    const handleChange = (event) => {
        const name = event.target.value.toLowerCase()
        const filteredPosts = savedPosts.filter(post => {
            return post.name.toLowerCase().includes(name)
        })
        setFetchedPosts(filteredPosts)
    }

    return (
        <div className={css.Content}>
            <div className={css.TitleBar}>
                <h1>My Photos</h1>
                <form>
                    <label htmlFor='searchInput'>Search: </label>
                    <input
                        type='search'
                        id='searchInput'
                        onChange={(event) => {
                            handleChange(event)
                        }}
                    />
                    <h4>Posts found: {fetchedPosts.length}</h4>
                </form>
            </div>
            <div className={css.SearchResults}>
                {isLoaded ? <PostItem savedPosts={fetchedPosts} /> : <Loader />}
            </div>
        </div>
    )
}

export default ContentHooks