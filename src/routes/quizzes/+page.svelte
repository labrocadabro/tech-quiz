<script>
	import Question from './question.svelte';
	import { questionData } from './questionData';
</script>

<h1>Take the Quiz</h1>
{#each questionData as data (data.question)}
	<Question {data} />
{/each}
