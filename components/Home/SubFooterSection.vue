<template>
  <v-container class="my-10">
    <v-row>
      <v-col class="text-primary d-flex align-center">
        <div class="d-flex flex-column">
          <h2>Requisitos del <br> Factoraje ArCcanto</h2>
          <div class="ma-5">
            <ul>
              <li class="my-8">Ser proveedor de empresas AAA.</li>
              <li class="my-8">Facturar más de 15 MDP MXN al año.</li>
              <li class="my-8">Contar con estados financieros de los últimos 3 ejercicios (2023,2022,2021). En caso de
                2023 el parcial más reciente *
              </li>
            </ul>
          </div>
        </div>
      </v-col>
      <v-col class="d-flex justify-end">
        <img src="/images/SubFooterFirstImage.png" width="400" height="456" alt="">
      </v-col>
    </v-row>
    <v-row class="mt-15">
      <v-col class="d-flex justify-center">
        <video controls id="myVideo" class="w-100" autoplay muted>
          <source src="/video/video_factoraje.mp4" type="video/mp4">
          Your browser does not support HTML5 video.
        </video>
      </v-col>
      <v-col class="text-primary d-flex align-center">
        <div class="d-flex flex-column">
          <h2>¿Necesitas saber más sobre el factoraje?</h2>
          <p class="mt-5">Descubre en este episodio de nuestro podcast, cómo el factoraje ArCcanto ha sido la clave para
            el éxito de
            Republic Cosmetics y Madison.</p>
          <div class="d-flex mt-10">
            <button type="button" class="v-btn bg-secondary text-none font-weight-bold" @click="goToAction">
              Agendar reunión
            </button>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row class="mt-16 justify-center">
      <v-col cols="10" class="text-primary text-center">
        <h1>Aprovecha las ventajas de solicitar financiamiento por factoraje con ArCcanto</h1>
      </v-col>
    </v-row>
    <v-row class="pt-5 justify-center">
      <v-col cols="3">
        <button type="button" class="v-btn bg-secondary text-none font-weight-bold"
                @click="pageOptions.modal = !pageOptions.modal">
          Contactar un asesor
        </button>
      </v-col>
      <v-col cols="3">
        <button type="button" class="v-btn text-secondary v-btn--variant-outlined text-none font-weight-bold"
                @click="goToAction">
          Agendar reunión
        </button>
      </v-col>
    </v-row>
    <v-dialog v-model="pageOptions.modal" scrollable width="auto">
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

const pageOptions = reactive({
  modal: false
})

function goToAction() {
  window.open('https://calendly.com/d/5dr-q65-4xk/obten-tu-factoraje-con-arccanto-acelera-tu-crecimiento')
}
</script>

<style scoped>
h1 {
  font-size: 35px;
}

h2 {
  font-size: 30px;
}

li {
  font-size: 18px !important;
}

p {
  font-size: 18px !important;
}
</style>
