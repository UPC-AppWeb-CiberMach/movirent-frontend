<template>
  <div class="scooter-reviews" aria-label="Reseñas del Scooter">
    <div class="main-content" aria-label="Contenido principal de las reseñas del scooter">
      <h2 class="title" aria-label="Título de reseñas">Reseñas</h2>

      <div class="scooter-info" aria-label="Información del scooter">
        <img :src="scooter.image" alt="Imagen del Scooter" aria-label="Imagen del scooter" />
        <p class="reminder" aria-label="Mensaje de recordatorio para los comentarios">
          Recuerda siempre ser respetuoso con los comentarios y opiniones
        </p>
      </div>

      <div class="reviews" aria-label="Lista de reseñas de usuarios">
        <div
            v-if="Array.isArray(reviews) && reviews.length > 0"
            class="review"
            v-for="(review, index) in reviews"
            :key="index"
            aria-label="Reseña del usuario"
        >
          <div class="field" aria-label="Nombre del usuario"><strong>Usuario:</strong> {{ review.user }}</div>
          <div class="field" aria-label="Puntuación del usuario"><strong>Puntuación:</strong> {{ review.rating }}</div>
          <p aria-label="Comentario del usuario">{{ review.comment }}</p>
        </div>
        <p v-else aria-label="Mensaje de sin reseñas">No hay reseñas para este scooter.</p>
      </div>

      <div class="actions" aria-label="Acciones disponibles">
        <pv-button label="Comentar" class="p-button-success" @click="addReview" aria-label="Botón para comentar" />
        <pv-button label="Regresar" class="p-button-danger" @click="goBack" aria-label="Botón para regresar a la pantalla anterior" />
      </div>
    </div>
  </div>
</template>

<script>
import ScooterService from "@/movirent/scooter-reviews/services/Scooter-Service.js";

export default {
  data() {
    return {
      scooter: {},
      reviews: []
    };
  },
  mounted() {
    const scooterId = this.$route.params.id;

    // Fetch scooter details
    ScooterService.fetchScooterDetails(scooterId).then((data) => {
      this.scooter = data;
    });

    // Fetch reviews for the specific scooter
    ScooterService.fetchScooterReviews(scooterId).then((data) => {
      this.reviews = data.filter(review => review.scooterId === scooterId); // Filtrar por el ID del scooter
    });
  },
  methods: {
    addReview() {
      this.$router.push(`/scooter/${this.$route.params.id}/add-review`);
    },
    goBack() {
      this.$router.push(`/Detail/${this.$route.params.id}`);
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
  background-color: #f5f5f5;
  padding: 2rem;
  border-radius: 15px;
  max-width: 960px;
  margin: 0 auto;
}

.title {
  font-size: 2rem;
  color: #333;
  font-weight: bold;
  margin-bottom: 1rem;
}

.scooter-info {
  text-align: center;
  margin-bottom: 2rem;
}

img {
  width: 150px;
  height: auto;
  margin-bottom: 1rem;
}

.reminder {
  font-size: 1.1rem;
  color: #333;
}

.reviews {
  margin-top: 2rem;
}

.review {
  padding: 1rem;
  background-color: #fff;
  border-radius: 10px;
  margin-bottom: 1.5rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.field {
  margin-bottom: 0.5rem;
  font-size: 1rem;
  color: #333;
}

.actions {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;
}

.actions pv-button {
  font-size: 1rem;
}

.p-button-danger{
  background-color: #fd6c6c;
  border: none;
  margin-bottom: 20px;
  width: 8rem;
  height: 3rem;
}

.p-button-success{
  background-color: #72D063;
  border: none;
  margin-bottom: 20px;
  width: 8rem;
  height: 3rem;
}
</style>