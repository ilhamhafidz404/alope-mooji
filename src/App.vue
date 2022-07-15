<script setup>
import navbarComponent from "@/components/navbarComponent.vue";
import headerComponent from "@/components/headerComponent.vue";
import aboutComponent from "@/components/aboutComponent.vue";
import toastComponent from "@/components/toastsComponent.vue";
import stickSidenavComponent from "@/components/stickSidenavComponent.vue";
import footerComponent from "@/components/footerComponent.vue";
</script>

<template>
  <!-- <navbarComponent></navbarComponent> -->
  <toastComponent id="toast" class="animation z-[101]">{{
    clipboard
  }}</toastComponent>
  <main class="">
    <stickSidenavComponent></stickSidenavComponent>
    <router-view
      @copiedToClipboard="changeToastClipboard"
      :clipboardCopy="clipboard"
    ></router-view>
  </main>
  <footerComponent></footerComponent>
</template>

<script>
export default {
  data() {
    return {
      clipboard: "",
    };
  },
  methods: {
    changeToastClipboard(clipboard) {
      // ambil element toast nya
      const toast = document.querySelector("#toast");
      setTimeout(function () {
        // style toast
        toast.classList.remove("hidden");
        toast.classList.add("animation");
        // dan jika sudah 3 detik toast nya ditampilkan, hilangkan dengan hidden(display: none)
        setTimeout(function () {
          toast.classList.add("hidden");
        }, 3000);
      }, 200);
      // ubah data model clipboard jadi emoji yang dipilih
      this.clipboard = clipboard;
    },
  },
};
</script>

<style>
body {
  overflow-x: hidden;
}
* {
  font-family: "Poppins", sans-serif;
}
.animation {
  animation: showToast 3700ms;
}
@keyframes showToast {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
