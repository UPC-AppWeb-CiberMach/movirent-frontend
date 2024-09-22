<template>
  <div class="p-field">
    <label for="precio" class="form-label">{{ $t('learning.price') }} </label>
    <pv-input-number
        id="precio"
        :model-value="modelValue"
        @update:model-value="updateValue"
        class="form-input pv-text"
        mode="decimal"
        :min="0"
        placeholder="Ingrese el precio"
        :inputStyle="{ backgroundColor: '#ffffff', color: '#262626' }"
    />
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  modelValue: {
    type: Number,
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

</style>