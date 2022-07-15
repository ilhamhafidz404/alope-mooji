<template>
  <section class="grid lg:grid-cols-4 grid-cols-1">
    <div class="mr-5 flex items-center lg:justify-end justify-center">
      <div class="lg:text-right text-center">
        <h4 class="text-xl mb-5">
          🥇 Your highScore :
          <span class="font-semibold" v-if="highScore != 100000">{{
            highScore
          }}</span>
          <span class="font-semibold" v-else>😞</span>
        </h4>
        <button
          class="
            bg-[#ffb02e]
            border-2 border-[#f88e47]
            text-white
            px-10
            py-2
            rounded
            hover:bg-[#f1ad3f]
            mb-5
          "
          @click="sendRequestChangeDificult()"
        >
          Change Dificult
        </button>
        <br />
        <button
          class="
            bg-[#5092ff]
            border-2 border-[#2e7cfa]
            text-white
            px-10
            py-2
            rounded
            hover:bg-[#619af7]
            mb-5
          "
          @click="sendRequestResetGame()"
        >
          Reset
        </button>
      </div>
    </div>
    <main
      class="
        container
        mx-auto
        grid
        md:grid-cols-6
        grid-cols-4
        md:w-[730px]
        w-full
        md:box-content
        box-border
        shadow-md
        rounded
        p-10
        md:gap-5
        gap-3
        mb-12
        bg-white
        relative
        before:content-['😱']
        before:absolute
        before:top-1/2
        before:right-[-250px]
        before:-translate-y-1/2
        before:z-[-1]
        before:text-[300px]
      "
    >
      <figure
        class="md:w-[100px] md:h-[100px] w-[75px] h-[75px] relative rounded"
        v-for="(emojiCard, index) in emojiCards"
        :key="emojiCard"
      >
        <div
          class="
            card
            w-full
            h-full
            bg-gray-700
            hover:bg-gray-600
            absolute
            top-0
            z-10
            rounded
            flex
            items-center
            justify-center
            cursor-pointer
            bg-center bg-cover
            ease-in
            duration-300
            backCardEmoji
          "
          :id="'card' + index"
          @click="showCardRequest('card' + index, emojiCard)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 text-[#30343a]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
            />
          </svg>
        </div>
        <div
          class="
            w-full
            h-full
            bg-gradient-to-r
            from-[#821fc8]
            to-[#23add1]
            absolute
            top-0
            flex
            items-center
            justify-center
            rounded
            text-5xl
          "
        >
          {{ emojiCard }}
        </div>
      </figure>
    </main>
  </section>
</template>

<script>
export default {
  props: ["emojiCards", "highScore"],
  methods: {
    showCardRequest(id, emoji) {
      this.$emit("getRequestShowCard", id, emoji);
    },
    sendRequestResetGame() {
      this.$emit("getRequestResetGame");
    },
    sendRequestChangeDificult() {
      this.$emit("getRequestChangeDificult");
    },
  },
};
</script>

<style>
</style>