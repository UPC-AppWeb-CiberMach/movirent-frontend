<template>
  <div class="subscription-view" aria-label="Vista de planes de suscripción">
    <h1 class="text-center text-4xl font-bold mb-4" aria-label="Título: Nuestros Planes de Suscripción">Nuestros Planes de Suscripción</h1>

    <p class="text-center text-xl mb-8" aria-label="Descripción: MoviRent cuenta con tres planes de suscripción con beneficios únicos.">
      En MoviRent contamos con tres planes de suscripción que te brindarán beneficios únicos.
    </p>

    <div class="grid" aria-label="Lista de planes de suscripción">
      <div class="col-12 md:col-4" v-for="plan in subscriptionPlans" :key="plan.id">
        <pv-card class="m-3 flex flex-column align-items-center" aria-label="Tarjeta de plan de suscripción">
          <template #title>
            <h2 class="text-2xl font-semibold text-center" aria-label="Nombre del plan: {{ plan.name }}">{{ plan.name }}</h2>
          </template>
          <template #content>
            <div class="text-center" aria-label="Descripción del plan">{{ plan.description }}</div>
            <div class="flex justify-content-center my-3" aria-label="Calificación del plan">
              <i class="pi pi-star-fill mr-2 text-yellow-500" v-for="star in plan.stars" :key="star" aria-hidden="true"></i>
            </div>
            <div class="text-center" aria-label="Precio del plan">Precio: S/. {{ plan.price }}</div>
          </template>
          <template #footer>
            <div class="subscribe-button" aria-label="Botón de suscripción al plan {{ plan.name }}">
              <pv-button @click="subscribeButton(plan)" label="Suscribete" class="mt-5 p-4 w-9rem h-1rem subscribe-btn" type="submit" aria-label="Suscribirse al plan {{ plan.name }} por S/. {{ plan.price }}"/>
            </div>
          </template>
        </pv-card>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { Db } from "@/movirent/suscription-management/services/suscription.services.js";
import router from "@/routes/router.js";

const db = new Db();
const subscriptionPlans = ref([]);

export default {
  setup() {
    onMounted(async () => {
      const response = await db.getAllSuscriptions();
      subscriptionPlans.value = response.data;
    });

    async function subscribeButton(plan) {
      await router.push({
        path: '/payment',
        query: {
          planId: plan.id,
          planName: plan.name,
          planPrice: plan.price
        }
      });
    }

    return {
      subscriptionPlans,
      subscribeButton
    }
  }
}
</script>

<style scoped>
.subscription-view {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

h1, h2, p {
  color: #333;
}

.subscribe-btn {
  background-color: #FD6C6C;
  color: white;
  border: none;
  align-content: center;
  margin-left: 25%;
  border-radius: 5px;
  cursor: pointer;
}

.subscribe-btn:hover {
  background-color: #e64c4c;
}

@media (max-width: 1068px) {
  .subscription-view{
    flex-direction: column;
  }

  .subscribe-btn{
    margin-left: 35%;
  }
}
@media (max-width: 668px) {

  .subscribe-btn{
    margin-left: 20%;
  }
}
</style>
