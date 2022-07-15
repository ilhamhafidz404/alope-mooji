<template>
  <header
    class="
      min-h-screen
      flex
      items-center
      md:justify-end
      justify-center
      relative
      overflow-hidden
      lg:px-60
      md:px-20
      px-10
    "
  >
    <img
      src="../../assets/emoticon/headerEmoticon1.png"
      alt="emoticonImage1"
      width="80"
      class="
        absolute
        lg:right-[300px]
        left-[200px]
        lg:top-[100px]
        md:top-[250px]
        top-[150px]
      "
    />
    <img
      src="../../assets/emoticon/headerEmoticon4.png"
      alt="emoticonImage4"
      width="200"
      class="
        absolute
        lg:right-[450px]
        left-1/2
        lg:-translate-x-0
        -translate-x-1/2
        bottom-[-100px]
        rotate-[-120deg]
      "
    />
    <img
      src="../../assets/emoticon/headerEmoticon5.png"
      alt="emoticonImage5"
      width="100"
      class="
        absolute
        lg:right-[200px]
        md:right-[100px]
        right-[20px]
        md:bottom-[100px]
        bottom-[200px]
      "
    />
    <img
      src="../../assets/emoticon/headerEmoticon7.png"
      alt="emoticonImage7"
      width="300"
      class="
        absolute
        lg:block
        hidden
        left-[100px]
        top-1/2
        rotate-[-100deg]
        -translate-y-1/2
      "
    />
    <img
      src="../../assets/emoticon/headerEmoticon8.png"
      alt="emoticonImage8"
      width="70"
      class="absolute left-[500px] top-[80px]"
    />
    <img
      src="../../assets/emoticon/headerEmoticon9.png"
      alt="emoticonImage9"
      width="150"
      class="absolute left-[-70px] top-[70px]"
    />
    <img
      src="../../assets/emoticon/headerEmoticon10.png"
      alt="emoticonImage10"
      width="100"
      class="
        absolute
        lg:left-[400px]
        md:left-[100px]
        left-0
        lg:bottom-[90px]
        md:bottom-[200px]
        bottom-[100px]
      "
    />
    <div>
      <h1
        class="
          md:text-9xl
          text-6xl
          font-bold
          relative
          text-center text-white
          cursor-pointer
          after:content-['start']
          after:text-[#fd1720]
          after:rotate-[-7deg]
          after:absolute
          after:top-1/2
          after:left-1/2
          after:-translate-x-1/2
          after:-translate-y-1/2
        "
        @click="requestOpenDificultModal()"
      >
        FLIP THE
        <br class="mb-10" />
        CARD
      </h1>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    requestOpenDificultModal() {
      this.$emit("getRequestOpenDificultModal");
    },
  },
};
</script>

<style scoped>
header {
  background-image: radial-gradient(at 50% 100%, #fdcd3e 50px, #fcac0e);
}
h1 {
  font-family: "Montserrat", sans-serif;
}
h1:after {
  font-family: "Covered By Your Grace", cursive;
}
</style>