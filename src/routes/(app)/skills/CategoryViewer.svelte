<script lang="typescript">
	import type { ISkill, ITranslation } from "@interfaces";
	import CategoryItem from "./CategoryItem.svelte";

    export let translations: ITranslation;
    export let categoryIndex: number;
    let category: ISkill | undefined = setCategory(categoryIndex);
    let lastIndex = -1;

    $: {
        if(categoryIndex !== lastIndex) {
            category = setCategory(categoryIndex);
            lastIndex = categoryIndex;
        }
    } 

    function setCategory(index: number) : ISkill | undefined  {
        if (!translations || !translations.Skills)
            return undefined;
    
        const keys = Object.keys(translations!.Skills.TechnicalSkills);
        const key: string = keys[index];
        
        if (keys.includes(key)) {
            //@ts-ignore, this is not suppose to expect a number...
            // TODO: properly fix this.
            return translations.Skills.TechnicalSkills[key];
        }
    }
</script>

<div class="container">
    {#if !category}
        <div class="space-10-0" />
        <p class="error">Click a Graph to select a category</p>
        <div class="space-10-0" />
    {:else}
        {#each Object.entries(category) as [key, value]}
           <CategoryItem skill = {value}/>
        {/each}
    {/if}
</div>

<style lang="scss">
    .container{
        display: flex;
        flex-direction: column;

        .error {
            text-align: center;
            font-size: 0.9rem;
        }
    }

    
</style>
