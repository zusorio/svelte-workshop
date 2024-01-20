<script>
    import Button from "./Button.svelte";
    /**
     *  - Erstelle in der gegebenen Button Component ein Fallbackslot mit dem Inhalt "Fallback" und binden diesen hier ein
     *  - Binde einen weiteren Button ein mit dem Text "lorem ipsum"
     *  - Vielleicht hast du schon gesehen das in der Button Component die größe und einen Schatten zu dem Button hinzugefügt werden kann.
     *     Erstelle hier einen weiteren Button, dieser soll die größe "medium" haben sowie einen Schatten. Verwende dabei kein CSS,
     *     sondern änder dies mit den Props
     */
    let size = "medium"
</script>
<Button></Button>
<Button>Lorem ipsum</Button>
<Button size={size} shadow={true}>Ein mittlerer Button</Button>
