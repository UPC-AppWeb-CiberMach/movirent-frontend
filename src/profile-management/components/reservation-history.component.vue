<template>
  <div class="card">
    <p class="text-2xl w-10 text-black-alpha-80 font-medium">History of rented scooters</p>
    <pv-dataview :value="reservations" paginator :rows="5">
      <template #list="slotProps">
        <div class="flex flex-column">
          <div v-for="(item, index) in slotProps.items" :key="index">
            <div class="flex flex-column sm:flex-row sm:align-items-center p-6 gap-4" :class="{ 'border-top-1 border-300': index !== 0 }">
              <div class="md:w-4 relative">
                <img class="block xl:block mx-auto border-round w-full" :src="item.scooter.image" :alt="item.scooter.model" />
              </div>
              <div class="flex flex-column md:flex-row justify-content-between md:align-items-center flex-1 gap-6">
                <div class="flex flex-row md:flex-column justify-content-between align-items-start gap-2">
                  <div>
                    <span class="font-medium text-500 text-sm">Fecha: {{ item.start_date }}</span>
                    <div class="text-lg font-medium mt-2">Modelo: {{ item.scooter.model }}</div>
                  </div>
                  <div class="bg-100 p-1 border-round">
                    <div class="bg-0 flex align-items-center gap-2 justify-content-center py-1 px-2 border-round">
                      <span class="text-900 font-medium text-sm">Calificación: {{ item.rating }}</span>
                      <i class="pi pi-star-fill text-yellow-500"></i>
                    </div>
                  </div>
                </div>
                <div class="flex flex-column md:align-items-end gap-8">
                  <span class="text-xl font-semibold">{{ item.time }} hrs</span>
                  <div class="flex flex-row-reverse md:flex-row gap-2">
                    <pv-button label="Reservar de nuevo" outlined></pv-button>
                    <pv-button label="Ver detalles" :disabled="item.inventoryStatus === 'OUTOFSTOCK'" class="flex-auto md:flex-initial whitespace-nowrap"></pv-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </pv-dataview>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { HistoryServices } from "@/profile-management/services/history-services.js";

const reservations = ref([]);
const clientId = 1;

onMounted(async () => {
  try {
    const response = await new HistoryServices().getHistoryByClientId(clientId);
    const reservationsData = response.data;
    for (const reservation of reservationsData){
      const scooterResponse = await new HistoryServices().getScooterByScooterId(reservation.scooter_id);
      reservation.scooter = scooterResponse.data;
    }

    console.log("Reservations data:", reservationsData);
    reservations.value = reservationsData;
  } catch (error) {
    console.error("Error fetching reservations:", error);
  }
});
</script>