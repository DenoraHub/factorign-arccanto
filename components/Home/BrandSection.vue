<template>
  <v-container class="my-10">
    <v-row>
      <v-col cols="12" class="d-flex flex-column justify-center">
        <slot name="description">
          <p>Description</p>
        </slot>
        <div class="mx-auto">
          <slot name="image">
            <img src="/favicon.ico" alt="">
          </slot>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
