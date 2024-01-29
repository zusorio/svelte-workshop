<script>
    import H1 from "$lib/H1.svelte";
    export let data
</script>

<H1>Tiere</H1>

<ul>
    {#each data.summaries as {id, name}}
        <li><a href="animals/{id}">{name}</a></li>
    {/each}
</ul>