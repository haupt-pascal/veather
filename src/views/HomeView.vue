<script setup lang="ts">
import Panel from '@/components/panel/Panel.vue'
</script>

<script lang="ts">

</script>

<template>
    <Panel />
</template>

<style lang="scss" scoped>
    .container {
        width: 100%;
    }

    .grid-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 32px;
        height: 100%;
        min-height: 60vh;
        width: 100%;
        padding: 0 5%;
        .container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 32px;
        }
    }

</style>
