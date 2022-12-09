<script lang="ts">
	import type { Question } from './questionData';
	export let data: Question;
</script>

<h1>{data.question}</h1>
{#each data.options as option (option)}
	<p>
		{option}
		{#if option === data.answer}answer{/if}
	</p>
{/each}
