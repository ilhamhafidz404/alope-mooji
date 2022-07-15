<template>
  <div
    class="
      bg-gradient-to-r
      to-[#2dce89]
      from-[#2dcecc]
      w-[350px]
      fixed
      left-1/2
      -translate-x-1/2
      p-3
      rounded
      top-5
      text-center
      hidden
    "
  >
    <h5 class="text-white">
      <slot></slot>
      Disalin ke Clipboard
    </h5>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>