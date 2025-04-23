import axios from 'axios';

const getAxiosClient = () => {
    const client = axios.create({
        baseURL: import.meta.env.VITE_BASE_URL,
        headers: {
        'Content-Type': 'application/json',
        },
    });
    
    // client.interceptors.request.use(
    //     (config) => {
    //     const token = localStorage.getItem('token');
    //     if (token) {
    //         config.headers.Authorization = `Bearer ${token}`;
    //     }
    //     return config;
    //     },
    //     (error) => Promise.reject(error)
    // );
    
    return client;
}

export {getAxiosClient};