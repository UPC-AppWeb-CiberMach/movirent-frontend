<template>
  <pv-dropdown :options="districts" v-model="selectedDistrict" placeholder="Distrito" @change="$emit('filter')" aria-label="Selector de distrito" />
</template>

<script>

export default {
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
