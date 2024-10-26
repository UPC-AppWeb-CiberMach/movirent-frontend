<template>
  <div class="subscription-view" aria-label="Vista de planes de suscripción">
    <h1 class="text-center text-4xl font-bold mb-4" aria-label="Título: Nuestros Planes de Suscripción">
      Nuestros Planes de Suscripción
    </h1>

    <p class="text-center text-xl mb-8" aria-label="Descripción: MoviRent cuenta con tres planes de suscripción con beneficios únicos.">
      En MoviRent contamos con tres planes de suscripción que te brindarán beneficios únicos.
    </p>

    <div class="grid" aria-label="Lista de planes de suscripción">
      <div class="col-12 md:col-4" v-for="plan in subscriptionPlans" :key="plan.id">
        <pv-card class="m-3 h-full flex flex-column" aria-label="Tarjeta de plan de suscripción">
          <template #title>
            <h2 class="text-2xl font-semibold text-center" aria-label="Nombre del plan: {{ plan.name }}">
              {{ plan.name }}
            </h2>
          </template>
          <template #content>
            <div class="flex-grow-1">
              <div class="text-center" aria-label="Descripción del plan">{{ plan.description }}</div>
              <div class="flex justify-content-center my-3" aria-label="Calificación del plan">
                <i class="pi pi-star-fill mr-2 text-yellow-500" v-for="star in plan.stars" :key="star" aria-hidden="true"></i>
              </div>
              <div class="text-center" aria-label="Precio del plan">Precio: S/. {{ plan.price }}</div>
            </div>
          </template>
          <template #footer>
            <div class="flex justify-content-center w-full p-3">
              <pv-button
                  v-if="activePlanId === plan.id"
                  label="Suscrito"
                  class="subscribed-btn"
                  aria-label="Plan actual: {{ plan.name }}"
              />
              <pv-button
                  v-else
                  @click="subscribeButton(plan)"
                  label="Suscríbete"
                  class="subscribe-btn"
                  type="submit"
                  aria-label="Suscribirse al plan {{ plan.name }} por S/. {{ plan.price }}"
              />
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

export default {
  setup() {
    const subscriptionPlans = ref([]);
    const activePlanId = ref(null);

    onMounted(async () => {
      try {
        const response = await db.getAllSuscriptions();
        subscriptionPlans.value = response.data;

        const activeSubscription = await db.getActiveSuscription();
        if (activeSubscription) {
          activePlanId.value = activeSubscription.id;
        }
      } catch (error) {
        console.error('Error al cargar los datos:', error);
      }
    });

    async function subscribeButton(plan) {
      try {
        await router.push({
          path: '/payment',
          query: {
            planId: plan.id,
            planName: plan.name,
            planPrice: plan.price
          }
        });
      } catch (error) {
        console.error('Error en el proceso de suscripción:', error);
      }
    }

    router.afterEach(async (to) => {
      if (to.path === '/subscription' && to.query.paymentSuccess) {
        try {
          activePlanId.value = to.query.planId;
        } catch (error) {
          console.error('Error al actualizar el plan activo:', error);
        }
      }
    });

    return {
      subscriptionPlans,
      activePlanId,
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

h1, h2, h3, p {
  color: #333;
}

.subscribe-btn {
  background-color: #FD6C6C;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: auto;
  min-width: 9rem;
}

.subscribe-btn:hover {
  background-color: #e64c4c;
}

.subscribed-btn {
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  width: auto;
  min-width: 9rem;
  cursor: default;
}

@media (max-width: 768px) {
  .subscription-view {
    padding: 1rem;
  }
}
</style>