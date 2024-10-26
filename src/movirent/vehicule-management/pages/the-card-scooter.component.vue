<template>
  <div class="card-container" aria-label="Contenedor de la tarjeta">
    <div class="card" aria-label="Tarjeta">
      <div class="main-card" aria-label="Tarjeta principal">
        <h2 class="title" aria-label="Título de la tarjeta">{{ $t('movirent.titleCard') }}</h2>
        <RouterLink to="/newCard" aria-label="Enlace para crear una nueva tarjeta">
          <pv-button :label="$t('movirent.nuevoScooter')" icon="pi pi-plus" iconPos="right" class="p-button-primary" aria-label="Botón para crear un nuevo Scooter" />
        </RouterLink>
      </div>
      <div aria-label="Mensaje de no tener registros">
        <h3 style="padding-top: 40px" aria-label="Mensaje de no tener registros de Scooter">Aun no tienes registros de tus Scooter</h3>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
}

.card {
  width: 100%;
  max-width: 800px;
  min-height: 500px;
  padding: 30px;
  background-color: #bfbfbf;
  border-radius: 20px;
  text-align: center;
  color: black;
}

.main-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.title {
  font-size: 1.5rem;
  font-weight: bold;
  color: black;
}
</style>
<script setup>
</script>