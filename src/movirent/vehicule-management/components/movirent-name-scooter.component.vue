<template>
  <div class="p-field">
    <label for="title" class="form-label">Nombre </label>
    <pv-input-text id="title" :value="modelValue" @input="updateValue" class="form-input pv-text" />
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['update:modelValue'])

const updateValue = (event) => {
  emit('update:modelValue', event.target.value)
}
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
.pv-text{
  background-color: white;
  color: black;
}
</style>