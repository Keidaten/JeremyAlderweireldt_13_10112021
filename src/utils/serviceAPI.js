import axios from 'axios';

export const postLogin = (user) => {
	return axios.post('http://localhost:3001/api/v1/user/login', user);
};

export const postUser = (authorization) => {
	return axios.post('http://localhost:3001/api/v1/user/profile', {}, { headers: authorization });
};

export const putUser = (body, authorization) => {
	return axios.put('http://localhost:3001/api/v1/user/profile', body, { headers: authorization });
};
