import React, { Component } from 'react';
import css from "./css/App.css";
import PostItem from './PostItem';
import Loader from './Loader';
import {savedPosts} from '../posts.json';

export class Content extends Component {

    constructor(post) {
        super(post);

        this.state = {
            isLoaded: false,
            posts: []
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoaded: true,
                posts: savedPosts
            })
        }, 2000)
    }

    handleChange = (event) => {
        const name = event.target.value.toLowerCase()
        const filteredPosts = savedPosts.filter(post => {
            return post.name.toLowerCase().includes(name)
        })
        this.setState({
            posts: filteredPosts
        })
    }

    render() {
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
                                this.handleChange(event)
                            }} 
                            />
                        <h4>Posts found: {this.state.posts.length}</h4>
                    </form>
                </div>
                <div className={css.SearchResults}>
                    {this.state.isLoaded ? <PostItem savedPosts={this.state.posts} /> : <Loader />}
                </div>
            </div>
        )
    }
}

export default Content