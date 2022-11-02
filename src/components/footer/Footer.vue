<script lang="ts" setup>
import { ref } from "vue";

type FooterButton = {
  label: string;
  url: string;
};

const buttons = ref<FooterButton[]>([
  {
    label: "lorem ipsum",
    url: "https://haupt.design",
  },
  {
    label: "lorem ipsum",
    url: "https://haupt.design",
  },
]);

const footerbutton = ref<FooterButton[]>([
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
    <div class="footer">
      <div class="footer--left">
        <img src="../../assets/logo.png" />
      </div>
      <div class="footer--mid">
        <a
          v-for="navbarButton in buttons"
          :key="navbarButton.label"
          :href="navbarButton.url"
        >
          {{ navbarButton.label }}
        </a>
      </div>
      <div class="footer--right">
        <a
          v-for="navbarButton in footerbutton"
          :key="navbarButton.label"
          :href="navbarButton.url"
        >
          {{ navbarButton.label }}
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 7.5vh;
  padding: 0 5%;
  background: #fff;
  font-size: 14px;
  .footer--left {
    height: 100%;
    display: flex;
    align-items: center;
    img {
      height: 50%;
    }
  }
  .footer--mid {
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
  .footer--right {
    display: flex;
    align-items: center;
    a {
      background: #dee2ff;
      padding: 12px 32px;
      border-radius: 100px;
    }
  }
}

@media only screen and (max-width: 768px) {
  .footer {
    display: grid;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 32px 0;

    .footer--left {
      justify-content: center;
      img {
        height: auto;
        width: 20%;
      }
    }

    .footer--mid {
      justify-content: center;
      margin: 32px 0;
    }

    .footer--right {
      justify-content: center;
    }
  }
}
</style>
