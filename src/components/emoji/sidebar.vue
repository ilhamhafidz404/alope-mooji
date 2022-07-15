<template>
  <aside class="pl-6">
    <ul>
      <li>
        <button
          :class="{
            'bg-gradient-to-r from-[#fdcd3e]/90 to-[#fcac0e]/90 text-white':
              active == 'all',
          }"
          class="
            flex
            justify-between
            w-full
            items-center
            rounded
            border border-transparent
            hover:border-gray-200
            px-3
            py-2
            mb-1
          "
          @click="filterEmojiRequest('all')"
        >
          <span> <span class="text-xl mr-2">😁</span> All Emoji </span>
          <small> {{ allEmojiCount }} </small>
        </button>
      </li>
      <li>
        <button
          :class="{
            'bg-gradient-to-r from-[#fdcd3e]/90 to-[#fcac0e]/90 text-white':
              active == 'happy',
          }"
          class="
            flex
            justify-between
            w-full
            items-center
            rounded
            border border-transparent
            hover:border-gray-200
            px-3
            py-2
            mb-1
          "
          @click="filterEmojiRequest('happy')"
        >
          <span> <span class="text-xl mr-2">😄</span> Happy Emoji </span>
          <small> {{ calculateHappyEmoji }} </small>
        </button>
      </li>
      <li>
        <button
          :class="{
            'bg-gradient-to-r from-[#fdcd3e]/90 to-[#fcac0e]/90 text-white':
              active == 'smile',
          }"
          class="
            flex
            justify-between
            w-full
            items-center
            rounded
            border border-transparent
            hover:border-gray-200
            px-3
            py-2
            mb-1
          "
          @click="filterEmojiRequest('smile')"
        >
          <span> <span class="text-xl mr-2">🙂</span> Smiley Face Emoji </span>
          <small> {{ calculateSmileyEmoji }} </small>
        </button>
      </li>
      <li>
        <button
          :class="{
            'bg-gradient-to-r from-[#fdcd3e]/90 to-[#fcac0e]/90 text-white':
              active == 'sad',
          }"
          class="
            flex
            justify-between
            w-full
            items-center
            rounded
            border border-transparent
            hover:border-gray-200
            px-3
            py-2
            mb-1
          "
          @click="filterEmojiRequest('sad')"
        >
          <span> <span class="text-xl mr-2">😞</span> Sad Emoji </span>
          <small> {{ calculateSadEmoji }} </small>
        </button>
      </li>
      <li>
        <button
          :class="{
            'bg-gradient-to-r from-[#fdcd3e]/90 to-[#fcac0e]/90 text-white':
              active == 'cry',
          }"
          class="
            flex
            justify-between
            w-full
            items-center
            rounded
            border border-transparent
            hover:border-gray-200
            px-3
            py-2
            mb-1
          "
          @click="filterEmojiRequest('cry')"
        >
          <span> <span class="text-xl mr-2">😢</span> Cry Emoji </span>
          <small> {{ calculateCryEmoji }} </small>
        </button>
      </li>
      <li>
        <button
          :class="{
            'bg-gradient-to-r from-[#fdcd3e]/90 to-[#fcac0e]/90 text-white':
              active == 'neutral',
          }"
          class="
            flex
            justify-between
            w-full
            items-center
            rounded
            border border-transparent
            hover:border-gray-200
            px-3
            py-2
            mb-1
          "
          @click="filterEmojiRequest('neutral')"
        >
          <span> <span class="text-xl mr-2">😐</span> Neutral Emoji </span>
          <small> {{ calculateNeutralEmoji }} </small>
        </button>
      </li>
      <li>
        <button
          :class="{
            'bg-gradient-to-r from-[#fdcd3e]/90 to-[#fcac0e]/90 text-white':
              active == 'love',
          }"
          class="
            flex
            justify-between
            w-full
            items-center
            rounded
            border border-transparent
            hover:border-gray-200
            px-3
            py-2
            mb-1
          "
          @click="filterEmojiRequest('love')"
        >
          <span> <span class="text-xl mr-2">😍</span> Love Emoji </span>
          <small> {{ calculateLoveEmoji }} </small>
        </button>
      </li>
      <li>
        <button
          :class="{
            'bg-gradient-to-r from-[#fdcd3e]/90 to-[#fcac0e]/90 text-white':
              active == 'negative',
          }"
          class="
            flex
            justify-between
            w-full
            items-center
            rounded
            border border-transparent
            hover:border-gray-200
            px-3
            py-2
            mb-1
          "
          @click="filterEmojiRequest('negative')"
        >
          <span> <span class="text-xl mr-2">😡</span> Negative Emoji </span>
          <small> {{ calculateNegativeEmoji }} </small>
        </button>
      </li>
      <li>
        <button
          :class="{
            'bg-gradient-to-r from-[#fdcd3e]/90 to-[#fcac0e]/90 text-white':
              active == 'tongue',
          }"
          class="
            flex
            justify-between
            w-full
            items-center
            rounded
            border border-transparent
            hover:border-gray-200
            px-3
            py-2
            mb-1
          "
          @click="filterEmojiRequest('tongue')"
        >
          <span> <span class="text-xl mr-2">🤪</span> Tongue Emoji </span>
          <small> {{ calculateTongueEmoji }} </small>
        </button>
      </li>
      <li>
        <button
          :class="{
            'bg-gradient-to-r from-[#fdcd3e]/90 to-[#fcac0e]/90 text-white':
              active == 'concerned',
          }"
          class="
            flex
            justify-between
            w-full
            items-center
            rounded
            border border-transparent
            hover:border-gray-200
            px-3
            py-2
            mb-1
          "
          @click="filterEmojiRequest('concerned')"
        >
          <span> <span class="text-xl mr-2">😨</span> Concerned Emoji </span>
          <small> {{ calculateConcernedEmoji }} </small>
        </button>
      </li>
      <li>
        <button
          :class="{
            'bg-gradient-to-r from-[#fdcd3e]/90 to-[#fcac0e]/90 text-white':
              active == 'sick',
          }"
          class="
            flex
            justify-between
            w-full
            items-center
            rounded
            border border-transparent
            hover:border-gray-200
            px-3
            py-2
            mb-1
          "
          @click="filterEmojiRequest('sick')"
        >
          <span> <span class="text-xl mr-2">🤒</span> Sick Emoji </span>
          <small> {{ calculateSickEmoji }} </small>
        </button>
      </li>
      <li>
        <button
          :class="{
            'bg-gradient-to-r from-[#fdcd3e]/90 to-[#fcac0e]/90 text-white':
              active == 'costume',
          }"
          class="
            flex
            justify-between
            w-full
            items-center
            rounded
            border border-transparent
            hover:border-gray-200
            px-3
            py-2
            mb-1
          "
          @click="filterEmojiRequest('costume')"
        >
          <span> <span class="text-xl mr-2">💩</span> Costume Face Emoji </span>
          <small> {{ calculateCostumeEmoji }} </small>
        </button>
      </li>
      <hr class="my-4" />
      <li>
        <button
          :class="{
            'bg-gradient-to-r from-[#fdcd3e]/90 to-[#fcac0e]/90 text-white':
              active == 'animal',
          }"
          class="
            flex
            justify-between
            w-full
            items-center
            rounded
            border border-transparent
            hover:border-gray-200
            px-3
            py-2
            mb-1
          "
          @click="filterEmojiRequest('animal')"
        >
          <span> <span class="text-xl mr-2">🦄</span> Animal Emoji </span>
          <small> {{ calculateAnimalEmoji }} </small>
        </button>
      </li>

      <hr class="my-4" />

      <li>
        <button
          :class="{
            'bg-gradient-to-r from-[#fdcd3e]/90 to-[#fcac0e]/90 text-white':
              active == 'man',
          }"
          class="
            flex
            justify-between
            w-full
            items-center
            rounded
            border border-transparent
            hover:border-gray-200
            px-3
            py-2
            mb-1
          "
          @click="filterEmojiRequest('man')"
        >
          <span> <span class="text-xl mr-2">👨</span> Man Emoji </span>
          <small> {{ calculateManEmoji }} </small>
        </button>
      </li>
      <li>
        <button
          :class="{
            'bg-gradient-to-r from-[#fdcd3e]/90 to-[#fcac0e]/90 text-white':
              active == 'woman',
          }"
          class="
            flex
            justify-between
            w-full
            items-center
            rounded
            border border-transparent
            hover:border-gray-200
            px-3
            py-2
            mb-1
          "
          @click="filterEmojiRequest('woman')"
        >
          <span> <span class="text-xl mr-2">👩</span> Woman Emoji </span>
          <small> {{ calculateWomanEmoji }} </small>
        </button>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  props: ["emojis"],
  data() {
    return {
      active: "all",
      emojiTags: [],

      allEmojiCount: 0,
    };
  },
  methods: {
    filterEmojiRequest(tag) {
      if (this.active == tag) {
        this.active = "all";
      } else {
        this.active = tag;
      }
      this.$emit("getRequestFilterEmojiUsingTag", tag);
    },
  },
  computed: {
    calculateAllEmoji() {
      return this.emojis.length;
    },
    calculateHappyEmoji() {
      return this.emojiTags.filter((tag) => tag === "happy").length;
    },
    calculateSmileyEmoji() {
      return this.emojiTags.filter((tag) => tag === "smile").length;
    },
    calculateNeutralEmoji() {
      return this.emojiTags.filter((tag) => tag === "neutral").length;
    },
    calculateNegativeEmoji() {
      return this.emojiTags.filter((tag) => tag === "negative").length;
    },
    calculateCryEmoji() {
      return this.emojiTags.filter((tag) => tag === "cry").length;
    },
    calculateSadEmoji() {
      return this.emojiTags.filter((tag) => tag === "sad").length;
    },
    calculateLoveEmoji() {
      return this.emojiTags.filter((tag) => tag === "love").length;
    },
    calculateTongueEmoji() {
      return this.emojiTags.filter((tag) => tag === "tongue").length;
    },
    calculateCostumeEmoji() {
      return this.emojiTags.filter((tag) => tag === "costume").length;
    },
    calculateConcernedEmoji() {
      return this.emojiTags.filter((tag) => tag === "concerned").length;
    },
    calculateSickEmoji() {
      return this.emojiTags.filter((tag) => tag === "sick").length;
    },

    calculateAnimalEmoji() {
      return this.emojiTags.filter((tag) => tag === "animal").length;
    },
    calculateCatEmoji() {
      return this.emojiTags.filter((tag) => tag === "cat").length;
    },
    calculateMonkeyEmoji() {
      return this.emojiTags.filter((tag) => tag === "monkey").length;
    },

    calculateBodyPartEmoji() {
      return this.emojiTags.filter((tag) => tag === "body part").length;
    },
    calculateHandEmoji() {
      return this.emojiTags.filter((tag) => tag === "hand").length;
    },
    calculatePersonEmoji() {
      return this.emojiTags.filter((tag) => tag === "person").length;
    },
    calculateJobEmoji() {
      return this.emojiTags.filter((tag) => tag === "job").length;
    },
    calculateManEmoji() {
      return this.emojiTags.filter((tag) => tag === "man").length;
    },
    calculateWomanEmoji() {
      return this.emojiTags.filter((tag) => tag === "woman").length;
    },
  },
  mounted() {
    this.emojis.forEach((emoji) =>
      emoji.tags.forEach((tag) => {
        this.emojiTags.push(tag);
      })
    );
    this.allEmojiCount = this.emojis.length;
  },
};
</script>

<style scoped>
/* aside {
  background-image: url(../assets/sidebarBackground.png);
} */
</style>