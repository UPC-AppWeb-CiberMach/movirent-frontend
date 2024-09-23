<template>
  <Dropdown :options="districts" v-model="selectedDistrict" placeholder="Distrito" @change="$emit('filter')" />
</template>

<script>
import Dropdown from 'primevue/dropdown';

export default {
  components: {
    Dropdown
  },
  data() {
    return {
      selectedDistrict: null,
      districts: [
        { label: 'Distrito 1', value: 'Distrito 1' },
        { label: 'Distrito 2', value: 'Distrito 2' }
      ]
    };
  }
};
</script>
