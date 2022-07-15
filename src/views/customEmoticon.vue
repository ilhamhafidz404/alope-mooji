<script setup>
import basePartControl from "@/components/customEmoticon/basePartControl.vue";
import EyePartControl from "../components/customEmoticon/eyePartControl.vue";
import mouthPartControl from "../components/customEmoticon/mouthPartControl.vue";
import armPartControl from "../components/customEmoticon/armPartControl.vue";
import AccessoryCustomPart from "../components/customEmoticon/accessoryCustomPart.vue";
</script>

<template>
  <section class="bg">
    <div class="container mx-auto bg-white rounded-md shadow-xl my-10 pb-10">
      <header class="text-center mt-10">
        <h2 class="text-3xl font-semibold tracking-wider">
          Create Your Emoticon
        </h2>
        <p class="mt-3">
          Create Emoticon and Create Your expression to share in comment
        </p>
      </header>

      <hr class="mt-5 w-[90%] mx-auto" />

      <!-- ---------------------------------------------------------------- -->
      <main class="mt-5 lg:px-28 md:px-18 px-10">
        <!--  -->
        <section
          class="
            grid
            md:grid-cols-5
            grid-cols-1
            gap-4
            bg-gray-50
            border border-gray-200
            p-5
            rounded-md
          "
        >
          <div
            class="
              col-span-2
              flex
              items-center
              justify-center
              rounded-md
              p-5
              relative
              z-10
            "
          >
            <div
              class="
                bg-white
                border-dashed border border-black/50
                rounded-md
                text-5xl
                w-[90%]
                text-center
                p-5
                cursor-pointer
                whitespace-nowrap
                overflow-auto
              "
              @click="copyMyEmoticonToClipboard()"
            >
              <h3>{{ myCustomEmoticonResult }}</h3>
            </div>
            <small class="absolute bottom-[-7px] text-black/50"
              >↑ Click to Copy ↑</small
            >
          </div>
          <div class="col-span-3">
            <h2 class="text-xl font-semibold tracking-wide mb-5 text-gray-700">
              ✨ Expression
            </h2>
            <button
              class="
                bg-[#ffb02e]/70
                text-white
                font-bold
                px-5
                py-2
                rounded-md
                mr-3
                mb-3
              "
              @click="changeExpression('•', '◡')"
            >
              😃 Happy
            </button>
            <button
              class="
                bg-[#f70a8d]/70
                text-white
                font-bold
                px-5
                py-2
                rounded-md
                mr-3
                mb-3
              "
              @click="changeExpression('♥', '◡')"
            >
              😍 Love
            </button>
            <button
              class="
                bg-[#3f5fff]/70
                text-white
                font-bold
                px-5
                py-2
                rounded-md
                mr-3
                mb-3
              "
              @click="changeExpression('╥', '﹏')"
            >
              😥 Sad
            </button>
            <button
              class="
                bg-[#f8312f]/70
                text-white
                font-bold
                px-5
                py-2
                rounded-md
                mr-3
                mb-3
              "
              @click="changeExpression('▼', '益')"
            >
              😡 Angry
            </button>
            <button
              class="
                bg-[#00d26a]/70
                text-white
                font-bold
                px-5
                py-2
                rounded-md
                mr-3
                mb-3
              "
              @click="changeExpression('(•◡•)', 'random')"
            >
              🌏 Randomize
            </button>
          </div>
        </section>

        <!-- ---------- -->
        <div class="grid md:grid-cols-4 grid-cols-2 gap-3">
          <basePartControl
            :customPart="customPart"
            :base="base"
            :eye="eye"
            :mouth="mouth"
            @getRequestChangeBaseEmoticon="changeBaseEmoticon"
          ></basePartControl>

          <!--  -->

          <EyePartControl
            :customPart="customPart"
            :base="base"
            :eye="eye"
            :mouth="mouth"
            @getRequestChangeEyeEmoticon="changeEyeEmoticon"
          ></EyePartControl>

          <!--  -->

          <mouthPartControl
            :customPart="customPart"
            :base="base"
            :eye="eye"
            :mouth="mouth"
            @getRequestChangeMouthEmoticon="changeMouthEmoticon"
          ></mouthPartControl>

          <!--  -->

          <armPartControl
            :customPart="customPart"
            :base="base"
            :eye="eye"
            :mouth="mouth"
            :arm="arm"
            @getRequestChangeArmEmoticon="changeArmEmoticon"
          ></armPartControl>
        </div>

        <!--  -->

        <AccessoryCustomPart
          :customPart="customPart"
          :accessories="accessories"
          :base="base"
          :eye="eye"
          :mouth="mouth"
          :arm="arm"
          :accessory="accessory"
          @getChangeAccessoryEmoticon="changeAccessoryEmoticon"
        ></AccessoryCustomPart>
      </main>
    </div>
  </section>
</template>

<script>
import customPart from "../data/customPart";
import accessories from "../data/accessoryCustomPart";
export default {
  data() {
    return {
      // myCustomEmoticon: "(•◡•)",

      base: {
        left: "(",
        right: ")",
      },
      eye: {
        left: "•",
        right: "•",
      },
      mouth: "◡",
      arm: {
        leftOuter: "",
        leftInner: "",
        rightOuter: "",
        rightInner: "",
      },
      accessory: {
        left: "",
        right: "",
      },

      // data custom part nya dan data accessory emoji
      customPart: customPart,
      accessories: accessories,
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  computed: {
    // untuk mengenerate hasil dari custom emoji yang kita bikin
    myCustomEmoticonResult() {
      return (this.myCustomEmoticon =
        this.accessory.left +
        this.arm.leftOuter +
        this.base.left +
        this.arm.leftInner +
        this.eye.left +
        this.mouth +
        this.eye.right +
        this.arm.rightInner +
        this.base.right +
        this.arm.rightOuter +
        this.accessory.right);
    },
  },
  methods: {
    // untuk mengganti cepat ekspresi yang diinginkan
    changeExpression(emojiEye, emojiMouth) {
      this.base.left = "(";
      this.eye.left = emojiEye;
      this.mouth = emojiMouth;
      this.eye.right = emojiEye;
      this.base.right = ")";
    },

    changeBaseEmoticon(basePart) {
      this.base.left = basePart.left;
      this.base.right = basePart.right;
    },

    changeEyeEmoticon(eyePart) {
      this.eye.left = eyePart.left;
      this.eye.right = eyePart.right;
    },

    changeMouthEmoticon(mouthPart) {
      this.mouth = mouthPart;
    },

    changeArmEmoticon(armPart) {
      this.arm.leftOuter = armPart.leftOuter;
      this.arm.leftInner = armPart.leftInner;
      this.arm.rightOuter = armPart.rightOuter;
      this.arm.rightInner = armPart.rightInner;
    },

    changeAccessoryEmoticon(accessoryPart) {
      this.accessory.left = accessoryPart.leftSide;
      this.accessory.right = accessoryPart.rightSide;
    },

    // copy ke clipboard jika ada emit copyTheEmoji dari component emojiModal
    copyMyEmoticonToClipboard() {
      // salin emoji ke clipboard
      navigator.clipboard.writeText(this.myCustomEmoticon);
      // jalankan emit ke App.vue
      this.$emit("copiedToClipboard", this.myCustomEmoticon);
    },
  },
};
</script>

<style scoped>
section.bg {
  background-image: url("../assets/icons-bg.svg");
  background-position-x: -30px;
}
</style>