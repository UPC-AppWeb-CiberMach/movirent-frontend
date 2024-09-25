<template>
  <pv-card style="width: 25rem; overflow: hidden; background-color: #ffffff; color: #262626;"> <!-- Fondo blanco y texto negro -->
    <template #header>
      <img :src="reservation.scooter.image" :alt="reservation.scooter.model" />
    </template>
    <template #title>Reservation Details</template>
    <template #subtitle>{{ reservation.scooter.brand }} - {{ reservation.scooter.model }}</template>
    <template #content>
      <p class="m-0"><strong>Start Date:</strong> {{ reservation.start_date }}</p>
      <p class="m-0"><strong>End Date:</strong> {{ reservation.end_date }}</p>
      <p class="m-0"><strong>Time:</strong> {{ reservation.time }} hrs</p>
      <p class="m-0"><strong>Rating:</strong> {{ reservation.rating }}</p>
      <p class="m-0"><strong>Owner name:</strong> {{ reservation.user.name }}</p>
      <p class="m-0"><strong>Owner phone:</strong> {{ reservation.user.phone }}</p>
    </template>
    <template #footer>
      <div class="flex gap-4 mt-1">
        <pv-button label="Close" @click="$router.go(-1)" class="w-full" />
      </div>
    </template>
  </pv-card>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { HistoryServices } from "@/movirent/history-scooter/services/history-services.js";

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

</style>