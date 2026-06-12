export const chapter5 = {
  id: "chapter-5",
  title: "Le MRD",
  questions: [
    {
      id: 1,
      question: "Qu'est-ce qu'une relation ?",
      options: [
        "Lien graphique",
        "Table bidimensionnelle (lignes et colonnes)",
        "Fonction informatique",
        "Dossier système"
      ],
      answer: 1
    },
    {
      id: 2,
      question: "Nom formel d'une ligne de table ?",
      options: ["Attribut", "n-uplet (ou tuple)", "Domaine", "Schéma"],
      answer: 1
    },
    {
      id: 3,
      question: "Nom formel d'une colonne de table ?",
      options: ["Tuple", "Attribut", "Occurrence", "Relation"],
      answer: 1
    },
    {
      id: 4,
      question: "Qu'est-ce que le domaine d'un attribut ?",
      options: [
        "Nom du serveur",
        "Ensemble des valeurs légales admissibles",
        "Adresse mémoire",
        "Site web associé"
      ],
      answer: 1
    },
    {
      id: 5,
      question: "Cardinalité d'une relation au sens MRD ?",
      options: ["Nombre de colonnes", "Nombre de n-uplets (lignes)", "Type de PK", "Contraintes (0,n)"],
      answer: 1
    },
    {
      id: 6,
      question: "Degré (ou arité) d'une relation ?",
      options: ["Niveau de sécurité", "Nombre d'attributs (colonnes)", "Nombre de FK", "Vitesse de requête"],
      answer: 1
    },
    {
      id: 7,
      question: "Définition d'une super-clé ?",
      options: [
        "Clé de chiffrement",
        "Attributs identifiant de façon unique un tuple",
        "PK réflexive",
        "Clé administrateur"
      ],
      answer: 1
    },
    {
      id: 8,
      question: "Qu'est-ce qu'une clé candidate ?",
      options: ["Clé primaire minimale", "Clé en attente", "Colonne avec NULL", "FK sans index"],
      answer: 0
    },
    {
      id: 9,
      question: "Clé candidate choisie comme index principal ?",
      options: ["Clé secondaire", "Clé primaire", "Clé externe", "Clé de hachage"],
      answer: 1
    },
    {
      id: 10,
      question: "Représentation textuelle de la clé primaire ?",
      options: ["Gras et italique", "Soulignée", "Précédée d'une flèche", "Entre crochets"],
      answer: 1
    },
    {
      id: 11,
      question: "Opération pour extraire des lignes selon une condition ?",
      options: ["Projection", "Sélection (ou restriction)", "Jointure", "Union"],
      answer: 1
    },
    {
      id: 12,
      question: "Opération pour ne conserver que certaines colonnes ?",
      options: ["Sélection", "Projection", "Intersection", "Division"],
      answer: 1
    },
    {
      id: 13,
      question: "Opération pour combiner deux relations via un attribut commun ?",
      options: ["Projection", "Jointure", "Différence", "Produit cartésien"],
      answer: 1
    },
    {
      id: 14,
      question: "L'ordre des lignes a-t-il une importance mathématique ?",
      options: ["Oui, tri obligatoire", "Non, ensemble non ordonné", "Pour les FK", "Si texte"],
      answer: 1
    },
    {
      id: 15,
      question: "Deux tuples peuvent-ils être strictement identiques ?",
      options: ["Oui, si PK automatique", "Non, l'unicité de la PK l'interdit", "Dans tables intermédiaires", "Si attribut nul"],
      answer: 1
    },
    {
      id: 16,
      question: "Qu'est-ce que l'intégrité de l'entité ?",
      options: [
        "Interdiction de DROP TABLE",
        "Aucun attribut de la PK ne peut être NULL",
        "Chiffrement matériel",
        "Liaison obligatoire"
      ],
      answer: 1
    },
    {
      id: 17,
      question: "Qu'est-ce qu'une anomalie de suppression ?",
      options: ["Plantage DROP TABLE", "Perte involontaire d'infos en effaçant une ligne", "Clause WHERE bloquée", "Erreur SQL"],
      answer: 1
    },
    {
      id: 18,
      question: "Symbole grec associé à la Sélection ?",
      options: ["π (Pi)", "σ (Sigma)", "λ (Lambda)", "ω (Omega)"],
      answer: 1
    },
    {
      id: 19,
      question: "Symbole grec associé à la Projection ?",
      options: ["σ (Sigma)", "π (Pi)", "μ (Mu)", "θ (Theta)"],
      answer: 1
    },
    {
      id: 20,
      question: "Traduction SQL de la Projection ?",
      options: ["Clause WHERE", "Liste des colonnes après SELECT", "Clause FROM", "Commande JOIN"],
      answer: 1
    }
  ]
};