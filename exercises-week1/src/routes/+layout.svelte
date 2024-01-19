<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import { exercises } from '$lib/exercises';
	import '@fontsource-variable/dm-sans';
	import '@fontsource/gaegu/300.css';
	import '@fontsource/gaegu/400.css';
	import '@fontsource/gaegu/700.css';
	import '../app.pcss';

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

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<svelte:head>
	{#if currentExercise}
		<title>{currentExercise.name} | Svelte Workshop</title>
	{:else}
		<title>Svelte Workshop</title>
	{/if}
</svelte:head>

{#if !currentExercise}
	<slot />
{:else}
	<main class="mx-auto max-w-4xl space-y-4 p-8">
		<div
			class="rounded-lg bg-white p-6 shadow-lg outline outline-2"
			class:outline-sky-600={!isSolution}
			class:outline-amber-600={isSolution}
			style:view-transition-name={`ex-${currentExercise.number}`}
		>
			<slot />
		</div>

		{#if currentExercise}
			<div>
				<div
					class="flex items-center gap-2"
					style:view-transition-name={`ex-${currentExercise.number}-number`}
				>
					<a href="/" class="inline-block">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
							<path
								fill="#3f3f46"
								d="M20 11H7.83l5.59-5.59L12 4l-8 8l8 8l1.41-1.41L7.83 13H20v-2z"
							/>
						</svg>
					</a>
					<span class="uppercase tracking-wide text-zinc-700">
						Aufgabe {currentExercise.number}
					</span>
					<span>{'⭐'.repeat(currentExercise.difficulty)}</span>
				</div>

				<div class="flex items-center gap-3">
					<h1
						style:view-transition-name={`ex-${currentExercise.number}-heading`}
						class="text-2xl font-bold"
					>
						{currentExercise.name}
					</h1>

					<button class="font-bold underline" on:click={openInEditor}>
						{isSolution ? 'Lösung öffnen' : 'Aufgabe öffnen'}
					</button>
				</div>
				<p>{currentExercise.description}</p>

				<div class="mt-4 grid max-w-xs grid-cols-2 gap-2">
					<a
						data-sveltekit-replacestate
						class={`rounded-lg bg-gray-800 ${isSolution ? ' hover:bg-gray-700' : 'opacity-80'} px-1 py-1 text-center font-medium text-white`}
						href={isSolution ? currentExercise.exercise : null}
					>
						Aufgabe
					</a>
					<a
						data-sveltekit-replacestate
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
