export const chapter4 = {
  id: "chapter-4",
  title: "Le MCD",
  questions: [
    {
      id: 1,
      question: "Qu'est-ce qu'une entité",
      options: [
        "Table SQL",
        "Objet concret ou abstrait avec existence propre",
        "Lien entre fichiers",
        "Colonne numérique"
      ],
      answer: 1
    },
    {
      id: 2,
      question: "Caractéristique élémentaire décrivant une entité",
      options: ["Identifiant", "Propriété (ou attribut)", "Occurrence", "Cardinalité"],
      answer: 1
    },
    {
      id: 3,
      question: "Qu'est-ce qu'une occurrence",
      options: [
        "Un exemplaire ou enregistrement particulier",
        "Nombre total de lignes",
        "Type de l'identifiant",
        "Erreur de redondance"
      ],
      answer: 0
    },
    {
      id: 4,
      question: "Rôle obligatoire de l'identifiant",
      options: [
        "Trier par ordre alphabétique",
        "Désigner de façon unique chaque occurrence",
        "Créer un lien web",
        "Empêcher la suppression"
      ],
      answer: 1
    },
    {
      id: 5,
      question: "Représentation graphique de l'identifiant",
      options: ["En italique", "Souligné", "Pointillés", "Précédé d'une étoile"],
      answer: 1
    },
    {
      id: 6,
      question: "Qu'est-ce qu'une association",
      options: [
        "Fichier de configuration",
        "Lien sémantique entre entités",
        "Clé étrangère",
        "Commande d'insertion"
      ],
      answer: 1
    },
    {
      id: 7,
      question: "Nombre d'entités connectées à une association",
      options: ["Cardinalité", "Dimension de l'association", "Indice de transitivité", "Multiplicité"],
      answer: 1
    },
    {
      id: 8,
      question: "Qu'est-ce qu'une association réflexive",
      options: [
        "Association d'une entité avec elle-même",
        "Association sans propriété",
        "Relation intraduisible",
        "Lien entre +4 entités"
      ],
      answer: 0
    },
    {
      id: 9,
      question: "Que représente la cardinalité minimale",
      options: [
        "Nombre minimum de participations d'une occurrence",
        "Nombre minimal de colonnes",
        "Taille en octets",
        "Clés étrangères requises"
      ],
      answer: 0
    },
    {
      id: 10,
      question: "Que représente la cardinalité maximale",
      options: [
        "Nombre maximum de participations d'une occurrence",
        "Limite du SGBD",
        "Nombre total de lignes",
        "Utilisateurs simultanés"
      ],
      answer: 0
    },
    {
      id: 11,
      question: "Cardinalité d'un étudiant inscrit dans UN SEUL groupe",
      options: ["0,n", "1,1", "0,1", "1,n"],
      answer: 1
    },
    {
      id: 12,
      question: "Cardinalité d'un groupe contenant de 0 à n étudiants",
      options: ["1,1", "0,n", "1,n", "0,1"],
      answer: 1
    },
    {
      id: 13,
      question: "Une association peut-elle avoir des propriétés",
      options: [
        "Non, impossible",
        "Oui, si elles dépendent des entités reliées (ex: Quantité)",
        "Si dimension supérieure à 3",
        "Seulement de type Date"
      ],
      answer: 1
    },
    {
      id: 14,
      question: "Qu'est-ce qu'un dictionnaire des données",
      options: [
        "Manuel SQL",
        "Document recensant toutes les propriétés du MCD",
        "Répertoire de mots de passe",
        "Code source React"
      ],
      answer: 1
    },
    {
      id: 15,
      question: "Règle interdisant un même nom pour deux choses différentes",
      options: ["Élimination des synonymes", "Élimination des polysèmes", "Atomicité", "2FN"],
      answer: 1
    },
    {
      id: 16,
      question: "Principe d'atomicité d'une propriété",
      options: [
        "Chiffrement requis",
        "Non décomposable en sous-informations",
        "Nombre entier obligatoire",
        "Partagée par tous"
      ],
      answer: 1
    },
    {
      id: 17,
      question: "Dans 'Un auteur écrit des livres', qu'est-ce que 'écrit'",
      options: ["L'entité", "L'association", "L'identifiant", "L'occurrence"],
      answer: 1
    },
    {
      id: 18,
      question: "Qu'est-ce qu'une dépendance fonctionnelle (A -> B)",
      options: [
        "Fonction en langage C",
        "La valeur de A détermine une seule valeur de B",
        "Lien réseau",
        "Contrainte SQL"
      ],
      answer: 1
    },
    {
      id: 19,
      question: "Le MCD dépend-il du type de SGBD (MySQL, Oracle)",
      options: ["Oui, totalement", "Non, indépendant de la technique", "Pour les types numériques", "Si appli en ligne"],
      answer: 1
    },
    {
      id: 20,
      question: "Étape immédiate après la validation du MCD",
      options: ["Code HTML/CSS", "Dérivation en MLD", "Serveur Ubuntu", "Configuration DHCP"],
      answer: 1
    }
  ]
};