<script>
	// Diese Date ist nich Teil der Aufgabe
	// Du kannst sie aber verändern, wenn du das Aussehen des Cookies ändern möchtest
	export let cookies = 0;
</script>

<button class="cookie" on:click> {cookies} </button>

<style lang="postcss">
	.cookie {
		@apply font-hand h-48 w-48 bg-[url('/cookie.png')] bg-contain text-5xl font-bold text-white transition active:scale-90;
	}
</style>
