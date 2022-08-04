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
            : `${baseURL}/unpublished`;

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

const editSinglePost = async (id, post, photo) => {
    const formData = new FormData();
    if (photo) {
        formData.append('photo', photo);
    }
    formData.append('title', post.title);
    formData.append('content', post.content);
    formData.append('isPublished', post.isPublished);
    formData.append('imgName', post.imgName);

    try {
        await axios.put(`${baseURL}/${id}`, formData, getConfig());
    } catch(err) {
        console.log(err);
    }
}

const createPost = async (post, photo) => {
    const formData = new FormData();
    formData.append('photo', photo);
    formData.append('title', post.title);
    formData.append('content', post.content);
    formData.append('isPublished', post.isPublished);

    try {
        await axios.post(baseURL, formData, getConfig());
    } catch(err) {
        console.log(err);
    }
}

const deletePost = async (postId) => {
    try {
        await axios.delete(`${baseURL}/${postId}`, getConfig());
    } catch(err) {
        console.log(err);
    }
}

export {
    fetchPosts,
    fetchSinglePost,
    editSinglePost,
    createPost,
    deletePost
}