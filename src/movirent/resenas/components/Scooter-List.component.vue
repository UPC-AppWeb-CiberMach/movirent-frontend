<template>
  <div class="scooter-list" aria-label="Lista de Scooters">
    <div class="main-content">
      <div class="filter-section">
        <DistrictFilter v-model="selectedDistrict" @filter="applyFilter" aria-label="Filtro de Distrito" />
      </div>
      <h2>Scooters disponibles</h2>
      <div class="scooter-cards" aria-label="Tarjetas de Scooters">
        <ScooterCard
            v-for="scooter in filteredScooters"
            :key="scooter.id"
            :scooter="scooter"
            @view-detail="onViewDetail"
            aria-label="Tarjeta de Scooter"
        />
      </div>
    </div>
    <div class="my-scooters-btn">
      <pv-button label="Ver mis Scooters" class="p-button-success" aria-label="Ver mis Scooters" />
    </div>
  </div>
</template>

<script>
import DistrictFilter from "@/movirent/resenas/components/District-Filter.component.vue";
import ScooterCard from "@/movirent/resenas/components/Scooter-Card.component.vue";
import ScooterService from "@/movirent/resenas/services/Scooter-Service.js";

export default {
  components: {
    DistrictFilter,
    ScooterCard
  },
  data() {
    return {
      scooters: [],
      filteredScooters: [],
      selectedDistrict: null,
    };
  },
  mounted() {
    ScooterService.fetchScooters().then((data) => {
      this.scooters = data;
      this.filteredScooters = data;
    });
  },
  methods: {
    onViewDetail(id) {
      this.$router.push(`/scooter/${id}`);
    },
    applyFilter() {
      this.filteredScooters = this.selectedDistrict
          ? this.scooters.filter((s) => s.district === this.selectedDistrict)
          : this.scooters;
    },
  },
};
</script>

<style scoped>
.scooter-list {
  padding: 2rem 0;
}

.main-content {
  background-color: #e0e0f0;
  padding: 2rem;
  border-radius: 15px;
  margin: 2rem 0;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
}

.filter-section {
  text-align: right;
  margin-bottom: 1.5rem;
}

.scooter-cards {
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.my-scooters-btn {
  text-align: center;
  margin-top: 2rem;
}
</style>
