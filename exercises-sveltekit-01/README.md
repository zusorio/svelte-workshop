# Übungen SvelteKit 1

## Du benutzt StackBlitz?

- Warte, bis die Seite vollständig geladen ist. Fertig.

## Du benutzt VSCode?

- Führe in dem `exercises-sveltekit-01`-Ordner `npm install` aus.
- Starte die Übung mit `npm run dev`.

## Routing und Layouts
Du hast ein Svelte Projekt bekommen, in dem dir im `lib` Ordner Components zur Verfügung stehen. 

1. Erstelle im Root verzeichnis von Routes eine "Index" Datei (`+page.svelte`)
    - gebe dort eine Überschrift "Web Dev Workshop aus"
2. Erstelle im gleichen Verzeichnis eine Layout-Datei 
    - importiere darin die Datei `../app.css`
    - lade in dieser Datei die Component "Header" aus dem lib Ordner
    - und füge die Header Component ein
    - Denk daran einen Slot für den Content auszugeben
3. Erstelle eine neue Route, die über den Pfad `/animals` aufgerufen wird
   - Gebe dort eine Überschrift "Tiere" aus. 
   - Verlinke die neu erstellte Seite auf der Root Route
4. Erstelle in dem `/animals` Ordner eine Route mit einem id Parameter. 
   - Gibt den Parameter auf der Seite aus
5. Erweitere, die erstellte `/animals/+page.svelte` Datei um zwei Links der die Parameter "1" und "2" aufruft
