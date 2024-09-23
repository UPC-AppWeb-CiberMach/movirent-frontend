<template>
  <div class="layout">
    <TheHeader />
    <main class="content">
      <router-view></router-view>
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
import TheHeader from './the-header.component.vue';
import TheFooter from './the-foother.component.vue';

</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0px !important;
}

.content {
  flex: 1;
  padding: 10px;
}
</style>