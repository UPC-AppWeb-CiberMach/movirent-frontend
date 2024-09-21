<template>
  <div class="container">
    <div class="formulario">
      <h2>Create Operation</h2>
      <form @submit.prevent="isEditing ? updateOperation() : createOperation()">
        <Title v-model="operation.title" />
        <Type v-model="operation.type" />
        <Modelo v-model="operation.model" />
        <Precio v-model="operation.price" />
        <Direccion v-model="operation.address" />
        <Contacto v-model="operation.phone" />
        <Foto v-model="operation.imageUrl" />
        <pv-button type="submit">{{ isEditing ? 'Update' : 'Create' }}</pv-button>
      </form>

      <div v-if="message" :class="{'message': true, 'error-message': isError}">
        {{ message }}
      </div>
    </div>

    <div class="resultados">
      <h2>{{ $t('learning.Operation') }}</h2>
      <ul>
        <li v-for="op in operations" :key="op.id" class="operation-item card">
          <img :src="op.imageUrl" alt="Imagen de Scooter" width="100" class="operation-image" /> <!-- Mostrar la imagen -->
          <div>Título: {{ op.title }}</div>
          <div>Tipo: {{ op.type }}</div>
          <div>Modelo: {{ op.model }}</div>
          <div>Precio: ${{ op.price }}</div>
          <div>Dirección: {{ op.address }}</div>
          <div>Teléfono: {{ op.phone }}</div>
          <pv-button @click="editOperation(op)">Edit</pv-button> <!-- Botón de editar -->
          <pv-button @click="deleteOperation(op.id)">Delete</pv-button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import Logica from '@/movirent/vehicule-management/services/movirent.js';

export default {
  mixins: [Logica],
}
</script>

<style scoped>
.container {
  display: flex; /* Usar flexbox para dividir el espacio */
}

.formulario {
  flex-basis: 50%; /* Ocupa el 50% de la pantalla */
  padding-right: 20px; /* Espacio entre formulario y resultados */
}

.resultados {
  flex-basis: 50%; /* Ocupa el otro 50% de la pantalla */
}

h2 {
  margin-top: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}

button {
  margin-left: 10px;
}

.message {
  margin-top: 10px;
  color: green; /* Color verde para mensajes de éxito */
}

.error-message {
  color: red; /* Color rojo para mensajes de error */
}

.operation-item {
  margin-bottom: 20px; /* Espaciado entre operaciones */
}

.operation-image {
  display: block; /* Asegurarse de que la imagen esté en su propia línea */
  margin-bottom: 5px; /* Espacio debajo de la imagen */
}

/* Estilos para pantallas pequeñas */
@media (max-width: 768px) {
  .container {
    flex-direction: column; /* Cambiar a columna en pantallas pequeñas */
  }

  .formulario, .resultados {
    flex-basis: auto; /* Permitir que ocupen todo el ancho disponible */
    padding-right: 0; /* Eliminar espaciado en pantallas pequeñas */
  }
}
</style>