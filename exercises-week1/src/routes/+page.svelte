<script>
	import { exerciseGroups } from '$lib/exercises';
</script>

<main class="container mx-auto space-y-6 p-8">
	<h1 class="text-3xl font-bold">Übungen Woche 1</h1>
	{#each exerciseGroups as exerciseGroup}
		<div class="space-y-2">
			<h2 class="text-2xl font-bold">{exerciseGroup.name}</h2>
			<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{#each exerciseGroup.exercises as exercise (exercise.name)}
					<a href={exercise.exercise} style:view-transition-name={`ex-${exercise.number}`}>
						<article
							class="rounded-lg bg-white p-4 shadow-lg outline outline-2 outline-sky-600 transition hover:shadow-xl hover:outline-sky-500"
						>
							<div
								style:view-transition-name={`ex-${exercise.number}-number`}
								class="flex items-center gap-2"
							>
								<span class="uppercase tracking-wide text-zinc-700">Aufgabe {exercise.number}</span>
								<span>{'⭐'.repeat(exercise.difficulty)}</span>
							</div>

							<h2
								style:view-transition-name={`ex-${exercise.number}-heading`}
								class="text-xl font-bold"
							>
								{exercise.name}
							</h2>
						</article>
					</a>
				{/each}
			</div>
		</div>
	{/each}
</main>
