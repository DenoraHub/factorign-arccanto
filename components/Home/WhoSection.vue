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
              class="text-none bg-white font-weight-bold text-secondary v-btn--variant-outlined text-none font-weight-bold"
              @click="goToAction"
            >
            Agendar reunión
          </v-btn>
          </v-col>
      </v-row>
      
      <v-dialog 
      v-model="pageOptions.modal" 
      scrollable
      :width="dialogWidth"
    >          <template v-slot:default="{isActive}">
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
