# Code Route

Site de révision du code de la route en trois étapes : des **cours** par thème, un **quiz d’entraînement** qui explique chaque réponse, et des **examens blancs** de 40 questions lus à voix haute, avec historique des résultats. Aucune compilation, aucun compte : quatre fichiers statiques.

## Fichiers

- `index.html` : interface (accueil, examen blanc, entraînement, résultat, historique), CSS et logique.
- `scenes.js` : `SCENE.render(spec)` dessine chaque illustration en SVG : panneaux, vue du conducteur (`drv`), carrefour vu du dessus (`top`), voyants (`dash`), image de thème (`card`).
- `cours.js` : `COURS`, les 15 cours. Chaque cours a des sections faites de blocs (texte, liste, tableau, panneaux `signs`, voyants `voy`, illustration `scene`, encadré `tip`), une liste « À retenir », et les questions qui lui sont liées : familles générées (`fam`), identifiants précis (`ids`) et questions rédigées du thème filtrées par `hq`.
- `banque.js` : `BANQUE.Q`, questions au format `{ id, th, sc, q, o, ok, ex }`. Préfixes d'identifiant : `h` rédigées, `s`/`s2` panneaux, `p` priorités, `v` vitesses, `d` distances, `x` dépassements, `y`/`y2` voyants, `f` feux.

## Lancer le site

Ouvrir `index.html` dans un navigateur, ou `python3 -m http.server 8080` dans ce dossier.
Seule ressource externe : les polices Google Fonts (Bricolage Grotesque, Atkinson Hyperlegible).

## Cours et quiz d’entraînement

- Page `#cours`, puis `#cours/<id>` pour un cours. Bouton « Écouter le cours » : lecture vocale paragraphe par paragraphe. Les cours ouverts sont notés dans `localStorage` (`cr1-lus`).
- Quiz d’entraînement (`#entrainement`) : par cours, sur tout, ou sur ses erreurs. Après chaque réponse : juste ou faux, réponses cochées à tort, réponses oubliées, bonne réponse, explication (`ex`) et lien vers le cours lié (`LES`). L’explication est lue à voix haute si la voix est activée.

## Règles de l'examen blanc

- 40 questions réparties par thème (`QUOTA` dans `index.html`), 20 s par question après la lecture vocale (`speechSynthesis`, fr-FR).
- Une question n'est juste que si toutes les bonnes réponses sont cochées et aucune mauvaise. Réussi à partir de 35/40.
- Pas de correction pendant l’examen : elle s’affiche à la fin.
- Données dans `localStorage` (préfixe `cr1-`) : `hist` (examens), `stats` (vues et erreurs par question), `pref` (voix), `lus` (cours ouverts). Les identifiants de questions servent à l'historique : ne pas les renommer.

## Contenu

Questions et illustrations originales, aucune question officielle reprise. 494 questions : 118 rédigées, 376 générées à partir des règles. Ce site complète une auto-école ; la référence reste le Code de la route.

## Publication

- En ligne : https://val-code-route.pages.dev (Cloudflare Pages, projet `val-code-route`, branche `main`, dossier publié : racine, sans commande de build). Chaque push sur `main` redéploie le site.
- Code source : https://github.com/Valar207/code-route
