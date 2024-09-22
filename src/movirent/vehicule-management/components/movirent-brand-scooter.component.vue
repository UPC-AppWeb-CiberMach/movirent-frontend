<template>
  <div class="p-field">
    <label for="marca" class="form-label">Selecciona una Marca</label>
    <pv-select
        id="marca"
        :model-value="modelValue"
        :options="scooterBrands"
        optionLabel="label"
        optionValue="value"
        class="form-input pv-text"
        placeholder="Selecciona una Marca"
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

// Define las marcas de scooters
const scooterBrands = [
  { label: 'Scooter A', value: 'Scooter A' },
  { label: 'Scooter B', value: 'Scooter B' },
  { label: 'Scooter C', value: 'Scooter C' },
  { label: 'Scooter D', value: 'Scooter D' },
  { label: 'Scooter E', value: 'Scooter E' }
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