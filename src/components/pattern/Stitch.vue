<template>
	<div
		class="rounded-lg bg-white text-gray-600 px-2 py-4 font-bold group-[.is-active]:bg-lime-200 min-w-24 align-middle text-center"
	>
		{{ stitch.name }}
	</div>
</template>

<script setup lang="ts">
import { PatternStitch } from '@/patterns/Types'

const props = defineProps<{ stitch: PatternStitch }>()
</script>

<style scoped lang="scss"></style>
