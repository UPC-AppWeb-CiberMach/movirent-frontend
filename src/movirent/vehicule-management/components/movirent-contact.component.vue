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
      return /^\d{0,9}$/.test(value);
    }
  }
});

const emit = defineEmits(['update:model-value']);

const updateValue = (value) => {
  if (value.length <= 9) {
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
.pv-text {
  background-color: white;
  color: black;
}
</style>