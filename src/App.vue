<template>
	<router-view v-slot="{ Component }">
		<component :is="Component" />
	</router-view>
</template>

<script setup></script>

<style>
::-webkit-scrollbar {
	width: 8px;
	margin-right: 1px;
}

::-webkit-scrollbar-track {
	background-color: white;
	border-radius: 5px;
}

::-webkit-scrollbar-thumb {
	background-color: #4ade80;
	border-radius: 5px;
}
</style>
