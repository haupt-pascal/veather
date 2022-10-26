<script lang="ts" setup>

</script>


<template>
    <div>
        <div class="temperature">
            <h3 class="temperature-title">
                temperature.
            </h3>
        </div>
    </div>
</template>


<style lang="scss" scoped>
    .temperature {
        width: 100%;
        height: 100%;
        background: #fff;
        border-radius: 15px;
        border: .5px solid transparent;
        outline: none;
        -webkit-box-shadow: 0px 2px 40px 0px rgba(0,0,0,0.025);
        -moz-box-shadow: 0px 2px 40px 0px rgba(0,0,0,0.025);
        box-shadow: 0px 2px 40px 0px rgba(0,0,0,0.025);

        &:hover {
            border: .5px solid #DEE2FF;
            -webkit-box-shadow: 0px 2px 40px 0px rgba(0,0,0,0.05);
            -moz-box-shadow: 0px 2px 40px 0px rgba(0,0,0,0.05);
            box-shadow: 0px 2px 40px 0px rgba(0,0,0,0.05);
        }

        .temperature-title {
            text-align: center;
            margin-top: 32px;
            margin-bottom: 32px;
            font-size: 25px;
        }
    }
</style>