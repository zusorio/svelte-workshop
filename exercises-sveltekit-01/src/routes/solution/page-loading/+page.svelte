<script>
    export let data
</script>

<h1>Länder in Europa</h1>

{#each data.countries as country}
    <h2>{country.name}</h2>
    <p>{country.content}</p>
{/each}

<a href="/page-loading">Übung</a>