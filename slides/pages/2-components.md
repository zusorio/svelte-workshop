---
layout: section
transition: slide-up
---

# Components
<!--Präsentation: Maike-->
---
layout: stacked-code-with-comments
clicks: 3
---

# Components - Props

::code1::

```svelte {1-3,7-9|1-3,7-9|1-3,7-9|all} {at:0}
<!--Hello.svelte-->
<script>
  export let name = "World";

  let className = "";
  export { className as class };
</script>

<div class={className}>Hello {name}!</div>
```
::code2::
```svelte
<!--App.svelte-->
<script>
  import Hello from './Hello.svelte';
</script>

<Hello name="Webdev Workshop" />
<Hello name="Big Webdev Workshop" class="text-xl" />
```

::comments::

<v-clicks at="0">

- Props werden mit `export` definiert
- Mit `=` können Props default-Werte zugewiesen werden
- Reservierte Props können nicht direkt als Props verwendet werden
  - Umgehen mit <br> `export { prop as reservedProp }`
</v-clicks>
<!--Präsentation: Maike-->
---
layout: stacked-code-with-comments
clicks: 2
---

# Components - Events

::code1::

```svelte
<!--Button.svelte-->
<button on:click>Click me!</button>
```

::code2::

```svelte {all|8|all}
<!--App.svelte-->
<script>
  import Button from './Button.svelte';
  function clicked() {
    console.log('clicked!');
  }
</script>

<Button on:click={clicked}>Click me!</Button>
```

::comments::

<v-clicks at="0">

- Events ohne Handler werden an den Parent-Component weitergeleitet
</v-clicks>
<!--Präsentation: Phillip
Hier haben ein Beispiel von components wenn wir ein Child component haben. Event handlern in children die leer sind werden an den Parent weitergegeben-->
---
layout: stacked-code-with-comments
clicks: 4
---

# Components - Slots

::code1::

```svelte {all|4,7,9|7|4,9|all}
<!--Card.svelte-->
<article>
  <div class="font-bold text-xl">
    <slot name="header"></slot>
  </div>
  <p class="text-lg">
    <slot></slot>
  </p>
  <slot name="footer"></slot>
</article>
```

::code2::

```svelte
<!--App.svelte-->
<script>
  import Card from './Card.svelte';
</script>

<Card>
  <h1 slot="header">Hello World!</h1>
  <p>Some content</p>
  <p slot="footer">Some footer</p>
</Card>
```

::comments::

<v-clicks at="0">

- Anstatt `children` als props wie in React, werden in Svelte `slots` verwendet
- Es hat einen `default`-Slot, welcher verwendet wird, wenn kein Slot angegeben wird
- Slots können benannt werden und werden dann mit `slot="name"` referenziert
</v-clicks>
<!--Präsentation: Maike-->
---
layout: stacked-code-with-comments
transition: slide-down
---

# Components - Styles

::code1::

```svelte
<!--Hello.svelte-->
<p>Hello World!</p>

<style>
  p { font-family: 'Comic Sans'; }
</style>
```

::code2::

```svelte
<!--App.svelte-->
<script>
  import Hello from './Hello.svelte';
</script>

<Hello />
<p>Hello from the outside!</p>

<style>
  p { font-family: sans-serif; }
  :global(p) {
    font-size: 2rem;
  }
</style>
```

::comments::

- Jeder Component hat einen optionalen `<style>`-Block
- Styles werden nur auf den Component angewendet
- Mit `:global()` können Styles global angewendet werden

<!--Präsentation: Tobi-->
---
layout: section
---

# Components
<!--Präsentation: Maike-->