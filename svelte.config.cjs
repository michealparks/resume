const sveltePreprocess = require('svelte-preprocess')
const adapterStatic = require('@sveltejs/adapter-static')
// const node = require('@sveltejs/adapter-node')
const pkg = require('./package.json')

// console.log(static())

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
	preprocess: sveltePreprocess(),
	kit: {
		adapter: adapterStatic(),
		target: '#svelte',
		vite: {
			ssr: { noExternal: Object.keys(pkg.dependencies || {}) }
		}
	}
}
