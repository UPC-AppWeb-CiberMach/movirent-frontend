<template>
  <div class="container">
    <div class="formulario">
      <form @submit.prevent="isEditing ? updateOperation() : createOperation()">
        <Title v-model="operation.title" /> <br>
        <Type v-model="operation.type" /> <br>
        <Modelo v-model="operation.model" /> <br>
        <Precio v-model="operation.price" /> <br>
        <Direccion v-model="operation.address" /> <br>
        <Contacto v-model="operation.phone" /> <br>
        <Foto v-model="operation.imageUrl" /> <br>
        <pv-button type="submit">{{ isEditing ? 'Update' : 'Create' }}</pv-button>
      </form>

      <div v-if="message" :class="{'message': true, 'error-message': isError}">
        {{ message }}
      </div>
    </div>

    <div class="resultados">
      <h2 style="text-align: center">{{ $t('learning.tituloResultado') }}</h2> <br>
      <ul>
        <li v-for="op in operations" :key="op.id" class="operation-item card-resultado">
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
import '@/assets/create-sccoter.css'
import Logica from '@/movirent/vehicule-management/services/movirent.js';

export default {
  mixins: [Logica],
}
</script>

<style scoped>
.container {
  display: flex;
}

.formulario {
  flex-basis: 50%;
  padding-right: 20px;
}

.resultados {
  flex-basis: 50%;
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
  color: green;
}

.error-message {
  color: red;
}

.operation-item {
  margin-bottom: 20px;
}

.operation-image {
  display: block;
  margin-bottom: 5px;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }

  .formulario, .resultados {
    flex-basis: auto;
    padding-right: 0;
  }
}
</style>