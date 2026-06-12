export const chapter4 = {
  id: "chapter-4",
  title: "Programmation Orientée Objet",
  questions: [
    {
      id: 1,
      question: "Mécanisme JavaScript natif pour l'héritage d'objets ?",
      options: ["Classes pures", "Prototypes", "Closures", "Interfaces"],
      answer: 1,
    },
    {
      id: 2,
      question: "Mot-clé ES6 introduisant la structure de classe ?",
      options: ["struct", "prototype", "class", "constructor"],
      answer: 2,
    },
    {
      id: 3,
      question: "Méthode initialisant les propriétés dans une classe ?",
      options: ["init()", "constructor()", "create()", "setup()"],
      answer: 1,
    },
    {
      id: 4,
      question: "Mot-clé permettant à une classe d'hériter d'une autre ?",
      options: ["implements", "extends", "prototype", "inherits"],
      answer: 1,
    },
    {
      id: 5,
      question: "Appel du constructeur parent depuis une classe fille ?",
      options: ["parent()", "this()", "super()", "ancestor()"],
      answer: 2,
    },
    {
      id: 6,
      question: "Symbole déclarant une propriété privée dans une classe ?",
      options: ["Underscore _", "Dollar $", "Mot-clé private", "Dièse #"],
      answer: 3,
    },
    {
      id: 7,
      question: "Qu'est-ce qu'une méthode statique ?",
      options: [
        "Appelée sur l'instance",
        "Immuable",
        "Appelée directement sur la classe",
        "Privée",
      ],
      answer: 2,
    },
    {
      id: 8,
      question: "Mot-clé définissant un accesseur pour lire une propriété ?",
      options: ["get", "set", "read", "fetch"],
      answer: 0,
    },
    {
      id: 9,
      question: "Mot-clé définissant un mutateur pour modifier une propriété ?",
      options: ["get", "set", "write", "update"],
      answer: 1,
    },
    {
      id: 10,
      question: "Modèle d'objet réutilisable avant l'ES6 ?",
      options: [
        "Objets JSON",
        "Fonctions constructeurs",
        "Balises script",
        "Tableaux",
      ],
      answer: 1,
    },
    {
      id: 11,
      question: "Opérateur instanciant un objet à partir d'une classe ?",
      options: ["create", "instanceof", "new", "make"],
      answer: 2,
    },
    {
      id: 12,
      question: "Opérateur vérifiant si un objet est l'instance d'une classe ?",
      options: ["typeof", "instanceof", "isPrototypeOf", "check"],
      answer: 1,
    },
    {
      id: 13,
      question: "Où sont partagées les méthodes pour éviter de les dupliquer ?",
      options: [
        "Dans l'instance",
        "Dans le prototype",
        "En variable globale",
        "Dans le localStorage",
      ],
      answer: 1,
    },
    {
      id: 14,
      question: "Valeur de 'this' dans une méthode appelée hors contexte ?",
      options: [
        "L'objet lui-même",
        "undefined (mode strict)",
        "null",
        "Le prototype",
      ],
      answer: 1,
    },
    {
      id: 15,
      question: "Particularité des fonctions fléchées vis-à-vis de 'this' ?",
      options: [
        "Pas de 'this' propre (lexical)",
        "Forcent 'this' à null",
        "Modifié à chaque appel",
        "Créent un prototype",
      ],
      answer: 0,
    },
    {
      id: 16,
      question:
        "Méthode empruntant une fonction en fixant 'this' immédiatement ?",
      options: ["call() ou apply()", "bind()", "link()", "connect()"],
      answer: 0,
    },
    {
      id: 17,
      question:
        "Méthode créant une fonction avec un 'this' définitivement lié ?",
      options: ["call()", "apply()", "bind()", "attach()"],
      answer: 2,
    },
    {
      id: 18,
      question: "Nom de la chaîne liant un objet à ses ancêtres ?",
      options: [
        "Chaîne de portée",
        "Chaîne de prototypes",
        "Scope global",
        "Structure de classe",
      ],
      answer: 1,
    },
    {
      id: 19,
      question: "Méthode statique créant un objet avec un prototype spécifié ?",
      options: [
        "Object.new()",
        "Object.create()",
        "Object.assign()",
        "Object.prototype()",
      ],
      answer: 1,
    },
    {
      id: 20,
      question: "Effet d'une redéfinition de méthode parente en classe fille ?",
      options: [
        "Erreur compilation",
        "Surcharge (override)",
        "Suppression du parent",
        "Ignoré",
      ],
      answer: 1,
    },
  ],
};
