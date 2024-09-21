<template>
  <div class="p-field">
    <label for="telefono" class="form-label">{{ $t('learning.phone') }} </label>
    <pv-input-text
        id="telefono"
        :model-value="modelValue"
        @update:model-value="updateValue"
        class="form-input pv-text"
        placeholder="Ingrese el número de teléfono"
    />
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
    validator: (value) => {
      // Validar que el número tenga exactamente 9 dígitos
      return /^\d{0,9}$/.test(value); // Permite solo números y hasta 9 dígitos
    }
  }
});

const emit = defineEmits(['update:model-value']);

const updateValue = (value) => {
  if (value.length <= 9) { // Asegurarse de que no exceda los 9 dígitos
    emit('update:model-value', value);
  }
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
.pv-text {
  background-color: white;
  color: black;
}
</style>