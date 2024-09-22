<template>
  <div class="p-field">
    <label for="modelo" class="form-label">Selecciona un Modelo</label>
    <pv-select
        id="modelo"
        :model-value="modelValue"
        :options="scooterModels"
        optionLabel="label"
        optionValue="value"
        class="form-input pv-text"
        placeholder="Selecciona un Modelo"
        :inputStyle="{ backgroundColor: '#ffffff', color: '#262626' }"
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

const emit = defineEmits(['update:model-value']);

// Define los modelos de scooters
const scooterModels = [
  { label: 'Modelo A', value: 'Modelo A' },
  { label: 'Modelo B', value: 'Modelo B' },
  { label: 'Modelo C', value: 'Modelo C' },
  { label: 'Modelo D', value: 'Modelo D' },
  { label: 'Modelo E', value: 'Modelo E' }
];


const updateValue = (value) => {
  emit('update:model-value', value);
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
</style>