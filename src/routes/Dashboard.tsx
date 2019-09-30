import React, { Component } from "react";

import { PostsRedux } from "components/Posts/PostsRedux";

class Dashboard extends Component {
    render() {
        return (
            <div>
                Dashboard page
                <PostsRedux />
            </div>
        );
    }
}

export default Dashboard;
