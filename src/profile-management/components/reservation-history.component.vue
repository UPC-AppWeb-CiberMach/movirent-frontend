<template>
  <div class="card">
    <pv-dataview :value="reservations" paginator :rows="5">
      <template #list="slotProps">
        <div class="flex flex-col">
          <div v-for="(item, index) in slotProps.items" :key="index">
            <div class="flex flex-col sm:flex-row sm:items-center p-6 gap-4" :class="{ 'border-t border-surface-200 dark:border-surface-700': index !== 0 }">
              <div class="md:w-40 relative">
                <img class="block xl:block mx-auto rounded w-full" :src="`https://primefaces.org/cdn/primevue/images/product/${item.image}`" :alt="item.name" />
              </div>
              <div class="flex flex-col md:flex-row justify-between md:items-center flex-1 gap-6">
                <div class="flex flex-row md:flex-col justify-between items-start gap-2">
                  <div>
                    <span class="font-medium text-surface-500 dark:text-surface-400 text-sm">fecha: {{ item.date }}</span>
                    <div class="text-lg font-medium mt-2">Model: {{ item.scooter_id }}</div>
                  </div>
                  <div class="bg-surface-100 p-1" style="border-radius: 30px">
                    <div class="bg-surface-0 flex items-center gap-2 justify-center py-1 px-2" style="border-radius: 30px">
                      <span class="text-surface-900 font-medium text-sm">Calificacion {{ item.rating }}</span>
                      <i class="pi pi-star-fill text-yellow-500"></i>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col md:items-end gap-8">
                  <span class="text-xl font-semibold">{{item.time}} hrs</span>
                  <div class="flex flex-row-reverse md:flex-row gap-2">
                    <pv-button label="book again" outlined></pv-button>
                    <pv-button label="view details" :disabled="item.inventoryStatus === 'OUTOFSTOCK'" class="flex-auto md:flex-initial whitespace-nowrap"></pv-button>
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
    const response = await new HistoryServices().getHistoryById(clientId);
    console.log("Reservations data:", response.data); // Imprimir los datos en la consola
    reservations.value = response.data;
  } catch (error) {
    console.error("Error fetching reservations:", error);
  }
});

</script>
<style>
</style>