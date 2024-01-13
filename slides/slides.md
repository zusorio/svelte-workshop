---
class: text-center
highlighter: shikiji
lineNumbers: true
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
drawings:
  persist: false
transition: slide-left
title: Welcome to Slidev
mdc: true
---

# Svelte

## Web Dev Frontend

## Tobias Meßner, Phillip Rügamer, Maike Kramer

---

# Was ist Svelte

<v-clicks>

- Front-end Framework
- Vergleichbar mit React, Vue, Angular
- Von Rich Harris entwickelt
- Erste Version 2016
- Großer Unterschied: Svelte verwendet einen Compiler
</v-clicks>

---
layout: statement
---
# Problem
<v-click>

## DOM ist langsam

</v-click>
---

# Wie funktioniert React

<v-clicks depth="2">

- React verwendet einen "Virtual DOM" 
- Virtual DOM bildet den echten DOM ab
- Wie funktioniert das?
  - Ändert sich der State eines Components, wird ein neuer Virtual DOM erstellt
  - Der neue Virtual DOM wird mit dem alten Virtual DOM verglichen
  - Nur die Elemente, die sich geändert haben, werden im echten DOM geändert
- Dadurch wird der echte DOM nur minimal verändert
</v-clicks>

---
layout: statement
---
# Problem gelöst?

<h2 v-click>Nein</h2>

---
layout: statement
---
# Der Virtual DOM ist zwar schneller als der DOM, aber...

<h2 v-click>
  ...der Virtual DOM ist immer noch langsam
</h2>

---

# Was macht Svelte anders?

<v-clicks depth="2">

- Svelte verwendet **keinen** Virtual DOM
- Svelte verwendet einen Compiler
  - Der Compiler sucht nach State-Änderungen im Code
  - Für jede State-Änderung wird Code generiert, der den DOM direkt ändert
  - Dadurch wird der DOM nur minimal verändert, und ohne den zusätzlichen Overhead des Virtual DOMs
</v-clicks>


---
layout: code-with-comments
clicks: 4
---

# Wie sieht ein Svelte-Component aus?

::code::
```svelte {all|1-7|9-11|13-17|all} {lines:true}
<script>
  let count = 0;

  function handleClick() {
    count += 1;
  }
</script>

<button on:click={handleClick}>
  Clicked {count} {count === 1 ? 'time' : 'times'}
</button>

<style>
  button {
    font-family: 'Comic Sans MS', cursive;
  }
</style>
```
::comments::

<div>

- Svelte-Components bestehen aus drei Teilen
<v-clicks at="0">

  - `<script>` - State und Logik
  - HTML - Struktur
  - `<style>` - Styling
</v-clicks>
</div>


---
layout: iframe

url: https://svelte.dev/repl/7431d8f0a9a0432ab6270743f3d122e8?version=4.2.8

---

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
---

# Syntax - Logic Blocks - Loops

::code::
```svelte {all|9-12} {lines:true}
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
- `(todo.id)` um einen Key zu definieren (Wie `key` in React)
- Optional: `index` um den Index zu definieren
</v-clicks>