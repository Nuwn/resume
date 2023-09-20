<script lang="typescript">
	import { CopyToClipboard } from "$lib";
    import type { ILink } from "../../../types/Interfaces";

    enum State {
        Copied, NotCopied, Null
    }

	export let link: ILink;

    let isCopied: State = State.Null;

	async function addToClipboard(value: string): Promise<void> {
		try {
			await CopyToClipboard(value);
			isCopied = State.Copied;

			setTimeout(() => {
				isCopied = State.Null;
			}, 1000);
		} catch (error) {
            isCopied = State.NotCopied;

            setTimeout(() => {
				isCopied = State.Null;
			}, 1000);
		}
	}
</script>

<div class="contact-info">
	<a title={link.href} href={link.href}>{link.text}</a>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<i class="fa fa-solid fa-clone {isCopied === State.Copied ? 'green' : isCopied === State.NotCopied ? 'red' : ''}" on:click={() => addToClipboard(link.value)} />
</div>

<style lang="scss">
	.contact-info {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;

		i {
			cursor: pointer;
			color: $tertiary-color;
		}
	}
 
    .green{
        color: #00c85d !important;
        transition: color 0.2s linear;
    }
    .red {
        color: rgb(200, 0, 0) !important;
        transition: color 0.2s linear;
    }
</style>
