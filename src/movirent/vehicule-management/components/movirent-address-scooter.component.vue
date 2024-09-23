<template>
  <div class="p-field">
    <label for="direccion" class="form-label">{{ $t('movirent.address') }} </label>
    <pv-inputtext
        id="direccion"
        :model-value="modelValue"
        @update:model-value="updateValue"
        placeholder="Ingrese su dirección"
        class="form-input pv-text"
    />
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    required: true
  }
});

const emit = defineEmits(['update:model-value']);

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
  color: #6a4eb0;
}
.pv-text {
  background-color: white;
  color: black;
}
</style>