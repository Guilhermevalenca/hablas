import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_URL_API;

if(localStorage.getItem('token')) {
    axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('token')}`;
    axios.defaults.withCredentials = true;
}

axios.get('')
    .then(response => {
        axios.defaults.xsrfCookieName = response.config.xsrfCookieName;
        axios.defaults.xsrfHeaderName = response.config.xsrfHeaderName;
    });
