import axios from 'axios';

const baseURL = `https://blogspace-api.herokuapp.com/api/users`;

const login = async (username, password) => {
    try {
        const response = await axios.post(`${baseURL}/login`, {
            username,
            password
        });

        sessionStorage.setItem('token', response.data.token);
        sessionStorage.setItem('username', response.data.username);
    } catch(err) {
        return err.response.data.message;
    }
}

export {
    login
};