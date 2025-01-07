<script lang="typescript">
	import { onMount } from "svelte";
	import { updateScreenMode } from "@stores/screenMode";
	import { getCookie, setCookie } from "$lib";
	import { locale } from "@stores/locale";


	// Detect mobile mode on layout mount and when the window is resized
	onMount(() => {

        const unsubscribeLocale = initLocale();

        updateScreenMode();

		// Listen for window resize events
		window.addEventListener("resize", updateScreenMode);

		// Clean up the event listener when the layout is unmounted
		return () => {
			window.removeEventListener("resize", updateScreenMode);
			unsubscribeLocale();
		};
	});

    function initLocale(){
        const handleLocaleChange = (value: string | undefined) => {
            setCookie("locale", value, 365, document);
		};
        
		// Initialize locale from cookie or use 'en' as the default
		const initialLocale = getCookie("locale", document) || "en";
		locale.set(initialLocale);
        
		return locale.subscribe(handleLocaleChange);
    }

</script>

<slot />   


<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800');
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Lato:ital,wght@0,100;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
    @import '/node_modules/font-awesome/css/font-awesome.css';

    :global(*) { 
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :global(html, body) {
        height: 100%;
        font-family: 'Karla', sans-serif;
        font-size: 1rem;
    }
</style>