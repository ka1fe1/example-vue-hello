import axios from 'axios'
import constant from '../util/constant/constant'

let instance = axios.create({
    baseUrl: constant.baseUrl,
    timeout: 10000, // 毫秒
});

instance.interceptors.response.use(
    function (response) {
        if (response.status === 200) {
            return response
        } else {
            // console.log(response);
            return
        }
    },
);

export default class Http {
    static get(url, params) {
        url = constant.baseUrl + url;
        return instance.get(url, {params: params}).then(function (response) {
            return response.data;
        })
    }

    static post(url, data) {
        url = constant.baseUrl + url;
        return instance.post(url, {data: data}).then(function (response) {
            if (response.status === 200) {
                return response.data;
            }
        })
    }
}

