<template>
  <div class="faq-container">
    <Accordion>
      <AccordionTab v-for="(faq, index) in faqs" :key="index" :header="faq.question">
        <p>{{ faq.answer }}</p>
      </AccordionTab>
    </Accordion>
  </div>
</template>

<script>
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';

export default {
  name: 'FrequentlyQuestionsComponent',
  components: {
    Accordion,
    AccordionTab
  },
  data() {
    return {
      //luego cambiare las preguntas y añadiré muchos más
      faqs: [
        { question: '¿Cómo puedo registrar mi scooter en MoviRent?', answer: 'Puedes registrar tu scooter desde la sección "Get Started" completando los detalles de tu vehículo.' },
        { question: '¿Es seguro alquilar scooters a través de la plataforma?', answer: 'Sí, todos los scooters registrados están asegurados y los arrendatarios deben cumplir con los requisitos de seguridad.' },
        { question: '¿Cómo funciona el sistema de pagos?', answer: 'Aceptamos pagos a través de varias plataformas digitales. Las tarifas de alquiler dependen del tiempo de uso.' },
        { question: '¿Puedo visualizar el historial de mis alquileres?', answer: 'Sí, tanto los Owners como los Clients pueden visualizar su historial en la sección correspondiente de su perfil.' },
        { question: '¿Cómo califico un scooter después de usarlo?', answer: 'Después de finalizar un alquiler, puedes dejar una calificación y comentario en la sección de "Calificaciones".' }
      ]
    };
  }
};
</script>

<style scoped>
.faq-container {
  font-family: 'Open Sans', sans-serif;
  background-color: white;
  color: black;
  padding: 20px;
}

p {
  margin: 0;
  font-size: 1rem;
  color: black;
}

h1, h2, h3, h4 {
  color: black;
}

{
  font-weight: 600;
}
</style>