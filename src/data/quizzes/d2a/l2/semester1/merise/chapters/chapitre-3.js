export const chapter3 = {
  id: "chapter-3",
  title: "MCT",
  questions: [
    {
      id: 1,
      question: "Question centrale du MCT",
      options: [
        "Qui exécute ?",
        "Quelles réactions face aux événements (QUOI) ?",
        "Comment stocker ?",
        "Quel langage utiliser ?"
      ],
      answer: 1
    },
    {
      id: 2,
      question: "Le MCT dépend-il de l'organisation (lieux, temps)",
      options: [
        "Oui, précisément",
        "Non, indépendant de l'organisation et de la technique",
        "Uniquement pour l'externe",
        "Si SGBD utilisé"
      ],
      answer: 1
    },
    {
      id: 3,
      question: "Qu'est-ce qu'une opération conceptuelle",
      options: [
        "Fonction mathématique",
        "Traitements déclenchés par événements, ininterruptibles",
        "Modification SQL",
        "Session utilisateur"
      ],
      answer: 1
    },
    {
      id: 4,
      question: "Règle d'or d'une opération",
      options: [
        "Mise en pause possible",
        "Ininterrompue jusqu'aux résultats",
        "Moins d'une minute",
        "Intervention humaine requise"
      ],
      answer: 1
    },
    {
      id: 5,
      question: "Qu'est-ce qu'un événement",
      options: [
        "Fait qui sollicite le système ou en résulte",
        "Panne matérielle",
        "Alerte SQL",
        "Choix de mot de passe"
      ],
      answer: 0
    },
    {
      id: 6,
      question: "Événement venant de l'extérieur du domaine",
      options: ["Interne", "Externe (déclencheur)", "Calculé", "Temporel"],
      answer: 1
    },
    {
      id: 7,
      question: "Événement produit destiné au système lui-même",
      options: ["Externe", "Interne (résultat)", "Flux de contexte", "Contrainte"],
      answer: 1
    },
    {
      id: 8,
      question: "Qu'est-ce qu'une synchronisation",
      options: [
        "Mise à jour temps réel",
        "Condition logique des événements pour déclencher l'opération",
        "Lien d'héritage",
        "Attente réseau"
      ],
      answer: 1
    },
    {
      id: 9,
      question: "Opérateur si TOUS les événements d'entrée sont requis",
      options: ["OU", "ET", "NON", "XOR"],
      answer: 1
    },
    {
      id: 10,
      question: "Opérateur si au moins UN SEUL événement suffit",
      options: ["ET", "OU", "NON", "NAND"],
      answer: 1
    },
    {
      id: 11,
      question: "Qu'est-ce qu'une règle d'émission",
      options: [
        "Condition de production d'un événement de sortie",
        "Loi de chiffrement",
        "Protocole IP",
        "Restriction base"
      ],
      answer: 0
    },
    {
      id: 12,
      question: "Règle d'émission 'Toujours'",
      options: [
        "Si erreur",
        "Événement systématiquement produit",
        "Boucle infinie",
        "Asynchrone"
      ],
      answer: 1
    },
    {
      id: 13,
      question: "Règles d'émission logiques pour une vérification de stock",
      options: [
        "PK / FK",
        "[Si disponible] / [Si rupture]",
        "ET / OU",
        "INSERT / UPDATE"
      ],
      answer: 1
    },
    {
      id: 14,
      question: "Qu'est-ce qu'un processus au sens MCT",
      options: [
        "Programme Linux",
        "Sous-ensemble d'opérations pour un même but",
        "Attributs atomiques",
        "Schéma logique"
      ],
      answer: 1
    },
    {
      id: 15,
      question: "Origine des événements externes du MCT",
      options: ["Tables MLD", "Flux du MCC", "Scripts", "Stockage physique"],
      answer: 1
    },
    {
      id: 16,
      question: "Type de l'événement 'Date = 31 décembre'",
      options: ["Interne", "Temporel", "Conditionnel", "Calculé"],
      answer: 1
    },
    {
      id: 17,
      question: "Position graphique de la synchronisation",
      options: ["Dans l'opération", "Au-dessus de l'opération", "En bas de page", "Dans l'association"],
      answer: 1
    },
    {
      id: 18,
      question: "Le MCT décrit-il les technologies",
      options: ["Oui (diagrammes)", "Non, abstraction complète", "Pour les paiements", "À l'Université"],
      answer: 1
    },
    {
      id: 19,
      question: "Relation MCT et MOT",
      options: [
        "MOT remplace MCT",
        "MOT intègre l'organisation (Qui, Où, Quand) au MCT",
        "MCT généré par MOT",
        "Aucun rapport"
      ],
      answer: 1
    },
    {
      id: 20,
      question: "Structure graphique des traitements du MCT",
      options: ["Graphe d'ordonnancement", "Diagramme de classes", "Table de données", "Matrice DF"],
      answer: 0
    }
  ]
};