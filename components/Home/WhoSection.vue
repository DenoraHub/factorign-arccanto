<template>
  <div class="w-100 bg-primary">
    <v-container style="padding-top: 7rem; padding-bottom: 7rem;">
      <v-row>
        <v-col class="text-center">
          <h1 class="text-white">Somos la única empresa de factoraje en México que diseña el financiamiento pensando en
            el futuro de tu negocio.</h1>
          <p class="text-white mt-5">Afronta cualquier tipo de compromiso o proyecto que tengas en puerta. Recibe
            nuestra
            línea de factoraje pre autorizada si:</p>
        </v-col>
      </v-row>
      <v-row class="mt-5">
        <v-col>
          <div class="card-description px-12 py-10 text-primary fill-height ga-4">
            <img src="/images/WhoFirstImage.png" height="68" width="49" alt="">
            <h2>Eres proveedor de empresas AAA.</h2>
            <p>Obtén acceso inmediato a financiamiento flexible, garantizando fluidez en tu operación al trabajar con
              clientes de alta calificación.</p>
          </div>
        </v-col>
        <v-col>
          <div class="card-description px-12 py-10 text-primary fill-height ga-4">
            <img src="/images/WhoSecondImage.png" width="68" height="68" alt="">
            <h2>Buscas crecimiento acelerado y rápido.</h2>
            <p>Aprovecha oportunidades de expansión sin demoras con nuestra línea de factoraje diseñada para impulsar tu
              escala de negocio.</p>
          </div>
        </v-col>
        <v-col>
          <div class="card-description px-12 py-10 text-primary fill-height ga-4">
            <img src="/images/WhoThirdImage.png" height="68" width="49" alt="">
            <h2>Facturas más de 15 MDP (MXN) al año.</h2>
            <p>Para negocios con alto volumen de facturación, ofrecemos soluciones de liquidez adaptadas a tu nivel de
              operaciones y ambiciones de crecimiento.</p>
          </div>
        </v-col>
      </v-row>
      <v-row class="mt-10">
        <v-col class="text-center justify-center d-flex ga-4">
          <button type="button" class="v-btn bg-secondary text-none font-weight-bold" @click="pageOptions.modal = !pageOptions.modal">
            Contactar un asesor
          </button>
          <button type="button" class="v-btn bg-white text-secondary text-none font-weight-bold" @click="goToAction">
            <span class="text-secondary">Agendar reunión</span>
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
  </div>
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
  font-size: 40px !important;
}

h2 {
  font-size: 1.75rem !important;
  line-height: 1.15 !important;
}

p {
  font-size: 16px !important;
}

.card-description {
  display: flex;
  flex-direction: column;
  border-radius: 1.25rem;
  box-shadow: 16.26px 16.26px 18.5829px rgba(192, 189, 205, .17);
  background: white;
}
</style>
