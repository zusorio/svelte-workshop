<script>
	/*
		In dieser Aufgabe sollst du einen minimalen Klon von Cookie Clicker erstellen.
		Es hat bereits einen Cookie-Button, der die Anzahl Cookies anzeigt.
		
		- Erstelle eine Variable `cookies`, die die Anzahl Cookies speichert
		- Übergebe diese Variable an den Cookie-Button

		- Übergebe dem Cookie-Button einen Event-Handler
			- Der Event-Handler soll die Anzahl Cookies um 1 erhöhen
			- Tipp: Du kannst den Event-Handler als inline-Funktion definieren
			- Oder du kannst eine Funktion definieren und diese übergeben 
		
	*/
	import CookieButton from './CookieButton.svelte';
</script>

<div>
	<CookieButton cookies={-1} />
</div>
