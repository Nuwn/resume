<script lang="typescript">
	import SingleContactViewer from "./SingleContactViewer.svelte";
    import type { ILink } from "../../../types/Interfaces";
    
    export let links: ILink[];
</script>

<ul>
    {#each links as link, index}
    <li><SingleContactViewer {link} /></li>
    {/each}
</ul>


<style lang="scss">
    ul {
        height:100%;
        display:flex;
        flex-direction:column;
        flex-grow:1;
        padding: 20px 0;
        position: relative;


        li {
            display: flex;
            justify-content: space-between;
            padding: 0 30px;
            font-weight: bold;
            flex-grow: 1;
            align-items: center;

        }
    }
</style>