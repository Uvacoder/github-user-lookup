<template>
	<div class="flex justify-center">
		<div class="flex justify-between items-center w-8/12">
			<div class="flex w-4/6">
				<!-- back arrow -->
				<div class="flex items-start mr-8">
					<a @click="$router.back()" class="cursor-pointer"
						><img src="/images/arrow-left.svg" alt=""
					/></a>
				</div>
				<!-- profile image -->
				<img
					class="h-40 rounded-full border-4 border-green-400"
					:src="userData.avatar_url"
					alt="Profile Picture"
				/>
				<div class="flex flex-col justify-center w-5/12 ml-3">
					<!-- name and social media -->
					<div class="flex">
						<div
							v-if="userData.name != null"
							class="mr-3 text-2xl font-medium text-white"
						>
							{{ userData.name }}
						</div>
						<div
							v-if="userData.name != null"
							class="border-r-2 border-green-400"
						></div>
						<div
							class="flex"
							:class="{ ' ml-3': userData.name != null }"
						>
							<a :href="userData.html_url" target="_blank">
								<img
									class="h-7"
									src="/images/github.svg"
									alt="Github Logo"
								/>
							</a>
							<a
								v-if="userData.twitter_username != null"
								:href="`https://www.twitter.com/${userData.twitter_username}`"
								target="_blank"
								><img
									class="h-7 ml-2"
									src="/images/twitter.svg"
									alt="Twitter Logo"
							/></a>
						</div>
					</div>
					<!-- username -->
					<div>
						<a
							class="text-green-400"
							:href="userData.html_url"
							target="_blank"
							>@{{ userData.login }}</a
						>
					</div>
					<!-- user-bio -->
					<div class="mt-1 text-white">
						{{ userData.bio }}
					</div>
					<div class="flex mt-1">
						<img
							class="h-6"
							src="/images/account-arrow-left.svg"
							alt="Follower count"
						/>
						<div class="ml-2 text-white">
							{{ userData.followers }}
						</div>
						<img
							class="h-6 ml-3"
							src="/images/account-arrow-right.svg"
							alt="Following count"
						/>
						<div class="ml-2 text-white">
							{{ userData.following }}
						</div>
					</div>
				</div>
			</div>
			<div>
				<!-- user location & hireable status -->
				<div
					class="ml-3 mr-3 flex flex-col justify-center items-center"
				>
					<div
						v-if="userData.location != null"
						class="flex items-center"
					>
						<img src="/images/map-marker.svg" alt="Location" />
						<div class="text-white ml-2">
							{{ userData.location }}
						</div>
					</div>
					<div
						v-if="userData.hireable === true"
						class="bg-green-500 text-white text-s font-semibold px-3 py-1 rounded mt-3"
					>
						Open to Work
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
import getData from "../services/getData";
const props = defineProps({
	username: {
		type: String,
		required: true,
	},
});

async function _fetchProfileData(username) {
	let response = await getData.getUserData(username);
	return response;
}

let userData = await _fetchProfileData(props.username);
</script>
<style></style>
