# Übungen SvelteKit 1

## Du benutzt StackBlitz?

- Warte, bis die Seite vollständig geladen ist. Fertig.

## Du benutzt VSCode?

- Führe in dem `exercises-sveltekit-01`-Ordner `npm install` aus.
- Starte die Übung mit `npm run dev`.

# Aufgabe 1

## Routing und Layouts
Du hast ein Svelte Projekt bekommen, in dem dir im `lib` Ordner Components zur Verfügung stehen.

1. Erstelle im Root verzeichnis von Routes eine "Index" Datei (`+page.svelte`)
   - gebe dort eine Überschrift "Web Dev Workshop" aus
2. Erstelle im gleichen Verzeichnis eine Layout Datei
   - importiere darin `../app.css`
   - importiere außerdem die Componenten `Header` sowie `Content` aus dem lib Ordner
   - füge die Header und Content Componente ein
   - Tipp: Denk daran einen default `slot` in der Content Componente zu erstellen
3. Erstelle eine neue Route, die über den Pfad `/animals` aufgerufen wird
   - Gebe dort eine Überschrift "Tiere" aus.
4. Erstelle in dem `/animals` Ordner eine Route mit einem [id] Parameter.
   - Gebe dort die Parameter Id aus
5. Erstelle zwei Links in `/animals/+page.svelte` Datei die `Tier 1` und `Tier 2` aufrufen


# Aufgabe 2

## Page loading

Du willst deine `animals` Seite mit Daten mit Hilfe von Page Loading füllen. Dafür hast du eine `animals.js` Datei bekommen, die du in deinem `lib` Ordner findest.

1. Erstelle eine `animals/+page.server.js` Datei
   - importiere die Konstante `animals` von `animals.js`
   - Erstelle eine load() Funktion. 
   - Benutze die map() Methode um ein Objekt zurückzugeben, das nur `id` und `name` aller Tiere von `animals.js` enthält. 
2. Bearbeite deine `animals/+page.svelte` Datei
   - in deinem `script` Tag exportiere die Daten mit `export let data`
   - erstelle eine `ul` Liste und gebe die Namen aller Tiere aus `data` aus
   - Tipp: Benutze dafür `#each` 
3. Erstelle einen Link in der Liste, der auf die `animals/{id}` Seite verlinkt 
   - Tipp: Benutze dafür `href`
4. Erstelle eine `animals/[id]/+page.server.js` Datei
   - importiere die Konstante `animals` von `animals.js`
   - Erstelle eine load( { params } ) Funktion mit Parameter
   - Benutze die animals.find() Methode um ein Objekt zurückzugeben, das die gleiche `id` wie `params.id` hat.
   - Tipp: `params.id` ist ein String, du musst ihn in eine Zahl umwandeln
5. Bearbeite deine `animals/[id]/+page.svelte` Datei
   - in deinem `script` Tag exportiere die Daten mit `export let data`
   - gebe den Namen des Tieres in einer Überschrift aus
   - gebe den content des Tieres in einem `p` Tag aus
   - Optional: gebe ein Bild des Tieres aus (alt nicht vergessen)