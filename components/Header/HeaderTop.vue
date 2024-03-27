<template>
  <div style="position: absolute; width: 100%">
    <v-container style="max-width: 80rem !important;" class="mx-auto">
      <v-row class="justify-space-between">
        <v-col cols="12" sm="6" class="d-flex justify-center justify-sm-start">
          <logo></logo>
        </v-col>
        <v-col cols="12" sm="6" class="d-flex justify-center justify-sm-end">
          <outlined-button label="Agendar reunión" class="d-none d-sm-flex"></outlined-button>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import Logo from "~/components/svg/logo.vue";
import OutlinedButton from "~/components/Buttons/OutlinedButton.vue";

</script>

<style scoped>


</style>
