# Übungen SvelteKit 02

## Du benutzt StackBlitz?

- Warte, bis die Seite vollständig geladen ist. Fertig.

## Du benutzt VSCode?

- Führe in dem `exercises-sveltekit-03`-Ordner `npm install` aus.
- Starte die Übung mit `npm run dev`.

## Form Actions
Du hast ein Svelte Projekt bekommen, welches mit einer Datenbank Nutzer verwaltet.

1. Verwende `getUsers()` aus `$lib/db` in `+page.server.js`, um alle Nutzer zu laden.
    - zeige die Nutzer in einer Liste an
2. Verwende `getUser(id)` aus `$lib/db` in `[id]/+page.server.js`, um einen Nutzer zu laden.
    - verwende `params.id` um die ID des Nutzers zu erhalten
3. Erweitere die `default` action in `+page.server.js`
    - lies mit `data.get(name)` die Daten aus dem Formular
    - stelle sicher, dass die Daten sinn ergeben (z.B. Name nicht leer, Alter > 0)
    - falls nicht sinnvoll, gib einen Fehler zurück und zeige ihn an
    - verwende `createUser(name, age)` aus `$lib/db`, um einen neuen Nutzer zu erstellen
4. Importiere die `enhance`-Directive von `$app/forms`
    - verwende sie mit `use:enhance` auf dem Formular
