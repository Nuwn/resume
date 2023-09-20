<script lang="typescript">
	import { page } from "$app/stores";
    import { locale } from '@stores/locale';
    import type { ILinks } from "../../../types/Interfaces";
    import { base } from '$app/paths';
	import { loadTranslations } from "$lib";

    let links: ILinks;
    let isLoading = true;

    // Load translations for this component when it's rendered
    $: {
        const currentLocale = $locale; // Get the current locale from the store
        const path = 'links'; // Adjust this based on your component/page

        if(currentLocale && currentLocale !== links?.locale){
            isLoading = true;
            loadTranslations(currentLocale, path).then((loadedTranslations) => {
                links = loadedTranslations;
                isLoading = false;
            });
        }
    }

</script>

{#if links}
<nav class="page-menu">
	<ul>
        {#each links.links as link }
            <li>
                <a title={link.text} href="{base+link.href}" aria-current={$page.url.pathname === "{link.href}"} tabindex="0">
                    <i class="fa fa-solid fa-{link.icon}" />
                </a>
            </li>
        {/each}
	</ul>
</nav>
{/if}

<style lang="scss">
	.page-menu {
		width: 100%;

		ul {
			display: flex;
			flex-direction: column;
			width: 100%;
			height: 100%;
			padding: 20px 0;

			li {
				aspect-ratio: 1.5 / 1;
				width: 100%;
				text-decoration: none;
				list-style: none;
				display: grid;
				place-items: center;
				color: $secondary-color;

				a {
					width: 100%;
					height: 100%;
					display: grid;
					place-items: center;

					&[aria-current="true"] {
						border-left: 2px solid $secondary-color;
                        border-right: 2px solid transparent;

                        @media screen and (min-width: 768px){
                            border-right: 2px solid $secondary-color;
                            border-left: 2px solid transparent;
                        }
					}

                    &:hover{
                        background-color: $bland-blue;
                    }
				}
			}
		}
	}
</style>
