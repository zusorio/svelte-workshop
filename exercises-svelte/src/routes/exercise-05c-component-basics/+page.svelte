<script>
    /*
        - Du hast eine noch nicht vollständige Button Component bekommen. Gehe dazu in den Button Component. um deine Aufgaben für den Component zu bearbeiten
        - Erstelle hier in diesem Dokument zwei Buttons, die auf der Button Component basieren
        - Übergebe den Buttons eine customClasses für den Hintergrund mit einer Tailwind Klasse (Erinnerung: Aufbau einer Tailwind Klasse für einen Hintergrund bg-<farbe>-<code>
        - Füge eine on click Funktion für die beiden Buttons hinzu, die einen Alert aufrufen, einer der Buttons soll dabei nur einmal angeklickt werden können
        - Füge eine Div hinzu, um jeweils einen leftContent zu definieren, hierfür kannst du die zwei Icons IconDog und IconCat verwenden
        - das Miau und Wuff soll in dem Button nur erscheinen, wenn über den Linken Content gehoverd wird

        - Tipp: damit du auf die Variable isLeftHovered zugreifen kannst, musst du in der öffnenden Button Component Tag let:<variable> hinzufügen
     */

    import IconDog from "./IconDog.svelte";
    import IconCat from "./IconCat.svelte";
    import Button from "./Button.svelte";
</script>

<Button>Katze : Miau</Button>
<Button>Hund : Wuff</Button>