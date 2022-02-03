//mina chave = f8e7c8e144141f715f6ec4d97755235f77ff0922

import axios from 'axios';

export const key= "f8e7c8e144141f715f6ec4d97755235f77ff0922";

const api = axios.create({
    baseURL: "https://api-ssl.bitly.com/v4",
    headers: {
        'Authorization': `Bearer ${key}`
    }
})

export default api;