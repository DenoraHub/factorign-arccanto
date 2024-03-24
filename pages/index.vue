<template>
  <div>
    <prismic-rich-text :field="home.data.home_top_titlle"></prismic-rich-text>
  </div>
</template>

<script setup lang="ts">
const { client } = usePrismic();

const { data: home } = await useAsyncData("home", () =>
    client.getByUID("homepage", "homepage")
);

</script>
