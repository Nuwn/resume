<script lang="typescript">
	import type { IExperience } from "@interfaces";
    import type { NumberBoolMap } from "@types";

    export let jobs: IExperience[];

    let extended: NumberBoolMap = {};

    function toggleExtended(index: number) {
        extended[index] = !extended[index];
    }

</script>

{#each jobs as job, index}
    <div class="job">
        <p class="job-date">{job.date}</p>    
        <p class="job-company">{job.company}</p>
        <div class="job-title"><p>{job.title}</p></div>
        
        {#if job.summary}
            <p>{job.summary}</p>
        {/if}

        {#if job.description && (!job.summary || extended[index])}
            {#each job.description as desc}
                <p>{desc}</p>
            {/each}
        {/if}

        {#if job.description && job.summary}
            <button class="extend-button" on:click={() => toggleExtended(index)}>
                {extended[index] ? 'show less...' : 'show more...'}
            </button>
        {/if}
    </div> 
{/each}

<style lang="scss">
    @import '../styles/shared-listings.scss'; 
</style>