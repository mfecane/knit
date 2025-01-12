<template>
	<div class="container mx-auto p-4">
		<RowList :pattern="pattern2" />
	</div>
	<Controls />
</template>

<script setup lang="ts">
import RowList from '@/components/pattern/RowList.vue'
import Controls from '@/components/pattern/Controls.vue'
import pattern from '@/patterns/brioche_ver2.json'
import { Pattern } from '@/patterns/Types'

const pattern2 = pattern as unknown as Pattern
</script>

<style scoped lang="scss"></style>
