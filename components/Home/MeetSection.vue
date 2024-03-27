<template>
  <v-container class="my-10">
    <v-row>
      <v-col>
        <div class="card-description px-15 py-10 text-white">
          <v-row>
            <v-col class="d-flex flex-column justify-start">
              <h2>Agenda una reunión</h2>
              <p class="mt-5">Inicia tu solicitud y acelera tu crecimiento</p>
              <div class="d-flex mt-10">
                <button type="button" class="v-btn bg-primary text-none font-weight-bold" @click="goToAction">
                  Agendar reunión
                </button>
              </div>
            </v-col>
            <v-col class="d-flex justify-end align-center">
              <img src="/images/MeetCalendar.png" alt="" width="164" height="164">
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
function goToAction() {
  window.open('https://calendly.com/d/5dr-q65-4xk/obten-tu-factoraje-con-arccanto-acelera-tu-crecimiento')
}
</script>

<style scoped>
.card-description {
  display: flex;
  border-radius: 1.25rem;
  box-shadow: 16.26px 16.26px 18.5829px rgba(192, 189, 205, .17);
  background: #4C63F6;
}

h2 {
  font-size: 35px !important;
}

p {
  font-size: 20px !important;
}
</style>
