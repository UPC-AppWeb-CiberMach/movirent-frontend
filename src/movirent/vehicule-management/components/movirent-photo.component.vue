<template>
  <div class="p-field" aria-label="Campo de Foto">
    <label for="foto" class="form-label">{{ $t('movirent.imgUrl') }} </label>
    <pv-inputtext
        id="foto"
        :model-value="modelValue"
        @update:model-value="updateValue"
        class="form-input pv-text"
        placeholder="Ingrese la URL de la imagen"
        aria-label="Ingrese la URL de la imagen"
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
}

.pv-text {
  background-color: white;
  color: black;
}
</style>