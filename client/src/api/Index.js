import axios from "axios";

const URL = 'http://localhost:5000/posts';

export const fetchPosts = () => {
    return axios.get(URL);
}

export const createPost = (newPost) => axios.post(URL, newPost);

export const updatePost = (id, updatedPost) => {
    return axios.patch(`${URL}/${id}`, updatedPost);  
}

export const deletePost = (id) => {
    return axios.delete(`${URL}/${id}`);
}

export const likePost = (id) => {
    return axios.patch(`${URL}/${id}/likePost`);
}