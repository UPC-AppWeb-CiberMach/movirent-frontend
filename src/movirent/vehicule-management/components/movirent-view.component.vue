<template>
  <div class="container">
    <div class="formulario">
      <form @submit.prevent="isEditing ? updateOperation() : createOperation()">
        <Name v-model="operation.name" /> <br>
        <Marca v-model="operation.type" /> <br>
        <Model v-model="operation.model" /> <br>
        <Price v-model="operation.price" /> <br>
        <Address v-model="operation.address" /> <br>
        <Contact v-model="operation.phone" /> <br>
        <Photo v-model="operation.imageUrl" /> <br>
        <pv-button type="submit">{{ isEditing ? 'Update' : 'Create' }}</pv-button>
      </form>

      <div v-if="message" :class="{'message': true, 'error-message': isError}">
        {{ message }}
      </div>
    </div>

    <div class="resultados">
      <h2 style="text-align: center">{{ $t('movirent.tituloResultado') }}</h2> <br>
      <ul>
        <li v-for="op in operations" :key="op.id" class="operation-item card-resultado">
          <img :src="op.imageUrl" alt="Imagen de Scooter" width="100" class="operation-image" />
          <div>{{ $t('movirent.name') }}: {{ op.name }}</div>
          <div>{{ $t('movirent.marca') }}: {{ op.type }}</div>
          <div>{{ $t('movirent.model') }}: {{ op.model }}</div>
          <div>{{ $t('movirent.price') }}: ${{ op.price }}</div>
          <div>{{ $t('movirent.address') }}: {{ op.address }}</div>
          <div>{{ $t('movirent.phone') }}: {{ op.phone }}</div>
          <pv-button @click="editOperation(op)">Edit</pv-button>
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