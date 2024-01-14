---
theme: default
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



# Components

- Definiert in `.svelte`-Dateien
- Ein Component pro Datei (anders als in React)
- Können in anderen Components verwendet werden
- Können Props erhalten
- Können Events emitten
- Gekapselte Styles

---
src: ./pages/syntax-1.md
---

---
layout: code-with-comments
---

# Components - Props

::code::

<div>
```svelte {1-3,6-9|1,4-9}
<script>
  export let name = "World";

  let className = "";
  export { className as class };
</script>

<div class={className}>Hello {name}!</div>
```

```svelte {1-5|1-4,6}
<script>
  import Hello from './Hello.svelte';
</script>

<Hello name="Webdev Workshop" />
<Hello name="Big Webdev Workshop" class="text-xl" />
```
</div>

::comments::

- Props werden mit `export` definiert
- Reservierte Props können nicht direkt als Props verwendet werden
  - Umgehen mit <br> `export { reservedProp as prop }`


