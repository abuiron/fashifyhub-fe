import axios from 'axios'

// export const axiosi=axios.create({withCredentials:true,baseURL:process.env.REACT_APP_BASE_URL})


export const axiosi = axios.create({
    withCredentials: true,
    baseURL: import.meta.env.VITE_APP_BASE_URL
});
