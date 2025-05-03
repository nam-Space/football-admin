import axios from "config/axios.customize";

// user
export const callLogin = ({ email, password }) => {
    return axios.post(`/api/users/login`, {
        email,
        password,
    });
};

export const callLoginAdmin = ({ email, password }) => {
    return axios.post(`/api/users/login-admin`, {
        email,
        password,
    });
};

export const callLogout = () => {
    return axios.get(`/api/users/logout`);
};

export const callGetUsers = () => {
    return axios.get(`/api/users`)
}

export const callUpdateUser = (id, data) => {
    return axios.put(`/api/users/${id}`, { ...data })
}

export const callCreateUser = (data) => {
    return axios.post(`/api/users/create`, { ...data })
}

export const callDeleteUser = (_id) => {
    return axios.delete(`/api/users/delete/${_id}`)
}