<template>
    <div class="text-center py-3" :style="{
        background: color
    }">
        {{ label }}
    </div>
</template>

<script setup lang="ts">
defineProps({
    label: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    }
})
</script>