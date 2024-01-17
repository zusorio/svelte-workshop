<script>
    export let size = "small"
    export let shadow = false;
    export let customClass = undefined;
    export let disabled = false;

    let isLeftHovered = false;
    let string = "lorem ipsum";
    let classNames = customClass + " bg-blue-100 rounded-md hover:bg-red-400 transition-colors flex my-2 "

    switch (size) {
        case "medium":
            classNames += " p-4 "
            break;
        case "large":
            classNames += " p-6 "
        default:
            classNames += " p-2 "
    }

    shadow ? classNames += " shadow-md ": "";

</script>

<button class={classNames} on:click {disabled}>
    {#if $$slots.leftContent}
        <div class="mr-1"
             on:mouseenter={() => (isLeftHovered = true)}
             on:mouseleave={() => (isLeftHovered = false)}>
            <slot name="leftContent"></slot>
        </div>
    {/if}
    <slot x={string} {isLeftHovered}>Fallback</slot>
</button>