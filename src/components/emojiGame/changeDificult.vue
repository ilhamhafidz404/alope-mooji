<script setup>
import headerGame from "./header.vue";
</script>
<template>
  <div
    id="dificultGameModal"
    class="
      hidden
      fixed
      items-center
      justify-center
      w-full
      h-full
      z-10
      left-1/2
      top-1/2
      -translate-x-1/2 -translate-y-1/2
      rounded-md
      before:content-[''] before:absolute before:inset-0 before:bg-gray-900/80
    "
    @click="closeDificultModal()"
  >
    <section
      class="
        flex
        items-center
        justify-center
        px-10
        py-5
        bg-white
        rounded-md
        z-[100]
      "
    >
      <div class="text-center">
        <h2 class="text-3xl text-center mb-7">Change Dificult</h2>
        <button
          @click="changeDificultRequest('easy')"
          class="
            bg-[#fdc56b]
            hover:bg-[#fdc56b]/80
            px-10
            py-2
            rounded
            text-white
            mx-3
          "
        >
          🤡 Easy
        </button>
        <br class="md:hidden block" />
        <button
          @click="changeDificultRequest('normal')"
          class="
            bg-[#657fff]
            hover:bg-[#657fff]/80
            px-10
            py-2
            rounded
            text-white
            mx-3
            md:my-0
            my-4
          "
        >
          🤔 Normal
        </button>
        <br class="md:hidden block" />
        <button
          @click="changeDificultRequest('hard')"
          class="
            bg-[#f86c6c]
            hover:bg-[#f86c6c]/80
            px-10
            py-2
            rounded
            text-white
            mx-3
          "
        >
          🤯 Hard
        </button>
      </div>
    </section>
  </div>
  <headerGame @getRequestOpenDificultModal="openDificultModal"></headerGame>
</template>

<script>
export default {
  methods: {
    changeDificultRequest(dificult) {
      this.$emit("getRequestChangeDificult", dificult);
    },
    openDificultModal() {
      const modal = document.querySelector("#dificultGameModal");
      modal.classList.remove("hidden");
      modal.classList.add("flex");
    },
    closeDificultModal() {
      const modal = document.querySelector("#dificultGameModal");
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    },
    // closeEmojiGameModal() {
    //   const modal = document.querySelector("#dificultGameModal");
    //   modal.classList.add("hidden");
    //   modal.classList.remove("flex");
    // },
  },
};
</script>

<style scoped>
/* h1 {
  font-family: "Cookie", cursive;
} */
</style>