<template>
	<div
		class="bg-gradient-to-br from-black via-gray-700 to-gray-500 flex flex-col justify-center items-center h-screen w-screen"
	>
		<router-link :to="'/'"
			><img class="h-20" src="/images/github.svg" alt="GitHub Logo"
		/></router-link>
		<div class="mt-1 text-4xl text-red-500">User not found</div>
		<div class="mt-1 text-2xl text-white">Please try again</div>

		<div class="mt-3 flex justify-center items-center">
			<form
				v-on:submit.prevent="searchUser"
				class="flex justify-center items-center"
			>
				<input
					class="outline-none w-80 rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
					placeholder="GitHub username"
					v-model="username"
				/>
				<button
					class="px-8 rounded-r-lg bg-green-400 font-bold p-4 border-green-500 border-t border-b border-r"
					type="submit"
				>
					<img src="/images/arrow-right.svg" alt="Search Button" />
				</button>
			</form>
		</div>
	</div>
</template>
<script setup>
import { ref } from "vue";
import router from "../router";
let username = ref("");
function searchUser() {
	router.push(`/lookup/${username.value}`);
}
</script>
<style></style>
