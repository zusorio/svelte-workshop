<script>
	/*
		In dieser Aufgabe sollst du einen minimalen Klon von Cookie Clicker erstellen.
		Es hat bereits einen Cookie-Button, der die Anzahl Cookies anzeigt.
		
		- Erstelle eine Variable `clickers`, die die Anzahl gekaufter Clicker speichert
		- Zeige die Anzahl gekaufter Clicker unter dem Cookie-Button an

		- Erstelle eine Funktion `buyClicker`, die einen Clicker kauft, wenn genug Cookies vorhanden sind
			- Ein Clicker kostet 10 Cookies
			- Wenn ein Clicker gekauft wird, wird die Anzahl Cookies um 10 verringert und die Anzahl Clicker um 1 erhöht
		- Der "Buy Clicker"-Button soll die Funktion `buyClicker` `on:click` aufrufen
		- Zeige den Button "Buy Clicker" nur an, wenn genug Cookies vorhanden sind
			- Tipp: Verwende `{#if}`
		- Jede Sekunde soll die Anzahl Cookies um die Anzahl gekaufter Clicker erhöht werden
			- Tipp: Verwende den bereits vorhandenen `setInterval`-Aufruf
	*/
	import { onMount } from 'svelte';
	import CookieButton from './CookieButton.svelte';

	let cookies = 0;

	// onMount wird ausgeführt, wenn der Component gerendert wurde
	onMount(() => {
		setInterval(() => {
			// Hier sollen die Clicker die Cookies erhöhen
		}, 1000);
	});
</script>

<div class="grid grid-cols-2">
	<CookieButton {cookies} on:click={() => (cookies += 1)} />
	<div>
		<button>Buy Clicker</button>
		<div>You have -1 clickers</div>
	</div>
</div>
