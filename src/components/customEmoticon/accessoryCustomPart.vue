<template>
  <section
    class="my-10 border border-[#ffa500]/50 bg-[#f5e7cf]/20 rounded-md py-7"
  >
    <h4 class="text-center text-xl font-bold text-[#ffa500] mb-5">
      [+] Add an accessory or a decor
    </h4>
    <section class="h-[400px] overflow-auto">
      <div
        v-for="accessoryPart in accessories"
        :key="accessoryPart"
        class="text-center"
      >
        <button
          v-if="
            accessory.left == accessoryPart.leftSide &&
            accessory.right == accessoryPart.rightSide
          "
          class="
            bg-[#ffbe43]
            w-[90%]
            py-3
            rounded-md
            text-[#fdf5cb]
            font-semibold
            mb-3
          "
          @click="requestChangeAccessoryEmoticon(accessoryPart)"
        >
          <span v-if="!accessoryPart.leftSide && !accessoryPart.rightSide"
            >No Mouth</span
          >
          <div v-else>
            <span class="font-bold">{{ accessoryPart.leftSide }}</span>
            <span>{{
              arm.leftOuter +
              base.left +
              arm.leftInner +
              eye.left +
              mouth +
              eye.right +
              arm.rightInner +
              base.right +
              arm.rightOuter
            }}</span>
            <span class="font-bold">{{ accessoryPart.rightSide }}</span>
          </div>
        </button>
        <button
          v-else
          class="
            bg-[#fdf5cb]
            w-[90%]
            py-3
            rounded-md
            text-[#ffbe43]
            font-semibold
            mb-3
          "
          @click="requestChangeAccessoryEmoticon(accessoryPart)"
        >
          <span v-if="!accessoryPart.leftSide && !accessoryPart.rightSide"
            >No Accessory</span
          >
          <div v-else>
            <span class="font-bold">{{ accessoryPart.leftSide }}</span>
            <span class="text-[#ffbe43]/50">{{
              arm.leftOuter +
              base.left +
              arm.leftInner +
              eye.left +
              mouth +
              eye.right +
              arm.rightInner +
              base.right +
              arm.rightOuter
            }}</span>
            <span class="font-bold">{{ accessoryPart.rightSide }}</span>
          </div>
        </button>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  props: ["accessories", "base", "eye", "mouth", "arm", "accessory"],
  methods: {
    requestChangeAccessoryEmoticon(accessoryPart) {
      this.$emit("getChangeAccessoryEmoticon", accessoryPart);
    },
  },
};
</script>

<style>
</style>