# Was ist SvelteKit?
- Tool um mit Svelte Fullstack-Apps zu entwickeln
  - Dateibasiertes Routing
  - Serverseitiges Rendering
  - API Endpoints
- Nachfolger von Sapper
- Verwendet Vite als Build-Tool
- Ähnlich wie Next.js oder Nuxt
<!--Präsentation: Tobi-->

---
layout: stacked-code-with-comments
---
# Routing

- Verwendet dateibasiertes Routing
- Jede `+page.svelte`  die in dem `src/routes/<ordnername>` erstellt wird ist ist eine Route auf die navigiert werden kann
- `src/routes/webdev/+page.svelte` → `/webdev`
- `src/routes/webdev/[uebung]/+page.svelte` → Route mit einem Parameter
- Für Links wird `<a>` verwendet
 
<!--
Präsentation: Maike
- Parameter kann für dynamisches Laden verwendet werden
- in React wird ``<Link>`` verwendet
-->

---
layout: stacked-code-with-comments
---

# Layouts
::code1::
```svelte
<!-- +layout.svelte -->
<nav>
  <a href="/">Home</a>
  <a href="/webdev">Webdev</a>
</nav>

<slot></slot>
```
::code2::
```svelte
<!-- +page.svelte -->
<h1>Home</h1>
```
::comments::
- Enthält HTML-Struktur die auf jeder Seite angezeigt wird (Header, Footer, etc.)
- In `+layout.svelte` definiert
  - `<slot></slot>` wird durch den Inhalt der Seite ersetzt
- Nesting von Layouts möglich

<!--Präsentation: Maike -->
---
layout: stacked-code-with-comments
---

# Modules

::code1::
```svelte
<!-- +page.svelte -->
<script>
  import { browser, building, dev, version } from '$app/environment';
  import { goto, invalidate, onNavigate } from '$app/navigation';
  import { navigating, page, updated } from '$app/stores';
  import { PUBLIC_TEST_VAR } from '$env/static/public';
  import { env } from '$env/dynamic/public';
  // TODO

</script>
```
<!--Präsentation: Phillip -->

---
layout: statement
---

# Übungen

---
layout: stacked-code-with-comments
---

# Page Loading

::code1::
```js
// +page.server.js
export function load() {
  return {
    users: [
      { name: 'Phillip' },
      { name: 'Tobi' },
      { name: 'Maike' }
    ]
  };
}
```

::code2::
```svelte
<!-- +page.svelte -->
<script>
  // automatisch typisiert
  export let data;
</script>
    
{#each data.users as user}
  <p>{user.name}</p>
{/each}
```

::comments::
- `+page.server.js`/`+page.js` enthält `load`-Funktion
  - +`page.server.js` nur auf Server (z.B. für Datenbankzugriff)
  - +`page.js` auf Server und Client
- Wird vor dem Rendern der Seite ausgeführt
- In `+page.svelte` zugriff mit `export let data`

<!--Präsentation: Phillip -->
---
layout: stacked-code-with-comments
---

# Form Actions - Intro

::code1::
```js
// +page.server.js
export const actions = {
	default: async ({ request }) => {
    const data = await request.formData();
    const pet = data.get('pet');
    return { success: true };
	}
};
```

::code2::
```svelte
<!-- +page.svelte -->
<script>
  export let form;
</script>
{#if form?.success}
  <p>Saved!</p>
{/if}

<form method="POST">
  <input name="pet" type="text">
	<button>Save</button>
</form>
```

::comments::
- In SvelteKit können "normale" HTML-Formulare verwendet werden
  - Funktioniert auch ohne JavaScript
- `+page.server.js` enthält `actions`
  - Bei normalem Formular wird `default` verwendet
  - Return-Wert wird in `+page.svelte` als `form` übergeben


<!--Präsentation: Tobi -->

---
layout: stacked-code-with-comments
---

# Form Actions - Advanced

::code1::
```js
// +page.server.js
import { redirect } from '@sveltejs/kit';
export const actions = {
	login: async ({ cookies, request, url }) => {
    const data = await request.formData();
    const username = data.get('username');

    cookies.set('sessionid', '...', { path: '/' });
    redirect(303, '/admin');
	}
};
```

::code2::
```svelte
<!-- +page.svelte -->
<script>
  import { enhance } from '$app/forms';
  export let form;
</script>

<form method="POST" action="?/login" use:enhance>
  <input name="username" type="text">
	<button>Log in</button>
</form>
```

::comments::
- Es können mehrere Actions definiert werden
  - Verwendung mit `action="?/<action>"`
  -  Zugriff in `+page.server.js` auf `cookies` und `url`
- Progressive Enhancement mit `enhance`-Directive
  - `use:enhance` auf Formular
  - Seite muss nicht neu geladen werden
  - Formular wird mit JavaScript abgeschickt

<!--Präsentation: Tobi -->

---
layout: stacked-code-with-comments
---

# API Routes

::code1::
```js
// +server.js
import { json } from '@sveltejs/kit';
export async function GET({ request }) {
  const { name } = await request.json();
  return json({ message: `Hello ${name}!` });
}
```

::code2::
```svelte
<!-- +page.svelte -->
<script>
  async function sayHello() {
    const response = await fetch('/', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'WDW' })
    });
    const { message } = await response.json();
    alert(message);
  }
</script>

<button on:click={sayHello}>Say Hello</button>
```

::comments::
- In `+server.js` können API-Endpoints definiert werden
- Durch den `Content-Type` Header wird die API-Route und nicht die Seite aufgerufen
- Allerdings sind Form Actions meistens besser geeignet
<!--Präsentation: Tobi -->


