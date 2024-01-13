<script lang="ts">
  import type { Exercise } from "$lib/index.js";
  import { page } from "$app/stores";
  export let exercises: Exercise[];

  $: urlParts = $page.url.pathname.split("/");

  $: currentMode = ["exercises", "solutions"].includes(urlParts.at(1))
    ? urlParts[1]
    : "unknown";
  $: slug = urlParts.at(2);

  $: currentExercise = exercises.find((exercise) => exercise.slug === slug);

  let opened = false;
</script>

{#if currentExercise}
  <div class="absolute bottom-5 right-5 bg-zinc-100 p-3 rounded-2xl shadow-lg border-2 border-zinc-400 ">
    {#if opened}
      <div>
        <span class="uppercase tracking-wide text-zinc-700">Übung {currentExercise.number}</span>
        <span>{'⭐'.repeat(currentExercise.difficulty)}</span>
      </div>
      <h1 class="font-bold text-2xl">{currentExercise.name}</h1>
      <p>{currentExercise.description}</p>

      <div class="grid grid-cols-2 gap-1">
        {#each ['exercises', 'solutions'] as mode}
          {@const enabled = mode !== currentMode}
          {@const name = mode === 'exercises' ? 'Aufgabe' : 'Lösung'}
          <a
            class={`text-center font-medium tracking-wide py-2 rounded-lg bg-zinc-200 cursor-pointer transition ${enabled ? 'hover:bg-zinc-300' : 'opacity-50 cursor-not-allowed'}`}
            href={enabled ? `/${mode}/${currentExercise.slug}` : undefined}
          >
            {name}
          </a>
        {/each}
      </div>
      {:else }
      <button on:click={() => opened = !opened}>
        ℹ️
      </button>
    {/if}
  </div>
{/if}
