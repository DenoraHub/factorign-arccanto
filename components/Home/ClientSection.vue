<template>
  <v-container class="my-10">
    <v-row>
      <v-col>
        <div class="card-description px-15 py-10 text-white d-flex flex-column align-center justify-center">
          <h1>Mira lo que los medios dicen sobre ArCcanto</h1>
          <div class="carousel-wrapper-clientes">
            <div class="carousel-item">
              <img src="/images/carousel/economista.png" alt="Imagen 1" @click="goToPage(1)">
            </div>
            <div class="carousel-item">
              <img src="/images/carousel/expansion.png" alt="Imagen 1" @click="goToPage(2)">
            </div>
            <div class="carousel-item">
              <img src="/images/carousel/heraldo.png" alt="Imagen 1" @click="goToPage(3)">
            </div>
            <div class="carousel-item">
              <img src="/images/carousel/forbes.png" alt="Imagen 1" @click="goToPage(4)">
            </div>
            <div class="carousel-item">
              <img src="/images/carousel/milenio.png" alt="Imagen 1" @click="goToPage(5)">
            </div>
            <div class="carousel-item">
              <img src="/images/carousel/fortuna.png" alt="Imagen 1" @click="goToPage(6)">
            </div>
            <div class="carousel-item">
              <img src="/images/carousel/economista.png" alt="Imagen 1" @click="goToPage(1)">
            </div>
            <div class="carousel-item">
              <img src="/images/carousel/expansion.png" alt="Imagen 1" @click="goToPage(2)">
            </div>
            <div class="carousel-item">
              <img src="/images/carousel/heraldo.png" alt="Imagen 1" @click="goToPage(3)">
            </div>
            <div class="carousel-item">
              <img src="/images/carousel/forbes.png" alt="Imagen 1" @click="goToPage(4)">
            </div>
            <div class="carousel-item">
              <img src="/images/carousel/milenio.png" alt="Imagen 1" @click="goToPage(5)">
            </div>
            <div class="carousel-item">
              <img src="/images/carousel/fortuna.png" alt="Imagen 1" @click="goToPage(6)">
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">

onMounted(() => {
  const carrusel = document.querySelector(".carousel-wrapper-clientes");
  if(carrusel != null){
    const maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;
    let step = 1;

    setInterval(function () {
      carrusel.scrollLeft = carrusel.scrollLeft + step;
      if (carrusel.scrollLeft === maxScrollLeft || carrusel.scrollLeft === 0) {
        step = step *-1;
      }
    }, 20);
  }
})

function goToPage(number: number){
  switch (number){
    case 1:
      window.open('https://www.eleconomista.com.mx/el-empresario/Alianza-Endeavor-ArCcanto-detona-financiamiento-20071019-0003.html')
      break;
    case 2:
      window.open('https://expansion.mx/especiales/2014/04/19/victor-calderon-un-impulsor-en-arccanto')
      break;
    case 3:
      window.open('https://heraldodemexico.com.mx/economia/2022/6/14/arccanto-consolida-el-factoraje-financiero-entre-las-pymes-413506.html')
      break;
    case 4:
      window.open('https://www.forbes.com.mx/30-promesas-2018-un-puente-con-el-dinero/')
      break;
    case 5:
      window.open('https://www.milenio.com/negocios/arccanto-consigue-apoyo-a-empresas-medianas')
      break;
    case 6:
      window.open('https://revistafortuna.com.mx/2012/05/07/arccanto-banca-de-inversion/')
      break;
  }
}
</script>

<style scoped>
h1 {
  color: #454545 !important;
  font-size: 30px !important;
}

.card-description {
  display: flex;
  border-radius: 1.25rem;
  box-shadow: 16.26px 16.26px 18.5829px rgba(192, 189, 205, .17);
  background: #FFFFFF;
}

.carousel-wrapper-clientes {
  width: 100%;
  display: flex;
  align-items: center;
  overflow-x: hidden;
  overflow-y: hidden;
  padding: 25px 0px 25px 0px;
}

.carousel-item {
  width: 20%; /* Mostrar dos imágenes simultáneamente */
  flex: 0 0 auto;
  padding: 0 20px;
  cursor: pointer;
}

.carousel-item img {
  width: 100%;
  height: auto;
}
</style>
