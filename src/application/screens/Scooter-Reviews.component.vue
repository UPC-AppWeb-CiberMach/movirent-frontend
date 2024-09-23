<template>
  <div class="scooter-reviews">
    <Header />
    <div class="main-content">
      <h2>Reseñas</h2>
      <div class="scooter-info">
        <img :src="scooter.image" alt="Scooter" />
        <p>Recuerda siempre ser respetuoso con los comentarios y opiniones</p>
      </div>
      <div class="reviews">
        <div
            class="review"
            v-for="(review, index) in reviews"
            :key="index"
        >
          <div class="field"><strong>Usuario:</strong> {{ review.user }}</div>
          <div class="field"><strong>Puntuación:</strong> {{ review.rating }}</div>
          <p>{{ review.comment }}</p>
        </div>
      </div>
      <div class="actions">
        <Button label="Comentar" class="p-button-success" @click="addReview" />
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
      reviews: [
        { user: "Random1", rating: 4, comment: "Muy buen servicio, el dueño fue muy amable y puntual. El precio fue un poco elevado." },
        { user: "Random2", rating: 3, comment: "Scooter un poco antiguo para el precio que tiene." },
      ],
    };
  },
  mounted() {
    const scooterId = this.$route.params.id;
    ScooterService.fetchScooterDetails(scooterId).then((data) => {
      this.scooter = data;
    });
  },
  methods: {
    addReview() {
      this.$router.push(`/scooter/${this.$route.params.id}/add-review`);
      // Aquí puedes implementar la lógica para permitir agregar una reseña
    },
    goBack() {
      this.$router.push(`/scooter/${this.$route.params.id}`);
    },
  },
};
</script>

<style scoped>
.scooter-reviews {
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
  text-align: left;
  max-width: 300px;
  margin-right: auto;
  margin-left: auto;
}

img {
  width: 150px;
  height: auto;
  margin-bottom: 1rem;
}

.reviews {
  margin-top: 2rem;
}

.review {
  padding: 1rem;
  background-color: white;
  border-radius: 10px;
  margin-bottom: 1.5rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.field {
  margin-bottom: 0.5rem;
}

.actions {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;
}
</style>
