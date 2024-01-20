<script>
	let todoInput = '';

	let todos = [
		{ text: 'Buy more cookies', id: '673fd02c-197f-4f9c-9ff8-cdc59b62996a', done: false }
	];

	$: pendingTodos = todos.filter((todo) => !todo.done);
	$: doneTodos = todos.filter((todo) => todo.done);

	function addTodo() {
		todos = [...todos, { text: todoInput, id: crypto.randomUUID(), done: false }];
		todoInput = '';
	}

	function setDone(id, status) {
		todos.find((todo) => todo.id === id).done = status;
		todos = todos;
	}

	function removeTodo(id) {
		todos = todos.filter((todo) => todo.id !== id);
	}
</script>

<div class="flex">
	<input bind:value={todoInput} type="text" placeholder="To Do" />
	<button on:click={addTodo}>Add</button>
</div>
<ul>
	{#each pendingTodos as todo}
		<li>
			<span>
				{todo.text}
			</span>
			<button on:click={() => setDone(todo.id, true)}>Done</button>
			<button on:click={() => removeTodo(todo.id)}>Remove</button>
		</li>
	{/each}
</ul>
<ul>
	{#each doneTodos as todo}
		<li>
			<s>
				{todo.text}
			</s>
			<button on:click={() => setDone(todo.id, false)}>Not Done</button>
			<button on:click={() => removeTodo(todo.id)}>Remove</button>
		</li>
	{/each}
</ul>
