<script lang="typescript">
	import ContactMenu from "@components/menus/contact/ContactMenu.svelte";
	import PageMenu from "@components/menus/page/PageMenu.svelte";
	import LanguageMenu from "@components/menus/language/LanguageMenu.svelte";

    const bg_image = 'bg.jpg';

</script>

<main style="background-image: url({bg_image});">
    <div class="main-container">
        <div class="left-menu">
            <div><ContactMenu /></div>
            <div class="page-menu"><PageMenu /></div>
            <LanguageMenu />
        </div>
        <div class="profile-picture">
            <div class="profile-picture-float">
                <img src="patric.webp" alt="" />
            </div>
        </div>
        <section class="content">
            <slot />
        </section>
        <div class="right-menu">
            <PageMenu />
        </div>
    </div>
</main>

<style lang="scss">
    :global(a) {
		color: $secondary-color;
		text-decoration: none;

		&:active {
			color: yellow;
			background-color: transparent;
		}
	}

	main {
		width: 100%;
		height: 100%;
        background-color: $bg-color;
		color: $primary-color;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
		display: grid;
		place-items: center;
	}

	.main-container {
		background-color: $secondary-bg-color;
		height: 100%;
		width: 100%;
		display: grid;
		position: relative;
        
		@media screen and (min-width: 768px) {
            width: 95vw;
			height: 85vh;
			max-width: 1200px;
            grid-template-columns: auto auto 1fr auto; /* Column sizing */
		}

		.profile-picture {
			display: none;
			width: 280px;
			height: 100%;
			position: relative;

			@media screen and (min-width: 768px) {
				display: block;
			}

			@media screen and (min-width: 1200px) {
				width: 400px;
			}

			.profile-picture-float {
				position: absolute;
				height: 104%;
				top: -2%;
				width: 100%;

				img {
					width: 100%;
					height: 100%;
					object-fit: cover; /* Scale the image to cover the container */
				}
			}
		}

		.content {
			padding: 40px 10px 40px 90px;
			overflow-y: auto;

            @media screen and (min-width: 768px) {
                padding: 40px 10px 40px 20px;
            }
		}

		.left-menu {
            display: grid;
			grid-template-rows: auto auto 1fr auto;
            position: fixed;
			width: 80px;
            height: 100vh;

			@media screen and (min-width: 768px) {
                position: relative;
				width: 64px;
				grid-template-rows: auto 1fr auto;
                height: 100%;
			}

			.page-menu {
				@media screen and (min-width: 768px) {
					display: none;
				}
			}
		}

		.right-menu {
			display: none;
			width: 80px;

			@media screen and (min-width: 768px) {
				display: flex;
				align-items: center;
			}
		}
	}
</style>
