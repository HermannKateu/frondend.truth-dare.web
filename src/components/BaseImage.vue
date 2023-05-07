<template>
  <img :src="imageUrl" alt="image" />
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  path: {
    type: String,
    required: true,
  },
});

const imageUrl = computed<string>(
  () => new URL(`../assets/images/${props.path}`, import.meta.url).href
);
</script>
