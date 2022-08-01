import axios from 'axios';

const baseURL = "http://localhost:3000/api/posts";

const fetchPosts = async () => {
    try {
        const posts = await axios.get(baseURL);
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

export {
    fetchPosts,
    fetchOnePost
};