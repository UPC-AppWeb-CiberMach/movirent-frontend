<template>
  <div id="app" style="border: 1px solid red; background-color: rgba(255,255,255,0.81); border-radius: 12px">
    <h1>Ming Company Operations Management</h1>
    <OperationsManager />
  </div>
</template>

<script>
import OperationsManager from './movirent/vehicule-management/components/movirent-view.component.vue'; // Asegúrate de importar correctamente

export default {
  components: {
    OperationsManager
  }
};
</script>

<style>
/* Estilos opcionales para mejorar la presentación */
#app {
  max-width: 100%;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
}
</style>