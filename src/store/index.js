import { defineStore } from "pinia";

const useMainStore = defineStore({
	id: "main",
	state: () => ({
		currentUserObject: {},
		repoArray: [],
	}),
	actions: {
		SET_CURRENT_USER_OBJECT(val) {
			this.currentUserObject = val;
		},
		SET_REPO_ARRAY(val) {
			this.repoArray = val;
		},
	},
});

export default useMainStore;
