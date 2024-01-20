<script>
	/*
		In dieser Aufgabe sollst du die Elemente in `blocks` in einer Schleife anzeigen.

		- Erstelle eine Schleife, die über `blocks` iteriert
            - Verwende dazu `{#each}`
        - Setze den `background-color` des `div`-Elements auf `block.color`
            - Tipp: Svelte unterstützt es, Styles direkt im Template zu setzen
            - Du kannst dazu `style:background-color={ ??? }` verwenden
        - Gib den Blöcken mit Tailwind-Klassen eine Höhe und Breite
	*/

	let blocks = [
		{ color: 'red', id: 1 },
		{ color: 'orange', id: 2 },
		{ color: 'yellow', id: 3 },
		{ color: 'green', id: 4 },
		{ color: 'blue', id: 5 },
		{ color: 'violet', id: 6 }
	];
</script>

<div class="flex">
	{#each blocks as block}
		<div style:background-color={block.color} class="h-12 w-12"></div>
	{/each}
</div>
