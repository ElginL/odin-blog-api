import axios from 'axios';

const baseURL = 'http://localhost:3000/api/posts';

const getConfig = () => {
    return {
        headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}`}
    }
}

const fetchPosts = async isPublished => {
    try {
        const URL = isPublished
            ? `${baseURL}/published`
            : `${baseURL}/unpublished`

        const response = await axios.get(URL);
        return response.data;
    } catch(err) {
        console.log(err);
    }
}

const fetchSinglePost = async id => {
    try {
        const response = await axios.get(`${baseURL}/${id}`);
        return response.data;
    } catch(err) {
        console.log(err);
    }
}

const editSinglePost = async (id, title, content, isPublished) => {
    try {
        const response = await axios.put(`${baseURL}/${id}`, {
            title,
            content,
            isPublished
        }, getConfig());
    } catch(err) {
        console.log(err);
    }
}

export {
    fetchPosts,
    fetchSinglePost,
    editSinglePost
}