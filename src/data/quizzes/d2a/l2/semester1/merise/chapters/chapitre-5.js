export const chapter5 = {
  id: "chapter-5",
  title: "Le MRD",
  questions: [
    {
      id: 1,
      question: "Dans le Modèle Relationnel de Données (MRD), qu'est-ce qu'une relation ?",
      options: [
        "Un lien graphique entre deux carrés",
        "Une table de données bidimensionnelle composée de lignes et de colonnes",
        "Une fonction informatique de calcul",
        "Un dossier de stockage système"
      ],
      answer: 1
    },
    {
      id: 2,
      question: "Dans le MRD, comment appelle-t-on formellement une ligne de la table ?",
      options: [
        "Un attribut",
        "Un n-uplet (ou tuple)",
        "Un domaine",
        "Un schéma"
      ],
      answer: 1
    },
    {
      id: 3,
      question: "Dans le MRD, comment appelle-t-on formellement une colonne de la table ?",
      options: [
        "Un tuple",
        "Un attribut",
        "Une occurrence",
        "Une relation"
      ],
      answer: 1
    },
    {
      id: 4,
      question: "Qu'est-ce que le 'domaine' d'un attribut dans le MRD ?",
      options: [
        "Le nom de l'ordinateur serveur",
        "L'ensemble des valeurs légales et admissibles pour cet attribut",
        "L'adresse mémoire de la colonne",
        "Le site web associé à la base"
      ],
      answer: 1
    },
    {
      id: 5,
      question: "Qu'est-ce que la 'cardinalité' d'une relation au sens mathématique du MRD ?",
      options: [
        "Le nombre de colonnes de la table",
        "Le nombre de n-uplets (lignes) que contient la relation",
        "Le type de la clé primaire",
        "Les contraintes (0,n) du schéma"
      ],
      answer: 1
    },
    {
      id: 6,
      question: "Qu'est-ce que le 'degré' (ou arité) d'une relation dans le MRD ?",
      options: [
        "Le niveau de sécurité de la table",
        "Le nombre d'attributs (colonnes) qui composent la relation",
        "Le nombre de clés étrangères",
        "La vitesse d'exécution d'une requête"
      ],
      answer: 1
    },
    {
      id: 7,
      question: "Quelle est la définition stricte d'une super-clé dans le MRD ?",
      options: [
        "Une clé qui chiffre l'ensemble de la base",
        "Un ensemble d'attributs dont les valeurs permettent d'identifier de façon unique un tuple",
        "Une clé primaire issue d'une association réflexive",
        "La clé d'accès de l'administrateur"
      ],
      answer: 1
    },
    {
      id: 8,
      question: "Qu'est-ce qu'une clé candidate dans le MRD ?",
      options: [
        "Une clé primaire minimale (aucune sous-partie ne peut être une clé)",
        "Une clé qui attend d'être validée par le SGBD",
        "Une colonne qui contient des valeurs nulles",
        "Une clé étrangère sans index"
      ],
      answer: 0
    },
    {
      id: 9,
      question: "Parmi les clés candidates, celle qui est choisie pour indexer de façon principale la relation s'appelle :",
      options: [
        "La clé secondaire",
        "La clé primaire",
        "La clé candidate externe",
        "La clé de hachage"
      ],
      answer: 1
    },
    {
      id: 10,
      question: "Dans le formalisme textuel d'un schéma de relation, comment indique-t-on la clé primaire ?",
      options: [
        "On la met en gras et italique",
        "On la souligne",
        "On la précède d'une flèche",
        "On la met entre crochets"
      ],
      answer: 1
    },
    {
      id: 11,
      question: "Dans l'algèbre relationnelle, quelle opération permet d'extraire un sous-ensemble de lignes vérifiant une condition ?",
      options: [
        "La projection",
        "La sélection (ou restriction)",
        "La jointure",
        "L'union"
      ],
      answer: 1
    },
    {
      id: 12,
      question: "Dans l'algèbre relationnelle, quelle opération permet de ne conserver que certaines colonnes d'une relation ?",
      options: [
        "La sélection",
        "La projection",
        "L'intersection",
        "La division"
      ],
      answer: 1
    },
    {
      id: 13,
      question: "Quelle opération algébrique permet de combiner les tuples de deux relations ayant un attribut commun ?",
      options: [
        "La projection",
        "La jointure",
        "La différence",
        "Le produit cartésien"
      ],
      answer: 1
    },
    {
      id: 14,
      question: "Dans le MRD, l'ordre des lignes (tuples) dans une relation a-t-il une importance mathématique ?",
      options: [
        "Oui, les lignes doivent être triées par clé primaire",
        "Non, une relation est un ensemble non ordonné au sens mathématique",
        "Uniquement pour les clés étrangères",
        "Seulement si la table contient des chaînes de caractères"
      ],
      answer: 1
    },
    {
      id: 15,
      question: "Deux tuples d'une même relation peuvent-ils être strictement identiques dans le MRD ?",
      options: [
        "Oui, si la clé primaire est automatique",
        "Non, l'unicité de la clé primaire garantit que chaque tuple est unique",
        "Uniquement dans les tables intermédiaires",
        "Seulement si l'attribut est nul"
      ],
      answer: 1
    },
    {
      id: 16,
      question: "Qu'est-ce que l'intégrité de l'entité dans le MRD ?",
      options: [
        "Une règle qui interdit la suppression de la table",
        "Une contrainte stipulant qu'aucun attribut de la clé primaire ne peut être NULL",
        "Une technique de chiffrement matériel",
        "L'obligation de lier toutes les tables entre elles"
      ],
      answer: 1
    },
    {
      id: 17,
      question: "Qu'est-ce qu'une anomalie de suppression dans une base non normalisée ?",
      options: [
        "Le plantage du SGBD lors d'un DROP TABLE",
        "La perte involontaire d'informations cruciales en effaçant une simple ligne",
        "L'impossibilité d'utiliser la clause WHERE",
        "Une erreur de syntaxe SQL"
      ],
      answer: 1
    },
    {
      id: 18,
      question: "Dans l'algèbre relationnelle, quel symbole grec est traditionnellement associé à la Sélection ?",
      options: [
        "π (Pi)",
        "σ (Sigma)",
        "λ (Lambda)",
        "ω (Omega)"
      ],
      answer: 1
    },
    {
      id: 19,
      question: "Dans l'algèbre relationnelle, quel symbole grec est traditionnellement associé à la Projection ?",
      options: [
        "σ (Sigma)",
        "π (Pi)",
        "μ (Mu)",
        "θ (Theta)"
      ],
      answer: 1
    },
    {
      id: 20,
      question: "Quelle est la traduction en langage SQL de l'opération de Projection de l'algèbre relationnelle ?",
      options: [
        "La clause WHERE",
        "La liste des colonnes spécifiée immédiatement après le mot-clé SELECT",
        "La clause FROM",
        "La commande JOIN"
      ],
      answer: 1
    }
  ]
};