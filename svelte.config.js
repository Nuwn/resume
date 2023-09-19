import adapter from '@sveltejs/adapter-static';
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://kit.svelte.dev/docs/integrations#preprocessors
    // for more information about preprocessors
    preprocess: preprocess({
        scss: {
            prependData: `@import './src/app.scss';`
        }
    }),

    kit: {
        // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
        // If your environment is not supported or you settled on a specific environment, switch out the adapter.
        // See https://kit.svelte.dev/docs/adapters for more information about adapters.
        adapter: adapter(),
        alias: {
            '@stores': 'src/stores',
            '@components': 'src/components',
            '@data': 'src/data',
            '@locales': 'src/data/locales',
            '@interfaces': 'src/types/Interfaces.ts',
            '@types': 'src/types/types.ts',
        },
        paths: {
            base: "/resume", // Replace with your GitHub repository name
        }
    }
};

export default config;