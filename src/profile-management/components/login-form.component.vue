<template>
  <h1> Iniciar sesión</h1>
  <div class="card-container">
    <div class="card pv-car">
      <div class="flex flex-col md:flex-row">
        <div class="w-full md:w-5/12 flex flex-col items-center justify-center gap-3 py-5">

          <pv-floatlabel class="text" style="margin-bottom: 30px; ">
            <pv-inputtext id="celular" v-model="username" type="text" class="input-text" />
            <label for="celular">Celular</label>
          </pv-floatlabel>

          <pv-floatlabel>
            <pv-inputtext id="password" v-model="password" type="password" class="input-text" />
            <label for="password">Contraseña</label>
          </pv-floatlabel>

          <div class="flex" style="text-align: center; margin-top: 30px">
            <pv-button label="Login" icon="pi pi-user" class="w-full max-w-[17.35rem] mx-auto">Iniciar Sesión</pv-button>
          </div>
          <div class="register-text">
            <p>¿No tienes cuenta? <a href="/register">Regístrate</a></p>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const username = ref('');
const password = ref('');
</script>

<style scoped>
h1{
  text-align: center;
  margin-bottom: 30px;
}

.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25vh;
}

.pv-car{
  padding: 70px;
  border-radius: 20px;
  display: flex;
}

.input-text {
  background-color: #ffffff;
  color: #565454;
  text-align: left;
}


.p-button {
  background-color: #72D063;
  color: #ffffff;
  border: none;
}

.register-text {
  text-align: center;
  margin-top: 30px;
  color: black;
}

.register-text a {
  color: black;
  font-weight: bolder;
  text-decoration: none;
}

</style>