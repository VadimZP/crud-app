import React, { Component } from "react";
import { connect } from "react-redux";

import { AppState } from "state/configureStore";

import { getPostsRequested } from "state/modules/posts";

interface IPost {
    text: string;
    author: string;
}

interface IProps {
    posts: IPost[];
    getPostsRequested?: typeof getPostsRequested;
}

export class PostsRedux extends Component<IProps> {
    static defaultProps = {
        posts: [],
    };

    componentDidMount() {
        const { getPostsRequested } = this.props;
        // getPostsRequested();
    }
    render() {
        return (
            <p>Posts</p>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    posts: state.posts,
});

export default connect(mapStateToProps,
    { getPostsRequested },
)(PostsRedux);
