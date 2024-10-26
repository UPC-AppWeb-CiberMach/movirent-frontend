<template>
  <div class="history-container" aria-label="Historial de scooters alquilados">
    <h1>Historial de scooters alquilados</h1>
    <div class="scooter-list">
      <div v-for="reservation in reservations" :key="reservation.id" class="scooter-card">
        <img :src="getScooterImage(reservation.scooter_id)" alt="Imagen de scooter" class="scooter-image" aria-label="Imagen del scooter alquilado" />
        <button class="detail-button" @click="viewDetails(reservation.scooter_id)" aria-label="Ver detalles del scooter">Ver detalle</button>
      </div>
    </div>

    <button class="delete-button" @click="showDeleteDialog = true" aria-label="Eliminar historial de scooters alquilados">Eliminar historial</button>

    <pv-dialog v-model:visible="showDeleteDialog" header="¿Estás segur@ de eliminar tu historial?" :modal="true" :closable="false" aria-label="Diálogo de confirmación para eliminar historial">
      <p class="center-title">Tus datos no podrán ser recuperados</p>
      <div class="button-container">
        <pv-button class="p-button-cancel green-button" label="Cancelar" @click="showDeleteDialog = false" aria-label="Cancelar eliminación del historial" />
        <pv-button class="p-button-confirm red-button" label="Borrar historial" @click="deleteHistory" aria-label="Confirmar eliminación del historial" />
      </div>
    </pv-dialog>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { ReservationService } from '@/movirent/history-scooter/services/reservations.services.js';
import { BaseService } from "@/shared/base.service.js";

const reservations = ref([]);
const scooters = ref([]);
const showDeleteDialog = ref(false);
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
    const response = await BaseService.http.get("/scooters");
    scooters.value = response.data;
  } catch (error) {
    console.error("Error loading scooters:", error);
  }
};

const getScooterImage = (scooter_id) => {
  const scooter = scooters.value.find(s => s.id === scooter_id);
  return scooter ? scooter.image : 'default-image-path';
};

const viewDetails = (scooterId) => {
  const selectedScooter = scooters.value.find(s => s.id === scooterId);
  sessionStorage.setItem("scooter", JSON.stringify(selectedScooter));
  router.push(`/Detail/${scooterId}`);
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
</style>
