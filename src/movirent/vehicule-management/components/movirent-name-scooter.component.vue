<template>
  <div class="p-field" aria-label="Campo de Nombre">
    <label for="title" class="form-label">{{ $t('movirent.name') }} </label>
    <pv-inputtext
        id="title"
        :value="modelValue"
        @input="updateValue"
        class="form-input pv-text"
        placeholder="Nombre del equipo"
        aria-label="Nombre del equipo"
    />
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

.pv-text{
  background-color: white;
  color: black;
}
</style>