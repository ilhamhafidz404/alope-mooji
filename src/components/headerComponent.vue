<template>
  <header class="min-h-screen flex items-center relative overflow-hidden">
    <img
      src="../assets/emoticon/headerEmoticon1.png"
      alt="emoticonImage1"
      width="80"
      class="absolute left-[310px] bottom-[20px] md:block hidden"
    />
    <img
      src="../assets/emoticon/headerEmoticon2.png"
      alt="emoticonImage2"
      width="320"
      class="absolute left-[-110px] bottom-[50px] md:block hidden"
    />
    <img
      src="../assets/emoticon/headerEmoticon3.png"
      alt="emoticonImage3"
      width="250"
      class="
        absolute
        md:left-1/2
        right-[-40px]
        -bottom-[140px]
        md:-translate-x-1/2
      "
    />
    <img
      src="../assets/emoticon/headerEmoticon4.png"
      alt="emoticonImage4"
      width="250"
      class="absolute lg:left-[250px] left-[-100px] -top-[140px]"
    />
    <img
      src="../assets/emoticon/headerEmoticon5.png"
      alt="emoticonImage5"
      width="80"
      class="absolute left-1/2 top-[150px] -translate-x-1/2"
    />
    <img
      src="../assets/emoticon/headerEmoticon6.png"
      alt="emoticonImage6"
      width="160"
      class="absolute lg:block hidden right-[300px] top-[50px]"
    />
    <img
      src="../assets/emoticon/headerEmoticon7.png"
      alt="emoticonImage7"
      width="200"
      class="
        absolute
        lg:right-[100px]
        -right-[80px]
        lg:top-[200px]
        top-[300px]
        md:block
        hidden
      "
    />
    <img
      src="../assets/emoticon/headerEmoticon8.png"
      alt="emoticonImage8"
      width="150"
      class="
        absolute
        lg:right-[130px]
        right-[-20px]
        lg:bottom-[20px]
        bottom-[80px]
        md:block
        hidden
      "
    />
    <img
      src="../assets/emoticon/headerEmoticon9.png"
      alt="emoticonImage9"
      width="200"
      class="absolute -right-[30px] -top-[90px] md:block hidden"
    />
    <img
      src="../assets/emoticon/headerEmoticon10.png"
      alt="emoticonImage10"
      width="120"
      class="
        absolute
        lg:left-[150px]
        left-[70px]
        lg:top-[150px]
        top-[250px]
        md:block
        hidden
      "
    />
    <div class="w-full">
      <h2
        class="
          absolute
          lg:left-[70px]
          left-1/2
          lg:top-[50px]
          top-[30px]
          lg:-translate-x-0
          -translate-x-1/2
          text-white text-xl
          font-semibold
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8 mr-2 inline"
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
        ALOPE MOOJI
      </h2>
      <h1
        class="
          md:text-8xl
          text-5xl
          font-bold
          relative
          text-center text-white
          after:content-['Expression']
          after:text-[#fd1720]
          after:rotate-[-7deg]
          after:absolute
          after:top-1/2
          after:left-1/2
          after:-translate-x-1/2
          after:-translate-y-1/2
        "
      >
        Add
        <br class="mb-10" />
        To Your Chat
      </h1>
      <p
        class="
          text-center text-white
          mt-5
          font-semibold
          tracking-wider
          w-[80%]
          mx-auto
        "
      >
        Get Emoji and Emoticon fot your copy and paste in comment.
      </p>
    </div>
  </header>
</template>

<script>
export default {};
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