<script setup>
import correctToast from "@/components/emojiGame/correctToast.vue";
import changeDificult from "@/components/emojiGame/changeDificult.vue";
import easyDificult from "@/components/emojiGame/easyDificult.vue";
import normalDificult from "@/components/emojiGame/normalDificult.vue";
import hardDificult from "@/components/emojiGame/hardDificult.vue";
</script>
<template>
  <section class="relative z-10 bg-gray-100">
    <changeDificult
      @getRequestChangeDificult="changeDificulty"
      v-if="!dificult"
    ></changeDificult>
    <h2 class="text-center mb-5 text-4xl uppercase pt-5" v-if="dificult">
      {{ dificult }}
    </h2>
    <h2 class="text-center my-5 text-xl" v-if="dificult">
      Moves : {{ moves }}
    </h2>

    <correctToast
      id="correctGameToast"
      class="fixed top-[10px] -right-[200px] hidden animationCorrectToast"
    ></correctToast>

    <easyDificult
      v-if="dificult == 'easy'"
      :emojiCards="emojiCards[0].easy"
      :highScore="highScoreEasy"
      @getRequestShowCard="showCard"
      @getRequestResetGame="resetGame"
      @getRequestChangeDificult="resetDificult"
    ></easyDificult>

    <normalDificult
      v-if="dificult == 'normal'"
      :emojiCards="emojiCards[0].normal"
      :highScore="highScoreNormal"
      @getRequestShowCard="showCard"
      @getRequestResetGame="resetGame"
      @getRequestChangeDificult="resetDificult"
    ></normalDificult>

    <hardDificult
      v-if="dificult == 'hard'"
      :emojiCards="emojiCards[0].hard"
      :highScore="highScoreHard"
      @getRequestShowCard="showCard"
      @getRequestResetGame="resetGame"
      @getRequestChangeDificult="resetDificult"
    ></hardDificult>
  </section>
</template>

<script>
import emojiCardData from "../data/emojiCardGame";
export default {
  data() {
    return {
      emojiChoosen1: "",
      emojiChoosen2: "",
      cardChoosen1: "",
      cardChoosen2: "",

      score: 0,
      moves: 0,
      highScoreEasy: 100000,
      highScoreNormal: 100000,
      highScoreHard: 100000,

      dificult: "",
      endScore: 0,

      emojiCards: emojiCardData,
    };
  },
  mounted() {
    window.scrollTo(0, 0);

    if (localStorage.getItem("highScoreEasyAlopeMoojiGame") == null) {
      localStorage.setItem("highScoreEasyAlopeMoojiGame", this.highScoreEasy);
    }
    if (localStorage.getItem("highScoreNormalAlopeMoojiGame") == null) {
      localStorage.setItem(
        "highScoreNormalAlopeMoojiGame",
        this.highScoreNormal
      );
    }
    if (localStorage.getItem("highScoreHardAlopeMoojiGame") == null) {
      localStorage.setItem("highScoreHardAlopeMoojiGame", this.highScoreHard);
    }

    this.highScoreEasy = localStorage.getItem("highScoreEasyAlopeMoojiGame");
    this.highScoreNormal = localStorage.getItem(
      "highScoreNormalAlopeMoojiGame"
    );
    this.highScoreHard = localStorage.getItem("highScoreHardAlopeMoojiGame");
  },
  methods: {
    choseCard(emoji) {
      // lihat dulu apakah ada this.emojiChoosen1 jiga sudah ada berarti user sudah pilih 2 kartu
      if (this.emojiChoosen1) {
        this.emojiChoosen2 = emoji;
        // maka tambah moves nya
        this.moves += 1;
      } else if (!this.emojiChoosen1) {
        this.emojiChoosen1 = emoji;
      }
    },
    showCard(card, emoji) {
      // Jika telah memilih 1 kartu (yang sudah dimasukan ke this.cardChoosen1)
      if (this.cardChoosen1) {
        // maka isi cardChosen2 sesuai card yang dipilih
        this.cardChoosen2 = card;
        // jika cardChoosen1 nya kosong, maka isi itu
      } else if (!this.cardChoosen1) {
        this.cardChoosen1 = card;
      }
      // ini untuk menghindari system supaya tidak bisa klik kartu yang sudah terbuka

      let selectedCard = document.getElementById(card);
      selectedCard.classList.add("rotate-90");
      selectedCard.classList.add("scale-0");
      // remove class z-10 dari card yang dipilih
      setTimeout(() => {
        selectedCard.classList.remove("z-10");
      }, 200);

      // jalankan function chooseCard dengan mengirim emoji sesuai kartu yang dipilih
      this.choseCard(emoji);
    },

    changeDificulty(dificult) {
      this.dificult = dificult;

      switch (dificult) {
        case "easy":
          this.endScore = 8;
          break;
        case "normal":
          this.endScore = 12;
          break;
        case "hard":
          this.endScore = 21;
          break;
      }
    },
    resetDificult() {
      this.dificult = "";
    },

    resetGame() {
      this.score = 0;
      this.moves = 0;
      const cards = document.querySelectorAll(".card");
      cards.forEach((card) => {
        card.classList.add("z-10");
      });
    },
  },
  updated() {
    // cek apakah user sudah memilih 2 kartu
    if (this.emojiChoosen1 && this.emojiChoosen2) {
      // jika ya
      // cek apakah kartu 1 dan kartu 2 punya emoji yang sama
      if (this.emojiChoosen1 == this.emojiChoosen2) {
        // jika ya reset semua data pilihan
        this.emojiChoosen1 = "";
        this.emojiChoosen2 = "";
        this.cardChoosen1 = "";
        this.cardChoosen2 = "";
        // dan tambah scorenya jadi 1
        this.score += 1;

        // tampilkan toast correct selama 1s
        document.getElementById("correctGameToast").classList.remove("hidden");
        document
          .getElementById("correctGameToast")
          .classList.add("animationCorrectToast");
        setTimeout(() => {
          document.getElementById("correctGameToast").classList.add("hidden");
          document
            .getElementById("correctGameToast")
            .classList.remove("animationCorrectToast");
        }, 2000);
        // atau jika kartu 1 dan 2 tidak sama emojinya maka
      } else if (this.emojiChoosen1 != this.emojiChoosen2) {
        setTimeout(() => {
          // ambil data kartu yang dipilih
          const card1 = document.getElementById(this.cardChoosen1);
          const card2 = document.getElementById(this.cardChoosen2);
          // dan setelah 0.3s tambahkan class z-10 supaya kartu hitam menimpa kartu emoji
          // dan hapus class rotatenya
          setTimeout(() => {
            card1.classList.add("z-10");
            card1.classList.remove("scale-0");
            card1.classList.remove("rotate-90");
            card2.classList.add("z-10");
            card2.classList.remove("scale-0");
            card2.classList.remove("rotate-90");
          }, 300);
          // menggunkan timeout ini untuk menghindari adanya bug, ini karena di method shiw card kita menggunakan timeout untuk remove z-10

          this.emojiChoosen1 = "";
          this.emojiChoosen2 = "";
          this.cardChoosen1 = "";
          this.cardChoosen2 = "";
        }, 500);
      }
    }

    if (this.score == this.endScore) {
      this.score = 0;
      const cards = document.querySelectorAll(".card");
      cards.forEach((card) => {
        card.classList.add("z-10");
      });

      if (this.dificult == "easy") {
        const hightScore = localStorage.getItem("highScoreEasyAlopeMoojiGame");
        if (this.moves < hightScore) {
          this.highScoreEasy = this.moves;
          localStorage.setItem(
            "highScoreEasyAlopeMoojiGame",
            this.highScoreEasy
          );
        }
        alert("anda menang");
      } else if (this.dificult == "normal") {
        const hightScore = localStorage.getItem(
          "highScoreNormalAlopeMoojiGame"
        );
        if (this.moves < hightScore) {
          this.highScoreNormal = this.moves;
          localStorage.setItem(
            "highScoreNormalAlopeMoojiGame",
            this.highScoreNormal
          );
        }
        alert("anda menang");
      } else if (this.dificult == "hard") {
        const hightScore = localStorage.getItem("highScoreHardAlopeMoojiGame");
        if (this.moves < hightScore) {
          this.highScoreHard = this.moves;
          localStorage.setItem(
            "highScoreHardAlopeMoojiGame",
            this.highScoreHard
          );
        }
      }

      this.moves = 0;
    }
  },
};
</script>

<style>
.backCardEmoji {
  background-image: url(../assets/sidebarBackground.png);
}
.animationCorrectToast {
  animation: animationCorrectToast 2s;
}
@keyframes animationCorrectToast {
  0% {
    right: -100px;
  }
  40% {
    right: 20px;
  }
  90% {
    right: 20px;
  }
  100% {
    right: -200px;
  }
}
</style>