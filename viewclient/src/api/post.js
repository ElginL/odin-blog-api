import axios from 'axios';

const baseURL = "https://blogspace-api.herokuapp.com/api/posts";

const fetchPosts = async () => {
    try {
        const posts = await axios.get(`${baseURL}/published`);
        return posts.data;
    } catch (err) {
        console.log(err);
    }
};

const fetchOnePost = async id => {
    try {
        const post = await axios.get(`${baseURL}/${id}`);
        return post.data;
    } catch (err) {
        console.log(err);
    }
}

const fetchComments = async id => {
    try {
        const comments = await axios.get(`${baseURL}/${id}/comments`);
        return comments.data;
    } catch (err) {
        console.log(err);
    }
}

const addComment = async (id, username, comment) => {
    try {
        const response = await axios.post(`${baseURL}/${id}/comments`, {
            username,
            text: comment
        })
    } catch (err) {
        console.log(err);
    }
}

export {
    fetchPosts,
    fetchOnePost,
    fetchComments,
    addComment
};