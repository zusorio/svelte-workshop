<script>
    //Über das Input Feld soll der Wert der Variable dynamisch geändert werden
    let name = ""
</script>

<label for="name">Trage hier etwas ein:</label>
<input type="text" id="name" class="border-2 rounded p-1" bind:value={name}>

<h1>Hallo {name}!</h1>