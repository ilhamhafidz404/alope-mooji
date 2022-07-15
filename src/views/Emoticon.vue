<script setup>
import happyEmoticon from "@/components/EmoticonCategory/happyEmoticon.vue";
import sunglassesEmoticon from "@/components/EmoticonCategory/sunglassesEmoticon.vue";
import angryEmoticon from "../components/EmoticonCategory/angryEmoticon.vue";
import scaredEmoticon from "../components/EmoticonCategory/scaredEmoticon.vue";
import bearEmoticon from "../components/EmoticonCategory/bearEmoticon.vue";
import sadEmoticon from "../components/EmoticonCategory/sadEmoticon.vue";
import loveEmoticon from "../components/EmoticonCategory/loveEmoticon.vue";
import goUp from "../components/goUp.vue";
</script>
<template>
  <section class="my-10">
    <div class="container bg-white mx-auto shadow">
      <header class="grid grid-cols-2 pt-10 px-10">
        <div>
          <h2 class="text-3xl font-semibold tracking-wider">Emoticon list</h2>
          <p class="mt-3">Get Emoticon and share your expression to comments</p>
        </div>
        <div>
          <ul class="flex flex-wrap">
            <li class="mr-2 mb-2">
              <button
                class="
                  border-2 border-[#ffb02e]/80
                  bg-[#ffb02e]/80
                  hover:bg-[#ffb02e]/70 hover:text-white
                  px-7
                  py-2
                  rounded
                  text-white
                  happyButton
                "
                @click="filterEmoticon('happy', 'happyButton', '[#ffb02e]/80')"
              >
                😀 Happy
              </button>
            </li>

            <li class="mr-2 mb-2">
              <button
                class="
                  border-2 border-[#604084]/80
                  bg-[#604084]/80
                  hover:bg-[#604084]/70 hover:text-white
                  px-7
                  py-2
                  rounded
                  text-white
                  sunglassesButton
                "
                @click="
                  filterEmoticon(
                    'sunglasses',
                    'sunglassesButton',
                    '[#604084]/80'
                  )
                "
              >
                😎 Sunglasses
              </button>
            </li>
            <li class="mr-2 mb-2">
              <button
                class="
                  border-2 border-[#f8312f]
                  bg-[#f8312f]/80
                  hover:bg-[#f8312f]/70
                  px-7
                  py-2
                  rounded
                  text-white
                  angryButton
                "
                @click="filterEmoticon('angry', 'angryButton', '[#f8312f]/80')"
              >
                😡 Angry
              </button>
            </li>
            <li class="mr-2 mb-2">
              <button
                class="
                  border-2 border-[#8c5543]/80
                  bg-[#8c5543]/80
                  hover:bg-[#8c5543]/70
                  px-7
                  py-2
                  rounded
                  text-white
                  scaredButton
                "
                @click="
                  filterEmoticon('scared', 'scaredButton', '[#8c5543]/80')
                "
              >
                🙈 Scared
              </button>
            </li>
            <li class="mr-2 mb-2">
              <button
                class="
                  border-2 border-[#a56953]/80
                  bg-[#a56953]/80
                  hover:bg-[#a56953]/70
                  px-7
                  py-2
                  rounded
                  text-white
                  bearButton
                "
                @click="filterEmoticon('bear', 'bearButton', '[#a56953]/80')"
              >
                🐻 Bear
              </button>
            </li>
            <li class="mr-2 mb-2">
              <button
                class="
                  border-2 border-[#3f5fff]/80
                  bg-[#3f5fff]/80
                  hover:bg-[#3f5fff]/70
                  px-7
                  py-2
                  rounded
                  text-white
                  sadButton
                "
                @click="filterEmoticon('sad', 'sadButton', '[#3f5fff]/80')"
              >
                🥲 Sad
              </button>
            </li>
            <li class="mr-2 mb-2">
              <button
                class="
                  border-2 border-[#f70a8d]/80
                  bg-[#f70a8d]/80
                  hover:bg-[#f70a8d]/70 hover:text-white
                  px-7
                  py-2
                  rounded
                  text-white
                  loveButton
                "
                @click="filterEmoticon('love', 'loveButton', '[#f70a8d]/80')"
              >
                😍 Love
              </button>
            </li>
          </ul>
        </div>
      </header>

      <!-- ---------------------------------------------------------------------------------- -->

      <main
        v-if="
          emoticons.happy.status ||
          emoticons.sunglasses.status ||
          emoticons.angry.status ||
          emoticons.scared.status ||
          emoticons.bear.status ||
          emoticons.sad.status ||
          emoticons.love.status
        "
      >
        <!--  -->
        <happyEmoticon
          @getRequestCopy="copy"
          :clipboardCopy="clipboardCopy"
          :emoticons="emoticons.happy.data"
          v-if="emoticons.happy.status"
        ></happyEmoticon>
        <!--  -->
        <sunglassesEmoticon
          @getRequestCopy="copy"
          :clipboardCopy="clipboardCopy"
          :emoticons="emoticons.sunglasses.data"
          v-if="emoticons.sunglasses.status"
        ></sunglassesEmoticon>
        <!--  -->
        <angryEmoticon
          @getRequestCopy="copy"
          :clipboardCopy="clipboardCopy"
          :emoticons="emoticons.angry.data"
          v-if="emoticons.angry.status"
        ></angryEmoticon>
        <!--  -->
        <scaredEmoticon
          @getRequestCopy="copy"
          :clipboardCopy="clipboardCopy"
          :emoticons="emoticons.scared.data"
          v-if="emoticons.scared.status"
        ></scaredEmoticon>
        <!--  -->
        <bearEmoticon
          @getRequestCopy="copy"
          :clipboardCopy="clipboardCopy"
          :emoticons="emoticons.bear.data"
          v-if="emoticons.bear.status"
        ></bearEmoticon>
        <!--  -->
        <sadEmoticon
          @getRequestCopy="copy"
          :clipboardCopy="clipboardCopy"
          :emoticons="emoticons.sad.data"
          v-if="emoticons.sad.status"
        ></sadEmoticon>
        <!--  -->
        <loveEmoticon
          @getRequestCopy="copy"
          :clipboardCopy="clipboardCopy"
          :emoticons="emoticons.love.data"
          v-if="emoticons.love.status"
        ></loveEmoticon>
      </main>
      <section
        class="py-10 min-h-[500px] flex items-center justify-center"
        v-else
      >
        <div>
          <span class="text-9xl text-center block">😨</span>
          <h3 class="text-4xl mt-5 uppercase font-semibold text-gray-700">
            You Turn Off All Emoticon
          </h3>
        </div>
      </section>

      <goUp @getGoUpRequest="goTop"></goUp>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import emoticonsData from "@/data/emoticon.js";
export default {
  props: ["clipboardCopy"],
  data() {
    return {
      emoticons: {
        happy: {
          data: [],
          status: true,
        },
        sunglasses: {
          data: [],
          status: true,
        },
        angry: {
          data: [],
          status: true,
        },
        scared: {
          data: [],
          status: true,
        },
        bear: {
          data: [],
          status: true,
        },
        sad: {
          data: [],
          status: true,
        },
        love: {
          data: [],
          status: true,
        },
      },
      selectedCategory: "all",
    };
  },
  mounted() {
    window.scrollTo(0, 0);

    axios
      .get("https://alope-mooji-api.herokuapp.com/api/emoticons")
      .then((result) => {
        result.data.filter((emoticon) => {
          switch (emoticon.category) {
            case "happy":
              this.emoticons.happy.data.push(emoticon);
              break;
            case "sunglasses":
              this.emoticons.sunglasses.data.push(emoticon);
              break;
            case "angry":
              this.emoticons.angry.data.push(emoticon);
              break;
            case "scared":
              this.emoticons.scared.data.push(emoticon);
              break;
            case "bear":
              this.emoticons.bear.data.push(emoticon);
              break;
            case "sad":
              this.emoticons.sad.data.push(emoticon);
              break;
            case "love":
              this.emoticons.love.data.push(emoticon);
              break;
          }
        });
      });
  },
  methods: {
    filterEmoticon(category, button, color) {
      const buttonSelect = document.querySelector(`button.${button}`);
      buttonSelect.classList.toggle(`bg-${color}`);
      buttonSelect.classList.toggle(`text-${color}`);
      buttonSelect.classList.toggle(`text-white`);

      switch (category) {
        case "happy":
          this.emoticons.happy.status = !this.emoticons.happy.status;
          break;
        case "sunglasses":
          this.emoticons.sunglasses.status = !this.emoticons.sunglasses.status;
          break;
        case "angry":
          this.emoticons.angry.status = !this.emoticons.angry.status;
          break;
        case "scared":
          this.emoticons.scared.status = !this.emoticons.scared.status;
          break;
        case "bear":
          this.emoticons.bear.status = !this.emoticons.bear.status;
          break;
        case "sad":
          this.emoticons.sad.status = !this.emoticons.sad.status;
          break;
        case "love":
          this.emoticons.love.status = !this.emoticons.love.status;
          break;
      }
    },

    copy(clipboard) {
      navigator.clipboard.writeText(clipboard);
      this.$emit("copiedToClipboard", clipboard);
    },
    resetCopy() {
      this.emoticons = emoticonsData;
    },
    goTop() {
      const html = document.querySelector("html");
      html.style.scrollBehavior = "smooth";
      window.scrollTo(0, 0);
      html.style.scrollBehavior = null;
    },
  },
};
</script>

<style scoped>
section.my-10 {
  background-image: url("../assets/icons-bg.svg");
  background-position-x: -40px;
}
</style>