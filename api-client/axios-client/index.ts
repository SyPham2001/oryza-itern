import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { CookieStoreControl } from '@/hooks/cookie-storage';
const OACCOUNT_DOMAIN = process.env.NEXT_PUBLIC_OACCOUNT_DOMAIN || '';

const axiosClient = axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

const EXCEPTION_MESSAGE = {
    '401': {
        R_TOKEN_NOT_EXIST: 'R_TOKEN_NOT_EXIST',
        R_TOKEN_EXPIRED: 'R_TOKEN_EXPIRED',
        A_TOKEN_EXPIRED: 'A_TOKEN_EXPIRED',
        DATA_NOT_VALIDAT: 'DATA_NOT_VALIDATE',
        USER_NOT_EXIST: 'USER_NOT_EXIST',
    },
    '404': {
        COMPANY_NOT_fOUND: 'COMPANY_NOT_fOUND',
    },
};

const cookieInstance = CookieStoreControl.getInstance();
axiosClient.interceptors.request.use(
    async (config: AxiosRequestConfig) => {
        const accessToken = cookieInstance.token.get_access_token();
        const refeshToken = cookieInstance.token.get_refesh_token();

        if (!refeshToken) {
            cookieInstance.token.remove_access_token();
            window.location.replace(OACCOUNT_DOMAIN);
        }

        if (accessToken) {
            config.headers = { ...config.headers, ['Authorization']: 'Bearer ' + accessToken };
        }

        return config;
    },
    (err: AxiosError) => {
        return Promise.reject(err);
    }
);

axiosClient.interceptors.response.use(
    async (response: AxiosResponse) => {
        return response;
    },

    async (err: AxiosError) => {
        if (err.response && err.response?.data) {
        } else {
            return Promise.reject(err);
        }
        const { statusCode, message } = err.response?.data;
        const rf_token = cookieInstance.token.get_refesh_token();

        if (statusCode === 401) {
            switch (message) {
                case 'R_TOKEN_NOT_EXIST':
                case 'R_TOKEN_EXPIRED':
                    cookieInstance.token.remove_access_token();
                    window.location.replace(OACCOUNT_DOMAIN);
                    return Promise.reject(err);

                case 'DATA_NOT_VALIDATE':
                    return Promise.reject(err);

                case 'USER_NOT_VALIDATE':
                case 'A_TOKEN_EXPIRED':
                case 'Unauthorized':
                    if (rf_token) {
                        // const res = await axiosClient.get(`renew-token/${rf_token}`);
                        // console.log('test test test : 1', data);
                        try {
                            const res = await axiosClient.get(`/erp/renew-token/${rf_token}`);
                            const { message, accessToken, expired } = res.data;
                            if (message === 'RENEW_SUCCESS') {
                                cookieInstance.token.set_access_token(accessToken, expired);
                                return axiosClient(err.config);
                            } else {
                                if (window) {
                                    const url = process.env.NEXT_PUBLIC_OACCOUNT_DOMAIN as string;
                                    window.location.replace(url);
                                }
                            }
                        } catch (err) {
                            return Promise.reject(err);
                        }

                        const data: any = await axiosClient.get(`/erp/renew-token/${rf_token}`);

                        const { message, accessToken, expired } = data;

                        if (message === 'RENEW_SUCCESS') {
                            cookieInstance.token.set_access_token(accessToken, expired);
                            return await axiosClient(err.config);
                        } else {
                            cookieInstance.token.remove_access_token();
                            cookieInstance.token.remove_refesh_token();

                            if (window) {
                                const url = process.env.NEXT_PUBLIC_OACCOUNT_DOMAIN as string;
                                window.location.replace(url);
                            }
                        }
                    } else {
                        cookieInstance.token.remove_access_token();
                        const url = process.env.NEXT_PUBLIC_OACCOUNT_DOMAIN as string;
                        window.location.replace(url);
                        return Promise.reject(err);
                    }
                    break;

                default:
                    return Promise.reject(err);
            }
        } else {
            return Promise.reject(err);
        }
    }
);

export default axiosClient;
