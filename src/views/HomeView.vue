<script setup lang="ts">
import City from '@/components/panel/City.vue'
import Ipsum from '@/components/panel/Ipsum.vue'
import Temperature from '@/components/panel/Temperature.vue'
</script>

<script lang="ts">

</script>

<template>
    <div>
        <div class="container">
            <City />
        </div>
        <div class="grid-container">
            <Temperature />
            <div class="container">
                <Ipsum />
                <Ipsum />
                <Ipsum />
                <Ipsum />
            </div>
        </div>
    </div>
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
