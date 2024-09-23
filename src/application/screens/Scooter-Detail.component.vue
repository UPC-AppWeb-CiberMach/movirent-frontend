<template>
  <div class="scooter-detail">
    <Header />
    <div class="main-content">
      <h2>Detalle del scooter</h2>
      <div class="scooter-info">
        <div class="left-column">
          <img :src="scooter.image" alt="Scooter" />
          <p>Recuerda siempre llevar tu dni para identificarte con el dueño antes de recoger el scooter</p>
          <!-- Botón de Reseñas -->
          <Button label="Reseñas" class="p-button-danger" @click="goToReviews" />
        </div>
        <div class="details">
          <div class="field"><strong>Nombre:</strong> {{ scooter.name }}</div>
          <div class="field"><strong>Marca:</strong> {{ scooter.brand }}</div>
          <div class="field"><strong>Modelo:</strong> {{ scooter.model }}</div>
          <div class="field"><strong>Precio x hora:</strong> S/. {{ scooter.price }}</div>
          <div class="field"><strong>Dirección:</strong> {{ scooter.address }}</div>
          <div class="field"><strong>Contacto:</strong> {{ scooter.contact }}</div>
          <div class="field">
            <strong>Horas a alquilar:</strong>
            <input v-model="rentalHours" type="number" min="1" />
          </div>
        </div>
      </div>
      <div class="actions">
        <Button label="Alquilar" class="p-button-success" @click="rentScooter" />
        <Button label="Regresar" class="p-button-danger" @click="goBack" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/ui/layout/Header.vue";
import Footer from "@/ui/layout/Footer.vue";
import Button from "primevue/button";
import ScooterService from "@/application/services/Scooter-Service.js";

export default {
  components: {
    Header,
    Footer,
    Button,
  },
  data() {
    return {
      scooter: {},
      rentalHours: 1,
    };
  },
  mounted() {
    const scooterId = this.$route.params.id;
    ScooterService.fetchScooterDetails(scooterId).then((data) => {
      this.scooter = data;
    });
  },
  methods: {
    rentScooter() {
      alert(`Alquilaste el scooter por ${this.rentalHours} horas.`);
    },
    goBack() {
      this.$router.push('/');
    },
    goToReviews() {
      this.$router.push(`/scooter/${this.$route.params.id}/reviews`);
      // Aquí puedes redirigir a una sección de reseñas o abrir un modal
    }
  },
};
</script>

<style scoped>
.scooter-detail {
  padding: 2rem;
  text-align: center;
}

.main-content {
  background-color: #e0e0f0;
  padding: 2rem;
  border-radius: 15px;
  max-width: 960px;
  margin: 0 auto;
}

.scooter-info {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
}

.left-column {
  text-align: left;
  max-width: 300px;
}

img {
  width: 150px;
  height: auto;
  margin-bottom: 1rem;
}

.details {
  text-align: left;
  width: 300px;
}

.field {
  margin-bottom: 1rem;
  padding: 0.5rem;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.actions {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}
</style>
