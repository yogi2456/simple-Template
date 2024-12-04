import axios from "axios";


const api = axios.create({
    baseURL: "simple-template-8x7pn89mk-yogeshs-projects-4baeebc1.vercel.app",
    // baseURL: process.env.ENV === "DEVELOPMENT" ? "http://localhost:3003/api/v1" : "https://awdiz-6.com",
    withCredentials: true,
});

export default api;