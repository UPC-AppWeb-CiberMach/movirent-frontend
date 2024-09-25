<template>
  <div class="p-field" aria-label="Campo de Modelo">
    <label for="modelo" class="form-label">{{ $t('movirent.model') }}</label>
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
        aria-label="Selecciona un Modelo"
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
  { label: 'Honda Elite Fi', value: 'Honda Elite Fi' },
  { label: 'Yamaha NMAX', value: 'Yamaha NMAX' },
  { label: 'Xiaome FA', value: 'Xiaome FA' }
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