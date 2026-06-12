export const chapter3 = {
  id: "chapter-3",
  title: "Tableaux et Objets",
  questions: [
    {
      id: 1,
      question: "Propriété donnant le nombre d'éléments d'un tableau ?",
      options: ["size", "count", "length", "index"],
      answer: 2
    },
    {
      id: 2,
      question: "Méthode ajoutant un élément à la FIN d'un tableau ?",
      options: ["pop()", "push()", "shift()", "unshift()"],
      answer: 1
    },
    {
      id: 3,
      question: "Méthode supprimant le DERNIER élément d'un tableau ?",
      options: ["pop()", "push()", "shift()", "unshift()"],
      answer: 0
    },
    {
      id: 4,
      question: "Méthode ajoutant un élément au DÉBUT d'un tableau ?",
      options: ["push()", "pop()", "shift()", "unshift()"],
      answer: 3
    },
    {
      id: 5,
      question: "Méthode supprimant le PREMIER élément d'un tableau ?",
      options: ["pop()", "shift()", "unshift()", "splice()"],
      answer: 1
    },
    {
      id: 6,
      question: "Méthode transformant un tableau en chaîne avec séparateur ?",
      options: ["split()", "concat()", "join()", "slice()"],
      answer: 2
    },
    {
      id: 7,
      question: "Syntaxe créant une copie superficielle (shallow) via Spread ?",
      options: ["const copie = [...monTab];", "const copie = tab.copy();", "const copie = &monTab;", "const copie = [monTab];"],
      answer: 0
    },
    {
      id: 8,
      question: "Effet de la méthode splice(1, 2) sur un tableau ?",
      options: ["Copie de l'index 1 à 2", "Supprime 2 éléments depuis l'index 1", "Ajoute deux éléments", "Divise le tableau"],
      answer: 1
    },
    {
      id: 9,
      question: "Comment supprimer la propriété 'age' d'un objet 'user' ?",
      options: ["user.age = null;", "remove user.age;", "delete user.age;", "unset(user.age);"],
      answer: 2
    },
    {
      id: 10,
      question: "Méthode renvoyant un tableau de toutes les clés d'un objet ?",
      options: ["Object.values()", "Object.keys()", "Object.entries()", "Object.clés()"],
      answer: 1
    },
    {
      id: 11,
      question: "Méthode renvoyant un tableau de toutes les valeurs d'un objet ?",
      options: ["Object.keys()", "Object.values()", "Object.entries()", "Object.data()"],
      answer: 1
    },
    {
      id: 12,
      question: "Méthode créant une copie profonde (deep copy) via JSON ?",
      options: ["JSON.stringify(JSON.parse(obj))", "JSON.parse(JSON.stringify(obj))", "Object.assign({}, obj)", "{...obj}"],
      answer: 1
    },
    {
      id: 13,
      question: "Dans une méthode, à quoi fait référence le mot-clé 'this' ?",
      options: ["À la fonction globale", "À l'objet lui-même", "Au prototype", "À la variable parente"],
      answer: 1
    },
    {
      id: 14,
      question: "Méthode créant un tableau en transformant chaque élément ?",
      options: ["forEach()", "filter()", "map()", "reduce()"],
      answer: 2
    },
    {
      id: 15,
      question: "Méthode créant un tableau avec les éléments validant un test ?",
      options: ["map()", "filter()", "find()", "some()"],
      answer: 1
    },
    {
      id: 16,
      question: "Méthode accumulant les valeurs pour un résultat unique ?",
      options: ["reduce()", "map()", "filter()", "every()"],
      answer: 0
    },
    {
      id: 17,
      question: "Comment vérifier si la clé 'adresse' existe dans 'user' ?",
      options: ["if (user.adresse !# null)", "if ('adresse' in user)", "if (user.has('adresse'))", "if (user == adresse)"],
      answer: 1
    },
    {
      id: 18,
      question: "Méthode testant si AU MOINS UN élément remplit une condition ?",
      options: ["every()", "some()", "filter()", "find()"],
      answer: 1
    },
    {
      id: 19,
      question: "Méthode testant si TOUS les éléments remplissent une condition ?",
      options: ["some()", "every()", "map()", "filter()"],
      answer: 1
    },
    {
      id: 20,
      question: "Quelle est la nature d'un tableau (Array) en JavaScript ?",
      options: ["Type primitif spécial", "Objet particulier à clés numériques", "Structure immuable", "Liste chaînée"],
      answer: 1
    }
  ]
};