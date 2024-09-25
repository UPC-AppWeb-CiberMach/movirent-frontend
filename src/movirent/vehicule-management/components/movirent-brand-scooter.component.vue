<template>
  <div class="p-field" aria-label="Campo de Marca">
    <label for="marca" class="form-label">{{ $t('movirent.marca') }}</label>
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
        aria-label="Selecciona una Marca"
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
  { label: 'Dualtron', value: 'Dualtron' },
  { label: 'Kingsong', value: 'Kingsong' },
  { label: 'Ninebot', value: 'Ninebot' },
  { label: 'Xiaomi', value: 'Xiaomi' },
  { label: 'Vsett', value: 'Vsett' }
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