<template>
  <section>
    <h4 class="text-center text-2xl font-bold text-[#0fc8a5] p-5 mb-3 mt-7">
      <span class="text-[#c7faec]">(</span>
      <span class="font-bold">•</span>
      <span class="text-[#c7faec]">◡</span>
      <span class="font-bold">•</span>
      <span class="text-[#c7faec]">)</span>
      <br class="lg:hidden block" />
      Eye
    </h4>
    <section
      class="
        text-center
        p-3
        h-[400px]
        overflow-auto
        border border-[#0fc8a5]/50
        bg-[#cbf4ed]/20
        rounded-md
      "
    >
      <span v-for="eyePart in customPart.eye" :key="eyePart">
        <button
          v-if="eye.left == eyePart.left && eye.right == eyePart.right"
          class="
            bg-[#0fc8a5]
            w-[90%]
            py-3
            rounded-md
            text-[#e4fbf5]
            font-semibold
            mb-3
          "
          @click="requestChangeEyeEmoticon(eyePart)"
        >
          <span v-if="eyePart.left == ' ' && !eyePart.right == ' '"
            >No Eye</span
          >
          <div v-else>
            <span>{{ base.left }}</span>
            <span class="font-bold">{{ eyePart.left }}</span>
            <span>{{ mouth }}</span>
            <span class="font-bold">{{ eyePart.right }}</span>
            <span>{{ base.right }}</span>
          </div>
        </button>
        <button
          v-else
          class="
            bg-[#e4fbf5]
            w-[90%]
            py-3
            rounded-md
            border border-[#00d2b4]/20
            text-[#00d2b4]
            font-semibold
            mb-3
          "
          @click="requestChangeEyeEmoticon(eyePart)"
        >
          <span v-if="eyePart.left == ' ' && !eyePart.right == ' '"
            >No Eye</span
          >
          <div v-else>
            <span class="text-[#00d2b4]/50">{{ base.left }}</span>
            <span class="font-bold">{{ eyePart.left }}</span>
            <span class="text-[#00d2b4]/50">{{ mouth }}</span>
            <span class="font-bold">{{ eyePart.right }}</span>
            <span class="text-[#00d2b4]/50">{{ base.right }}</span>
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
    requestChangeEyeEmoticon(eyePart) {
      this.$emit("getRequestChangeEyeEmoticon", eyePart);
    },
  },
};
</script>

<style>
</style>