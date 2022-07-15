<template>
  <div class="mt-5 px-20">
    <span
      class="
        bg-gray-300
        px-1
        md:px-4
        py-1
        rounded
        mr-2
        mb-2
        inline-block
        cursor-pointer
        text-sm
        md:text-base
      "
      @click="resetFilterCategory()"
      id="all"
    >
      All
    </span>
    <span
      class="
        bg-gray-100
        px-1
        md:px-4
        py-1
        rounded
        mr-2
        mb-2
        inline-block
        cursor-pointer
        text-sm
        md:text-base
      "
      @click="filterCategory('Classic Emoji')"
      id="classic-emoji"
    >
      😁 Classic <span class="md:inline hidden">Emojis</span>
    </span>
    <span
      class="
        bg-gray-100
        px-1
        md:px-4
        py-1
        rounded
        mr-2
        mb-2
        inline-block
        cursor-pointer
        text-sm
        md:text-base
      "
      @click="filterCategory('Animal Emoji')"
      id="animal-emoji"
    >
      🐒 Animal and Nature <span class="md:inline hidden">Emojis</span>
    </span>
    <span
      class="
        bg-gray-100
        px-1
        md:px-4
        py-1
        rounded
        mr-2
        mb-2
        inline-block
        cursor-pointer
        text-sm
        md:text-base
      "
      @click="filterCategory('Emotion Emoji')"
      id="emotion-emoji"
    >
      💘 Emotion <span class="md:inline hidden">Emojis</span>
    </span>
    <span
      class="
        bg-gray-100
        px-1
        md:px-4
        py-1
        rounded
        mr-2
        mb-2
        inline-block
        cursor-pointer
        text-sm
        md:text-base
      "
      @click="filterCategory('Body Parts Emoji')"
      id="body-parts-emoji"
    >
      👋 Body Parts <span class="md:inline hidden">Emojis</span>
    </span>
    <span
      class="
        bg-gray-100
        px-1
        md:px-4
        py-1
        rounded
        mr-2
        mb-2
        inline-block
        cursor-pointer
        text-sm
        md:text-base
      "
      @click="filterCategory('Person Emoji')"
      id="person-emoji"
    >
      🧑 Person <span class="md:inline hidden">Emojis</span>
    </span>
    <span
      class="
        bg-gray-100
        px-1
        md:px-4
        py-1
        rounded
        mr-2
        mb-2
        inline-block
        cursor-pointer
        text-sm
        md:text-base
      "
      @click="filterCategory('Food and Drink Emoji')"
      id="food-and-drink-emoji"
    >
      🍇 Food and Drinks <span class="md:inline hidden">Emojis</span>
    </span>
    <span
      class="
        bg-gray-100
        px-1
        md:px-4
        py-1
        rounded
        mr-2
        mb-2
        inline-block
        cursor-pointer
        text-sm
        md:text-base
      "
      @click="filterCategory('Transport and Places Emoji')"
      id="transport-and-places-emoji"
    >
      🌏 Transport and Places <span class="md:inline hidden">Emojis</span>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "all",
    };
  },
  methods: {
    filterCategory(category) {
      // ubah parameter ke dalam bentuk slug supaya bisa dicocokan sama ID
      const covertToSlugCategory = category
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "");

      // ambil data category yang sesuai sama slug tadi
      const selectedCategory = document.querySelector(
        `#${covertToSlugCategory}`
      );

      // cek kalau kategoru yang dipilih adalah kategori yang sudah aktif
      if (this.selected == covertToSlugCategory) {
        // beri style aktif pada kategori "all"
        document.querySelector("#all").classList.add("bg-gray-300");
        document.querySelector("#all").classList.remove("bg-gray-100");

        // remove style category yang aktif sebelumnya
        selectedCategory.classList.remove("bg-gray-300");
        selectedCategory.classList.add("bg-gray-100");

        this.selected = "all";
      } else {
        // reset dulu style category yang aktif
        const active = document.querySelector(".bg-gray-300");
        active.classList.add("bg-gray-100");
        active.classList.remove("bg-gray-300");

        // style category aktif
        selectedCategory.classList.add("bg-gray-300");
        selectedCategory.classList.remove("bg-gray-100");

        this.selected = covertToSlugCategory;
      }

      // lakukan emit ke app.vue
      this.$emit("getEmojiWhereCategory", category);
    },
    resetFilterCategory() {
      // ambil span yang punya class bg-gray-300, hapus class tersebut dan tambahkan class bg-gray-100
      const activeCategory = document.querySelector("span.bg-gray-300");
      activeCategory.classList.remove("bg-gray-300");
      activeCategory.classList.add("bg-gray-100");

      // tambahkan style aktif pada #all
      document.querySelector("#all").classList.add("bg-gray-300");
      document.querySelector("#all").classList.remove("bg-gray-100");
      // reset data selected
      this.selected = "all";

      this.$emit("getEmojiWhereCategory", "all");
    },
  },
};
</script>

<style>
</style>