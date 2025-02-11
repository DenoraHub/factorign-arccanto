// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
	devtools: { enabled: true },
	css: [
		'@/assets/css/main.css',
		'@/assets/css/custom.css'
	],
	build: {
		transpile: ['vuetify']
	},
	modules: [
		(_options, nuxt) => {
			nuxt.hooks.hook('vite:extendConfig', (config) => {
				// @ts-expect-error
				config.plugins.push(vuetify({ autoImport: true }))
			})
		},
		"@nuxtjs/prismic"],
	prismic: {
		endpoint: "factorajearccanto"
	},
	vite: {
		vue: {
			template: {
				transformAssetUrls
			}
		}
	}
})
