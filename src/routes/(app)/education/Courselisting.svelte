<script lang="typescript">
	import type { IExperience } from "@interfaces";
	import type { NumberBoolMap } from "@types";

	export let courses: IExperience[];

	let extended: NumberBoolMap = {};

	function toggleExtended(index: number) {
		extended[index] = !extended[index];
	}
</script>

{#each courses as course, index}
	<div class="course">
		<div class="course-date">{course.date}</div>
		<div class="course-school">{course.school}</div>
        <div class="course-title"><p>{course.title}</p></div>

		{#if course.summary}
			<p>{course.summary}</p>
		{/if}

		{#if course.description && (!course.summary || extended[index])}
			{#each course.description as desc}
				<p>{desc}</p>
			{/each}
		{/if}

		{#if course.description && course.summary}
			<button class="extend-button" on:click={() => toggleExtended(index)}>
				{extended[index] ? "show less..." : "show more..."}
			</button>
		{/if}
	</div>
{/each}

<style lang="scss">
	@import "../styles/shared-listings.scss";
</style>
