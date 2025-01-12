import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const fullReloadAlways = {
	name: 'fullReloadAlways',
	handleHotUpdate({ server }) {
		server.ws.send({ type: 'full-reload' })
		return []
	},
}

export default defineConfig({
	plugins: [vue(), fullReloadAlways],
	resolve: {
		alias: [{ find: '@', replacement: '/src' }],
	},
	base: '/knit/',
	server: {
		host: true,
		port: 5515,
	},
})
