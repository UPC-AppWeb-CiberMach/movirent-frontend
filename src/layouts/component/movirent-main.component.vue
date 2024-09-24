<template>
  <div class="layout">
    <TheHeader />
    <main class="content">
      <Welcome v-if="isMainRoute" /> <!-- Mostrar el mensaje de bienvenida solo en /main -->
      <router-view></router-view> <!-- Renderiza las rutas hijas -->
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router'; // Importa useRoute para acceder a la ruta actual
import TheHeader from './the-header.component.vue';
import TheFooter from './the-foother.component.vue';
import Welcome from './welcome-movirent.vue'; // Asegúrate de que este componente esté correctamente importado

const route = useRoute(); // Obtiene la ruta actual

// Computed property para verificar si estamos en la ruta /main
const isMainRoute = computed(() => {
  return route.path === '/main'; // Cambia esto según la ruta que desees verificar
});
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0px !important;
}

.content {
  flex: 1;
  padding: 10px;
}
</style>