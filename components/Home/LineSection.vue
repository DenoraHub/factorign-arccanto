<template>
  <v-container class="my-10">
    <v-row>
      <v-col class="text-center">
        <h1 class="text-secondary">Tu línea de factoraje siempre lista</h1>
        <h1 class="text-primary mb-2">¡Incrementa según lo necesite tu empresa!</h1>
        <p class="text-primary">Conoce las características del factoraje ArCcanto</p>
      </v-col>
    </v-row>
    <v-row class="mt-15">
      <v-col cols="12" sm="6">
        <div class="card-custom-first text-white font-weight-bold fill-height">
          <p>Mientras tengas facturas con clientes AAA tienes preautorizada tu línea de factoraje y la podrás
            incrementar.</p>
          <v-divider thickness="2" color="white" class="my-3"></v-divider>
          <p>Hasta 35 millones de pesos de monto de línea, con el adelanto del 80% del valor factura.</p>
          <v-divider thickness="2" color="white" class="my-3"></v-divider>
          <p>Tasa líder en el mercado: Operamos con tasa de TIIE + 10.5% anual. Comisión por apertura de 2% del importe
            de la línea autorizada.</p>
          <v-divider thickness="2" color="white" class="my-3"></v-divider>
          <p>Garantizamos el direccionamiento de los pagos de la empresa AAA a una cuenta concentrada.</p>
          <v-divider thickness="2" color="white" class="my-3"></v-divider>
          <p>No se notifica a tu cliente.</p>
          <v-divider thickness="2" color="white" class="my-3"></v-divider>
          <p>Sin aval inmobiliario. El 60% de los socios accionistas deben estar de acuerdo.</p>
          <img class="img-indicator" src="/images/LineFirstImage.png" alt="">
        </div>
      </v-col>
      <v-col cols="12" sm="6">
        <div class="card-custom-second text-primary font-weight-medium fill-height">
          <p>Líneas fijas sin posibilidad de incrementos.</p>
          <v-divider thickness="2" color="primary" class="my-3"></v-divider>
          <p>Límites de crédito bajos y adelantos menores sobre el valor de la factura.</p>
          <v-divider thickness="2" color="primary" class="my-3"></v-divider>
          <p>Tasa de interés variable y elevada, condiciones menos favorables.</p>
          <v-divider thickness="2" color="primary" class="my-3"></v-divider>
          <p>Gestión de pagos menos eficiente y sin garantías de direccionamiento adecuado.</p>
          <v-divider thickness="2" color="primary" class="my-3"></v-divider>
          <p>Se notifica al cliente final, lo que puede afectar la relación comercial.</p>
          <v-divider thickness="2" color="primary" class="my-3"></v-divider>
          <p>Tediosos avales inmobiliarios y requisitos interminables de la banca tradicional, que pueden tomar meses o
            incluso años.</p>
          <img class="img-indicator" src="/images/LineSecondImage.png" alt="">
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">

</script>

<style scoped>
h1 {
  font-size: 2.5rem !important;
}

p {
  font-size: 16px !important;
}

.card-custom-first {
  position: relative;
  border-radius: 1.25rem;
  box-shadow: 16.26px 16.26px 18.5829px rgba(192, 189, 205, .17);
  opacity: .9;
  background: linear-gradient(56.45deg, #ff7d00 1.78%, #fc771c 16.06%, #f56565 51.07%, #ea4ad8 98.59%, #e640ff 104.65%);
  padding: 4rem;
}

.card-custom-second {
  position: relative;
  border-radius: 1.25rem;
  box-shadow: 16.26px 16.26px 18.5829px rgba(192, 189, 205, .17);
  background: #C4D1E5;
  padding: 4rem;
}

.img-indicator{
  width: 80px;
  height: 80px;
  position: absolute;
  top: -40px;
  right: 40px;
}
</style>
