import { LoginPayload, RegisterPayload } from '@/models/index';
import axiosClient from '@/api/axios-client';

export const authApi = {
    login(payload: LoginPayload) {
        return axiosClient.post('/erp/login', payload);
    },

    logout(token: string) {
        return axiosClient.delete(`/erp/logout/${token}`);
    },

    getProfile() {
        return axiosClient.get('/erp/profile');
    },

    register(payload: RegisterPayload) {
        return axiosClient.post('/erp/register', payload);
    },

    // applyPromotion(code: string) {
    //     const promotion = { code: code };
    //     return axiosClient.post('/promotion/apply-promotion', promotion);
    // },

    // changePassword(OldPassword: string, NewPassword: string) {
    //     return axiosClient.post('/users/change-password', {
    //         OldPassword: OldPassword,
    //         NewPassword: NewPassword,
    //     });
    // },
};
