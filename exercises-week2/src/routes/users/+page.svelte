<script>
	import { enhance } from '$app/forms';

	export let data;
	export let form;
</script>

{#if form?.error}
	<p>{form.error}</p>
{/if}
<form method="POST" use:enhance>
	<label>
		<span>Name</span>
		<input type="text" name="name" placeholder="John Doe" />
	</label>
	<label>
		<span>Age</span>
		<input type="number" name="age" placeholder="32" />
	</label>
	<button type="submit">Add</button>
</form>

{#each data.users as user}
	<div>
		{user.id}
		{user.name}
		{user.age}
	</div>
{/each}
