<template>
	<div v-if="props.group.repeat">...</div>
	<Stitch v-for="s in props.group.stitches" :stitch="s" />
	<div v-if="props.group.repeat">...</div>
</template>

<script setup lang="ts">
import Stitch from '@/components/pattern/Stitch.vue'
import { PatternStitchGroup } from '@/patterns/Types'

const props = defineProps<{ group: PatternStitchGroup }>()
</script>

<style scoped lang="scss"></style>
