<script lang="ts" setup>
import { ref } from "vue";  

type NavbarButton = {
    label: string;
    url: string;
}

const buttons = ref<NavbarButton[]>([{
    label: "lorem ipsum",
    url: "https://haupt.design"
},
{
    label: "lorem ipsum",
    url: "https://haupt.design"
}]);

const navbutton = ref<NavbarButton[]>([{
    label: "lorem ipsum",
    url: "https://haupt.design"
}]);

function navigationResponsive() {
    const navigationClass = document.querySelector('.nav');
    navigationClass?.classList.toggle('active');
}  
</script>


<template>
    <div>
        <div class="nav">
            <div class="nav--left">
                <img src="../../assets/logo.png"> 
            </div>
            <div class="nav--mid">
            <a v-for="navbarButton in buttons" :key="navbarButton.label" :href="navbarButton.url">
                {{ navbarButton.label }}
            </a>
        </div>
        <div class="nav--right">
            <a v-for="navbarButton in navbutton" :key="navbarButton.label" :href="navbarButton.url">
                {{ navbarButton.label }}
            </a>
        </div>
        </div>
        <div class="nav--right-responsive" v-on:click="navigationResponsive()">
            <span class="hamburger-bar">&nbsp;</span>
            <span class="hamburger-bar">&nbsp;</span>
            <span class="hamburger-bar">&nbsp;</span>
        </div>
    </div>



    
</template>
    
<style lang="scss" scoped>
    .nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 7.5vh;
        padding: 0 5%;
        background: #fff;
        font-size: 14px;
        .nav--left {
            height: 100%;
            display: flex;
            align-items: center;
            img {
                height: 50%;
            }
        }
        .nav--mid {
            display: flex;
            align-items: center;
            a {
                margin: 0 32px;

                &:first-child {
                    margin-left: 0;
                }
                &:last-child {
                    margin-right: 0;
                }

                &::after {
                    content : "";
                    width : 90%;
                    height : 15px;
                    background:  red;
                    opacity: 1; 
                    margin-top: -15px; 
                    -o-transition:.2s;
                    -ms-transition:.2s;
                    -moz-transition:.2s;
                    -webkit-transition:.2s;
                    transition:.2s;
                }

                &:hover {
                    &::after {
                        width: 90%;
                    }
                }
            }
        }
        .nav--right {
            display: flex;
            align-items: center;
            a {
                background: #DEE2FF;
                padding: 12px 32px;
                border-radius: 100px;
            }
        }
    }

    .nav--right-responsive {
        display: none;
    }

    @media only screen and (max-width: 1128px) {
        .nav {
            display: none;

            &.active {
                display: grid;
                justify-content: center;
                position: absolute;
                top: 7.5vh;
                left: 50%;
                transform: translateX(-50%);
                width: 100%;
                background: red;
                height: 25vh;

                .nav--left {
                    height: 15%;
                    img {
                        height: 100%;
                    }
                }

                .nav--mid {
                    display: grid;
                    justify-content: center;
                    align-items: center;
                }

                .nav--right {
                    display: grid;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                }
            }
        }

        .nav--right-responsive {
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin: 12px 0 0 12px;
            .hamburger-bar {
                height: 2px;
                width: 14px;
                background-color: #000;
                margin: 2px 0;

                &:first-child {
                    margin-top: 0;
                }
                &:last-child {
                    margin-bottom: 0;
                }
            }
        }
    }
</style>