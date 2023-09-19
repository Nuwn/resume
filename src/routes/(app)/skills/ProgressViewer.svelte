<script lang="typescript">
	import type { ICircleData, ITranslation, ISkill } from "@interfaces";
	import ProgressCircle from "./ProgressCircle.svelte";
    
    export let translations: ITranslation;
    export let categoryIndex = -1;
    const circleData = loadCircleData();
    let hoverIndex: number = -1;
    
    function loadCircleData() {
		const data: ICircleData = {};

		if (!translations) {
            return data; // Return an empty object if translations are not available yet
		}

        const skills = translations.Skills.TechnicalSkills;

		for (const categoryKey in skills) {
			if (skills.hasOwnProperty(categoryKey)) {
				const categoryValue = skills[categoryKey];

				let key = categoryKey;
				let total = categoryValue.length * 100;
				let progress = categoryValue.reduce(
					(x: number, y: ISkill) => {
						return x + y.level;
					},
					0
				);

				data[key] = (progress / total) * 100;
			}
		}
		return data;
	}

</script>

<div class="progress-container">
    {#each Object.entries(circleData) as [key, progress], index}
        <div class="progress-circle {hoverIndex === index ? 'hover-target' : ''}" 
            on:click={() => categoryIndex = index}
            on:keydown={() => categoryIndex = index}   
            on:mouseover={() => hoverIndex = index}
            on:mouseout={() => hoverIndex = -1}
            on:focus={() => {}}
            on:blur={() => {}}
            role="button" tabindex=0>
                <ProgressCircle {progress} />
                <p class="progress-key">{key}</p>
                {#if categoryIndex === index}
                    <i class="fa fa-chevron-down"></i>
                {/if}
        </div>
    {/each}
</div>

<style lang="scss">
    .progress-container {
		display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        cursor: pointer;

        @media screen and (min-width:520px){
            display: flex;
        }

		.progress-circle {
            display: flex;
            flex-direction: column;
            padding: 3%;
            flex: 1; /* Equivalent to flex-grow: 1 */
            justify-content: start;
            align-items: center;
            border: solid 2px transparent;
            border-radius:10px;
            

            .progress-key{
                padding-top: 10px;
                text-align: center;
                word-break: break-word;
            }

            i {
                font-size: 0.7rem;
                padding-top: 5px;
            }
		}
	}
    .hover-target{
        border: solid 2px $bland-blue !important;
    }
</style>