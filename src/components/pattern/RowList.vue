<template>
	<div class="flex flex-col space-y-4">
		<Row v-if="props.pattern.setup_row" :row="props.pattern.setup_row" />
		<Row v-for="(p, index) in props.pattern.rows" :index="index" :row="p" />
	</div>
</template>

<script setup lang="ts">
import Row from '@/components/pattern/Row.vue'
import { Pattern } from '@/patterns/Types'

const props = defineProps<{ pattern: Pattern }>()
</script>

<style scoped lang="scss"></style>
