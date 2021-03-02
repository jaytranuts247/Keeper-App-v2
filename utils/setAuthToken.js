import axios from "axios";

const setAuthToken = (token) => {
	if (token) {
		console.log("axios.defaults.headers", axios.defaults.headers);
		axios.defaults.headers.common["x-auth-token"] = token;
	} else {
		delete axios.defaults.headers.common["x-auth-token"];
	}
};

export default setAuthToken;
