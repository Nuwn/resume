<script lang="typescript">
	import { loadTranslations } from "$lib";
	import { locale } from "@stores/locale";
	import type { ITranslation } from "@interfaces";
	import CategoryViewer from "./CategoryViewer.svelte";
	import ProgressViewer from "./ProgressViewer.svelte";

	let translations: ITranslation | undefined = undefined;
	let isLoading = true;
    let categoryIndex: number = -1;

	// Load translations for this component when it's rendered
	$: {
		const currentLocale = $locale; // Get the current locale from the store
		const path = "skills"; // Adjust this based on your component/page

		if (currentLocale && currentLocale !== translations?.locale)
        {
            isLoading = true;
            loadTranslations(currentLocale, path).then((loadedTranslations) => {
                translations = loadedTranslations;
				isLoading = false;
			});
        }
	}


</script>

<div class="container">
	{#if !isLoading && translations}
		<h1>{translations.title}</h1>
		<div class="divider" />
		<ProgressViewer {translations} bind:categoryIndex={categoryIndex} />
        <div class="divider" />
		<CategoryViewer {translations} {categoryIndex} />
        <div class="divider" />
        <div class="other-skills">
            <div class="certifications">
                <h2>{translations.Skills.Certifications.title}</h2>
                {#each translations.Skills.Certifications.data as cert}
                <p>{cert.title} </p>
                {/each}
            </div>
            <div class="languages">
                <h2>{translations.Skills.Languages.title}</h2>
                {#each translations.Skills.Languages.data as language}
                <p>{language.title} - {language.description}</p>
                {/each}
            </div>
        </div>
	{/if}
</div>

<style lang="scss">
	.container {
		height: 100%;
		width: 100%;
		overflow-y: auto;
		scrollbar-width: none; /* Firefox */
		-ms-overflow-style: none; /* Internet Explorer and Microsoft Edge */
		&::-webkit-scrollbar {
			display: none;
		}

		h1 {
			padding-top: 30px;
			font-size: 2.42rem;
			text-transform: uppercase;
		}

        .other-skills{
            display: grid;
            grid-template-columns: 1fr 1fr;

            h2{
                font-size: 1.2rem;
                text-align: center;
                margin-bottom: 10px;
            }
            p {
                text-align: center;
                font-weight: 100;
            }
        }
	}
</style>
