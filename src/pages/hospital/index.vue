<template>
    <div>
            我是hospital组件
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
onMounted(() => {
    console.log('我是hospital的挂载');
})
</script>

<style scoped>

</style>