import { createI18n } from 'vue-i18n'

const messages = {
    en: {
        learning: {
            title: 'Tutorial Title',
            category: 'Category',
            date: 'Darrrr',
            Operation: 'Operations Listtt'
        }
    },
    fr: {
        learning: {
            title: 'Titre du didacticiel',
            category: 'Catégorie'
        }
    },
    ja: {
        learning: {
            title: 'チュートリアルのタイトル',
            category: 'カテゴリ'
        }
    }
}

const i18n = createI18n({
    locale: 'en', // Default locale
    fallbackLocale: 'en', // Fallback locale
    messages // Short syntax for messages
})

export default i18n
