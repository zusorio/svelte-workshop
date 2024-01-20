<script>
	/*
		In dieser Aufgabe sollst du einen minimalen Klon von Cookie Clicker erstellen.
		Es hat bereits einen Cookie-Button, der die Anzahl Cookies anzeigt.
		
		- Berechne die Gesamtanzahl der Cookies
			- Gesamt = Anzahl Clicker * Preis pro Clicker + Anzahl Cookies
		- Verwende dafür ein Reactive Statement `$:`
	*/
	import { onMount } from 'svelte';
	import CookieButton from './CookieButton.svelte';

	let cookies = 0;
	let clickers = 0;

	function buyClicker() {
		if (cookies >= 10) {
			cookies -= 10;
			clickers += 1;
		}
	}

	onMount(() => {
		setInterval(() => {
			cookies += clickers;
		}, 1000);
	});
</script>

<div class="grid grid-cols-2">
	<CookieButton {cookies} on:click={() => (cookies += 1)} />
	<div>
		{#if cookies >= 10}
			<button on:click={buyClicker}>Buy Clicker</button>
		{/if}
		<div>You have {clickers} clickers</div>
		<div>You have -1 cookies in total</div>
	</div>
</div>
