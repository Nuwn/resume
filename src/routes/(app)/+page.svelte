<script lang="typescript">
	import { calculateAge, loadTranslations } from "$lib";
	import { locale } from "@stores/locale";

	const age = calculateAge("900126");

	let translations: any = {};
    let isLoading = true;

    // Load translations for this component when it's rendered
    $: {
        const currentLocale = $locale; // Get the current locale from the store
        const path = 'about'; // Adjust this based on your component/page

        if(currentLocale)
            loadTranslations(currentLocale, path).then((loadedTranslations) => {
                translations = loadedTranslations;
                isLoading = false;
            });
    }
</script>

<div class="container">
    {#if !isLoading}
	<h1>{translations.title}</h1>
	<h2>{age} {translations.sub}</h2>
	<div class="space-30-0" />
    {#each translations.introduction as intro }
	<p> {intro}	</p>
	<div class="space-10-0" />
    {/each}
	<div class="space-20-0" />
	<h3>{translations.spec.title}</h3>
	<div class="space-10-0" />
	<ul>
        {#each translations.spec.items as items }
		    <li><p>{items}</p></li>         
        {/each}
	</ul>
    <div class="space-20-0" />
	<h3>{translations.achievements.title}</h3>
    <ul>
        {#each translations.achievements
        .items as items }
		    <li><p>{items}</p></li>         
        {/each}
	</ul>

    {/if}
</div>

<style lang="scss">
	@import "./styles/shared-pages.scss";
    
    h2 {
        font-size: 1.05rem;
        font-weight: 300;
        color: $secondary-color;
        text-transform: capitalize;
    }

    h3 {
        font-size: 1.06rem;
        font-weight: 700;
    }

    p,
    li {
        font-weight: 300;
    }

    ul {
        list-style-type: none;

        li {
            display: flex;
            padding: 3px 10px;

            &::before {
                content: " - "; /* Use a hyphen as a custom list marker */
                color: $primary-color; /* Customize the color of the marker */
                margin-right: 5px; /* Add some spacing between the marker and the list item */
            }
        }
    }
	
</style>
