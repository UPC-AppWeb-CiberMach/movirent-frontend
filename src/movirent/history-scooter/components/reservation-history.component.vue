<template>
  <div class="history-container" aria-label="Scooter Rental History">
    <h1>{{ $t('reservationHistory.title') }}</h1>
    <div class="scooter-list">
      <div v-for="reservation in reservations" :key="reservation.id" class="scooter-card">
        <img :src="getScooterImage(reservation.scooterId)" alt="Scooter Image" class="scooter-image" aria-label="Rented Scooter Image" @click="showReservation(reservation)"/>
        <button class="detail-button" @click="viewDetails(reservation.scooterId)" aria-label="View Scooter Details">{{ $t('reservationHistory.verDetalles') }}</button>
      </div>
    </div>

    <button class="delete-button" @click="showDeleteDialog = true" aria-label="Delete Scooter Rental History">{{ $t('reservationHistory.eliminarHistorial') }}</button>

    <pv-dialog v-model:visible="showDeleteDialog" header="Are you sure you want to delete your history?" :modal="true" :closable="false" aria-label="Delete History Confirmation Dialog">
      <p class="center-title">Your data cannot be recovered</p>
      <div class="button-container">
        <pv-button class="p-button-cancel green-button" :label="$t('reservationHistory.btnCancelar')" @click="showDeleteDialog = false" aria-label="Cancel History Deletion" />
        <pv-button class="p-button-confirm red-button" :label="$t('reservationHistory.btnBorrarHistorial')" @click="deleteHistory" aria-label="Confirm History Deletion" />
      </div>
    </pv-dialog>
    <pv-dialog v-model:visible="showReservationDialog" :modal="true" :closable="false" aria-label="Reservation Details" class="custom-dialog">
      <div class="dialog-content">
        <reservation-details-dialog v-if="showReservationDialog" :reservation="selectedReservation" :scooter="selectedScooter" @close="showReservationDialog = false" />
      </div>
    </pv-dialog>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { ReservationService } from '@/movirent/history-scooter/services/reservations.services.js';
import { BaseService } from "@/shared/base.service.js";
import ReservationDetailsDialog from "@/movirent/history-scooter/components/reservation-details-dialog.component.vue";

const reservations = ref([]);
const scooters = ref([]);
const showDeleteDialog = ref(false);
const showReservationDialog = ref(false);
const selectedReservation = ref(null);
const selectedScooter = ref(null);
const router = useRouter();

onMounted(async () => {
  await loadReservations();
  await loadScooters();
});

const loadReservations = async () => {
  try {
    const response = await ReservationService.getAllReservations();
    reservations.value = response.data;
  } catch (error) {
    console.error("Error loading reservations:", error);
  }
};

const loadScooters = async () => {
  try {
    const response = await BaseService.http.get("/scooter");
    scooters.value = response.data;
  } catch (error) {
    console.error("Error loading scooters:", error);
  }
};

const getScooterImage = (scooterId) => {
  const scooter = scooters.value.find(s => s.id === scooterId);

  return scooter ? scooter.image : 'default-image-path';
};

const viewDetails = (scooterId) => {
  const selectedScooter = scooters.value.find(s => s.id === scooterId);
  sessionStorage.setItem("scooter", JSON.stringify(selectedScooter));
  router.push(`/Detail/${scooterId}`);
};

const showReservation = (reservation) => {
  selectedReservation.value = reservation;
  selectedScooter.value = scooters.value.find(s => s.id === reservation.scooterId);
  showReservationDialog.value = true;
};

const deleteHistory = async () => {
  try {
    for (let reservation of reservations.value) {
      await BaseService.http.delete(`/reservations/${reservation.id}`);
    }
    reservations.value = [];
    showDeleteDialog.value = false;
  } catch (error) {
    console.error("Error deleting history:", error);
  }
};
</script>

<style scoped>
.history-container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

h1 {
  font-size: 2em;
  font-weight: bold;
  color: #333;
  text-align: left;
  margin-bottom: 30px;
}

.scooter-list {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: start;
  margin-bottom: 30px;
}

.scooter-card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;
  text-align: center;
  width: 200px;
}

.scooter-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 10px;
}

.detail-button {
  background-color: #72D063;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
}

.detail-button:hover {
  background-color: #5cbf4b;
}

.delete-button {
  background-color: #FD6C6C;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  margin-top: 20px;
}

.delete-button:hover {
  background-color: #e64c4c;
}

.green-button {
  background-color: #72D063;
  border: none;
}

.red-button {
  background-color: #FD6C6C;
  border: none;
}

.button-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 10px;
}

.custom-dialog .p-dialog {
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.custom-dialog .p-dialog-content {
  width: 300px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.dialog-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.custom-dialog .scooter-image {
  width: 200px;
  height: 150px;
  object-fit: cover;
}
</style>