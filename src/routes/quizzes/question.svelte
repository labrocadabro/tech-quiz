<script lang="ts">
	import type { Question } from './questionData';

	export let data: Question;

	const { questionID, question, options, answer } = data;
	let questionGroup: string;

	function selectAnswer(this: HTMLDivElement) {
		this.querySelector('input')!.checked = true;
	}
</script>

<fieldset class="border mb-4 p-4">
	<h2 class="text-xl text-blue-800 mb-3">{question}</h2>
	<div class="grid grid-cols-2 gap-3">
		{#each options as option (option.id)}
			<div class="border p-4" on:click={selectAnswer}>
				<input
					type="radio"
					bind:group={questionGroup}
					value={option.id}
					id={option.id}
					name={questionID}
				/>
				<label for={option.id}>{option.name}</label>
			</div>
		{/each}
	</div>
</fieldset>
