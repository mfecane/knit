<template>
	<div class="fixed bottom-0 bg-gray-800 w-full">
		<div class="container mx-auto py-8 flex gap-4">
			<Button @click="patternStore.back()" type="big">Back</Button>
			<Button @click="patternStore.next()" type="big">Next</Button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { usePattern } from '@/hooks/usePattern'
import Button from '../common/Button.vue'

const patternStore = usePattern()
</script>

<style scoped lang="scss"></style>
