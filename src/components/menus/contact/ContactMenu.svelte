<script lang="typescript">
	import { screenMode } from "@stores/screenMode";
	import contact from "@data/contact.json";
	import FullContactViewer from "./FullContactViewer.svelte";
	import SingleContactViewer from "./SingleContactViewer.svelte";
	import type { ILink } from "@interfaces";

	const links: ILink[] = contact.data;

	let isContentVisible = false;
	let hoverIndex = -1;
	let focusedIndex = -1;

	function handleKeyPress(event: KeyboardEvent) {
		if (event.key === " " || event.key === "Enter") {
			toggleContentVisibility();
		}
	}

	function toggleContentVisibility() {
		isContentVisible = !isContentVisible;
	}

	// Handle mouseover event
	function handleMouseOver(event: MouseEvent, index: number) {
		const target = event.currentTarget as HTMLElement;
		const relatedTarget = event.target as HTMLElement;

		// Check if the event target is a child of the <li> element
		if (target.contains(relatedTarget)) {
			hoverIndex = index;
		}
	}

	// Handle mouseout event
	function handleMouseOut(event: MouseEvent, index: number) {
		const target = event.currentTarget as HTMLElement;
		const relatedTarget = event.relatedTarget as HTMLElement;

		// Check if the related target is not a child of the <li> element
		if (!target.contains(relatedTarget)) {
			hoverIndex = -1;
			handleBlur();
		}
	}

	// Handle focus event
	function handleFocus(index: number) {
		focusedIndex = index;
	}

	// Handle blur event
	function handleBlur() {
		focusedIndex = -1;
	}
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div
	class="contact-menu"
	tabindex={$screenMode.name === "mobile" ? 0 : undefined}
	role={$screenMode.name === "mobile" ? "button" : undefined}
	on:click={$screenMode.name === "mobile"
		? toggleContentVisibility
		: undefined}
	on:keydown={$screenMode.name === "mobile" ? handleKeyPress : undefined}>
	<ul>
		{#each links as link, index}
			<li
                on:mouseover={(event) => handleMouseOver(event, index)}
                on:mouseout={(event) => handleMouseOut(event, index)}
				on:focus={() => handleFocus(index)}
				on:blur={() => handleBlur()}
                class="{hoverIndex === index ? 'bland-blue' : ''}">
				<i class="fa fa-solid fa-{link.icon}" />
				{#if $screenMode.name === "desktop" && hoverIndex === index}
					<div class="popout-viewer">
						<SingleContactViewer {link} />
					</div>
				{/if}
			</li>
		{/each}
	</ul>

	{#if $screenMode.name === "mobile"}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="content {isContentVisible ? '' : 'hidden'}"
			on:click|stopPropagation>
			<FullContactViewer {links} />
		</div>
	{/if}
</div>

<style lang="scss">
	.contact-menu {
		position: relative;

		ul {
			display: flex;
			flex-direction: column;
			width: 100%;
			height: 100%;
			padding: 20px 0;

			li {
				aspect-ratio: 1.5/1;
				width: 100%;
				text-decoration: none;
				list-style: none;
				display: grid;
				place-items: center;
				color: $secondary-color;
				position: relative;
				cursor: pointer;

				.popout-viewer {
					display: grid;
					place-items: center;
					position: absolute;
					left: 100%;
					top: -10px;
					width: 280px;
					z-index: 99;
					padding: 0 20px 0 10px;
					background-color: $secondary-bg-color;
					height: calc(100% + 20px);
				}
			}
		}

		.content {
			width: calc(100vw - 100%);
			max-width: 300px;
			height: 100%;
			position: absolute;
			left: 100%;
			top: 0;

			&::before {
				display: block;
				position: absolute;
				top: 0;
				background-color: darken($secondary-bg-color, 2%);
				height: 100vh;
				width: 100%;
				content: "";
			}
		}
	}

	.hidden {
		display: none;
	}

    .bland-blue{
        background-color: #4a545e;
    }
</style>
