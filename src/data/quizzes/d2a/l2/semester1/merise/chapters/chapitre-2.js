export const chapter2 = {
  id: "chapter-2",
  title: "Le MCC",
  questions: [
    {
      id: 1,
      question: "Objectif principal du MCC ?",
      options: [
        "Définir les fichiers du serveur",
        "Représenter les flux d'informations entre acteurs",
        "Écrire les requêtes SQL",
        "Calculer le temps de réponse"
      ],
      answer: 1
    },
    {
      id: 2,
      question: "Entité échangeant des données dans un MCC ?",
      options: ["Un attribut", "Un acteur (ou partenaire)", "Une phase", "Une occurrence"],
      answer: 1
    },
    {
      id: 3,
      question: "Qu'est-ce qu'un acteur interne ?",
      options: [
        "Un client externe",
        "Un service ou unité de l'organisation étudiée",
        "Un fournisseur",
        "Un serveur physique"
      ],
      answer: 1
    },
    {
      id: 4,
      question: "Qu'est-ce qu'un acteur externe ?",
      options: [
        "Le directeur général",
        "Un élément extérieur interagissant avec l'organisation",
        "Le service comptabilité",
        "Un script de sauvegarde"
      ],
      answer: 1
    },
    {
      id: 5,
      question: "Système étudié isolé des acteurs externes ?",
      options: ["Le domaine d'étude", "Le modèle logique", "L'unité de traitement", "La base de données"],
      answer: 0
    },
    {
      id: 6,
      question: "Représentation graphique d'un acteur interne ?",
      options: ["Flèche brisée", "Cercle/ellipse en ligne pleine", "Losange pointillé", "Carré rouge"],
      answer: 1
    },
    {
      id: 7,
      question: "Représentation graphique d'un acteur externe ?",
      options: ["Cercle parfait", "Ellipse/cercle en ligne pointillée (ou rectangle)", "Triangle", "Non représenté"],
      answer: 1
    },
    {
      id: 8,
      question: "Qu'est-ce qu'un flux d'information ?",
      options: [
        "Courant électrique",
        "Données circulantes d'un acteur à un autre",
        "Mise à jour de code",
        "Boucle algorithmique"
      ],
      answer: 1
    },
    {
      id: 9,
      question: "Représentation graphique d'un flux ?",
      options: ["Trait horizontal", "Flèche orientée émetteur vers récepteur avec nom", "Losange", "Connecteur ET"],
      answer: 1
    },
    {
      id: 10,
      question: "MCC montrant uniquement l'organisation et ses partenaires externes ?",
      options: ["Le diagramme de contexte", "Le modèle physique", "La matrice des dépendances", "Le dialogue HM"],
      answer: 0
    },
    {
      id: 11,
      question: "Montre-t-on les flux entre acteurs internes dans un diagramme de contexte ?",
      options: ["Oui, en détail", "Non, uniquement les interactions avec l'extérieur", "Si argent inclus", "Pour MySQL"],
      answer: 1
    },
    {
      id: 12,
      question: "Qu'est-ce qu'un flux conceptuel ?",
      options: [
        "Flux décrivant la technologie (SMS, mail)",
        "Flux stable décrivant la nature de l'information (ex: Commande)",
        "Flux vide",
        "Erreur"
      ],
      answer: 1
    },
    {
      id: 13,
      question: "Le MCC s'intéresse-t-il au support technique (papier, mail, tel) ?",
      options: ["Oui, priorité", "Non, fait abstraction des supports physiques", "Pour le service info", "Avec React"],
      answer: 1
    },
    {
      id: 14,
      question: "Éclater un acteur interne complexe en sous-acteurs ?",
      options: ["Normalisation", "Le zoom (ou décomposition)", "Effondrement", "Dérivation"],
      answer: 1
    },
    {
      id: 15,
      question: "Intersection Ligne A et Colonne B dans la matrice des flux ?",
      options: ["Clé primaire", "Flux envoyés par A vers B", "Synchronisation", "Impossible"],
      answer: 1
    },
    {
      id: 16,
      question: "Le MCC intègre-t-il la chronologie exacte des tâches ?",
      options: ["Oui, à la seconde", "Non, affiche sans contrainte de temps strict", "Pour la nuit", "Si externe"],
      answer: 1
    },
    {
      id: 17,
      question: "Un flux peut-il aller directement d'un acteur externe à un autre externe ?",
      options: ["Oui, fréquent", "Non, uniquement les flux impactant le domaine", "Entre banques", "Niveau logique"],
      answer: 1
    },
    {
      id: 18,
      question: "Qu'est-ce qu'un dictionnaire des flux ?",
      options: ["Livre de traduction", "Document décrivant le contenu de chaque flux", "Table SQL", "Liste de mails"],
      answer: 1
    },
    {
      id: 19,
      question: "Étape de réalisation du MCC ?",
      options: ["Maintenance", "Début (étude préalable/besoins)", "Configuration Linux", "Avant déploiement"],
      answer: 1
    },
    {
      id: 20,
      question: "Modèle suivant après validation du MCC ?",
      options: ["MPD", "Modèle Conceptuel des Traitements (MCT)", "1FN", "React"],
      answer: 1
    }
  ]
};