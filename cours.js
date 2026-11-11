/* Code Route · cours.
   Chaque cours : { id, titre, th, resume, fam (familles de questions générées liées), hq (filtre des questions rédigées du thème), s: [sections] }
   Une section : { h, b: [blocs] }. Bloc : texte HTML | { ul: [...] } | { tbl: [[en-têtes], [ligne]…] } | { signs: [codes] }
   | { voy: [clés] } | { scene: spec, cap } | { tip, t } (encadré). Contenu original, rédigé d'après le Code de la route. */
(function () {
  'use strict';
  const C = [
    {
      id: 'panneaux', titre: 'Panneaux, feux et marquages', th: 'L', fam: ['s', 's2'], hq: /panneau|feu (passe|orange|est)|sens interdit|zone|agent|réservée|cette rue/i,
      resume: 'Reconnaître un panneau à sa forme et à sa couleur, savoir qui l’emporte entre un agent, un feu et un panneau, et lire les lignes au sol.',
      s: [
        { h: 'La forme et la couleur disent tout', b: [
          'Avant même de lire le symbole, la forme du panneau t’indique sa famille. C’est la première chose à apprendre.',
          { tbl: [['Forme', 'Famille', 'Ce que ça veut dire'],
            ['Triangle à bord rouge', 'Danger', 'Un danger arrive : environ 150 m plus loin hors agglomération, 50 m en agglomération.'],
            ['Cercle à bord rouge', 'Interdiction', 'Une chose est interdite à partir du panneau.'],
            ['Cercle bleu', 'Obligation', 'Une chose est obligatoire.'],
            ['Carré ou rectangle bleu', 'Indication', 'Une information utile : parking, sens unique, autoroute…'],
            ['Panneau barré de traits', 'Fin', 'Une interdiction ou une obligation prend fin.'],
            ['Losange jaune, triangle pointe en bas, octogone', 'Priorité', 'Qui passe en premier à la prochaine intersection.']] },
          { tip: 'Un panonceau rectangulaire sous un panneau précise sa portée : distance, longueur de la zone, véhicules concernés, horaires.', t: 'Bon à savoir' },
        ] },
        { h: 'Panneaux de danger', b: [
          'Ils ne t’interdisent rien : ils te demandent de ralentir et d’être prêt à réagir.',
          { signs: ['A1a', 'A1c', 'A2b', 'A3', 'A4', 'A8', 'A13a', 'A13b', 'A14', 'A17', 'A18', 'A21'] },
        ] },
        { h: 'Panneaux de priorité', b: [
          'Ils règlent le passage aux intersections. Le cours sur les priorités les détaille.',
          { signs: ['AB1', 'AB2', 'AB3a', 'AB4', 'AB6', 'AB7', 'AB25'] },
        ] },
        { h: 'Interdictions, obligations et fins', b: [
          { signs: ['B0', 'B1', 'B2a', 'B2b', 'B2c', 'B3', 'B6a1', 'B6d', 'B12', 'B14:50', 'B21_1', 'B21a1', 'B22a', 'B25:30', 'B31', 'B33:70'] },
          { ul: [
            '<b>Stationnement interdit</b> (une barre rouge) : tu peux t’arrêter quelques instants, en restant au volant, pour déposer quelqu’un.',
            '<b>Arrêt et stationnement interdits</b> (croix rouge) : même un arrêt très court est interdit.',
            '<b>Interdiction de dépasser</b> : elle vise les véhicules à moteur. Tu peux toujours dépasser un vélo ou une moto.',
            '<b>Hauteur limitée à 3,5 m</b> : c’est une hauteur, pas un poids. Ne confonds pas avec 3,5 t.',
          ] },
        ] },
        { h: 'Panneaux d’indication', b: [
          { signs: ['C1a', 'C12', 'C13a', 'C20a', 'C107', 'C207', 'EB10', 'EB20', 'B30', 'B52'] },
          { ul: [
            '<b>Entrée d’agglomération</b> (nom de la ville sur fond blanc bordé de rouge) : 50 km/h, sauf autre panneau. Le klaxon n’est permis qu’en cas de danger immédiat.',
            '<b>Zone 30</b> : 30 km/h dans toute la zone, jusqu’au panneau de sortie.',
            '<b>Zone de rencontre</b> : 20 km/h, les piétons peuvent marcher sur la chaussée et sont prioritaires.',
            '<b>Route pour automobiles et autoroute</b> : interdites aux piétons, aux vélos et aux véhicules lents.',
          ] },
        ] },
        { h: 'Les feux tricolores', b: [
          { ul: [
            '<b>Rouge</b> : arrêt obligatoire, même si personne ne vient.',
            '<b>Orange fixe</b> : arrêt, sauf si tu ne peux plus t’arrêter sans danger.',
            '<b>Orange clignotant</b> : passe avec prudence. La priorité se règle avec les panneaux, ou la priorité à droite s’il n’y en a pas.',
            '<b>Vert</b> : tu peux passer, si le carrefour est dégagé. Ne t’engage pas si tu risques d’y rester bloqué.',
          ] },
          { scene: { drv: { env: 'ville', light: 'O', stopline: 1, speed: 40 } }, cap: 'Feu orange fixe : on s’arrête à la ligne si on le peut sans danger.' },
        ] },
        { h: 'Qui l’emporte ?', b: [
          'Quand deux indications se contredisent, on suit cet ordre :',
          { ul: ['1. Les gestes d’un agent', '2. Les feux', '3. Les panneaux', '4. Les règles générales, comme la priorité à droite'] },
          { ul: [
            '<b>Bras levé à la verticale</b> : arrêt pour tous, sauf ceux déjà engagés dans le carrefour.',
            '<b>Bras tendu à l’horizontale</b> : arrêt pour ceux qui arrivent de face et de dos. Ceux qui arrivent sur le côté peuvent passer.',
          ] },
        ] },
        { h: 'Les lignes au sol', b: [
          { ul: [
            '<b>Ligne continue</b> : interdit de la franchir et même de la chevaucher, sauf pour dépasser un cycliste quand la visibilité est suffisante.',
            '<b>Ligne discontinue</b> : tu peux la franchir pour dépasser ou tourner, si c’est sans danger.',
            '<b>Ligne mixte</b> : tu suis le trait qui est de ton côté.',
            '<b>Ligne jaune discontinue</b> le long du trottoir : stationnement interdit.',
            '<b>Ligne jaune continue</b> le long du trottoir : arrêt et stationnement interdits.',
          ] },
          { scene: { drv: { env: 'campagne', line: 'mixte-cont', speed: 70 } }, cap: 'Ligne mixte : le trait continu est de mon côté, je ne la franchis pas.' },
        ] },
      ],
      retenir: ['Triangle = danger, cercle rouge = interdit, cercle bleu = obligatoire, carré bleu = information.', 'Agent > feux > panneaux > règles générales.', 'Orange fixe = arrêt ; orange clignotant = prudence.', 'Ligne continue : on ne la franchit pas, sauf pour dépasser un cycliste.'],
    },
    {
      id: 'priorites', titre: 'Les priorités', th: 'L', fam: ['p'], hq: /priorit|giratoire|cédez|stop|piéton|bus.*quitter|carrefour/i,
      resume: 'Savoir qui passe en premier à une intersection, dans un giratoire, face aux piétons et aux véhicules prioritaires.',
      s: [
        { h: 'La règle par défaut : la priorité à droite', b: [
          'Sans panneau, sans feu et sans agent, tu laisses passer les véhicules qui arrivent de <b>ta droite</b>. Ceux qui arrivent de ta gauche te laissent passer.',
          { scene: { top: { sig: {}, cars: [{ at: 'E', col: '#D52B1E' }, { at: 'W', col: '#16A34A' }], go: 'droit' } }, cap: 'Aucun panneau : je laisse passer la voiture rouge, qui vient de ma droite. La verte me laisse passer.' },
          { tip: 'La priorité à droite ne s’applique pas quand tu sors d’un parking, d’une propriété privée, d’un chemin de terre ou d’une station-service : dans ces cas, tu cèdes le passage à tous.', t: 'Piège classique' },
        ] },
        { h: 'Cédez le passage et stop', b: [
          { signs: ['AB3a', 'AB4'] },
          { ul: [
            '<b>Cédez le passage</b> : tu laisses passer les véhicules de la route que tu abordes, à gauche comme à droite. Tu ne t’arrêtes que si c’est nécessaire.',
            '<b>Stop</b> : arrêt complet obligatoire à la ligne, roues immobiles, même si la route est vide. Puis tu laisses passer comme au cédez-le-passage.',
          ] },
          { scene: { top: { sig: { S: 'AB4', N: 'AB4' }, main: 'EW', cars: [{ at: 'W', col: '#16A34A' }], go: 'droit' } }, cap: 'Stop : je m’arrête, puis je laisse passer la voiture verte qui circule sur la route que je coupe.' },
        ] },
        { h: 'Quand c’est toi qui es prioritaire', b: [
          { signs: ['AB2', 'AB6', 'AB7'] },
          { ul: [
            '<b>Intersection prioritaire</b> (triangle avec une croix noire épaisse et fine) : tu es prioritaire à <b>cette</b> intersection seulement.',
            '<b>Route prioritaire</b> (losange jaune) : tu es prioritaire à toutes les intersections, jusqu’au panneau de fin (losange barré). Hors agglomération, le stationnement sur la chaussée y est interdit.',
            'Être prioritaire ne dispense jamais de la prudence : ralentis si un autre conducteur ne semble pas te voir.',
          ] },
        ] },
        { h: 'Tourner à gauche', b: [
          'Quand tu tournes à gauche, tu coupes la route des véhicules qui arrivent <b>en face</b>. À niveau de priorité égal, tu les laisses passer s’ils vont tout droit ou tournent à droite.',
          { scene: { top: { sig: { S: 'V', N: 'V', W: 'R', E: 'R' }, cars: [{ at: 'N', col: '#EAB308' }], go: 'gauche' } }, cap: 'Feu vert, je tourne à gauche : je laisse d’abord passer la voiture jaune qui va tout droit.' },
        ] },
        { h: 'Les giratoires', b: [
          { signs: ['AB25'] },
          'Dans la grande majorité des giratoires, un panneau cédez-le-passage est placé à l’entrée : les véhicules <b>déjà sur l’anneau</b> sont prioritaires. Tu entres quand la voie est libre à ta gauche.',
          { ul: ['Clignotant à droite avant de sortir.', 'Les piétons engagés sur les passages à l’entrée ou à la sortie sont prioritaires.'] },
        ] },
        { h: 'Piétons, bus et véhicules prioritaires', b: [
          { ul: [
            '<b>Piétons</b> : prioritaires dès qu’ils sont engagés sur la chaussée ou qu’ils montrent clairement l’intention de traverser. Ne pas leur céder le passage coûte 6 points.',
            '<b>Personne aveugle</b> (canne blanche ou chien guide) : toujours prioritaire, où qu’elle traverse.',
            '<b>Bus en agglomération</b> qui signale qu’il quitte son arrêt : tu le laisses partir.',
            '<b>Véhicules d’urgence</b> (sirène deux tons et feux bleus) : facilite leur passage en te décalant, sans manœuvre dangereuse.',
          ] },
        ] },
      ],
      retenir: ['Sans indication : priorité à droite.', 'Cédez le passage : je laisse passer à gauche et à droite. Stop : en plus, arrêt complet obligatoire.', 'Je tourne à gauche : je laisse passer ceux d’en face.', 'Giratoire : l’anneau est en général prioritaire.', 'Sortie de parking ou de chemin : je cède à tous.'],
    },
    {
      id: 'vitesses', titre: 'Vitesses et distances', th: 'L', fam: ['v', 'd'], hq: /vitesse|km\/h|distance/i,
      resume: 'Les limites de vitesse selon la route, la météo et ton permis, et les calculs rapides des distances.',
      s: [
        { h: 'Les limitations générales', b: [
          'Ces limites s’appliquent quand aucun panneau n’en indique une autre.',
          { tbl: [['Route', 'Temps sec', 'Pluie', 'Permis probatoire'],
            ['Agglomération', '50', '50', '50'],
            ['Route à double sens sans séparateur', '80 (90 si panneau)', '80', '80'],
            ['Route à chaussées séparées par un terre-plein', '110', '100', '100'],
            ['Autoroute', '130', '110', '110']] },
          { ul: [
            'Visibilité inférieure à 50 m (brouillard, neige, pluie très forte) : <b>50 km/h partout</b>, autoroute comprise.',
            'En permis probatoire, la pluie n’abaisse pas davantage les limites.',
            'Zone 30 : 30 km/h. Zone de rencontre : 20 km/h. Aire piétonne : au pas.',
          ] },
          { tip: 'Sur autoroute, les balises blanches du bord sont espacées de 50 m. Si tu n’en vois pas deux, la visibilité est inférieure à 50 m.', t: 'Astuce' },
        ] },
        { h: 'Les distances, en calcul rapide', b: [
          'À l’examen, on utilise des approximations à partir du <b>chiffre des dizaines</b> de la vitesse. À 90 km/h, le chiffre des dizaines est 9.',
          { tbl: [['Ce qu’on cherche', 'Calcul', 'Exemple à 90 km/h'],
            ['Distance parcourue en 1 seconde (temps de réaction)', 'dizaines × 3', '9 × 3 = 27 m'],
            ['Distance d’arrêt sur route sèche', 'dizaines × dizaines', '9 × 9 = 81 m'],
            ['Distance d’arrêt sur route mouillée', 'la même + la moitié', '81 + 40 ≈ 120 m'],
            ['Distance de sécurité (2 secondes)', 'dizaines × 6', '9 × 6 = 54 m']] },
          'La distance d’arrêt, c’est la distance parcourue pendant le temps de réaction, plus la distance de freinage.',
          { scene: { drv: { env: 'autoroute', veh: 'voiture', vehS: .4, speed: 90 } }, cap: 'Derrière un véhicule : au moins 2 secondes d’écart, soit environ 54 m à 90 km/h. Sur autoroute, ça fait deux traits de la bande d’arrêt d’urgence.' },
        ] },
        { h: 'Pourquoi la vitesse tue', b: [
          { ul: [
            'Rouler deux fois plus vite, c’est quatre fois plus d’énergie à dissiper au moment du choc.',
            'Un choc à 50 km/h équivaut à une chute d’environ 10 mètres, soit trois étages.',
            'Plus tu vas vite, plus ton champ de vision se rétrécit : à 130 km/h, tu vois mal ce qui arrive sur les côtés.',
          ] },
        ] },
        { h: 'Les excès de vitesse', b: [
          { tbl: [['Dépassement de la limite', 'Points retirés'], ['Moins de 20 km/h', '1'], ['De 20 à 29 km/h', '2'], ['De 30 à 39 km/h', '3'], ['De 40 à 49 km/h', '4, avec suspension possible'], ['50 km/h ou plus', '6, avec suspension et confiscation possibles']] },
        ] },
      ],
      retenir: ['50 en ville, 80 sur route, 110 sur 2×2, 130 sur autoroute.', 'Pluie : 2×2 à 100 et autoroute à 110. Probatoire : 80, 100 et 110.', 'Visibilité sous 50 m : 50 km/h partout.', 'Réaction : ×3. Arrêt au sec : dizaines². Sécurité : ×6.'],
    },
    {
      id: 'depasser', titre: 'Dépasser et croiser', th: 'U', fam: ['x'], ids: ['h18'], hq: /dépass|croise|cycliste|tracteur/i,
      resume: 'Les conditions pour dépasser, les endroits où c’est interdit et les distances à laisser aux cyclistes.',
      s: [
        { h: 'Avant de dépasser', b: [
          { ul: [
            'Tu as assez de visibilité et de place pour revenir à droite sans gêner personne.',
            'Personne n’a commencé à te dépasser.',
            'Tu contrôles tes rétroviseurs et ton angle mort, puis tu mets le clignotant.',
            'Tu dépasses franchement, puis tu te rabats sans couper la route du véhicule dépassé.',
          ] },
        ] },
        { h: 'Quand le dépassement est interdit', b: [
          { ul: [
            'Quand il faut franchir une <b>ligne continue</b>.',
            'Après un panneau <b>interdiction de dépasser</b>, sauf les deux-roues.',
            'Dans un <b>virage</b> ou au <b>sommet d’une côte</b>, sans visibilité.',
            'À l’approche d’une <b>intersection</b>, sauf si tu es prioritaire ou que des feux règlent la circulation.',
            'Quand le véhicule devant ralentit ou s’arrête pour laisser passer des <b>piétons</b>.',
          ] },
          { signs: ['B3'] },
          { scene: { drv: { env: 'campagne', line: 'cont', veh: 'camion', vehS: .45, speed: 60 } }, cap: 'Ligne continue et camion devant : je reste derrière.' },
        ] },
        { h: 'Dépasser un cycliste', b: [
          { ul: [
            'Écart d’au moins <b>1 m en agglomération</b> et <b>1,50 m hors agglomération</b>.',
            'Tu peux <b>chevaucher</b> une ligne continue pour dépasser un cycliste, quand la visibilité est suffisante.',
          ] },
          { scene: { drv: { env: 'campagne', line: 'cont', veh: 'velo', vehS: .5, speed: 30 } }, cap: 'Cycliste et ligne continue : je peux chevaucher la ligne pour le dépasser, en laissant 1,50 m.' },
        ] },
        { h: 'Dépasser par la droite', b: [
          'C’est permis quand le véhicule devant a signalé qu’il tourne à gauche et s’est décalé vers le centre, ou dans une circulation en files ininterrompues.',
        ] },
        { h: 'Être dépassé et croiser', b: [
          { ul: [
            'Quand on te dépasse : tu serres à droite et tu n’accélères pas.',
            'Quand tu croises un véhicule : tu serres à droite. Si un obstacle est de ton côté, c’est à toi de laisser passer.',
          ] },
        ] },
      ],
      retenir: ['Rétroviseurs, angle mort, clignotant, puis dépassement franc.', 'Jamais sur ligne continue, sauf pour un cycliste.', 'Interdiction de dépasser : les deux-roues restent autorisés.', 'Cycliste : 1 m en ville, 1,50 m hors agglomération.'],
    },
    {
      id: 'feux', titre: 'Feux et éclairage', th: 'L', fam: ['f'], hq: /feux de|brouillard|tunnel|avertisseur|klaxon|détresse|éblou|je croise/i,
      resume: 'Quels feux allumer selon l’heure, la météo et les autres usagers.',
      s: [
        { h: 'Les différents feux', b: [
          { voy: ['position', 'croisement', 'route', 'brouillardAV', 'brouillardAR'] },
          { tbl: [['Feux', 'Quand', 'Portée'],
            ['Position', 'À l’arrêt ou en stationnement la nuit sur une route non éclairée', 'Signalent seulement le véhicule'],
            ['Croisement', 'La nuit, dans les tunnels, et dès que la visibilité baisse', 'Environ 30 m'],
            ['Route', 'La nuit, hors agglomération, quand personne n’est devant ni en face', 'Environ 100 m'],
            ['Brouillard avant', 'Brouillard, chute de neige, forte pluie', 'Éclairent bas et large'],
            ['Brouillard arrière', 'Brouillard ou chute de neige seulement', 'Très éblouissant pour celui qui suit']] },
        ] },
        { h: 'Ne pas éblouir', b: [
          { ul: [
            'Passe en feux de croisement quand tu <b>croises</b> quelqu’un, quand tu <b>suis</b> un véhicule de près, et sur une route <b>bien éclairée</b>.',
            'Si tu es ébloui : ralentis et regarde le <b>bord droit</b> de la route.',
            'Le feu de brouillard arrière est interdit sous la pluie : il éblouirait les conducteurs qui suivent.',
          ] },
          { scene: { drv: { env: 'campagne', w: 'nuit', opp: 'voiture', speed: 70 } }, cap: 'La nuit, en croisant : feux de croisement.' },
        ] },
        { h: 'Signaux sonores et feux de détresse', b: [
          { ul: [
            '<b>En agglomération</b>, le klaxon est réservé au danger immédiat.',
            'Hors agglomération, il peut aussi servir à prévenir de ta présence. La nuit, on préfère l’appel de phares.',
            '<b>Feux de détresse</b> : véhicule en panne ou accidenté, ralentissement brutal sur autoroute. Jamais pour stationner en double file.',
          ] },
        ] },
      ],
      retenir: ['Croisement : nuit, tunnels, mauvaise visibilité. Route : nuit, personne devant ni en face.', 'Brouillard arrière : brouillard ou neige, jamais sous la pluie.', 'Ébloui : je ralentis et je regarde à droite.'],
    },
    {
      id: 'autoroute', titre: 'Autoroute, arrêt et stationnement', th: 'L', fam: [], hq: /autoroute|double file|stationn|insère/i,
      resume: 'Bien s’insérer et circuler sur autoroute, savoir quoi faire en cas de panne, et où l’arrêt et le stationnement sont interdits.',
      s: [
        { h: 'Sur autoroute', b: [
          { signs: ['C207', 'C208'] },
          { ul: [
            'Interdite aux piétons, aux vélos, aux cyclomoteurs et aux véhicules lents.',
            'Sur la voie d’accélération, tu prends la vitesse du trafic et tu cèdes le passage aux véhicules déjà sur l’autoroute.',
            'Tu roules sur la voie de droite. Les autres voies servent à dépasser, puis tu te rabats.',
            'Sur la voie de gauche, par temps sec et circulation fluide, la vitesse minimale est de 80 km/h.',
            'Demi-tour, marche arrière et traversée du terre-plein central sont interdits.',
          ] },
          { scene: { drv: { env: 'autoroute', veh2: 'voiture', speed: 110 } }, cap: 'Je roule à droite et je dépasse par la gauche, puis je me rabats.' },
        ] },
        { h: 'En cas de panne sur autoroute', b: [
          { ul: [
            'Va le plus à droite possible, sur la bande d’arrêt d’urgence, et allume tes feux de détresse.',
            'Enfile ton gilet <b>avant</b> de sortir, et fais sortir tout le monde côté droit.',
            'Mettez-vous à l’abri derrière la glissière de sécurité.',
            'Appelle les secours avec une borne orange (il y en a une tous les 2 km environ) ou le 112.',
            'La bande d’arrêt d’urgence n’est pas faite pour téléphoner ou se reposer : pour ça, sors sur une aire.',
          ] },
        ] },
        { h: 'Arrêt ou stationnement ?', b: [
          { ul: [
            '<b>Arrêt</b> : immobilisation courte pour faire monter ou descendre quelqu’un, ou charger un objet, le conducteur restant au volant ou à côté.',
            '<b>Stationnement</b> : tout le reste, notamment quand tu t’éloignes du véhicule.',
          ] },
          { signs: ['B6a1', 'B6d', 'C1a'] },
        ] },
        { h: 'Où c’est interdit', b: [
          { ul: [
            '<b>En double file</b>, même pour un arrêt très court.',
            'Sur les <b>trottoirs</b>, les passages piétons, les pistes cyclables et les arrêts de bus.',
            'Devant l’entrée d’un garage ou d’un immeuble.',
            'Sur une place réservée aux personnes handicapées, sans carte.',
            'Le long d’une ligne jaune : discontinue, stationnement interdit ; continue, arrêt et stationnement interdits.',
          ] },
        ] },
      ],
      retenir: ['Voie d’accélération : je prends la vitesse du trafic et je cède le passage.', 'Panne : gilet avant de sortir, puis à l’abri derrière la glissière.', 'Double file : toujours interdit.', 'Stationnement interdit : l’arrêt reste permis. Croix rouge : même l’arrêt est interdit.'],
    },
    {
      id: 'conducteur', titre: 'Le conducteur', th: 'C', fam: [],
      resume: 'Alcool, drogues, médicaments, fatigue et distractions : ce qui altère ta conduite et ce que dit la loi.',
      s: [
        { h: 'Alcool', b: [
          { tbl: [['', 'Sang', 'Air expiré'], ['Conducteur confirmé', '0,5 g/L', '0,25 mg/L'], ['Permis probatoire', '0,2 g/L', '0,1 mg/L'], ['Délit', '0,8 g/L et plus', '0,4 mg/L et plus']] },
          { ul: [
            'Un verre standard servi au bar fait monter le taux d’environ 0,20 à 0,25 g/L, quelle que soit la boisson.',
            'Seul le temps fait baisser le taux : environ 0,10 à 0,15 g/L par heure. Le café, l’eau ou l’air frais n’y changent rien.',
            'Entre 0,5 et 0,8 g/L : 6 points de retrait. Au-delà : délit, avec suspension du permis.',
          ] },
          { tip: 'En permis probatoire, 0,2 g/L, c’est moins d’un verre : la seule règle sûre, c’est de ne pas boire du tout avant de conduire.', t: 'À retenir' },
        ] },
        { h: 'Drogues et médicaments', b: [
          { ul: [
            'Conduire après avoir consommé une drogue, comme le cannabis, est un <b>délit</b>, quelle que soit la quantité. 6 points de retrait.',
            'Médicaments, pictogramme sur la boîte : <b>jaune</b>, niveau 1, sois prudent ; <b>orange</b>, niveau 2, sois très prudent ; <b>rouge</b>, niveau 3, ne conduis pas.',
          ] },
        ] },
        { h: 'Fatigue', b: [
          { ul: [
            'Les signes : bâillements, picotements dans les yeux, nuque raide, envie de bouger, regard fixe.',
            'Le seul remède efficace : t’arrêter et faire une sieste de 15 à 20 minutes. Ouvrir la fenêtre ou monter le son ne suffit pas.',
            'Fais une pause toutes les deux heures.',
          ] },
        ] },
        { h: 'Distractions', b: [
          { ul: [
            'Le téléphone tenu en main est interdit : 135 € et 3 points.',
            'Les écouteurs et les oreillettes sont interdits, même pour téléphoner.',
            'Le système mains libres intégré au véhicule est toléré, mais il te distrait quand même.',
            'Un écran autre que le GPS ne doit pas être visible par le conducteur.',
          ] },
        ] },
        { h: 'Temps de réaction et angle mort', b: [
          { ul: [
            'Le temps de réaction moyen est d’environ 1 seconde. Il s’allonge avec la fatigue, l’alcool, les drogues et les distractions.',
            'Les rétroviseurs ne montrent pas tout : tourne la tête pour vérifier l’angle mort avant de changer de voie.',
          ] },
        ] },
      ],
      retenir: ['0,5 g/L en confirmé, 0,2 g/L en probatoire, délit dès 0,8 g/L.', 'Seul le temps fait baisser l’alcoolémie.', 'Drogue au volant : délit et 6 points.', 'Fatigue : stop et sieste de 15 à 20 minutes.', 'Téléphone en main ou écouteurs : 3 points.'],
    },
    {
      id: 'route', titre: 'La route et la météo', th: 'R', fam: [],
      resume: 'Adapter sa conduite à la pluie, à la neige, au brouillard, à la nuit, aux virages et aux descentes.',
      s: [
        { h: 'Pluie et aquaplaning', b: [
          { ul: [
            'Sur route mouillée, la distance de freinage augmente fortement, encore plus avec des pneus usés.',
            'Aquaplaning : le volant devient léger, car les pneus ne touchent plus la route. Lève le pied, tiens le volant droit, ne freine pas brusquement.',
          ] },
          { scene: { drv: { env: 'autoroute', w: 'pluie', speed: 100 } }, cap: 'Sous la pluie : vitesse réduite et distances augmentées.' },
        ] },
        { h: 'Neige et verglas', b: [
          { ul: [
            'Le verglas se forme d’abord sur les <b>ponts</b> et dans les zones <b>à l’ombre</b>.',
            'Démarre en douceur, si possible sur un rapport plus élevé, et freine progressivement.',
            'Augmente beaucoup les distances de sécurité.',
          ] },
        ] },
        { h: 'Brouillard et vent', b: [
          { ul: [
            'Visibilité inférieure à 50 m : 50 km/h maximum, feux de croisement et feux de brouillard.',
            'Le vent latéral surprend à la sortie d’une forêt, sur un pont, ou en dépassant un camion.',
          ] },
        ] },
        { h: 'La nuit', b: [
          { ul: ['Les feux de croisement éclairent à environ 30 m, les feux de route à environ 100 m.', 'Adapte ta vitesse à ce que tu vois. Si tu es ébloui, ralentis et regarde le bord droit de la route.'] },
        ] },
        { h: 'Virages, descentes et revêtement', b: [
          { signs: ['A1a', 'A8', 'A4', 'A3'] },
          { ul: [
            'Ralentis <b>avant</b> le virage, en ligne droite, jamais au milieu.',
            'En descente, utilise le <b>frein moteur</b> en rétrogradant. Rouler au point mort est dangereux et interdit.',
            'Gravillons : ralentis et éloigne-toi du véhicule de devant pour éviter les projections.',
            'Animal qui traverse : freine fort en gardant le volant droit. Un coup de volant fait souvent perdre le contrôle.',
          ] },
        ] },
      ],
      retenir: ['Mouillé : freinage plus long. Aquaplaning : je lève le pied sans freiner fort.', 'Verglas : ponts et zones d’ombre d’abord.', 'Je ralentis avant le virage, pas dedans.', 'Descente : frein moteur.'],
    },
    {
      id: 'usagers', titre: 'Les autres usagers', th: 'U', fam: [], hq: /piéton|enfant|ballon|bus|sirène|poids lourd|cavalier|trottinette|électrique|canne/i,
      resume: 'Piétons, enfants, cyclistes, deux-roues, poids lourds, bus et véhicules d’urgence : comment les anticiper.',
      s: [
        { h: 'Les plus fragiles', b: [
          { ul: [
            '<b>Piétons</b> : prioritaires sur les passages et dès qu’ils montrent l’intention de traverser.',
            '<b>Enfants</b> : imprévisibles. Un ballon sur la route annonce souvent un enfant qui court derrière.',
            '<b>Personnes âgées</b> : elles traversent plus lentement et voient ou entendent parfois mal.',
            '<b>Personne avec une canne blanche</b> : toujours prioritaire.',
          ] },
          { scene: { drv: { env: 'ville', kids: 1, ball: 1, speed: 30 } }, cap: 'Un ballon roule : je m’attends à voir un enfant surgir.' },
        ] },
        { h: 'Cyclistes, trottinettes et deux-roues motorisés', b: [
          { ul: [
            'Cyclistes : 1 m d’écart en agglomération, 1,50 m hors agglomération. Dans une zone 30, ils peuvent en principe circuler à contresens dans les rues à sens unique.',
            'Trottinettes électriques : 25 km/h au maximum, sur les pistes cyclables ou sur la chaussée. Le trottoir leur est interdit.',
            'Motos : petites et rapides, elles se cachent facilement dans les angles morts. Vérifie toujours avant de changer de voie.',
            'Avant d’ouvrir ta portière, regarde derrière : un cycliste peut arriver.',
          ] },
        ] },
        { h: 'Poids lourds, bus et engins lents', b: [
          { ul: [
            'Les poids lourds ont de grands angles morts, signalés par un autocollant. Ne te glisse pas à leur droite : ils s’écartent à gauche avant de tourner à droite.',
            'En agglomération, laisse partir le bus qui signale qu’il quitte son arrêt.',
            'Tracteurs, engins agricoles, cavaliers : patience. Ralentis et laisse beaucoup de place, sans klaxonner près des chevaux.',
          ] },
        ] },
        { h: 'Véhicules d’urgence et voitures électriques', b: [
          { ul: [
            'Sirène et feux bleus : facilite le passage en te décalant, sans infraction dangereuse.',
            'Les voitures électriques sont très silencieuses à basse vitesse : les piétons peuvent ne pas les entendre arriver.',
          ] },
        ] },
      ],
      retenir: ['Piéton qui veut traverser : prioritaire.', 'Ballon sur la route = enfant pas loin.', 'Poids lourd qui tourne : je reste derrière, jamais à sa droite.', 'Bus qui quitte son arrêt en ville : je le laisse partir.'],
    },
    {
      id: 'reglementation', titre: 'Permis, points et papiers', th: 'D', fam: [],
      resume: 'Le permis à points, la période probatoire, l’assurance, le contrôle technique et le constat amiable.',
      s: [
        { h: 'Le permis à points', b: [
          { ul: [
            'Un permis confirmé a <b>12 points</b>.',
            'Un permis probatoire démarre à <b>6 points</b>. Sans infraction, il gagne 2 points par an pendant 3 ans, ou 3 points par an pendant 2 ans après une conduite accompagnée.',
            'Sans nouvelle infraction pendant 3 ans, tu retrouves tous tes points. Une infraction à 1 point s’efface au bout de 6 mois.',
            'Un stage de sensibilisation volontaire rend jusqu’à 4 points, une fois par an au plus.',
          ] },
          { tbl: [['Infraction', 'Points'], ['Excès de vitesse de moins de 20 km/h', '1'], ['Chevauchement d’une ligne continue', '1'], ['Téléphone tenu en main', '3'], ['Ceinture non bouclée', '3'], ['Franchissement d’une ligne continue', '3'], ['Feu rouge ou stop', '4'], ['Refus de priorité à un piéton', '6'], ['Alcool (0,5 g/L ou plus) ou drogue', '6']] },
        ] },
        { h: 'Ce que permet le permis B', b: [
          { ul: [
            'Véhicules de <b>3,5 t</b> au plus, avec <b>9 places</b> au plus, conducteur compris.',
            'Remorque de 750 kg au plus. Au-delà, il faut sous conditions la formation B96 ou le permis BE.',
          ] },
        ] },
        { h: 'Les obligations du véhicule', b: [
          { ul: [
            '<b>Assurance</b> au minimum en responsabilité civile, obligatoire même si la voiture ne roule pas.',
            '<b>Contrôle technique</b> : avant les 4 ans de la voiture, puis tous les 2 ans.',
            '<b>Changement d’adresse</b> : à déclarer sur le certificat d’immatriculation dans le mois.',
            '<b>Zones à faibles émissions</b> : vignette Crit’Air obligatoire, et certaines catégories sont interdites.',
          ] },
        ] },
        { h: 'Le constat amiable', b: [
          { ul: ['Rempli avec l’autre conducteur, signé par les deux.', 'Ne le modifie plus après la signature.', 'Envoie-le à ton assureur dans les 5 jours ouvrés.'] },
        ] },
      ],
      retenir: ['12 points, 6 en probatoire, +2 par an (+3 après conduite accompagnée).', 'Téléphone 3, feu rouge 4, alcool 6.', 'Permis B : 3,5 t et 9 places.', 'Contrôle technique à 4 ans puis tous les 2 ans. Constat sous 5 jours ouvrés.'],
    },
    {
      id: 'secours', titre: 'Premiers secours', th: 'P', fam: [],
      resume: 'Les bons gestes face à un accident : protéger, alerter, secourir.',
      s: [
        { h: 'Protéger', b: [
          { ul: [
            'Gare-toi après l’accident, allume tes feux de détresse.',
            'Enfile ton gilet avant de sortir.',
            'Place le triangle à au moins 30 m en amont, pour prévenir les usagers qui arrivent.',
            'Coupe le contact des véhicules accidentés si tu peux, et ne fume pas.',
          ] },
        ] },
        { h: 'Alerter', b: [
          { tbl: [['Numéro', 'Service'], ['15', 'SAMU, urgence médicale'], ['18', 'Pompiers'], ['17', 'Police ou gendarmerie'], ['112', 'Numéro d’urgence européen'], ['114', 'Par SMS, pour les personnes sourdes ou malentendantes']] },
          'Donne le lieu précis, la nature de l’accident, le nombre de victimes et leur état, et les dangers, comme un incendie. Ne raccroche que quand on te le dit.',
        ] },
        { h: 'Secourir', b: [
          { ul: [
            'Ne déplace pas un blessé, sauf danger immédiat comme un incendie.',
            'Ne retire pas le casque d’un motard.',
            'Ne donne jamais à boire ni à manger. Couvre la victime et parle-lui.',
            '<b>Saignement abondant</b> : appuie fort sur la plaie.',
            '<b>Inconscient qui respire</b> : position latérale de sécurité, puis surveille sa respiration.',
            '<b>Inconscient qui ne respire plus</b> : massage cardiaque, 100 à 120 compressions par minute, et défibrillateur dès que possible.',
          ] },
        ] },
      ],
      retenir: ['Protéger, alerter, secourir, dans cet ordre.', '15, 18, 17, 112, et 114 par SMS.', 'Triangle à 30 m au moins. Gilet avant de sortir.', 'Respire : PLS. Ne respire plus : massage et défibrillateur.'],
    },
    {
      id: 'vehicule', titre: 'Prendre et quitter son véhicule', th: 'Q', fam: [],
      resume: 'Les réglages avant de partir et les bons gestes pour se garer et sortir du véhicule.',
      s: [
        { h: 'Avant de partir', b: [
          { ul: [
            'Règle le siège, l’appui-tête (son haut au niveau du haut de ta tête) et les rétroviseurs, toujours à l’arrêt.',
            'Les rétroviseurs extérieurs doivent montrer le moins possible ta carrosserie. Ils réduisent l’angle mort sans le supprimer.',
            'Boucle ta ceinture et vérifie celle des passagers.',
            'Moteur froid : démarre et roule tranquillement. Le faire chauffer à l’arrêt pollue pour rien.',
          ] },
        ] },
        { h: 'Quitter une place', b: [
          'Clignotant, rétroviseurs, angle mort. Tu t’insères dans la circulation : c’est à toi de laisser passer les autres.',
        ] },
        { h: 'Se garer et sortir', b: [
          { ul: [
            'En pente : frein à main serré, une vitesse engagée (ou la position P), roues tournées vers le trottoir.',
            'Moteur coupé, clé retirée. Ne laisse jamais un enfant ou un animal seul dans le véhicule.',
            'Ouvre ta portière avec la main opposée : ça t’oblige à tourner le buste et à voir un cycliste qui arrive.',
            'Fais descendre les passagers côté trottoir.',
          ] },
        ] },
      ],
      retenir: ['Tous les réglages à l’arrêt.', 'Quitter une place : je laisse passer les autres.', 'En pente : frein à main, vitesse engagée, roues vers le trottoir.', 'Portière : main opposée et coup d’œil derrière.'],
    },
    {
      id: 'mecanique', titre: 'Mécanique, équipements et voyants', th: 'M', fam: ['y', 'y2'],
      resume: 'Pneus, freins, aides à la conduite et voyants du tableau de bord.',
      s: [
        { h: 'Les couleurs des voyants', b: [
          { tbl: [['Couleur', 'Sens', 'Que faire'], ['Vert ou bleu', 'Une fonction est en marche', 'Rien, c’est une information'], ['Orange', 'Une anomalie', 'Faire vérifier rapidement'], ['Rouge', 'Un danger', 'S’arrêter dès que possible en sécurité']] },
          { voy: ['huile', 'batterie', 'temperature', 'frein', 'ceinture', 'airbag'] },
          { voy: ['abs', 'carburant', 'moteur', 'pneu'] },
        ] },
        { h: 'Les pneus', b: [
          { ul: [
            'Profondeur minimale des sculptures : <b>1,6 mm</b>. Des témoins d’usure sont moulés dans les rainures.',
            'Vérifie la pression <b>à froid</b>, au moins une fois par mois. Un pneu sous-gonflé s’use vite, consomme plus et tient moins la route.',
            'Loi Montagne : dans les communes concernées, du 1er novembre au 31 mars, il faut des pneus hiver ou toutes saisons, ou des chaînes ou chaussettes dans le coffre.',
          ] },
        ] },
        { h: 'Aides à la conduite', b: [
          { ul: [
            '<b>ABS</b> : empêche les roues de se bloquer, tu peux donc continuer à diriger en freinant fort. Il ne raccourcit pas toujours la distance de freinage.',
            '<b>Limiteur</b> : t’empêche de dépasser la vitesse choisie. <b>Régulateur</b> : maintient la vitesse.',
          ] },
        ] },
        { h: 'Entretien courant', b: [
          { ul: ['Niveau d’huile : moteur froid, voiture à plat.', 'Coffre chargé : baisse les phares et adapte la pression des pneus.', 'Garde les vitres, les feux et les essuie-glaces propres et en bon état.'] },
        ] },
      ],
      retenir: ['Vert ou bleu : info. Orange : à vérifier. Rouge : arrêt.', 'Pneus : 1,6 mm minimum, pression à froid.', 'ABS : je peux diriger en freinant fort.'],
    },
    {
      id: 'passagers', titre: 'Sécurité des passagers', th: 'S', fam: [],
      resume: 'Ceinture, enfants, airbag, chargement : protéger tout le monde à bord.',
      s: [
        { h: 'La ceinture', b: [
          { ul: [
            'Obligatoire à toutes les places équipées, à l’avant comme à l’arrière, en ville comme sur route.',
            'Le conducteur est sanctionné si un passager <b>mineur</b> n’est pas attaché.',
            'Femme enceinte : sangle basse sous le ventre, sur le haut des cuisses ; sangle haute entre les seins.',
          ] },
        ] },
        { h: 'Les enfants', b: [
          { ul: [
            'Jusqu’à 10 ans : un siège ou un rehausseur adapté à sa taille et à son poids, en principe à l’arrière.',
            'Siège bébé dos à la route à l’avant : <b>désactive l’airbag frontal passager</b>.',
            'Active la sécurité enfants sur les portières arrière.',
          ] },
        ] },
        { h: 'Le chargement', b: [
          { ul: [
            'Les objets lourds deviennent des projectiles en cas de choc : range-les dans le coffre ou attache-les. Rien sur la plage arrière.',
            'Un porte-vélos ne doit masquer ni la plaque ni les feux. Sinon, il faut les reporter dessus.',
            'Le gilet de haute visibilité doit être à portée de main dans l’habitacle. Le triangle est obligatoire aussi.',
          ] },
        ] },
      ],
      retenir: ['Ceinture partout, pour tous. Mineur non attaché : c’est le conducteur qui paie.', 'Moins de 10 ans : siège adapté.', 'Bébé dos à la route devant : airbag désactivé.'],
    },
    {
      id: 'environnement', titre: 'Environnement et écoconduite', th: 'E', fam: [],
      resume: 'Consommer moins, polluer moins et faire moins de bruit.',
      s: [
        { h: 'L’écoconduite', b: [
          { ul: [
            'Anticipe et roule en souplesse : moins de freinages, moins d’accélérations.',
            'Passe tôt les rapports supérieurs.',
            'Retire le coffre de toit quand tu ne t’en sers pas, et use de la climatisation avec modération.',
            'Sur autoroute, rouler à 120 au lieu de 130 km/h réduit nettement la consommation, pour quelques minutes de plus seulement.',
            'Des pneus bien gonflés consomment moins.',
          ] },
          { tip: 'L’écoconduite réduit la consommation d’environ 15 %, et elle réduit aussi les accidents.', t: 'Bon à savoir' },
        ] },
        { h: 'Pollution et bruit', b: [
          { ul: [
            'Moteur froid, les premiers kilomètres : le véhicule consomme et pollue davantage. Les trajets très courts sont les moins efficaces.',
            'L’huile usagée se dépose en déchetterie ou en garage, jamais dans un égout.',
            'Évite les accélérations brusques et le klaxon sans raison. Un échappement modifié pour faire du bruit est interdit.',
            'Covoiturage, transports en commun, vélo : autant de trajets en moins.',
          ] },
        ] },
      ],
      retenir: ['Souplesse et anticipation.', '120 au lieu de 130 : moins de carburant.', 'Huile usagée en déchetterie.'],
    },
  ];
  window.COURS = C;
})();
