import { createI18n } from 'vue-i18n'

const messages = {
    es: {
        movirent: {
            nameScooter: 'Nombre del Scooter',
            brandScooter: 'Marca del Scooter',
            ModelScooter: 'Modelo',
            priceScooter: 'Precio x Hora S/',
            addressScooter: 'Dirección',
            contac: 'Contacto',
            list: 'Listas de Scooter',
            nuevoScooter: 'Agregar nuevo Scooter',
            titleCard: 'Mis Scooters'
        }
    },
    en: {
        movirent: {
            nameScooter: 'Nombre',
            brandScooter: 'Marca',
            ModelScooter: 'Modelo',
            priceScooter: 'Precio x Hora S/',
            addressScooter: 'Dirección',
            contac: 'Contacto'
        }
    },
    ar: {
        movirent: {
            nameScooter: 'Nombre',
            brandScooter: 'Marca',
            ModelScooter: 'Modelo',
            priceScooter: 'Precio x Hora S/',
            addressScooter: 'Dirección',
            contac: 'Contacto'
        }
    }
}

const i18n = createI18n({
    locale: 'es', // Default locale
    fallbackLocale: 'es', // Fallback locale
    messages // Short syntax for messages
})

export default i18n
