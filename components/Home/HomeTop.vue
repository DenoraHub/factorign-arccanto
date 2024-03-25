<template>
  <v-container class="pt-16 fill-height">
    <v-row class="pt-16 pt-sm-0">
      <v-col cols="12" sm="6" class="d-flex flex-column pt-0 pt-sm-10">
        <slot name="title">
          <h1>Title</h1>
        </slot>
        <slot name="subtitle">
          <p>Subtitle</p>
        </slot>
        <v-row class="pt-5">
          <v-col cols="6">
            <v-btn block color="secondary" class="text-none font-weight-bold" variant="elevated" rounded="lg">
              Contactar un asesor
            </v-btn>
          </v-col>
          <v-col cols="6">
            <v-btn block color="secondary" class="text-none font-weight-bold" variant="outlined" rounded="lg"
                   @click="goToAction">
              Agendar reunión
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" sm="6">
        <video autoplay muted loop id="myVideo" class="w-100">
          <source src="/video/top_video.mp4" type="video/mp4">
          Your browser does not support HTML5 video.
        </video>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">

function goToAction() {
  window.open('https://calendly.com/d/5dr-q65-4xk/obten-tu-factoraje-con-arccanto-acelera-tu-crecimiento')
}

</script>

<style>
h1 {
  font-size: 42px !important;
}

p {
  font-size: 20px !important;
}
</style>
