<template>
  <div class="container" aria-label="Contenedor principal">
    <div class="formulario" aria-label="Formulario de operaciones">
      <form @submit.prevent="isEditing ? updateOperation() : createOperation()" aria-label="Formulario de creación y actualización de operaciones">
        <Name v-model="operation.name" aria-label="Nombre de la operación" /> <br>
        <Marca v-model="operation.type" aria-label="Marca de la operación" /> <br>
        <Model v-model="operation.model" aria-label="Modelo de la operación" /> <br>
        <Price v-model="operation.price" aria-label="Precio de la operación" /> <br>
        <Address v-model="operation.address" aria-label="Dirección de la operación" /> <br>
        <Contact v-model="operation.phone" aria-label="Contacto de la operación" /> <br>
        <Photo v-model="operation.imageUrl" aria-label="Foto de la operación" /> <br>
        <pv-button type="submit" aria-label="{{ isEditing ? 'Actualizar operación' : 'Crear operación' }}">{{ isEditing ? 'Update' : 'Create' }}</pv-button>
      </form>

      <div v-if="message" :class="{'message': true, 'error-message': isError}" aria-label="Mensaje de estado del formulario">
        {{ message }}
      </div>
    </div>

    <div class="resultados" aria-label="Resultados de las operaciones">
      <h2 style="text-align: center" aria-label="Título de los resultados">{{ $t('movirent.tituloResultado') }}</h2> <br>
      <ul aria-label="Lista de operaciones">
        <li v-for="op in operations" :key="op.id" class="operation-item card-resultado" aria-label="Operación">
          <img :src="op.imageUrl" alt="Imagen de Scooter" width="100" class="operation-image" aria-label="Imagen de la operación" />
          <div aria-label="Nombre de la operación">{{ $t('movirent.name') }}: {{ op.name }}</div>
          <div aria-label="Marca de la operación">{{ $t('movirent.marca') }}: {{ op.type }}</div>
          <div aria-label="Modelo de la operación">{{ $t('movirent.model') }}: {{ op.model }}</div>
          <div aria-label="Precio de la operación">{{ $t('movirent.price') }}: ${{ op.price }}</div>
          <div aria-label="Dirección de la operación">{{ $t('movirent.address') }}: {{ op.address }}</div>
          <div aria-label="Contacto de la operación">{{ $t('movirent.phone') }}: {{ op.phone }}</div>
          <pv-button @click="editOperation(op)" aria-label="Editar operación">Edit</pv-button>
          <pv-button @click="deleteOperation(op.id)" aria-label="Eliminar operación">Delete</pv-button>
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