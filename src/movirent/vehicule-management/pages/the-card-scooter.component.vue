<template>
  <div class="card-container">
    <div class="card">
      <div class="main-card">
        <h2 class="title">{{ $t('movirent.titleCard') }}</h2>
        <RouterLink to="/CreateScooter"> <!-- Usar RouterLink para la navegación -->
          <pv-button :label="$t('movirent.nuevoScooter')" icon="pi pi-plus" iconPos="right" class="p-button-primary" />
        </RouterLink>
      </div>
      <div>
        <h3 style="padding-top: 40px">Aun no tienes registros de tus Scooter</h3>
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
  color: #513c86;
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
  color: #513c86;
}
</style>
<script setup lang="ts">
</script>