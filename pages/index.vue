<template>
  <home-top>
    <template #title>
      <prismic-rich-text class="text-primary" :field="home.data.home_top_titlle"></prismic-rich-text>
    </template>
    <template #subtitle>
      <prismic-rich-text class="text-primary" :field="home.data.home_top_description"></prismic-rich-text>
    </template>
  </home-top>

  <brand-section>
    <template #description>
      <prismic-rich-text class="text-primary text-center" :field="home.data.brand_description"></prismic-rich-text>
    </template>
    <template #image>
      <v-img :src="home.data.brand_image.url" width="auto"></v-img>
    </template>
  </brand-section>

  <question-section></question-section>

  <line-section></line-section>

  <who-section></who-section>

</template>

<script setup lang="ts">
import HomeTop from "~/components/Home/HomeTop.vue";
import BrandSection from "~/components/Home/BrandSection.vue";
import QuestionSection from "~/components/Home/QuestionSection.vue";
import LineSection from "~/components/Home/LineSection.vue";
import WhoSection from "~/components/Home/WhoSection.vue";

const {client} = usePrismic();

const {data: home} = await useAsyncData("home", () =>
    client.getByUID("homepage", "homepage")
);

console.log(home)

</script>
