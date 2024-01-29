<script>
    import "../app.css";
    import Header from "$lib/Header.svelte";
    import Content from "$lib/Content.svelte";
</script>

<Header />
<Content>
    <slot />
</Content>
