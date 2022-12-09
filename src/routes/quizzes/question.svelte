<script lang="ts">
	import type { Question } from './questionData';

	export let data: Question;

	const { questionID, question, options, answer } = data;
	let questionGroup: string;

	function checkAnswer(e: MouseEvent) {
		const option = e.target as HTMLInputElement;
		if (option.value === data.answer) {
			console.log('right');
		} else console.log('wrong');
	}
</script>

<h1>{question}</h1>
{#each options as option (option.value)}
	<input
		type="radio"
		bind:group={questionGroup}
		value={option.value}
		on:click={checkAnswer}
		id={option.value}
		name={questionID}
	/>
	<label for={option.value}>{option.name}</label>
{/each}
