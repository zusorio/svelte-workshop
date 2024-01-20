<script>
	/*
		In dieser Aufgabe sollst du einen minimalen Klon von Cookie Clicker erstellen.
		Es hat bereits einen Cookie-Button, der die Anzahl Cookies anzeigt.
		
		- Erstelle eine Variable `cookies`, die die Anzahl Cookies speichert
		- Übergebe diese Variable an den Cookie-Button

		- Übergebe dem Cookie-Button einen Event-Handler, der die Anzahl Cookies `on:click` um 1 erhöht
			- Tipp: Du kannst den Event-Handler direkt in der Komponente definieren
			- Oder du kannst eine Funktion definieren und diese übergeben 
	*/
	import CookieButton from '../CookieButton.svelte';

	let cookies = 0;
</script>

<div>
	<CookieButton {cookies} on:click={() => (cookies += 1)} />
</div>
