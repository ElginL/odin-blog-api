import axios from 'axios';

const baseURL = 'http://localhost:3000/api/posts';

const fetchPosts = async isPublished => {
    try {
        const URL = isPublished
            ? `${baseURL}/published`
            : `${baseURL}/unpublished`

        const response = axios.get(URL);
        return (await response).data;
    } catch(err) {
        console.log(err);
    }
}

export {
    fetchPosts
}