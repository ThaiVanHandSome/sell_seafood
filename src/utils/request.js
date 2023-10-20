import axios from 'axios';

const request = axios.create({
    baseURL: 'http://localhost:3000/api',
    timeout: 1000,
});

const get = async (path, options) => {
    const res = await request.get(path, options);
    return res.data;
};

export default get;
