---
theme: default
highlighter: shikiji
lineNumbers: true
transition: slide-left
mdc: true
background: /svelte-machine.png
---

# Svelte

## Web Dev Frontend

## Tobias Meßner, Phillip Rügamer, Maike Kramer

---
layout: section
---
# Kurzes Recap

---

# Warum verwenden wir React?
- React-Code ist deklarativ
  - Wir beschreiben die Struktur der UI
  - React kümmert sich um die Änderungen
- Wir müssen uns nicht um den DOM kümmern
  - `document.createElement`, `document.appendChild`, `document.removeChild` etc.

---
layout: statement
---
## Problem
<v-click>

# DOM ist langsam

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
## Problem gelöst?

<h1 v-click>Nein</h1>

---
layout: statement
---
# Der Virtual DOM ist zwar schneller als der DOM, aber...

<h2 v-click>
  ...der Virtual DOM ist immer noch langsam
</h2>

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
src: ./pages/1-syntax.md
---

---
layout: statement
transition: slide-up
---

## Übungen
# wdw.zsr.app
## 1) - 4c)

---
layout: iframe
name: WDW embed
url: https://wdw.zsr.app
transition: slide-down
---

---
layout: statement
---

## Übungen
# wdw.zsr.app
## 1) - 4c)

---
src: ./pages/2-components.md
---

---
layout: statement
---

## Übungen
# wdw.zsr.app
## 5) - 6)

---

# Svelte kann noch so viel mehr
- Svelte Stores
- `<svelte:head>`
- Transitions
- Animationen
- CSS Variables
- `{@const }`
- `{#await }`
- ...

---
layout: statement
---
## Schaut euch das interaktive Tutorial an
# learn.svelte.dev

---
layout: statement
---
## Nächste Woche
# SvelteKit

---
layout: statement
---
# Vielen Dank für eure Aufmerksamkeit