import axios from "axios";
import router from "../router";

export default {
	getUserData: async (username) => {
		try {
			const response = await axios.get(
				`https://api.github.com/users/${username}`
			);
			return response.data;
		} catch (error) {
			if (error.response.data?.message === "Not Found") {
				router.push("/user-not-found");
			} else {
				console.error(error);
			}
		}
	},
	getAllRepos: async (username, pageNumber) => {
		try {
			const response = await axios.get(
				`https://api.github.com/users/${username}/repos?per_page=10&page=${pageNumber}`
			);
			return response;
		} catch (error) {
			if (error.response.data?.message === "Not Found") {
				router.push("/user-not-found");
			} else {
				console.error(error);
			}
		}
	},
};
