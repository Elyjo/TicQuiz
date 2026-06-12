export const chapter4 = {
  id: "chapter-4",
  title: "Programmation Orientée Objet",
  questions: [
    {
      id: 1,
      question: "Quel mécanisme JavaScript utilise-t-il par nature pour l'héritage d'objets ?",
      options: [
        "Les classes pures",
        "Les prototypes",
        "Les closures",
        "Les interfaces"
      ],
      answer: 1
    },
    {
      id: 2,
      question: "Quel mot-clé ES6 introduit la structure de classe en JavaScript ?",
      options: [
        "struct",
        "prototype",
        "class",
        "constructor"
      ],
      answer: 2
    },
    {
      id: 3,
      question: "Quelle méthode initialise les propriétés d'un objet dans une classe ?",
      options: [
        "init()",
        "constructor()",
        "create()",
        "setup()"
      ],
      answer: 1
    },
    {
      id: 4,
      question: "Quel mot-clé permet à une classe d'hériter d'une autre classe ?",
      options: [
        "implements",
        "extends",
        "prototype",
        "inherits"
      ],
      answer: 1
    },
    {
      id: 5,
      question: "Comment appelle-t-on le constructeur parent depuis une classe fille ?",
      options: [
        "parent()",
        "this()",
        "super()",
        "ancestor()"
      ],
      answer: 2
    },
    {
      id: 6,
      question: "Depuis ES2022, quel symbole déclare une propriété privée dans une classe ?",
      options: [
        "L'underscore _",
        "Le dollar $",
        "Le mot-clé private",
        "Le symbole dièse #"
      ],
      answer: 3
    },
    {
      id: 7,
      question: "Qu'est-ce qu'une méthode statique ?",
      options: [
        "Une méthode appelée sur l'instance",
        "Une méthode qui ne bouge pas",
        "Une méthode appelée directement sur la classe",
        "Une méthode privée"
      ],
      answer: 2
    },
    {
      id: 8,
      question: "Quel mot-clé définit un accesseur pour lire une propriété comme un champ ?",
      options: [
        "get",
        "set",
        "read",
        "fetch"
      ],
      answer: 0
    },
    {
      id: 9,
      question: "Quel mot-clé définit un mutateur pour modifier une propriété ?",
      options: [
        "get",
        "set",
        "write",
        "update"
      ],
      answer: 1
    },
    {
      id: 10,
      question: "Avant l'ES6, comment créait-on un modèle d'objet réutilisable ?",
      options: [
        "Avec des objets JSON",
        "Avec des fonctions constructeurs",
        "Avec des balises script",
        "Avec des tableaux"
      ],
      answer: 1
    },
    {
      id: 11,
      question: "Quel opérateur instancie un objet à partir d'une classe ou d'un constructeur ?",
      options: [
        "create",
        "instanceof",
        "new",
        "make"
      ],
      answer: 2
    },
    {
      id: 12,
      question: "Quel opérateur vérifie si un objet est une instance d'une classe spécifique ?",
      options: [
        "typeof",
        "instanceof",
        "isPrototypeOf",
        "check"
      ],
      answer: 1
    },
    {
      id: 13,
      question: "Où sont partagées les méthodes pour éviter de les dupliquer en mémoire ?",
      options: [
        "Dans l'instance",
        "Dans le prototype de la fonction/classe",
        "Dans la variable globale",
        "Dans le localStorage"
      ],
      answer: 1
    },
    {
      id: 14,
      question: "Que vaut 'this' par défaut dans une méthode appelée hors de tout contexte ?",
      options: [
        "L'objet lui-même",
        "undefined (en mode strict)",
        "null",
        "Le prototype"
      ],
      answer: 1
    },
    {
      id: 15,
      question: "Quelle est la particularité des fonctions fléchées vis-à-vis de 'this' ?",
      options: [
        "Elles n'ont pas de 'this' propre (lexical)",
        "Elles forcent 'this' à valoir null",
        "Elles modifient 'this' à chaque appel",
        "Elles créent un nouveau prototype"
      ],
      answer: 0
    },
    {
      id: 16,
      question: "Quelle méthode d'objet permet d'emprunter une fonction en fixant 'this' immédiatement ?",
      options: [
        "call() ou apply()",
        "bind()",
        "link()",
        "connect()"
      ],
      answer: 0
    },
    {
      id: 17,
      question: "Quelle méthode crée une nouvelle fonction avec un 'this' définitivement lié ?",
      options: [
        "call()",
        "apply()",
        "bind()",
        "attach()"
      ],
      answer: 2
    },
    {
      id: 18,
      question: "Comment appelle-t-on la chaîne liant un objet à ses ancêtres ?",
      options: [
        "La chaîne de portée",
        "La chaîne de prototypes",
        "Le scope global",
        "La structure de classe"
      ],
      answer: 1
    },
    {
      id: 19,
      question: "Quelle méthode statique de Object crée un objet en spécifiant son prototype ?",
      options: [
        "Object.new()",
        "Object.create()",
        "Object.assign()",
        "Object.prototype()"
      ],
      answer: 1
    },
    {
      id: 20,
      question: "En JavaScript, qu'arrive-t-il si on redéfinit une méthode parente dans la classe fille ?",
      options: [
        "Erreur de compilation",
        "Elle surcharge (override) la méthode parente",
        "Elle supprime la classe parente",
        "Le code l'ignore"
      ],
      answer: 1
    }
  ]
};