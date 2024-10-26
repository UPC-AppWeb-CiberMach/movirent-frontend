<template>
  <div class="scooter-add-review" aria-label="Agregar reseña al Scooter">
    <div class="main-content" aria-label="Contenido principal para agregar reseña">
      <h2 class="title" aria-label="Título Agregar Reseña">Agregar Reseña</h2>

      <div class="scooter-info" aria-label="Información del scooter">
        <img :src="scooter.image" alt="Imagen del Scooter" aria-label="Imagen del scooter" />
        <p class="reminder" aria-label="Recordatorio para los usuarios">Recuerda siempre ser respetuoso con los comentarios y opiniones</p>
      </div>

      <div class="form" aria-label="Formulario para agregar reseña">
        <div class="field" aria-label="Campo de puntuación">
          <label for="rating">Puntuación:</label>
          <input v-model="rating" type="number" min="1" max="5" id="rating" aria-label="Ingresar puntuación" />
        </div>

        <div class="field" aria-label="Campo de comentario">
          <label for="comment">Comentario:</label>
          <textarea v-model="comment" id="comment" aria-label="Ingresar comentario"></textarea>
        </div>
      </div>

      <div class="actions" aria-label="Botones de acción">
        <pv-button label="Enviar" class="p-button-success" @click="submitReview" aria-label="Botón para enviar reseña" />
        <pv-button label="Cancelar" class="p-button-danger" @click="goBack" aria-label="Botón para cancelar y regresar" />
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
    async submitReview() {
      if (this.rating > 0 && this.comment.trim()) {
        const newReview = {
          user: "Usuario actual",
          rating: this.rating,
          comment: this.comment,
        };

        if (!this.scooter.id) {
          alert("No se encontró el ID del scooter.");
          console.error("Error: El scooter no tiene un ID definido.");
          return;
        }

        try {
          await ScooterService.addReview(this.scooter.id, newReview);
          alert("Reseña agregada con éxito.");
          this.$router.push(`/scooter/${this.scooter.id}/reviews`);
        } catch (error) {
          console.error('Error al agregar reseña:', error);
          alert('Error al agregar reseña. Por favor, inténtalo de nuevo más tarde.');
        }
      } else {
        alert("Por favor, completa todos los campos.");
      }
    },
    goBack() {
      this.$router.push(`/Detail/${this.$route.params.id}`);
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
  margin-bottom: 1.5rem;
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

.form {
  margin-top: 2rem;
}

.field {
  margin-bottom: 1.5rem;
  text-align: left;
  font-size: 1rem;
  color: #333;
}

input, textarea {
  width: 100%;
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
}

.actions {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
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
