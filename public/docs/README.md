# Dokumente (PDFs)

Lege deine PDFs **genau mit diesen Dateinamen** in diesen Ordner. Alles unter
`public/` wird unter der Website-Root ausgeliefert, d. h. `public/docs/x.pdf`
ist im Browser unter `/docs/x.pdf` erreichbar.

| Datei                      | Wird verwendet von                                   | Geöffnet wann …                     |
| -------------------------- | ---------------------------------------------------- | ----------------------------------- |
| `dokumentation-light.pdf`  | CodeScanner-Seite → „Komplette Dokumentation ansehen" | Light Mode aktiv                    |
| `dokumentation-dark.pdf`   | CodeScanner-Seite → „Komplette Dokumentation ansehen" | Dark Mode aktiv                     |
| `lebenslauf.pdf`           | Footer + Kontakt-Karte → „Lebenslauf"                 | immer                               |

Der Doku-Button wählt automatisch die Light- oder Dark-Fassung passend zum
aktuell aktiven Theme (siehe `src/pages/CodeScanner/sections/DownloadArbeit.tsx`).
Den Lebenslauf-Pfad findest du in `src/global/Footer/Footer.tsx` und
`src/data/Global/contact.tsx`.

> Hinweis: Diese README wird nicht mit ausgeliefert (sie ist nur eine Notiz).
> Wenn du nur **eine** Doku-Fassung hast, lege sie einfach unter beiden Namen ab.
