import React, { Component } from 'react';
import css from "./css/App.css";
import PostItem from './PostItem';
import Loader from './Loader';

export class Content extends Component {

    constructor(post) {
        super(post);

        this.state = {
            isLoaded: false
        }
    }

    getData() {
        setTimeout(() => {
            this.setState({
                isLoaded: true
            })
        }, 2000)
    }

    componentDidMount() {
        this.getData()
    }

    render() {
        return (
            <div className={css.Content}>
                <div className={css.TitleBar}>
                    <h1>My Photos</h1>
                </div>
                <div className={css.SearchResults}>
                    {this.state.isLoaded ? <PostItem /> : <Loader />}
                </div>
            </div>
        )
    }
}

export default Content