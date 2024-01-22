import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_URL_API;

const controller = new AbortController();
axios.interceptors.request.use((config) => {
    config.signal = controller.signal;
    return config;
}, function (error) {
    return Promise.reject(error);
});
axios.interceptors.response.use(function (response) {
    return response;
},function (error) {
    if(error.response && error.response.status === 401) {
        localStorage.removeItem('token');
        document.dispatchEvent(new Event('isLogged'));
    }
    return Promise.reject(error);
});

axios.get('')
    .then(response => {
        axios.defaults.xsrfCookieName = response.config.xsrfCookieName;
        axios.defaults.xsrfHeaderName = response.config.xsrfHeaderName;
    });

if(localStorage.getItem('token')) {
    axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('token')}`;
    axios.defaults.withCredentials = true;
}

export {
    controller
};
