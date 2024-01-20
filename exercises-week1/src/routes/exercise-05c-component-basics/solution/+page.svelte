<script>
    import Button from "./Button.svelte";
    import IconCat from "../IconCat.svelte";
    import IconDog from "../IconDog.svelte";
</script>

<Button >
    <div slot="leftContent"></div>
</Button>

<Button let:x shadow customClasses="bg-red-100" >
    {x}
    <div slot="leftContent"></div>
</Button>

<Button let:isLeftHovered shadow customClasses="bg-green-100 hover:bg-green-300">
    Katze {#if isLeftHovered} : Miau {/if}
    <div slot="leftContent"><IconCat /></div>
</Button>

<Button let:isLeftHovered shadow customClasses="bg-blue-100 hover:bg-blue-300" >
    Hund {#if isLeftHovered} : Wuff {/if}
    <div slot="leftContent"><IconDog /></div>
</Button>

<Button on:click={() => alert("eine Nachricht")} customClasses="bg-red-400">Alert</Button>
