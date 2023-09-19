<script lang="typescript">
    import { loadTranslations } from "$lib";
    import { locale } from '@stores/locale';
	import Joblisting from "./Joblisting.svelte";
    import type { IJobs } from "@interfaces";

	let translations: IJobs;
    let isLoading = true;

    // Load translations for this component when it's rendered
    $: {
        const currentLocale = $locale; // Get the current locale from the store
        const path = 'experience'; // Adjust this based on your component/page

        if(currentLocale && currentLocale !== translations?.locale)
            loadTranslations(currentLocale, path).then((loadedTranslations) => {
                translations = loadedTranslations;
                isLoading = false;
            });
    }
</script>


<div class="container">
    {#if !isLoading}
	<h1>{translations.title}</h1>
    <div class="space-20-0"></div>
    <h2>{translations.jobTitle}</h2>
    <div class="divider"></div>
    <Joblisting jobs={translations.jobs} />
    <div class="space-20-0"></div>
    <h2>{translations.internshipTitle}</h2>
    <div class="divider"></div>
    <Joblisting jobs={translations.internships} />
    {/if}
</div>

<style lang="scss">
	@import "../styles/shared-pages.scss";
</style>