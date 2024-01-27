<script>
	import '../app.pcss';
</script>

<nav class="bg-gray-900 text-white">
	<ul class="flex gap-2 p-2">
		<li><a href="/">Home</a></li>
		<li><a href="/about">About</a></li>
	</ul>
</nav>

<main class="container mx-auto p-4">
	<slot />
</main>
