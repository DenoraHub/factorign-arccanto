<template>
  <v-btn color="secondary" rounded="0" class="text-none font-weight-bold" variant="outlined" @click="goToAction">
    {{ label }}
  </v-btn>
</template>

<script setup lang="ts">
const props = defineProps({label: {default: 'Button label'}})

function goToAction() {
  window.open('https://calendly.com/d/5dr-q65-4xk/obten-tu-factoraje-con-arccanto-acelera-tu-crecimiento')
}

</script>

<style scoped>

</style>
