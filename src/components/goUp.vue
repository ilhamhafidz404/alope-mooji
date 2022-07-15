<template>
  <div
    class="
      z-50
      fixed
      shadow-md shadow-[#ffbf57]
      right-10
      bottom-10
      text-gray-700
      hover:-translate-y-1
      ease-in
      bg-white
      p-2
      rounded-full
      cursor-pointer
    "
    @click="goUpRequest()"
  >
    👆
  </div>
</template>

<script>
export default {
  methods: {
    goUpRequest() {
      this.$emit("getGoUpRequest");
    },
  },
};
</script>

<style>
</style>