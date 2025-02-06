<template>
  <v-btn color="secondary" rounded="0" class="text-none font-weight-bold" variant="outlined" @click="goToAction">
    {{ label }}
  </v-btn>
</template>

<script setup lang="ts">
const props = defineProps({label: {default: 'Button label'}})

function goToAction() {
  window.open('https://api.leadconnectorhq.com/widget/otl/C4vprRctk?slug=factoring-arccanto')
}

</script>

<style scoped>

</style>
