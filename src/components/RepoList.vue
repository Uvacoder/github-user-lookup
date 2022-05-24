<template>
	<div class="flex justify-center mt-4">
		<div
			class="grid grid-cols-2 gap-px w-8/12 columns-2 bg-gray-800 rounded-lg overflow-auto p-4"
			style="height: 65vh"
			:key="componentKey"
		>
			<!-- repository details -->
			<div
				v-for="repo in repoData.data"
				:key="repo.id"
				class="border-2 border-green-400 rounded-lg p-2 m-2"
			>
				<div class="flex">
					<!-- repo name -->
					<div class="font-medium text-lg text-white">
						{{ repo.name }}
					</div>
					<div class="flex-grow"></div>
					<!-- deployment link -->
					<a
						v-if="repo.homepage"
						:href="repo.homepage"
						target="_blank"
						><img src="/images/web.svg" alt="Deployment Link"
					/></a>
					<!-- repository link -->
					<a :href="repo.html_url" target="_blank"
						><img src="/images/launch.svg" alt="Repository Link"
					/></a>
				</div>
				<!-- repo description -->
				<div class="mt-2 text-white">
					{{ repo.description }}
				</div>
				<!-- repo topics -->
				<div class="flex flex-wrap mt-4">
					<div
						v-if="repo.topics.length > 0"
						v-for="topic in repo.topics"
						key="i"
						class="mx-1 my-0.5 font-normal text-xs border-2 px-2 py-0.5 border-green-400 text-green-400 rounded-md"
					>
						{{ topic }}
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- paginator -->
	<div v-if="repoData.headers.link" class="flex justify-center">
		<Pagination
			:pageCount="pageCount"
			v-model:currentPage="currentPage"
			@onChange="onPaginationChange"
		/>
	</div>
</template>

<script setup>
import { ref } from "vue";
import Pagination from "./Pagination.vue";
import getData from "../services/getData";

const props = defineProps({
	username: {
		type: String,
		required: true,
	},
});

let componentKey = ref(0);
let currentPage = ref(1);
let repoData = ref([]);

async function _fetchRepos(username, pageNo) {
	let response = await getData.getAllRepos(username, pageNo);
	return response;
}

repoData.value = await _fetchRepos(props.username, 1);

let pageCount = repoData.value.headers.link
	? parseInt(
			repoData.value.headers.link
				.split(", ")[1]
				.split("&page=")[1]
				.split(">")[0]
	  )
	: 0;

const onPaginationChange = async (currentPage) => {
	repoData.value = await _fetchRepos(props.username, currentPage);
	componentKey++;
};
</script>

<style></style>
