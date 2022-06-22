import axios from 'axios';
import { baseURL } from './const';

const axionsInstance = axios.create({
	baseURL,
});

const headers = {};

export const getData = async (url, token = '') => {
	try {
		if (token) headers['Authorization'] = token;
		const newUrl = url.includes('?') ? `${url}&requestId=${Math.random() * new Date()}` : `${url}?requestId=${Math.random() * new Date()}`;
		const res = await axionsInstance.get(encodeURI(`${newUrl}`), {
			headers,
		});

		if (res && res.status === 200) {
			return res.data;
		} else {
			return false;
		}
	} catch (err) {
		console.log(err);
		return false;
	}
};

export const postData = async (url, data) => {
	try {
		const res = await axionsInstance.post(encodeURI(`${url}`), data, {
			headers: {
				Authorization: localStorage.getItem('token'),
			},
		});

		if (res && res.status === 200) {
			return res.data.data;
		} else {
			return false;
		}
	} catch (err) {
		console.log(err);
		return false;
	}
};

export const putData = async (url, data) => {
	try {
		const res = await axionsInstance.put(encodeURI(`${url}`), data, {
			headers: {
				Authorization: localStorage.getItem('token'),
			},
		});

		if (res && res.status === 200) {
			return res.data;
		} else {
			return false;
		}
	} catch (err) {
		console.log(err);
		return false;
	}
};

export const deleteData = async (url, data) => {
	try {
		const res = await axionsInstance.delete(encodeURI(`${url}`));

		if (res && res.status === 200) {
			return res.data;
		} else {
			return false;
		}
	} catch (err) {
		console.log(err);
		return false;
	}
};

export default axionsInstance;
