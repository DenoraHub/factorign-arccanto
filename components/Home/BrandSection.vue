<template>
  <v-container class="my-10">
    <v-row>
      <v-col cols="12" class="d-flex flex-column justify-center">
        <h2 class="text-primary text-center font-weight-bold mb-10">Grandes marcas confían en ArCcanto</h2>
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
h2 {
  font-size: 18px!important;
}
</style>
