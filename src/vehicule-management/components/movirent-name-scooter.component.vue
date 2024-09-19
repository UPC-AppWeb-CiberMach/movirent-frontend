
<template>
  <div class="card flex justify-center">
    <pv-floatlabel>
      <pv-inputtext class="pv-input" id="username" v-model="value" />
      <label for="username"> {{ $t('movirent.nameScooter') }} </label>
    </pv-floatlabel>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
</script>

<style scoped>
.pv-input{
  background-color: white;
  border: 1px solid #82cc79;
  color: #3e3b3b;
}
</style>