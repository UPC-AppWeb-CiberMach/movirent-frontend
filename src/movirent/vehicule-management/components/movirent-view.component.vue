<template>
  <div class="container" aria-label="Contenedor principal">
    <div class="formulario" aria-label="Formulario de operaciones">
      <form class="table" @submit.prevent="isEditing ? updateOperation() : createOperation()" aria-label="Formulario de creación y actualización de operaciones">
        <div v-if="message" :class="{ message: true, 'error-message': isError }" aria-label="Mensaje de estado del formulario">
          {{ message }}
        </div> <br>
        <Name v-model="operation.name" aria-label="Nombre de la operación" /> <br />
        <Marca v-model="operation.type" aria-label="Marca de la operación" /> <br />
        <Model v-model="operation.model" aria-label="Modelo de la operación" /> <br />
        <Price v-model="operation.price" aria-label="Precio de la operación" /> <br />
        <Address v-model="operation.address" aria-label="Dirección de la operación" /> <br />
        <Contact v-model="operation.phone" aria-label="Contacto de la operación" /> <br />
        <Photo v-model="operation.imageUrl" aria-label="Foto de la operación" /> <br />

        <pv-button type="submit" aria-label="{{ isEditing ? 'Actualizar operación' : 'Crear operación' }}">
          {{ isEditing ? 'Update' : 'Create' }}
        </pv-button>
      </form>
    </div>

    <!-- Resultados de las operaciones -->
    <div class="resultados" aria-label="Resultados de las operaciones">
      <ul aria-label="Lista de operaciones">
        <template v-if="operations.length === 0">
          <li>
            <div class="not-card">No hay operaciones disponibles.</div> <!-- Mensaje cuando no hay operaciones -->
          </li>
        </template>
        <template v-else>
          <li v-for="op in operations" :key="op.id" aria-label="Operación">
            <div class="card-resultado">
              <!-- Usar flexbox para alinear imagen y datos -->
              <div class="operation-content">
                <img :src="op.imageUrl" alt="Imagen de Scooter" width="20%" class="operation-image" aria-label="Imagen de la operación" />
                <div class="operation-details">
                  <div aria-label="Nombre de la operación">{{ $t('movirent.name') }}: {{ op.name }}</div>
                  <div aria-label="Marca de la operación">{{ $t('movirent.marca') }}: {{ op.type }}</div>
                  <div aria-label="Modelo de la operación">{{ $t('movirent.model') }}: {{ op.model }}</div>
                  <div aria-label="Precio de la operación">{{ $t('movirent.price') }}: ${{ op.price }}</div>
                  <div aria-label="Dirección de la operación">{{ $t('movirent.address') }}: {{ op.address }}</div>
                  <div aria-label="Contacto de la operación">{{ $t('movirent.phone') }}: {{ op.phone }}</div>
                </div>
              </div> <br>

              <div style="text-align: center">
                <!-- Botones para editar y eliminar -->
                <pv-button style="margin-left: 3%; margin-right: 3%;" @click="editOperation(op)" aria-label="Editar operación">Edit</pv-button>
                <pv-button class="btn-card" style="margin-left: 3%; margin-right: 3%;" @click="deleteOperation(op.id)" aria-label="Eliminar operación">Delete</pv-button>
              </div>
            </div>
          </li>
        </template>
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
  flex-basis: 40%;
  border: 1px solid red;
}
.table {
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  align-items: center;
  text-align: center;
  padding: 2.5rem;
  margin: 3% 10% 5% 15%;
}
.resultados {
  flex-basis: 60%;
  border: 1px solid red;
}
.message {
  color: white;
  background-color: #5cbf4b;
  margin: 0% 20% 0% 5%;
}

.error-message {
  color: white;
  background-color: red;
  margin: 0% 20% 0% 5%;
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
  }
  .table{
    margin: 0;
  }
  .operation-content {
    flex-direction: column; /* Cambia la dirección a columna */
    align-items: center; /* Centra el contenido horizontalmente */
  }

  .operation-image {
    margin-right: 0; /* Elimina el margen derecho en pantallas pequeñas */
    margin-bottom: 10px; /* Agrega un margen inferior para separación */
    width: 80%; /* Asegúrate de que la imagen ocupe el ancho completo */
  }

  .operation-details {
    margin-left: 0; /* Elimina el margen izquierdo en pantallas pequeñas */
    text-align: center; /* Centra el texto en pantallas pequeñas */
  }
}
.card-resultado{
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  color: #636363;
  margin: 2% 10% 2% 10%;
  padding: 3%;
}
.resultados ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.operation-content {
  display: flex; /* Usamos flexbox para alinear imagen y datos */
}

.operation-image {
  margin-right: 15px; /* Espacio entre imagen y detalles */
}

.operation-details {
  display: flex;
  flex-direction: column; /* Alinea los detalles en columna */
  margin-left: 5%;
}
.not-card{
  text-align: center;
  color: #636363; /* Color del texto */
  padding: 40px; /* Espaciado alrededor del mensaje */
  font-size: 140%;
}
.btn-card {
  background-color: #f11741;
  border: none;
  color: white;
}
.btn-card:hover {
  background-color: #e45e78 !important;
  border: none !important;
}
</style>