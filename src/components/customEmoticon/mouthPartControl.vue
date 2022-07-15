<template>
  <section>
    <h4 class="text-center text-2xl font-bold text-[#2287b9] p-5 mb-3 mt-7">
      <span class="text-[#c9edfa]">(•</span>
      <span class="font-bold">◡</span>
      <span class="text-[#c9edfa]">•)</span>
      Mouth
    </h4>
    <section
      class="
        text-center
        p-3
        h-[400px]
        overflow-auto
        border border-[#2287b9]/50
        bg-[#c0e3f5]/20
        rounded-md
      "
    >
      <span v-for="mouthPart in customPart.mouth" :key="mouthPart">
        <button
          v-if="mouth == mouthPart"
          class="
            bg-[#2287b9]
            w-[90%]
            py-3
            rounded-md
            text-[#e4f5fb]
            font-semibold
            mb-3
          "
          @click="requestChangeMouthEmoticon(mouthPart)"
        >
          <span v-if="mouthPart == ' '">No Mouth</span>
          <div v-else>
            <span>{{ base.left }}</span>
            <span>{{ eye.left }}</span>
            <span class="font-bold">{{ mouthPart }}</span>
            <span>{{ eye.right }}</span>
            <span>{{ base.right }}</span>
          </div>
        </button>

        <button
          v-else
          class="
            bg-[#e4f5fb]
            w-[90%]
            py-3
            rounded-md
            text-[#2f84cd]
            border border-[#2f84cd]/20
            font-semibold
            mb-3
          "
          @click="requestChangeMouthEmoticon(mouthPart)"
        >
          <span v-if="mouthPart == ' '">No Mouth</span>
          <div v-else>
            <span class="text-[#2f84cd]/50">{{ base.left }}</span>
            <span class="text-[#2f84cd]/50">{{ eye.left }}</span>
            <span class="font-bold">{{ mouthPart }}</span>
            <span class="text-[#2f84cd]/50">{{ eye.right }}</span>
            <span class="text-[#2f84cd]/50">{{ base.right }}</span>
          </div>
        </button>
      </span>
    </section>
  </section>
</template>

<script>
export default {
  props: ["customPart", "base", "eye", "mouth"],
  methods: {
    requestChangeMouthEmoticon(eyePart) {
      this.$emit("getRequestChangeMouthEmoticon", eyePart);
    },
  },
};
</script>

<style>
</style>