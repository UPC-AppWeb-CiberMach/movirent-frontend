<template>
  <div class="p-field">
    <label for="marca" class="form-label">Selecciona una Marca</label>
    <pv-select
        id="marca"
        :model-value="modelValue"
        :options="scooterBrands"
        optionLabel="label"
        optionValue="value"
        class="form-input"
        placeholder="Selecciona una Marca"
        @update:model-value="updateValue"
    />
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  modelValue: {
    type: [String, null],
    required: true
  }
});

const emit = defineEmits(['update:model-value']); // Cambiado a 'update:model-value'

// Define las marcas de scooters
const scooterBrands = [
  { label: 'Scooter A', value: 'Scooter A' },
  { label: 'Scooter B', value: 'Scooter B' },
  { label: 'Scooter C', value: 'Scooter C' },
  { label: 'Scooter D', value: 'Scooter D' },
  { label: 'Scooter E', value: 'Scooter E' }
];

// Emitir el nuevo valor cuando cambie la selección
const updateValue = (value) => {
  emit('update:model-value', value); // Actualiza el modelo en el padre
};
</script>

<style scoped>
.p-field {
  display: flex;
  flex-direction: column;
}

.form-label {
  margin-bottom: 4px;
  font-weight: bold;
}

.form-input {
  width: 100%;
}
</style>