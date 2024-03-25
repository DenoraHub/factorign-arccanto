import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import {createVuetify} from 'vuetify'
import {mdi} from "vuetify/iconsets/mdi";

const arccanto = {
	dark: false,
	colors: {
		background: '#E0ECFF',
		primary: '#1B2651',
		secondary: '#4C63F6',
		error: '#B00020',
		info: '#2196F3',
		success: '#4CAF50',
		warning: '#FB8C00',
		indigo: '#FB8C00',
		black: '#000000',
	},
}

export default defineNuxtPlugin((app) => {
	const vuetify = createVuetify({
		theme: {
			defaultTheme: 'arccanto',
			themes: {
				arccanto
			}
		},
		icons: {
			defaultSet: "mdi",
			sets: {
				mdi
			}
		}
	})
	app.vueApp.use(vuetify)
})
