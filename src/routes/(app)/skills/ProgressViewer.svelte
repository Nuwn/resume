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
                <div class="progress-key">{key}</div>
                {#if categoryIndex === index}
                    <i class="fa fa-chevron-down"></i>
                {/if}
        </div>
    {/each}
</div>

<style lang="scss">
    .progress-container {
		display: flex;
        cursor: pointer;

		.progress-circle {
            display: flex;
            position: relative;
            flex-direction: column;
			flex: 1; /* Equivalent to flex-grow: 1 */
			flex-basis: 25%;
            padding: 3%;
            justify-content: center;
            align-items: center;
            border: solid 2px transparent;
            border-radius:10px;

            .progress-key{
                padding-top: 10px;
                text-align: center;
            }

            i {
                position: absolute;
                bottom: 0;
                transform: scaleX(1.5);
                font-size: 0.7rem;
            }
		}
	}
    .hover-target{
        border: solid 2px $bland-blue !important;
    }
</style>