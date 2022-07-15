<script setup>
import categoryEmoji from "@/components/emoji/categoryEmoji.vue";
import emojiModal from "@/components/emoji/emojiModal.vue";
import sidebar from "@/components/emoji/sidebar.vue";
</script>
<template>
  <section id="emojiContainer" class="relative">
    <emoji-modal
      :modalEmojiData="modalEmojiData"
      @closeModal="modalClosed()"
      @copyTheEmoji="emojiCopied"
      @getAddToFavorite="addToFavorite"
    ></emoji-modal>
    <header
      class="
        text-center
        mt-10
        pb-16
        relative
        overflow-hidden
        after:content-['😀']
        after:absolute
        after:left-[-140px]
        after:text-[200px]
        after:top-1/2
        after:-translate-y-1/2
        after:z-[-1]
        after:opacity-80
        before:content-['😍']
        before:absolute
        before:right-[-140px]
        before:text-[200px]
        before:top-1/2
        before:-translate-y-1/2
        before:z-[-1]
        before:opacity-80
      "
    >
      <h2 class="text-3xl font-semibold tracking-wider">Emoji list</h2>
      <p class="mt-3">Get Emoji and share your expression to comments</p>
      <!-- category -->
      <categoryEmoji
        @getEmojiWhereCategory="filterEmojiUsingCategory"
        :class="{ blockedCategory: selectedTag != 'all' }"
        class="
          relative
          before:absolute
          before:bottom-[-20px]
          before:left-1/2
          before:-translate-x-1/2
          before:text-sm
          before:text-gray-500
          before:hidden
          hover:before:inline-block
        "
      ></categoryEmoji>
    </header>
    <!-- --------------------------------------------------------- -->
    <main class="grid grid-cols-10 bg-gray-50">
      <div class="lg:col-span-3 p-10 lg:block hidden">
        <sidebar
          :emojis="emojis"
          @getRequestFilterEmojiUsingTag="FilterEmojiUsingTag"
        ></sidebar>
      </div>
      <!--  -->
      <div class="lg:col-span-7 col-span-10 pl-10 pb-20 relative">
        <div class="grid grid-cols-4 md:grid-cols-8 md:gap-4 gap-3 md:p-10 p-3">
          <section
            v-for="emoji in paginated"
            :key="emoji.id"
            class="
              border
              rounded
              md:text-5xl
              text-4xl text-center
              hover:bg-gray-100
              cursor-pointer
            "
            @click="showModal(emoji)"
          >
            <!-- @click.ctrl="copy(emoji.emoji, false)" -->
            <div
              :class="{
                'bg-gray-300': clipboardCopy == emoji.emoji,
              }"
              class="px-2 py-3 whitespace-nowrap"
            >
              {{ emoji.emoji }}
            </div>
          </section>
        </div>

        <nav
          class="absolute left-1/2 -translate-x-1/2 bottom-0 mb-10"
          v-if="selectedTag == 'all' && selectedCategory == 'all'"
        >
          <button @click="prev()" class="mr-4" v-if="current > 1">Prev</button>
          <span
            class="
              px-4
              py-3
              rounded
              bg-gradient-to-r
              from-[#fdcd3e]
              to-[#fcac0e]
              font-bold
              text-white
            "
            >{{ this.current }}</span
          >
          <button @click="next()" class="ml-4" v-if="current < 8">Next</button>
        </nav>
      </div>
    </main>
  </section>
</template>

<script>
import emojisData from "@/data/emoji.js";
export default {
  props: ["clipboardCopy"],
  data() {
    return {
      emojis: emojisData,
      selectedCategory: "all",
      selectedTag: "all",

      modalEmojiData: {},

      emojiWhereFilter: [],

      // menentukan berapa emoji setiap page nya
      pageSize: 100,
      // jumlah pagination/pagination meter
      current: 1,
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {
    // tampilkan modal yang menerima data emoji yang dikirimkan(sesuai pilihan user)
    showModal(emoji) {
      setTimeout(() => {
        // setting style untuk overlay dan modalnya
        document.querySelector("#overlay").classList.add("block");
        document.querySelector("#overlay").classList.remove("hidden");
        document.querySelector("#overlay").classList.add("animationOverlay");
      }, 200);
      // ubah model "modalEmojiData"(model untuk show emoji) sesuai emojinya
      this.modalEmojiData = emoji;
    },
    // menutup modal jika ada emit closeModal dari emojiModal Component
    modalClosed() {
      document.querySelector("#overlay").classList.add("hidden");
      document.querySelector("#overlay").classList.remove("block");
    },
    // copy ke clipboard jika ada emit copyTheEmoji dari component emojiModal
    emojiCopied(copied) {
      // salin emoji ke clipboard
      navigator.clipboard.writeText(copied);
      // jalankan emit ke App.vue
      this.$emit("copiedToClipboard", copied);
    },

    filterEmojiUsingCategory(category) {
      // reset paginasinya sebelum filter sesuai kategori
      this.current = 1;
      if (category == "all") {
        this.selectedCategory = "all";
        this.emojis = emojisData;
      } else if (this.selectedCategory == category) {
        // cek jika kategori yang di klik adalah kategori yang aktif
        // maka filter kategori akn di reset dan kembali ke mode "all"
        this.selectedCategory = "all";
        this.emojis = emojisData;
      } else {
        this.selectedCategory = category;
        this.emojis = emojisData;
        // filter data emoji sesuai kategori yang dipilih
        let value = this.emojis.filter((emoji) => emoji.category == category);
        this.emojis = value;
      }
    },
    FilterEmojiUsingTag(tag) {
      this.current = 1;
      // reset dulu model emojis dengan memasukan data emojinya supaya user yang ada pada filter Category Aktif bisa melakukan filter emoji tag dengan baik
      this.emojis = emojisData;

      // ubah kategori aktifnya menjadi "all", ini kareka ditakutkan user memaksa melakukan filter tag pada saat filter kategorinya masih aktif
      this.selectedCategory = "all";
      const activeCategory = document.querySelector("span.bg-gray-300");
      activeCategory.classList.remove("bg-gray-300");
      activeCategory.classList.add("bg-gray-100");
      document.querySelector("#all").classList.add("bg-gray-300");
      document.querySelector("#all").classList.remove("bg-gray-100");

      // cek apakah tag yang aktif adalah tag yang dipilih? atau tag "all"?
      // jika tag yang dipilih sama dengan tag yang aktif maka
      if (tag == this.selectedTag || tag == "all") {
        // reset data model emojis untuk membatalkan mode filter tag dan kembali ke list semua emoji
        this.emojis = emojisData;
        this.emojiWhereFilter = [];
        this.selectedTag = "all";
      } else {
        // jika tag yang dipilih tidak sama dengan tag yang aktif maka
        // model emojiWhereFilter yang menampug data emoji ter-filter adan dikosongkan dulu, ini untuk mencegah error ketika user melakukan filter tag pada saat filter tag aktif
        this.emojiWhereFilter = [];
        this.emojis.forEach((emoji) => {
          emoji.tags.forEach((emojiTag) => {
            // cek jika emoji yang diambil memiliki tag yang sama dengan request dari component sidebar
            if (emojiTag == tag) {
              // jika sama, emoji tersebut ke model emojiWhereFilter untuk menampung data emoji sementara
              this.emojiWhereFilter.push(emoji);
              // ubah juga tag aktifnya sesuai tag yang dipilih
              this.selectedTag = tag;
            }
          });
        });
        // ubah model emojis(model untuk menampilkan data emoji) dan timpa dengan model emojiWhereFilter yang suda memfilter emoji yang sesuai dengan tag aftif tadi
        this.emojis = this.emojiWhereFilter;
        // kosongkan model emojiWhereFilter supaya data emoji tidak menumpuk(option)
        this.emojiWhereFilter = [];
      }
    },

    prev() {
      // ambil html
      const html = document.querySelector("html");
      // tambahkan style untuk smooth scroll
      html.style.scrollBehavior = "smooth";
      // scroll window ke paling atas
      window.scrollTo(0, 0);
      html.style.scrollBehavior = null;
      //
      this.current--;
    },
    next() {
      const html = document.querySelector("html");
      html.style.scrollBehavior = "smooth";
      window.scrollTo(0, 0);
      html.style.scrollBehavior = null;
      this.current++;
    },
  },
  computed: {
    indexStart() {
      return (this.current - 1) * this.pageSize;
    },
    indexEnd() {
      return this.indexStart + this.pageSize;
    },
    paginated() {
      return this.emojis.slice(this.indexStart, this.indexEnd);
    },
  },
};
</script>

<style scoped>
.animationOverlay {
  animation: Show 0.5s;
}
.blockedCategory::before {
  content: "Pilih All pada filter Tag terlebih dahulu";
}
.blockedCategory::after {
  content: "";
  position: absolute;
  background: transparent;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  cursor: no-drop;
}

@keyframes Show {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>