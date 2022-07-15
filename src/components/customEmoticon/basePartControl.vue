<template>
  <section>
    <h4 class="text-center text-2xl font-bold text-[#43d201] p-5 mb-3 mt-7">
      <span class="font-bold">(</span>
      <span class="text-[#cdf2c0]">•◡•</span>
      <span class="font-bold">)</span>
      Base
    </h4>
    <section
      class="
        text-center
        p-3
        h-[400px]
        overflow-auto
        border border-[#29c413]/50
        bg-[#d7fdd1]/20
        rounded-md
      "
    >
      <div v-for="partHappyBase in customPart.base" :key="partHappyBase">
        <button
          v-if="
            base.left == partHappyBase.left && base.right == partHappyBase.right
          "
          class="
            bg-[#29c413]
            w-[90%]
            py-3
            rounded-md
            text-[#eafbe4]
            font-semibold
            mb-3
          "
          @click="requestChangeBaseEmoticon(partHappyBase)"
        >
          <span v-if="!partHappyBase.emoji">No Base</span>
          <div v-else>
            <span class="font-bold">{{ partHappyBase.left }}</span>
            <span>{{ eye.left + mouth + eye.right }}</span>
            <span class="font-bold">{{ partHappyBase.right }}</span>
          </div>
        </button>
        <button
          v-else
          class="
            bg-[#eafbe4]
            border border-[#5ed825]/20
            w-[90%]
            py-3
            rounded-md
            text-[#5ed825]
            font-semibold
            mb-3
          "
          @click="requestChangeBaseEmoticon(partHappyBase)"
        >
          <span v-if="!partHappyBase.emoji">No Base</span>
          <div v-else>
            <span class="font-bold">{{ partHappyBase.left }}</span>
            <span class="text-[#5ed825]/50">{{
              this.eye.left + this.mouth + this.eye.right
            }}</span>
            <span class="font-bold">{{ partHappyBase.right }}</span>
          </div>
        </button>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  props: ["customPart", "base", "eye", "mouth"],
  methods: {
    requestChangeBaseEmoticon(basePart) {
      this.$emit("getRequestChangeBaseEmoticon", basePart);
    },
  },
};
</script>

<style>
</style>