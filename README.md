# Code Route

Site de révision du code de la route : examens blancs de 40 questions lus à voix haute, entraînement par thème avec correction, historique des résultats. Aucune compilation, aucun compte : trois fichiers statiques.

## Fichiers

- `index.html` : interface (accueil, examen blanc, entraînement, résultat, historique), CSS et logique.
- `scenes.js` : `SCENE.render(spec)` dessine chaque illustration en SVG : panneaux, vue du conducteur (`drv`), carrefour vu du dessus (`top`), voyants (`dash`), image de thème (`card`).
- `banque.js` : `BANQUE.Q`, questions au format `{ id, th, sc, q, o, ok, ex }`. Préfixes d'identifiant : `h` rédigées, `s`/`s2` panneaux, `p` priorités, `v` vitesses, `d` distances, `x` dépassements, `y`/`y2` voyants, `f` feux.

## Lancer le site

Ouvrir `index.html` dans un navigateur, ou `python3 -m http.server 8080` dans ce dossier.
Seule ressource externe : les polices Google Fonts (Bricolage Grotesque, Atkinson Hyperlegible).

## Règles de l'examen blanc

- 40 questions réparties par thème (`QUOTA` dans `index.html`), 20 s par question après la lecture vocale (`speechSynthesis`, fr-FR).
- Une question n'est juste que si toutes les bonnes réponses sont cochées et aucune mauvaise. Réussi à partir de 35/40.
- Données dans `localStorage` (préfixe `cr1-`) : `hist` (examens), `stats` (vues et erreurs par question), `pref` (voix). Les identifiants de questions servent à l'historique : ne pas les renommer.

## Contenu

Questions et illustrations originales, aucune question officielle reprise. 494 questions : 118 rédigées, 376 générées à partir des règles. Ce site complète une auto-école ; la référence reste le Code de la route.

## Publication

- En ligne : https://val-code-route.pages.dev (Cloudflare Pages, projet `val-code-route`, branche `main`, dossier publié : racine, sans commande de build). Chaque push sur `main` redéploie le site.
- Code source : https://github.com/Valar207/code-route
