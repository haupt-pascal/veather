<script lang="ts" setup>
import { ref } from "vue";

type NavbarButton = {
  label: string;
  url: string;
};

const buttons = ref<NavbarButton[]>([
  {
    label: "lorem ipsum",
    url: "https://haupt.design",
  },
  {
    label: "lorem ipsum",
    url: "https://haupt.design",
  },
]);

const navbutton = ref<NavbarButton[]>([
  {
    label: "lorem ipsum",
    url: "https://haupt.design",
  },
]);

function navigationResponsive() {
  const navigationClass = document.querySelector(".nav");
  navigationClass?.classList.toggle("active");
}
</script>

<template>
  <div>
    <div class="nav">
      <div class="nav--left">
        <img src="../../assets/logo.png" />
      </div>
      <div class="nav--mid">
        <a
          v-for="navbarButton in buttons"
          :key="navbarButton.label"
          :href="navbarButton.url"
        >
          {{ navbarButton.label }}
        </a>
      </div>
      <div class="nav--right">
        <a
          v-for="navbarButton in navbutton"
          :key="navbarButton.label"
          :href="navbarButton.url"
        >
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
    width: 33%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    img {
      width: 15%;
    }
  }
  .nav--mid {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 33%;
    a {
      margin: 0 32px;

      &:first-child {
        margin-left: 0;
      }
      &:last-child {
        margin-right: 0;
      }

      &::after {
        content: "";
        width: 90%;
        height: 15px;
        background: red;
        opacity: 1;
        margin-top: -15px;
        -o-transition: 0.2s;
        -ms-transition: 0.2s;
        -moz-transition: 0.2s;
        -webkit-transition: 0.2s;
        transition: 0.2s;
      }

      &:hover {
        &::after {
          width: 90%;
        }
      }
    }
  }
  .nav--right {
    width: 33%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    a {
      background: #dee2ff;
      padding: 12px 32px;
      border-radius: 100px;
    }
  }
}

.nav--right-responsive {
  display: none;
  cursor: pointer;
}

@media only screen and (max-width: 1128px) {
  .nav {
    display: none;

    &.active {
      display: grid;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 7.5vh;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      height: 50vh;
      z-index: 9999999;

      .nav--left {
        width: 100%;
        justify-content: center;
        img {
          width: 20%;
        }
      }

      .nav--mid {
        display: grid;
        justify-content: center;
        align-items: center;
        z-index: inherit;
        margin: 0 auto;

        a {
          margin: 6px 0;

          &:first-child {
            margin-top: 32px;
          }
          &:last-child {
            margin-bottom: 32px;
          }
        }
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
    height: 7.5vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 24px;
    background: white;
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
