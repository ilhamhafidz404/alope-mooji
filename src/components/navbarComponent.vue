<template>
  <nav
    class="
      shadow-md
      flex
      items-center
      px-4
      py-1
      relative
      bg-gradient-to-r
      from-[#fdcd3e]
      to-[#fcac0e]
    "
  >
    <router-link :to="{ name: 'landingPage' }">
      <h1
        class="
          text-white text-center
          w-screen
          p-2
          flex
          font-semibold
          items-center
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 mr-2 inline"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
          />
        </svg>
        Alope Mooji
      </h1>
    </router-link>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
/* nav {
  background: linear-gradient(-45deg, #821fc8, #23add1);
} */
/* h1 {
  font-family: "Cookie", cursive;
} */
</style>