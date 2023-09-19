<script lang="typescript">
	import type { ISkill } from "@interfaces";

    export let skill: ISkill;  
    let previousSkill: ISkill | undefined;
    let extended = false; 

    $: if (skill !== previousSkill) {
        // reset extended
        extended = false;
        previousSkill = skill;
    }
    
    
</script>

<div class="content-item" 
    on:click={() => extended = !extended}
    on:keypress={() => extended = !extended}
    tabindex=0 role="button"
    >
    <div class="top">
        <p class="skill">{skill.title}</p>
        <div class="progress">
            <progress value="{skill.level}" max="100" />
            <p>{skill.level}%</p>
        </div>
    </div>
    <div class="bottom">
        {#if skill.description}
            <i class="fa fa-chevron-{extended ? 'up': 'down'}"></i>

            {#if extended}
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <div class="description" on:click|stopPropagation>{skill.description}</div>
            {/if}
        {/if}
    </div>
</div>

<style lang="scss">
    .content-item{
        display: flex;
        flex-direction: column;    
        cursor: pointer;      
        margin-top: 10px;  
        
        .top{
            display: grid;
            grid-template-columns: auto 1fr;
            width: 100%;
            padding: 5px 0;

            .skill {
                padding-left: 10px;
                min-width: 200px;
            }

            .progress {
                display:grid;
                place-items: center;
                padding-right: 10px;
                position: relative;

                p{
                    position: absolute;
                    font-size: 0.75em;
                    width: 100%;
                    padding-right: 20px;
                    text-align: right;
                }
            }
        }
        .bottom {
            display: flex;
            flex-direction: column;
            align-items: center;

            i {
                transform: scaleX(1.5);
                font-size: 0.6rem;
                color: $bland-blue;
            }
            
            .description{
                padding: 0 20px;
                margin: 10px 0;
                font-size: 0.9rem;
                font-weight:300;
                text-align: left;
                width: 100%;
                cursor: initial;
            }
        }
    }
    progress {
        width: 100%; /* Set the width of the progress bar */
        height: 8px; /* Set the height of the progress bar */
        border: 0; /* Add a border */
        border-radius: 0; /* Add rounded corners */
        background-color: $bland-blue;
    

        &::-webkit-progress-bar {
            background-color: $bland-blue;
        }

        &::-webkit-progress-value {
            background-color: $secondary-color;
        }

        &::-moz-progress-bar {
            background-color: $secondary-color;
        }
    }
</style>