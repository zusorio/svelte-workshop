---
layout: section
transition: slide-up
---

# Components

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


