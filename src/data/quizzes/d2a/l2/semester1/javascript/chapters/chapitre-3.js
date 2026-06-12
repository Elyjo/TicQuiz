export const chapter3 = {
  id: "chapter-3",
  title: "Tableaux et Objets",
  questions: [
    {
      id: 1,
      question: "Quelle propriété donne le nombre d'éléments d'un tableau ?",
      options: [
        "size",
        "count",
        "length",
        "index"
      ],
      answer: 2
    },
    {
      id: 2,
      question: "Quelle méthode ajoute un élément à la FIN d'un tableau ?",
      options: [
        "pop()",
        "push()",
        "shift()",
        "unshift()"
      ],
      answer: 1
    },
    {
      id: 3,
      question: "Quelle méthode supprime le DERNIER élément d'un tableau ?",
      options: [
        "pop()",
        "push()",
        "shift()",
        "unshift()"
      ],
      answer: 0
    },
    {
      id: 4,
      question: "Quelle méthode ajoute un élément au DÉBUT d'un tableau ?",
      options: [
        "push()",
        "pop()",
        "shift()",
        "unshift()"
      ],
      answer: 3
    },
    {
      id: 5,
      question: "Quelle méthode supprime le PREMIER élément d'un tableau ?",
      options: [
        "pop()",
        "shift()",
        "unshift()",
        "splice()"
      ],
      answer: 1
    },
    {
      id: 6,
      question: "Quelle méthode transforme un tableau en chaîne avec un séparateur ?",
      options: [
        "split()",
        "concat()",
        "join()",
        "slice()"
      ],
      answer: 2
    },
    {
      id: 7,
      question: "Quelle syntaxe crée une copie superficielle (shallow) via le Spread ?",
      options: [
        "const copie = [...monTab];",
        "const copie = tab.copy();",
        "const copie = &monTab;",
        "const copie = [monTab];"
      ],
      answer: 0
    },
    {
      id: 8,
      question: "Que fait la méthode splice(1, 2) sur un tableau ?",
      options: [
        "Copie le tableau de l'index 1 à 2",
        "Supprime 2 éléments à partir de l'index 1",
        "Ajoute deux éléments à l'index 1",
        "Divise le tableau en deux parties"
      ],
      answer: 1
    },
    {
      id: 9,
      question: "Comment supprime-t-on une propriété 'age' d'un objet 'user' ?",
      options: [
        "user.age = null;",
        "remove user.age;",
        "delete user.age;",
        "unset(user.age);"
      ],
      answer: 2
    },
    {
      id: 10,
      question: "Quelle méthode renvoie un tableau contenant toutes les clés d'un objet ?",
      options: [
        "Object.values()",
        "Object.keys()",
        "Object.entries()",
        "Object.clés()"
      ],
      answer: 1
    },
    {
      id: 11,
      question: "Quelle méthode renvoie un tableau contenant toutes les valeurs d'un objet ?",
      options: [
        "Object.keys()",
        "Object.values()",
        "Object.entries()",
        "Object.data()"
      ],
      answer: 1
    },
    {
      id: 12,
      question: "Quelle méthode crée une copie profonde (deep copy) via JSON ?",
      options: [
        "JSON.stringify(JSON.parse(obj))",
        "JSON.parse(JSON.stringify(obj))",
        "Object.assign({}, obj)",
        "{...obj}"
      ],
      answer: 1
    },
    {
      id: 13,
      question: "Dans une méthode d'objet, à quoi fait référence le mot-clé 'this' ?",
      options: [
        "À la fonction globale",
        "À l'objet lui-même",
        "Au prototype global",
        "À la variable parente"
      ],
      answer: 1
    },
    {
      id: 14,
      question: "Quelle méthode crée un nouveau tableau en transformant chaque élément ?",
      options: [
        "forEach()",
        "filter()",
        "map()",
        "reduce()"
      ],
      answer: 2
    },
    {
      id: 15,
      question: "Quelle méthode crée un tableau contenant uniquement les éléments validant un test ?",
      options: [
        "map()",
        "filter()",
        "find()",
        "some()"
      ],
      answer: 1
    },
    {
      id: 16,
      question: "Quelle méthode accumule les valeurs d'un tableau pour renvoyer un résultat unique ?",
      options: [
        "reduce()",
        "map()",
        "filter()",
        "every()"
      ],
      answer: 0
    },
    {
      id: 17,
      question: "Comment vérifie-t-on de manière sécurisée si 'adresse' existe dans 'user' ?",
      options: [
        "if (user.adresse !# null)",
        "if ('adresse' in user)",
        "if (user.has('adresse'))",
        "if (user == adresse)"
      ],
      answer: 1
    },
    {
      id: 18,
      question: "Quelle méthode teste si AU MOINS UN élément du tableau remplit une condition ?",
      options: [
        "every()",
        "some()",
        "filter()",
        "find()"
      ],
      answer: 1
    },
    {
      id: 19,
      question: "Quelle méthode teste si TOUS les éléments d'un tableau remplissent une condition ?",
      options: [
        "some()",
        "every()",
        "map()",
        "filter()"
      ],
      answer: 1
    },
    {
      id: 20,
      question: "Quelle est la nature d'un tableau (Array) en JavaScript ?",
      options: [
        "Un type primitif spécial",
        "Un objet particulier avec des clés numériques",
        "Une structure de données immuable",
        "Une liste chaînée binaire"
      ],
      answer: 1
    }
  ]
};