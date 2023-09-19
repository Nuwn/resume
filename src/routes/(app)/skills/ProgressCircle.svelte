<script lang="typescript">
	export let progress: number;
</script>

<div class="progress-bar" style="--progress:{progress}%">
    <p>{Math.ceil(progress)}%</p>
</div>

<style lang="scss">
    .progress-bar{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        aspect-ratio: 1 / 1;
        border-radius: 50%;
        background: 
            radial-gradient(closest-side, $secondary-bg-color 85%, transparent 86.5% 100%),
            conic-gradient($secondary-color var(--progress), $bland-blue 0);
        image-rendering: smooth;
        
        p {
            font-style: italic;
            font-weight: 100;
        }
    }

</style>