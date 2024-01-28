<script>
    /*
        - Vervollständige den Button so,
            - dass die Tailwind Klassen im Button angezeigt werden
            - erstelle einen Slot, in dem das Child übergeben wird
            - erstelle die Prop Variable isLeftHovered setze den Wert auf false
            - Ändere die zwei Events "mouseenter" und "mouseleave" so um, dass sich der Wert der Variable je nach Event auf true/false ändert
            - erstelle in dem div mit der id "left" einen zweiten Slot, mit dem Namen "leftContent"
            - überprüfe mit einer if Bedingung, ob ein Prop leftContent übergeben wurde (Tipp: nutze dafür die Variable $$slots)
            - machen den Button Klickbar, um von einem Elternelement aus darauf zu klicken

        - Tipp: Um den Button click bar zu machen, musst du "on:click" hinzufügen
     */
    export let customClasses = "";
    let classNames = customClasses + " bg-blue-100 rounded-md hover:bg-blue-400 transition-colors flex my-2 p-2"
</script>

<button>
    <div id="left" class="mr-1" role="button" tabindex="0"
         on:mouseenter={() => true}
         on:mouseleave={() => false}>
    </div>
</button>