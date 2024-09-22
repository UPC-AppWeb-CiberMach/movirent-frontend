<template>
  <div id="app">
    <h1>{{ $t('movirent.titleGeneral') }}</h1>
    <OperationsManager />
  </div>
</template>

<script>
import OperationsManager from '@/movirent/vehicule-management/components/movirent-view.component.vue'; // Asegúrate de importar correctamente

export default {
  components: {
    OperationsManager
  }
};
</script>

<style>
#app {
  max-width: 100%;
  margin: 0 auto;
  padding: 1px;
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
  color: #282828;
}
</style>