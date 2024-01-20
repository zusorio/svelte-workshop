<script>
    export let size = "small"
    let classNames = " bg-blue-100 rounded-md hover:bg-blue-400 transition-colors flex my-2 "
    export let shadow = false;

    switch (size) {
        case "medium":
            classNames += " p-4 "
            break;
        case "large":
            classNames += " p-6 "
        default:
            classNames += " p-2 "
    }

    shadow ? classNames += " shadow-md " : "";
</script>

<button class={classNames} >
</button>