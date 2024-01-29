<script>
	export let data;
    import H1 from '$lib/H1.svelte';
</script>

<H1>{data.animal.name}</H1>
<div><p>{data.animal.content}<p></div>