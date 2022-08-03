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

const editSinglePost = async (id, title, content, isPublished, photo, imgName) => {
    const formData = new FormData();
    if (photo) {
        formData.append('photo', photo);
    }
    formData.append('title', title);
    formData.append('content', content);
    formData.append('isPublished', isPublished);
    formData.append('imgName', imgName);

    try {
        await axios.put(`${baseURL}/${id}`, formData, getConfig());
    } catch(err) {
        console.log(err);
    }
}

export {
    fetchPosts,
    fetchSinglePost,
    editSinglePost,
}