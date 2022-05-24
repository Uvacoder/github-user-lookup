<template>
	<div
		class="bg-gradient-to-br from-black via-gray-700 to-gray-500 h-screen w-screen flex flex-col justify-center items-center"
	>
		<img class="h-20" src="/images/github.svg" alt="GitHub Logo" />
		<div class="mt-1 font-semibold text-4xl text-white">GitHub Lookup!</div>
		<div class="mt-3 flex justify-center items-center">
			<input
				class="outline-none w-80 rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
				placeholder="GitHub username"
				v-model="username"
			/>
			<button
				class="px-8 rounded-r-lg bg-green-400 font-bold p-4 border-green-500 border-t border-b border-r"
				@click="searchUser"
			>
				<img src="/images/arrow-right.svg" alt="Search Button" />
			</button>
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
