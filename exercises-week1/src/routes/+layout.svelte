<script lang="ts">
	import '../app.pcss';
	import '@fontsource-variable/dm-sans';
	import { exercises } from '$lib/exercises';
	import { page } from '$app/stores';

	$: currentExercise = exercises.find(
		(exercise) =>
			exercise.exercise === $page.url.pathname || exercise.solution === $page.url.pathname
	);

	$: isSolution = $page.url.pathname === currentExercise?.solution;

	async function openInEditor() {
		await fetch('/ignore', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				file: `src/routes/${isSolution ? currentExercise!.solution : currentExercise!.exercise}/+page.svelte`
			})
		});
	}
</script>

{#if !currentExercise}
	<slot />
{:else}
	<main class="mx-auto max-w-4xl space-y-4 p-8">
		<div class=" rounded-lg bg-white p-6 shadow-lg outline outline-2 outline-sky-600">
			<slot />
		</div>

		{#if currentExercise}
			<div>
				<div>
					<span class="uppercase tracking-wide text-zinc-700">Aufgabe {currentExercise.number}</span
					>
					<span>{'⭐'.repeat(currentExercise.difficulty)}</span>
				</div>

				<div class="flex items-center gap-3">
					<h1 class="text-2xl font-bold">{currentExercise.name}</h1>

					<button class="font-bold underline" on:click={openInEditor}>
						{isSolution ? 'Lösung öffnen' : 'Aufgabe öffnen'}
					</button>
				</div>
				<p>{currentExercise.description}</p>

				<div class="mt-4 grid max-w-xs grid-cols-2 gap-2">
					<a
						class={`rounded-lg bg-gray-800 ${isSolution ? ' hover:bg-gray-700' : 'opacity-80'} px-1 py-1 text-center font-medium text-white`}
						href={isSolution ? currentExercise.exercise : null}
					>
						Aufgabe
					</a>
					<a
						class={`rounded-lg bg-gray-800 ${!isSolution ? ' hover:bg-gray-700' : 'opacity-80'} px-1 py-1 text-center font-medium text-white`}
						href={!isSolution ? currentExercise.solution : null}
					>
						Lösung
					</a>
				</div>
			</div>
		{/if}
	</main>
{/if}
