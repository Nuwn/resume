<script lang="typescript">
	import { page } from "$app/stores";
    import type { ILink } from "../../../types/Interfaces";
    import { base } from '$app/paths';

    const links: ILink[] = [
        {text: '', href: base+'/', value: '', icon: 'user'},
        {text: '', href: base+'/experience', value: '', icon: 'suitcase'},
        {text: '', href: base+'/education', value: '', icon: 'graduation-cap'},
        {text: '', href: base+'/skills', value: '', icon: 'bar-chart'},
    ];
</script>

<nav class="page-menu">
	<ul>
        {#each links as link }
            <li>
                <a href="{link.href}" aria-current={$page.url.pathname === "{link.href}"} tabindex="0">
                    <i class="fa fa-solid fa-{link.icon}" />
                </a>
            </li>
        {/each}
	</ul>
</nav>

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
