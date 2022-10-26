<script lang="ts" setup>

</script>


<template>
    <div>
        <div class="city">
            <input type="text" placeholder="enter your city here...">
        </div>
    </div>
</template>


<style lang="scss" scoped>
    .city {
        margin: 10vh 0;
        display: flex;
        align-items: center;
        justify-content: center;
        input {
            width: 45%;
            padding: 16px 0;
            padding-left: 48px;
            border-radius: 500px;
            border: none;
            font-size: 14px;
            border: .5px solid transparent;
            outline: none;
            color: rgba($color: #000000, $alpha: .6);
            -webkit-box-shadow: 0px 2px 40px 0px rgba(0,0,0,0.025);
            -moz-box-shadow: 0px 2px 40px 0px rgba(0,0,0,0.025);
            box-shadow: 0px 2px 40px 0px rgba(0,0,0,0.025);

            &::placeholder {
                opacity: .6;
            }

            &:focus, &:hover {
                border: .5px solid #DEE2FF;
                color: rgba($color: #000000, $alpha: .6);
                -webkit-box-shadow: 0px 2px 40px 0px rgba(0,0,0,0.05);
                -moz-box-shadow: 0px 2px 40px 0px rgba(0,0,0,0.05);
                box-shadow: 0px 2px 40px 0px rgba(0,0,0,0.05);
            }
        }
    }
</style>