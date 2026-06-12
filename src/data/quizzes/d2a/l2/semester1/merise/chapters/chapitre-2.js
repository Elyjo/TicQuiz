export const chapter2 = {
  id: "chapter-2",
  title: "Le MCC",
  questions: [
    {
      id: 1,
      question: "Quel est l'objectif principal du Modèle Conceptuel de Communication (MCC) ?",
      options: [
        "Définir l'arborescence des fichiers du serveur",
        "Représenter les flux d'informations échangés entre les différents acteurs",
        "Écrire les requêtes de jointure SQL",
        "Calculer le temps de réponse d'une page web"
      ],
      answer: 1
    },
    {
      id: 2,
      question: "Dans un MCC, comment appelle-t-on une entité humaine ou organisationnelle qui échange des données ?",
      options: [
        "Un attribut",
        "Un acteur (ou partenaire)",
        "Une phase",
        "Une occurrence"
      ],
      answer: 1
    },
    {
      id: 3,
      question: "Qu'est-ce qu'un acteur interne dans un diagramme MCC ?",
      options: [
        "Un client de l'entreprise",
        "Un service ou une unité de travail faisant partie de l'organisation étudiée",
        "Un fournisseur externe",
        "Un serveur de base de données physique"
      ],
      answer: 1
    },
    {
      id: 4,
      question: "Qu'est-ce qu'un acteur externe dans un diagramme MCC ?",
      options: [
        "Le directeur général de l'entreprise",
        "Un élément extérieur à l'organisation qui interagit avec elle (ex: Client, Banque)",
        "Le service comptabilité",
        "Un script de sauvegarde asynchrone"
      ],
      answer: 1
    },
    {
      id: 5,
      question: "Comment appelle-t-on l'ensemble du système étudié que l'on isole des acteurs externes ?",
      options: [
        "Le domaine d'étude",
        "Le modèle logique",
        "L'unité de traitement",
        "La base de données"
      ],
      answer: 0
    },
    {
      id: 6,
      question: "Comment représente-t-on graphiquement un acteur interne dans le schéma du MCC ?",
      options: [
        "Par une flèche brisée",
        "Par un cercle ou une ellipse en ligne pleine",
        "Par un losange pointillé",
        "Par un carré rouge"
      ],
      answer: 1
    },
    {
      id: 7,
      question: "Comment représente-t-on graphiquement un acteur externe dans le schéma du MCC ?",
      options: [
        "Par un cercle parfait",
        "Par une ellipse ou un cercle en ligne pointillée (ou rectangle)",
        "Par un triangle équilatéral",
        "Il n'est pas représenté graphiquement"
      ],
      answer: 1
    },
    {
      id: 8,
      question: "Qu'est-ce qu'un flux d'information dans le contexte du MCC ?",
      options: [
        "Un transfert de courant électrique dans les câbles",
        "Un échange de données (facture, commande, message) circulant d'un acteur à un autre",
        "Une mise à jour du code React",
        "Une boucle de contrôle algorithmique"
      ],
      answer: 1
    },
    {
      id: 9,
      question: "Comment représente-t-on graphiquement un flux d'information entre deux acteurs ?",
      options: [
        "Par un trait horizontal fixe",
        "Par une flèche orientée de l'émetteur vers le récepteur avec le nom du flux",
        "Par un losange reliant deux rectangles",
        "Par un connecteur logique ET"
      ],
      answer: 1
    },
    {
      id: 10,
      question: "Quel terme désigne un MCC simplifié montrant uniquement l'organisation globale et ses partenaires externes ?",
      options: [
        "Le diagramme de contexte",
        "Le modèle physique",
        "La matrice des dépendances",
        "Le dialogue homme-machine"
      ],
      answer: 0
    },
    {
      id: 11,
      question: "Dans un diagramme de contexte, représente-t-on les flux entre deux acteurs internes ?",
      options: [
        "Oui, de manière très détaillée",
        "Non, on ne montre que les interactions entre l'organisation et l'extérieur",
        "Uniquement si les flux contiennent de l'argent",
        "Seulement pour les bases de données MySQL"
      ],
      answer: 1
    },
    {
      id: 12,
      question: "Qu'est-ce qu'un flux conceptuel ?",
      options: [
        "Un flux qui décrit la technologie de transmission (ex: e-mail, SMS)",
        "Un flux stable décrivant la nature profonde de l'information (ex: Commande)",
        "Un flux qui ne contient aucune donnée",
        "Une erreur de conception"
      ],
      answer: 1
    },
    {
      id: 13,
      question: "Le MCC s'intéresse-t-il au support technique du message (ex: papier, e-mail, appel téléphonique) ?",
      options: [
        "Oui, c'est sa priorité",
        "Non, il fait abstraction des supports physiques de communication",
        "Uniquement pour les services informatiques",
        "Seulement si l'on utilise un framework web"
      ],
      answer: 1
    },
    {
      id: 14,
      question: "Comment appelle-t-on l'action d'éclater un acteur interne complexe en sous-acteurs plus précis ?",
      options: [
        "La normalisation relationnelle",
        "Le zoom (ou décomposition conceptuelle)",
        "L'effondrement physique",
        "La dérivation de cardinalités"
      ],
      answer: 1
    },
    {
      id: 15,
      question: "Dans la matrice des flux (alternative textuelle), que représente l'intersection d'une ligne Acteur A et d'une colonne Acteur B ?",
      options: [
        "La clé primaire commune",
        "Le ou les flux envoyés par A à destination de B",
        "Une condition de synchronisation temporelle",
        "Une impossibilité technique"
      ],
      answer: 1
    },
    {
      id: 16,
      question: "Le MCC intègre-t-il la chronologie exacte et l'heure d'exécution des tâches ?",
      options: [
        "Oui, à la seconde près",
        "Non, il montre les échanges sans contrainte d'ordonnancement temporel strict (rôle du MCT/MOT)",
        "Uniquement pour les traitements de nuit",
        "Seulement si l'acteur est externe"
      ],
      answer: 1
    },
    {
      id: 17,
      question: "Un flux d'information peut-il circuler d'un acteur externe directement vers un autre acteur externe dans le MCC ?",
      options: [
        "Oui, c'est très fréquent",
        "Non, on ne modélise que les flux qui impactent directement le domaine d'étude",
        "Uniquement s'il s'agit de banques concurrentes",
        "Seulement dans le niveau logique"
      ],
      answer: 1
    },
    {
      id: 18,
      question: "Qu'est-ce qu'un dictionnaire des flux ?",
      options: [
        "Un livre de traduction informatique",
        "Un document recensant et décrivant précisément le contenu textuel de chaque flux",
        "Une table système SQL",
        "Une liste d'adresses e-mail"
      ],
      answer: 1
    },
    {
      id: 19,
      question: "Le MCC est généralement réalisé à quelle étape du cycle de vie d'un projet ?",
      options: [
        "Durant la phase de maintenance corrective",
        "Au tout début, lors de l'étude préalable et du recueil des besoins",
        "Pendant l'écriture des fichiers de configuration Linux",
        "Juste avant le déploiement en production"
      ],
      answer: 1
    },
    {
      id: 20,
      question: "Une fois le MCC et les flux validés, vers quel modèle se tourne-t-on pour structurer la dynamique interne des opérations ?",
      options: [
        "Le Modèle Physique des Données (MPD)",
        "Le Modèle Conceptuel des Traitements (MCT)",
        "La Première Forme Normale (1FN)",
        "Le code source React"
      ],
      answer: 1
    }
  ]
};