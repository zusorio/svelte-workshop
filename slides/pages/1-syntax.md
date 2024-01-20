---
layout: section
transition: slide-up
---

# Syntax

---
layout: code-with-comments
clicks: 4
---

# Syntax - State

::code::
```svelte {1-8,12-22|2,4,6|3,8|3,8-9|3,11|all} {lines:true}
<script>
  let count = 0;
  let items = [];

  function handleClick() {
    count += 1;

    items.push("word");
    items = items;

    items = [...items, "word"];
  }
</script>

<button on:click={handleClick}>
    {count} Clicks
</button>

<div>
  {items}
</div>
```

::comments::

<div>
  <v-click at="0">
    
  - Variablen werden mit `let` deklariert
  - Variablen können mit `=` zugewiesen werden

  </v-click>

  <v-click at="1">

  - Problem: Wird kein Assignment Operator verwendet, erkennt der Compiler die Änderung nicht
  </v-click>

  <v-click at="2">

  - Lösung: `items = items`
  </v-click>

  <v-click at="3">

  - Alternative (nicht immer möglich):<br> `items = [...items, "word"]`
  </v-click>
</div>


---
layout: code-with-comments
clicks: 4
---

# Syntax - Reactive Statements

::code::
```svelte {all|4,16|all|6-8|all} {lines:true}
<script>
  let count = 0;

  $: buttonText = count === 1 ? 'time' : 'times';

  $: {
    console.log("new count", count);
  }

  function handleClick() {
    count += 1;
  }
</script>

<button on:click={handleClick}>
    Clicked {count} {buttonText}
</button>
```

::comments::

<div>

- Mit `$` wird ein **Reactive Statement** definiert
- Reactive Statements werden ausgeführt, wenn sich eine abhängige Variable ändert

<v-click at="0">

- Verwendung um Variablen zu berechenen
  - In React nicht notwendig, da Variablen jedes mal neu berechnet werden
</v-click>


<v-click at="2">

- Verwendung um Side-Effects auszuführen
  - Ähnlich wie `useEffect` in React
</v-click>

</div>

---
layout: code-with-comments
clicks: 2
---

# Syntax - Events

::code::
```svelte {all|9,13|all}
<script>
  let count = 0;

  function handleClick() {
    count += 1;
  }
</script>

<button on:click={handleClick}>
    Clicked {count}
</button>

<button on:click|once={() => alert('clicked')}>
	Click me
</button>

```

::comments::

<div>

- Events werden mit `on:` definiert
<v-clicks at="0">

- Event Modifiers:
    - `preventDefault` verhindert das Default Verhalten
    - `once` Event wird nur einmal ausgeführt
</v-clicks>
</div>

---
layout: code-with-comments
---

# Syntax - Binding

::code::
```svelte
<script>
  let text = "";

</script>

Hello {text}
<input bind:value={text} />

```

::comments::

- `bind:` ermöglicht State von einem Child-Component zu einem Parent-Component zu übertragen

---
layout: code-with-comments
clicks: 2
---

# Syntax - Logic Blocks - If

::code::
```svelte {all|9,13,18,20|all} {lines:true}
<script>
  let count = 0;

  function handleClick() {
    count += 1;
  }
</script>

{#if count < 5}
  <button on:click={handleClick}>
    {count} Clicks
  </button>
{:else if count < 10}
  <strong>That's getting a bit high</strong>
  <button on:click={handleClick}>
    {count} Clicks
  </button>
{:else}
    <strong>That's enough</strong>
{/if}
```

::comments::

<div>
  <v-click at="0">
    
  - `if`-Statements werden mit `{#if}` und `{:else}` definiert
  </v-click>

</div>

---
layout: code-with-comments
clicks: 5
transition: slide-down
---

# Syntax - Logic Blocks - Loops

::code::
```svelte {all|9-12|9-12|9-12|9-12|all} {lines:true}
<script>
  let todos = [
    { id: 'milk', text: 'Buy some milk' },
    { id: 'learn', text: 'Learn Svelte' },
    { id: 'teach', text: 'Teach Svelte' }
  ]
</script>

{#each todos as todo, index (todo.id)}
  <div>{index + 1}. {todo.text}</div>
{/each}
```

::comments::

<v-clicks at="0">
  
- Loops werden mit `{#each}` definiert
- `as`-Keyword um Variablen zu definieren
- `(todo.id)` um einen Key zu definieren
  - Wie `key` in React
- Optional: `index` um den Index zu definieren
</v-clicks>

---
layout: section
---

# Syntax
