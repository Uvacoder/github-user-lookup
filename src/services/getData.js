import axios from "axios";

export default {
	getUserData: async (username) => {
		try {
			const response = await axios.get(
				`https://api.github.com/users/${username}`
			);
			return response.data;
		} catch (error) {
			console.log(error);
		}
	},
	getAllRepos: async (username, pageNumber) => {
		try {
			const response = await axios.get(
				`https://api.github.com/users/${username}/repos?per_page=10&page=${pageNumber}`
			);
			return response;
		} catch (error) {
			console.log(error);
		}
	},
};
