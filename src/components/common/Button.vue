<template>
	<button
		class="bg-orange-300 text-black font-semibold rounded-lg shadow-md hover:bg-white focus:outline-none focus:ring-2 focus:ring-orange-900 focus:ring-opacity-75"
		:class="clas"
	>
		<slot />
	</button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{ type: 'big' | 'medium' }>(), { type: 'medium' })

const clas = computed(() => {
	switch (props.type) {
		case 'big':
			return 'text-3xl px-8 py-4'
		case 'medium':
			return 'py-2 px-4'
		default:
			throw new Error('Unreachable')
	}
})
</script>

<style scoped lang="scss"></style>
