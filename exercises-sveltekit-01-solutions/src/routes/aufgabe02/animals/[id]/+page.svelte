<script>
	export let data;
    import H1 from '$lib/H1.svelte';
</script>

<H1>{data.animal.name}</H1>
<p>{data.animal.content}</p>
<img src={data.animal.imageURL} alt={data.animal.name} />
