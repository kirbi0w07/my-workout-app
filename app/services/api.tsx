import { create } from "axios";

export const API_BASE_URL = 'http://192.168.100.11:8000/api';

const api = create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

export default api;