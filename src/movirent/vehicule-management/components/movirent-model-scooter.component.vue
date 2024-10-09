<template>
  <div class="card flex justify-center">
    <pv-floatlabel>
      <i class="pi pi-user input-icon"></i>
      <pv-inputtext
          id="direccion"
          :model-value="modelValue"
          @update:model-value="updateValue"
          class="default-input"
          aria-label="Ingrese el modelo del Scooter"
      />
      <label for="username" style="margin-left: 22px; text-align: left">Ingrese el modelo del Scooter</label>
    </pv-floatlabel>
  </div>
</template>

<script setup>
import '@/assets/styles/form.css';
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
.default-input {
  color: #282828;
  background-color: inherit;
  border: 0.5px solid #e4e1e1;
  display: flex;
  align-items: center;
  width: calc(130% - 40px);
  padding-left: 40px;
}
.input-icon {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #424141;
}
</style>
