<template>
  <div>
    <ul
      class="
        w-[300px]
        -translate-x-[250px]
        fixed
        z-[10000000]
        top-1/2
        -translate-y-1/2
      "
    >
      <li
        class="
          bg-red-500
          h-[50px]
          hover:translate-x-[250px]
          transition-all
          hover:rounded-r
          z-50
          relative
        "
      >
        <router-link
          :to="{ name: 'emoji' }"
          class="
            text-white
            flex
            justify-between
            w-full
            h-full
            items-center
            px-3
          "
        >
          <span>Classic Emoji</span>
          <span class="text-2xl">😀</span>
        </router-link>
      </li>
      <li
        class="
          bg-blue-500
          h-[50px]
          hover:translate-x-[250px]
          transition-all
          hover:rounded-r
        "
      >
        <router-link
          :to="{ name: 'emoticon' }"
          class="
            text-white
            flex
            justify-between
            w-full
            h-full
            items-center
            px-3
          "
        >
          <span>ɾ⚈▿⚈ɹ Emoticon</span>
          <span class="text-2xl">😝</span>
        </router-link>
      </li>
      <li
        class="
          bg-green-500
          h-[50px]
          hover:translate-x-[250px]
          transition-all
          hover:rounded-r
        "
      >
        <router-link
          :to="{ name: 'custom-emoticon' }"
          class="
            text-white
            flex
            justify-between
            w-full
            h-full
            items-center
            px-3
          "
        >
          <span>(ง^ᴗ^)ว Custom Emoticon</span>
          <span class="text-2xl">🤩</span>
        </router-link>
      </li>
      <li
        class="
          bg-purple-500
          h-[50px]
          hover:translate-x-[250px]
          transition-all
          hover:rounded-r
        "
      >
        <router-link
          :to="{ name: 'emoji-game' }"
          class="
            text-white
            flex
            justify-between
            w-full
            h-full
            items-center
            px-3
          "
        >
          <span>Emoji Game</span>
          <span class="text-2xl">🥳</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>