import { createRouter, createWebHistory } from "vue-router";

const routes = [
	{
		path: "/",
		name: "Home",
		component: () => import("../pages/Home.vue"),
	},
	{
		path: "/lookup",
		name: "Lookup",
		component: () => import("../pages/Home.vue"),
	},
	{
		path: "/lookup/:username",
		name: "Lookup username",
		component: () => import("../pages/Lookup.vue"),
	},
	{
		path: "/user-not-found",
		name: "User Not Found",
		component: () => import("../pages/UserNotFound.vue"),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
