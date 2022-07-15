<template>
  <h1
    class="
      bg-[#ffb02e]/10
      py-5
      mt-10
      text-center text-2xl
      font-semibold
      tracking-wider
      text-gray-700
    "
  >
    😀 HAPPY EMOTICON
  </h1>
  <div class="grid md:grid-cols-4 grid-cols-3 gap-3 p-10">
    <!-- Foreach keluarkan semua emoticons as emoticon -->
    <section
      v-for="emoticon in emoticons"
      :key="emoticon.id"
      class="
        border
        rounded
        md:text-3xl
        text-base text-center
        hover:bg-gray-100
        cursor-pointer
        whitespace-nowrap
        overflow-hidden
      "
      @click="requestCopyThisEmoticon(emoticon.emoticon)"
    >
      <!-- Jika emoticon sudah di copy/ada di clipboard maka style unique -->
      <div
        :class="{ 'bg-gray-100 px-2 py-3': clipboardCopy == emoticon.emoticon }"
        class="px-2 py-3"
      >
        {{ emoticon.emoticon }}
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: ["emoticons", "clipboardCopy"],
  methods: {
    requestCopyThisEmoticon(emoticon) {
      this.$emit("getRequestCopy", emoticon);
    },
  },
};
</script>

<style>
</style>