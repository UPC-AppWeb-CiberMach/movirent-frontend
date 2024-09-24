import { createI18n } from 'vue-i18n'

const messages = {
    en: {
        movirent: {
            name: 'Nombre del equipo',
            address: 'Dirección',
            marca: 'Marca de Scooter',
            phone: 'Teléfono',
            model: 'Modelo de Scooter',
            imgUrl: 'URL de la imagen',
            price: 'Costo de alquiler',
            tituloResultado: 'Sus Scooter registrados',
            titleGeneral: 'Registro de Scooter',
            nuevoScooter: 'Registrar nuevo Scooter',
            titleCard: 'Mis Scooter',
        }
    }
}

const i18n = createI18n({
    locale: 'en', // Default locale
    fallbackLocale: 'en', // Fallback locale
    messages // Short syntax for messages
})

export default i18n
