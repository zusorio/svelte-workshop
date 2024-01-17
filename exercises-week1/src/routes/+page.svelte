<script>
	import { exercises } from '$lib/exercises';
</script>

<main class="container mx-auto p-8">
	<div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
		{#each exercises as exercise (exercise.name)}
			<a href={exercise.exercise}>
				<article class="rounded-lg bg-white p-4 shadow-lg outline outline-2 outline-sky-600">
					<span class="uppercase tracking-wide text-zinc-700">Aufgabe {exercise.number}</span>
					<span>{'⭐'.repeat(exercise.difficulty)}</span>

					<h2 class="text-xl font-bold">{exercise.name}</h2>
				</article>
			</a>
		{/each}
	</div>
</main>
