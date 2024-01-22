import {configDotenv} from "dotenv";
configDotenv();
import axios from 'axios';

axios.defaults.baseURL = process.env.API_URL;

axios.get('')
    .then(response => {
        axios.defaults.xsrfCookieName = response.config.xsrfCookieName;
        axios.defaults.xsrfHeaderName = response.config.xsrfHeaderName;
    });

axios.post('api/login', {
    email: process.env.SOCKET_LOGIN,
    password: process.env.SOCKET_PASSWORD
})
    .then(response => {
        if(response.data.success) {
            axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
            console.log('Autenticação concluida');
        } else {
            console.log('Falha na autenticação, ligue a api e reinicie este servidor');
        }
    })
    .catch(() => {
        console.log('Falha na autenticação, ligue a api e reinicie este servidor');
    })

