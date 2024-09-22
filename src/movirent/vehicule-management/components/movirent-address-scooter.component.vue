<template>
  <div class="p-field">
    <label for="direccion" class="form-label">{{ $t('learning.address') }} </label>
    <pv-input-text id="direccion" :model-value="modelValue" @update:model-value="updateValue" class="form-input pv-text" />
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
}

.form-input {
  width: 100%;
}
.pv-text {
  background-color: white;
  color: black;
}
</style>