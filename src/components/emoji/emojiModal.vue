<template>
  <section
    class="hidden fixed bg-black/60 top-0 bottom-0 left-0 right-0 z-[100]"
    id="overlay"
  >
    <div
      class="
        bg-white
        rounded
        shadow
        absolute
        top-1/2
        left-1/2
        -translate-x-1/2 -translate-y-1/2
        p-5
        w-[800px]
      "
      id="modal"
    >
      <div class="flex justify-between items-center mb-5">
        <h3 class="text-2xl tracking-wider font-semibold text-gray-700">
          {{ modalEmojiData.name }}
        </h3>
        <button @click="closeModalRequest()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 hover:text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <hr />
      <div class="grid grid-cols-2 gap-5">
        <section class="border rounded-xl text-center mt-5 bg-[#183153]">
          <h2 class="text-[200px]">{{ modalEmojiData.emoji }}</h2>
        </section>
        <section class="flex items-center">
          <div class="w-full">
            <small>UNICODE :</small>
            <h4 class="text-5xl font-semibold mb-7">
              {{ modalEmojiData.unicode }}
            </h4>
            <span
              class="
                bg-[#74c0fc]
                px-5
                py-1
                rounded-md
                mb-7
                inline-block
                text-xs
                font-semibold
                mr-3
              "
              >{{ modalEmojiData.category }}
            </span>
            <span
              class="
                bg-[#f0f1f3]
                px-5
                py-1
                rounded-md
                mb-7
                inline-block
                text-xs
                font-semibold
              "
              >{{ modalEmojiData.key }}
            </span>
            <button
              class="
                bg-[#ffd43b]
                w-full
                py-3
                rounded-md
                hover:bg-[#ffb02e]
                buttonCopyOnModal
                font-semibold
                tracking-wider
                text-[#183153]
              "
              @click="copyThisEmojiRequest(modalEmojiData.emoji)"
            >
              Copy this Emoji
            </button>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["modalEmojiData"],
  methods: {
    closeModalRequest() {
      this.$emit("closeModal");
    },
    copyThisEmojiRequest(copied) {
      this.$emit("copyTheEmoji", copied);
    },
  },
};
</script>

<style>
.buttonCopyOnModal {
  box-shadow: 0 3px 0 3px #183153;
}
.buttonCopyOnModal:active {
  box-shadow: 0 0px 0 2px #183153;
}
</style>