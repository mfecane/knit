<template>
	<div
		class="rounded-lg shadow-md overflow-hidden p-4"
		:class="{ 'group is-active bg-lime-900': isActive, 'bg-slate-600': !isActive }"
	>
		<div v-if="props.row.annotation" class="mb-2 ml-8 font-bold">{{ props.row.annotation }}</div>
		<div class="flex space-x-4 items-center">
			<div class="min-w-4 text-right font-bold">{{ props.index }}</div>
			<StitchGroup v-for="group in row.groups" :group="group" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import StitchGroup from '@/components/pattern/StitchGroup.vue'
import { usePattern } from '@/hooks/usePattern'
import { PatternRow } from '@/patterns/Types'

const props = withDefaults(defineProps<{ index?: number | null; row: PatternRow }>(), { index: null })

const patternStore = usePattern()

const isActive = computed(() => patternStore.index === props.index)
</script>

<style scoped lang="scss"></style>
