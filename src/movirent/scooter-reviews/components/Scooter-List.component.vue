<template>
  <div class="scooter-list-container" aria-label="Lista de scooters para búsqueda">
    <h1 aria-label="Título: Buscar Scooters">Scooters Disponibles</h1>

    <div class="filter-container">
      <pv-dropdown
          v-model="selectedDistrict"
          :options="availableDistricts"
          optionLabel="name"
          placeholder="Selecciona un distrito"
          class="district-filter"
          @change="filterScooters"
      />
      <pv-button
          @click="clearFilter"
          class="clear-filter"
          v-if="selectedDistrict"
      >
        Limpiar filtro
      </pv-button>
    </div>

    <div class="scooter-grid" aria-label="Tarjetas de scooters disponibles">
      <div v-for="scooter in filteredScooters"
           :key="scooter.id"
           class="scooter-card"
           aria-label="Tarjeta de scooter">
        <img :src="scooter.image"
             :alt="`Imagen de ${scooter.name}`"
             class="scooter-image"
             aria-label="Imagen del scooter {{ scooter.name }}">
        <h3 class="scooter-name" aria-label="Nombre del scooter">{{ scooter.name }}</h3>
        <p class="scooter-info" aria-label="Marca y modelo del scooter">
          {{ scooter.brand }} - {{ scooter.model }}
        </p>
        <p class="district-info" aria-label="Distrito del scooter">
          Distrito: {{ scooter.district }}
        </p>
        <pv-button
            @click="viewDetails(scooter.id)"
            class="details-button"
            aria-label="Ver detalles del scooter {{ scooter.name }}"
        >
          Ver Detalles
        </pv-button>
      </div>
    </div>
    <p v-if="filteredScooters.length === 0" class="no-results">
      No se encontraron scooters en este distrito
    </p>
    <pv-button
        @click="viewMyScooters"
        class="view-my-scooter"
        aria-label="Ver mis scooter"
    >
      Ver mis Scooters
    </pv-button>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import { Db } from "@/movirent/vehicule-management/services/scooter.services.js";

const scooters = ref([]);
const selectedDistrict = ref(null);
const router = useRouter();

const availableDistricts = computed(() => {
  const districts = [...new Set(scooters.value.map(s => s.district))];
  return districts.map(district => ({ name: district }));
});

const filteredScooters = computed(() => {
  if (!selectedDistrict.value) return scooters.value;
  return scooters.value.filter(s => s.district === selectedDistrict.value.name);
});

onMounted(async () => {
  const result = await Db.prototype.getAllScooters();
  if (Array.isArray(result.data)) {
    scooters.value = result.data;
  } else {
    console.error('No se pudo obtener la lista de scooters');
  }
});

const viewDetails = (scooterId) => {
  const selectedScooter = scooters.value.find(s => s.id === scooterId);
  sessionStorage.setItem("scooter", JSON.stringify(selectedScooter));
  router.push(`/Detail/${scooterId}`);
};

const viewMyScooters = () => {
  router.push('/ScooterList');
};

const clearFilter = () => {
  selectedDistrict.value = null;
};

</script>

<style scoped>

.filter-container {
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  max-width: 600px;
}

.district-filter {
  min-width: 200px;
  background-color: white;
}

.clear-filter {
  background-color: #FD6C6C;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 10px;
}

.district-info {
  color: #666;
  font-size: 0.9em;
  margin: 0.5rem 0;
}

.no-results {
  text-align: center;
  color: #666;
  margin: 2rem 0;
  font-size: 1.1em;
}

.scooter-list-container {
  padding: 20px;
}

h1 {
  color: #333;
  font-size: 2em;
  text-align: left;
  margin-bottom: 1rem;
  font-weight: bold;
}

.scooter-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.scooter-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.scooter-image {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
}

.scooter-name {
  color: #333;
  font-size: 1.2em;
  margin-top: 0.5rem;
}

.scooter-info {
  color: #555;
  font-size: 0.9em;
  margin-top: 0.5rem;
}

.details-button {
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #72D063;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;
}

.details-button:hover {
  background-color: #5cbf4b;
}

.view-my-scooter {
  margin-top: 20px;
  background-color: #72D063;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;
  padding: 10px 20px;
  margin-left: 50%;
  transform: translateX(-50%);
}

@media (max-width: 768px) {
  .filter-container {
    flex-direction: column;
    align-items: stretch;
  }

  .district-filter {
    width: 100%;
  }
}
</style>