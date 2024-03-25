<template>
  <v-container class="my-10">
    <v-row class="justify-center">
      <v-col cols="8" class="text-center">
        <h1 class="text-primary">¿Cómo funciona el financiamiento por factoraje ArCcanto?</h1>
      </v-col>
    </v-row>
    <v-row class="mt-5">
      <v-col>
        <div class="card-description px-8 py-10 text-primary fill-height ga-4">
          <img src="/images/HowFirstImage.png" height="106" width="39" alt="">
          <h3 class="text-center">Inicia tu solicitud</h3>
          <p class="text-center">Agenda una reunión de 15 minutos con nosotros para darte a conocer el checklist de
            documentos requeridos hacia la apertura de tu cuenta.</p>
        </div>
      </v-col>
      <v-col>
        <div class="card-description px-8 py-10 text-primary fill-height ga-4">
          <img src="/images/HowSecondImage.png" height="106" width="54" alt="">
          <h2 class="text-center">Selecciona las facturas</h2>
          <p class="text-center">Proporciona un listado de tus clientes AAA para aplicar al factoraje, facilitando el
            proceso de selección y aprobación</p>
        </div>
      </v-col>
      <v-col>
        <div class="card-description px-8 py-10 text-primary fill-height ga-4">
          <img src="/images/HowThirdImage.png" height="106" width="50" alt="">
          <h2 class="text-center">Recibe el financiemiento</h2>
          <p class="text-center">Obtén una presentación del financiamiento inicial aprobado y comienza a disfrutar de la
            liquidez que tu negocio necesita para crecer.</p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">

</script>

<style scoped>
.card-description {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1.25rem;
  box-shadow: 16.26px 16.26px 18.5829px rgba(192, 189, 205, .17);
  background: white;
}

h3 {
  font-size: 20px !important;
}

p {
  font-size: 16px !important;
}
</style>
