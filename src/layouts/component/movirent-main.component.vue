<template>
  <div class="layout">
    <TheHeader /> <!-- Header en la parte superior -->
    <main class="content">
      <router-view></router-view> <!-- Contenido dinámico en el medio -->
    </main>
    <TheFooter /> <!-- Footer en la parte inferior -->
  </div>
</template>

<script setup>
import TheHeader from './the-header.component.vue';
import TheFooter from './the-foother.component.vue';
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column; /* Coloca los elementos en columna */
  min-height: 100vh; /* Asegura que ocupe toda la altura de la ventana */
}

.content {
  flex: 1; /* Permite que el contenido ocupe el espacio restante */
  padding: 20px; /* Espaciado interno */
}
</style>