<template>
  <section>
    <h4 class="text-center text-2xl font-bold text-[#bf27cc] p-5 mb-3 mt-7">
      <span class="font-bold">ﾍ</span>
      <span class="text-[#eacef8]">(•◡•)</span>
      <span class="font-bold">ﾉ</span>
      Arm
    </h4>
    <section
      class="
        text-center
        p-3
        h-[400px]
        overflow-auto
        border border-[#bf27cc]/50
        bg-[#f1c7f5]/20
        rounded-md
      "
    >
      <span v-for="armPart in customPart.arm" :key="armPart">
        <button
          v-if="
            arm.leftOuter == armPart.leftOuter &&
            arm.leftInner == armPart.leftInner &&
            arm.rightOuter == armPart.rightOuter &&
            arm.rightInner == armPart.rightInner
          "
          class="
            bg-[#bf27cc]
            w-[90%]
            py-3
            rounded-md
            text-[#f7effb]
            font-semibold
            mb-3
          "
          @click="requestChangeArmEmoticon(armPart)"
        >
          <span
            v-if="
              !armPart.leftOuter &&
              !armPart.leftInner &&
              !armPart.rightOuter &&
              !armPart.rightInner
            "
          >
            No Arm
          </span>
          <div v-else>
            <span class="font-bold">{{ armPart.leftOuter }}</span>
            <span>{{ base.left }} </span>
            <span class="font-bold">{{ armPart.leftInner }}</span>
            <span>{{ eye.left + mouth + eye.right }}</span>
            <span class="font-bold">{{ armPart.rightInner }}</span>
            <span>{{ base.right }} </span>
            <span class="font-bold">{{ armPart.rightOuter }}</span>
          </div>
        </button>
        <button
          v-else
          class="
            bg-[#f7effb]
            w-[90%]
            py-3
            rounded-md
            text-[#bf27cc]
            border border-[#bf27cc]/20
            font-semibold
            mb-3
          "
          @click="requestChangeArmEmoticon(armPart)"
        >
          <span
            v-if="
              !armPart.leftOuter &&
              !armPart.leftInner &&
              !armPart.rightOuter &&
              !armPart.rightInner
            "
          >
            No Arm
          </span>
          <div v-else>
            <span class="font-bold">{{ armPart.leftOuter }}</span>
            <span class="text-[#bf27cc]/50">{{ base.left }} </span>
            <span class="font-bold">{{ armPart.leftInner }}</span>
            <span class="text-[#bf27cc]/50">{{
              eye.left + mouth + eye.right
            }}</span>
            <span class="font-bold">{{ armPart.rightInner }}</span>
            <span class="text-[#bf27cc]/50">{{ base.right }} </span>
            <span class="font-bold">{{ armPart.rightOuter }}</span>
          </div>
        </button>
      </span>
    </section>
  </section>
</template>

<script>
export default {
  props: ["customPart", "base", "eye", "mouth", "arm"],
  methods: {
    requestChangeArmEmoticon(armPart) {
      this.$emit("getRequestChangeArmEmoticon", armPart);
    },
  },
};
</script>

<style>
</style>