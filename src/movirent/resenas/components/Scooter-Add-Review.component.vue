<template>
  <div class="scooter-add-review">
    <div class="main-content">
      <h2>Agregar Reseña</h2>
      <div class="scooter-info">
        <img :src="scooter.image" alt="Scooter" />
        <p>Recuerda siempre ser respetuoso con los comentarios y opiniones</p>
      </div>
      <div class="form">
        <div class="field">
          <label for="rating">Puntuación:</label>
          <input v-model="rating" type="number" min="1" max="5" id="rating" />
        </div>
        <div class="field">
          <label for="comment">Comentario:</label>
          <textarea v-model="comment" id="comment"></textarea>
        </div>
      </div>
      <div class="actions">
        <pv-button label="Enviar" class="p-button-success" @click="submitReview" />
        <pv-button label="Cancelar" class="p-button-danger" @click="goBack" />
      </div>
    </div>
  </div>
</template>

<script>
import ScooterService from "@/movirent/resenas/services/Scooter-Service.js";

export default {
  data() {
    return {
      scooter: {},
      rating: 0,
      comment: '',
    };
  },
  mounted() {
    const scooterId = this.$route.params.id;
    ScooterService.fetchScooterDetails(scooterId).then((data) => {
      this.scooter = data;
    });
  },
  methods: {
    submitReview() {
      if (this.rating > 0 && this.comment.trim()) {
        const newReview = {
          user: "Usuario actual", // Aquí puedes colocar el nombre del usuario
          rating: this.rating,
          comment: this.comment,
        };
        ScooterService.addReview(this.scooter.id, newReview).then(() => {
          alert("Reseña agregada con éxito");
          this.goBack();
        });
      } else {
        alert("Por favor ingresa una puntuación y comentario válido.");
      }
    },
    goBack() {
      this.$router.push(`/scooter/${this.$route.params.id}/reviews`);
    },
  },
};
</script>

<style scoped>
.scooter-add-review {
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

.form {
  margin-top: 2rem;
}

.field {
  margin-bottom: 1.5rem;
  text-align: left;
}

input, textarea {
  width: 100%;
  padding: 0.5rem;
  border-radius: 10px;
  border: 1px solid #ccc;
}

.actions {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}
</style>
