import React, { Component } from "react";
import { connect } from "react-redux";

import { AppState, IPost } from "state/configureStore";

import { getPostsRequested } from "state/modules/posts";

interface IProps {
    posts?: IPost[];
    getPostsRequested: typeof getPostsRequested;
}

class PostsRedux extends Component<IProps> {
    static defaultProps = {
        getPostsRequested,
    };

    componentDidMount() {
        console.log(this.props);
    }
    render() {
        return (
            <button onClick={this.props.getPostsRequested}>Click</button>
        );
    }
}

const mapStateToProps = (state: AppState) => ({posts: state.posts});

export default connect(mapStateToProps,
    { getPostsRequested },
)(PostsRedux);
