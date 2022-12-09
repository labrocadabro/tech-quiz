<script>
	import Question from './question.svelte';
	import { questionData } from './questionData';
	let title = 'Take the Quiz';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<h1>{title}</h1>
{#each questionData as data (data.questionID)}
	<Question {data} />
{/each}
