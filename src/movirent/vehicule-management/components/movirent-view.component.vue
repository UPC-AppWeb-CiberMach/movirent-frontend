<template>
  <div>
    <h2>Create Operation</h2>
    <form @submit.prevent="createOperation"> <br>
      <Name v-model="movirent.NameScooter" /> <br>
      <Brand v-model="movirent.BrandScooter" /> <br>
      <Model v-model="movirent.ModelScooter" /> <br>
      <Price v-model="movirent.PriceScooter" /> <br>
      <Address v-model="movirent.Address" /> <br>
      <Contact v-model="movirent.Contact" /> <br>

      <pv-button type="submit">Create</pv-button>
    </form>

    <h2>{{ $t('learning.Operation') }}</h2>
    <ul>
      <li v-for="op in operations" :key="op.id">
        {{ op.title }} - {{ op.type }} - {{ op.date }}
        <pv-button @click="deleteOperation(op.id)">Delete</pv-button>
      </li>
    </ul>

    <!-- Mensaje de estado -->
    <div v-if="message" class="message">{{ message }}</div>
  </div>
</template>

<script>
import http from '@/movirent/shared/services/http-common.js'
import Name from './movirent-name-scooter.component.vue'
import Brand from './movirent-brand-scooter.component.vue'
import Model from './movirent-model-scooter.component.vue'
import Price from './movirent-price-scooter.component.vue'
import Address from './movirent-address-scooter.component.vue'
import Contact from './movirent-contact.component.vue'

export default {
  components: { Name, Brand, Model, Price, Address, Contact },
  data() {
    return {
      movirent: {
        NameScooter: '',
        BrandScooter: '',
        ModelScooter: '',
        PriceScooter: '',
        Address: '',
        Contact: ''
      },
      operations: [],
      message: '' // Mensaje para mostrar el estado
    }
  },
  methods: {
    async fetchOperations() {
      try {
        const response = await http.get('/operations')
        this.operations = response.data
      } catch (error) {
        console.error('Error fetching operations:', error)
        this.message = 'Failed to load operations' // Mensaje de error
      }
    },

    async createOperation() {
      if (!this.operation.title || !this.operation.type || !this.operation.date) {
        console.error('All fields are required')
        return // No continuar si hay campos vacíos
      }

      try {
        const response = await http.post('/operations', {
          title: this.operation.title,
          type: this.operation.type,
          date: this.operation.date
        })

        console.log('Operation created:', response.data)
        this.message = 'Operation created successfully!' // Mensaje de éxito
        this.fetchOperations()
        this.resetForm()
      } catch (error) {
        console.error('Error creating operation:', error)
        this.message = 'Failed to create operation' // Mensaje de error
      }
    },

    async deleteOperation(id) {
      try {
        await http.delete(`/operations/${id}`)
        console.log('Operation deleted:', id)
        this.message = 'Operation deleted successfully!' // Mensaje de éxito
        this.fetchOperations()
      } catch (error) {
        console.error('Error deleting operation:', error)
        this.message = 'Failed to delete operation' // Mensaje de error
      }
    },

    resetForm() {
      this.operation.title = ''
      this.operation.type = ''
      this.operation.date = ''
    }
  },
  mounted() {
    this.fetchOperations() // Carga las operaciones al montar el componente
  }
}
</script>

<style scoped>
/* Estilos opcionales para mejorar la presentación */
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
</style>