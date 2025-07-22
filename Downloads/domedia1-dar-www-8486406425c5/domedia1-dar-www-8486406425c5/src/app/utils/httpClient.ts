import axios from "axios";
const baseURL = "http://192.168.1.51:8000/api";

const api = axios.create({
	baseURL,
	withCredentials: true,
	headers: {
		"Content-Type": "application/json",
	},
});

export default api;
