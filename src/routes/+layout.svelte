<script>
	import '../app.postcss';
	import Header from '$lib/header.svelte';
	import Footer from '$lib/footer.svelte';
	export let title = 'Quiz';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>
<Header />
<slot />
<Footer />
