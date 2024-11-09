<template>
  <pv-card style=" align-items: center; margin-left: 40%; width: 25rem; overflow: hidden; background-color: #ffffff; color: #262626;" aria-label="Detalles de la reserva">
    <template #header>
      <img :src="reservation.scooter.image" :alt="reservation.scooter.model" aria-label="Imagen del scooter" />
    </template>
    <template #title><span aria-label="Título de la reserva">{{ $t('reservationDetails.title') }}</span></template>
    <template #subtitle><span aria-label="Marca y modelo del scooter">{{ reservation.scooter.brand }} - {{ reservation.scooter.model }}</span></template>
    <template #content>
      <p class="m-0" aria-label="Fecha de inicio: {{ reservation.start_date }}"><strong>{{ $t('reservationDetails.fechaInicio') }}</strong> {{ reservation.start_date }}</p>
      <p class="m-0" aria-label="Fecha de fin: {{ reservation.end_date }}"><strong>{{ $t('reservationDetails.fechaFin') }}</strong> {{ reservation.end_date }}</p>
      <p class="m-0" aria-label="Tiempo: {{ reservation.time }} horas"><strong>{{ $t('reservationDetails.tiempo') }}</strong> {{ reservation.time }} hrs</p>
      <p class="m-0" aria-label="Calificación: {{ reservation.rating }}"><strong>{{ $t('reservationDetails.calificacion') }}</strong> {{ reservation.rating }}</p>
      <p class="m-0" aria-label="Nombre del propietario: {{ reservation.user.name }}"><strong>{{ $t('reservationDetails.nombrePropietario') }}</strong> {{ reservation.user.completeName }}</p>
      <p class="m-0" aria-label="Teléfono del propietario: {{ reservation.user.phone }}"><strong>{{ $t('reservationDetails.telefono') }}</strong> {{ reservation.user.phone }}</p>
    </template>
    <template #footer>
      <div class="flex gap-4 mt-1 ">
        <pv-button :label="$t('reservationDetails.btnCerrar')" @click="$router.go(-1)" class="w-full pink-button" aria-label="Cerrar" />
      </div>
    </template>
  </pv-card>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { HistoryServices } from "@/movirent/history-scooter/services/history.services.js";

const route = useRoute();
const reservationId = route.params.id;
const reservation = ref({
  scooter: {},
  user: {}
});

onMounted(async () => {
  if (reservationId) {
    try {
      const reservationResponse = await new HistoryServices().getReserveById(reservationId);
      const reservationData = reservationResponse.data;

      const scooterResponse = await new HistoryServices().getScooterById(reservationData.scooter_id);
      reservationData.scooter = scooterResponse.data;

      const userResponse = await new HistoryServices().getOwnerById(reservationData.client_id);
      reservationData.user = userResponse.data;

      reservation.value = reservationData;
    } catch (error) {
      console.error("Error fetching reservation details:", error);
    }
  }
});
</script>

<style scoped>
.m-0 {
  margin: 0;
}

.pink-button{
  background-color: #FD6C6C;
  color: #ffffff;
  border: none;

}
</style>