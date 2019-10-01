import axios from "axios";

export const getPostsRequest = () => axios.get('http://localhost:8000/posts');