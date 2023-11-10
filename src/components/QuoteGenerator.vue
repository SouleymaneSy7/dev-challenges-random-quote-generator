<template>
  <main
    class="container bg-mainContentBgClr bg-main-svg-image bg-cover bg-no-repeat bg-bottom rounded-xl text-center py-10 px-5"
  >
    <h1 class="text-authorTextClr text-author">{{ quoteData.author }}</h1>

    <div class="flex justify-center items-center gap-3 mt-3 mb-6">
      <div
        v-for="(tag, index) in quoteData.tags"
        :key="index"
        class="px-2 py-[0.125rem] text-typeTextClr text-quote-type border border-typeTextClr rounded-full"
      >
        {{ tag }}
      </div>
    </div>
    <q class="text-quote text-bodyTextClr">
      {{ quoteData.content }}
    </q>
  </main>

  <section class="flex justify-center items-center mt-4">
    <button
      class="border-2 border-mainContentBgClr py-2 px-3 rounded-l-lg cursor-pointer"
      title="Generate a Random Quote"
      @click="generateQuote"
    >
      <img src="../assets/Regroup.svg" alt="svg icons" />
    </button>
    <button
      class="border-y-2 border-e-2 border-mainContentBgClr py-2 px-3 rounded-r-lg cursor-pointer"
      title="Copy Generated Quote in The Clipboard"
      @click="copyQuote"
    >
      <img src="../assets/link.svg" alt="svg icons" />
    </button>
  </section>
</template>

<script setup>
import axios from "axios";
import { onBeforeMount, ref } from "vue";

const quoteData = ref({});
let copyContent = ref("");

// Generate Quote On The Page Load
onBeforeMount(() => {
  generateQuote();
});

// Function For Generating Quote
const generateQuote = () => {
  axios
    .get("https://api.quotable.io/random")
    .then((response) => {
      const res = response.data;

      quoteData.value = {
        author: res.author,
        content: res.content,
        tags: res.tags,
      };

      copyContent.value = res.content;
    })

    .catch((error) => {
      console.log(error);
    });
};

// Copying Quote In The Clipboard
const copyQuote = () => {
  navigator.clipboard
    .writeText(copyContent.value)
    .then(() => {
      alert("Text Copied in the Clipboard");
    })
    .catch((error) => {
      alert("Error Copying Text");
      console.log(error);
    });
};
</script>
