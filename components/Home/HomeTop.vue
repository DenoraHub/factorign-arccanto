<template>
  <v-container class="custom-pt">
    <v-row>
      <!-- style="padding-top: 250px; padding-bottom: 60px;" -->
      <v-col cols="12" sm="6" class="text-center text-lg-left d-flex flex-column">
        <slot name="title">
          <h1>Title</h1>
        </slot>
        <slot name="subtitle">
          <p>Subtitle</p>
        </slot>
        <v-row class="pt-5">
          <v-col cols="12" lg="6">
            <v-btn
              size="x-large"
              block
              color="secondary"
              class="text-none font-weight-bold custom-btn"
              @click="pageOptions.modal = !pageOptions.modal"
            >
              Contactar un asesor
            </v-btn> 
          </v-col>
          <v-col cols="12" lg="6">
            <v-btn
              size="x-large"
              variant="outlined"
              block
              class="text-none font-weight-bold text-secondary v-btn--variant-outlined text-none font-weight-bold"
              @click="goToAction"
            >
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
    <v-dialog 
      v-model="pageOptions.modal" 
      scrollable
      :width="dialogWidth"
    >
      <template v-slot:default="{isActive}">
        <v-card>
          <contact-form></contact-form>
        </v-card>
      </template>
    </v-dialog>
  </v-container>
</template>

<script setup lang="ts">

import ContactForm from "~/components/Form/ContactForm.vue";
import { useDisplay } from "vuetify";
import { computed } from "vue";

const pageOptions = reactive({
  modal: false
})

const { mdAndUp } = useDisplay()
const dialogWidth = computed(() => mdAndUp.value ? '500' : '400')

function goToAction() {
  window.open('https://api.leadconnectorhq.com/widget/otl/C4vprRctk?slug=factoring-arccanto')
}

</script>

<style>
h1 {
  font-size: 3rem !important;
}

p {
  font-size: 1.25rem !important;
}

.v-btn {
  padding: .875rem 2.5rem !important;
  border-radius: .5rem !important;
  font-size: 1rem !important;
}
</style>

