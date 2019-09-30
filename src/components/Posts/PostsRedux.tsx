import React, { Component } from "react";
import { connect } from "react-redux";

export class PostsRedux extends Component {
    render() {
        return (
            
            <div/>
        );
    }
}

const mapStateToProps = (state) => ({
    posts: 
});

export default connect(mapStateToProps, {
    sendPostRequested,
    fetchPostsRequested,
})(PostsRedux);
