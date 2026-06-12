export const chapterJs2 = {
  id: "js-chapter-2",
  title: "Variables, Types et Fonctions",
  questions: [
    {
      id: 1,
      question: "Quel mot-clé moderne déclare une variable à portée de bloc mutable ?",
      options: [
        "var",
        "let",
        "const",
        "global"
      ],
      answer: 1
    },
    {
      id: 2,
      question: "Que provoque la réaffectation d'une variable déclarée avec const ?",
      options: [
        "Le code l'ignore",
        "Elle change de valeur",
        "Une erreur de type (TypeError)",
        "Elle devient undefined"
      ],
      answer: 2
    },
    {
      id: 3,
      question: "Quelle est la portée d'une variable déclarée avec 'var' ?",
      options: [
        "Portée de bloc",
        "Portée globale uniquement",
        "Portée de fonction",
        "Portée de fichier"
      ],
      answer: 2
    },
    {
      id: 4,
      question: "Quel terme désigne l'accès à une variable avant sa déclaration ?",
      options: [
        "Le shadowing",
        "Le hoisting (Levage)",
        "La closure",
        "Le binding"
      ],
      answer: 1
    },
    {
      id: 5,
      question: "Quel type de données représente l'absence d'une valeur initialisée ?",
      options: [
        "null",
        "undefined",
        "NaN",
        "false"
      ],
      answer: 1
    },
    {
      id: 6,
      question: "Que renvoie l'expression : typeof null ?",
      options: [
        "'null'",
        "'undefined'",
        "'object'",
        "'boolean'"
      ],
      answer: 2
    },
    {
      id: 7,
      question: "Quelle est la différence fondamentale entre == et === ?",
      options: [
        "Aucune différence",
        "=== vérifie aussi l'égalité des types",
        "== compare uniquement le type",
        "=== fait une conversion forcée"
      ],
      answer: 1
    },
    {
      id: 8,
      question: "Laquelle de ces valeurs n'est PAS considérée comme 'falsy' ?",
      options: [
        "0",
        "'' (chaîne vide)",
        "null",
        "[] (tableau vide)"
      ],
      answer: 3
    },
    {
      id: 9,
      question: "Quel est le résultat de l'évaluation de : '5' + 2 ?",
      options: [
        "7",
        "52",
        "NaN",
        "TypeError"
      ],
      answer: 1
    },
    {
      id: 10,
      question: "Quel est le résultat de l'évaluation de : '5' - 2 ?",
      options: [
        "3",
        "52",
        "NaN",
        "TypeError"
      ],
      answer: 0
    },
    {
      id: 11,
      question: "Quelle boucle ES6 permet de parcourir directement les VALEURS d'un tableau ?",
      options: [
        "for...in",
        "for...of",
        "while",
        "do...while"
      ],
      answer: 1
    },
    {
      id: 12,
      question: "Quelle boucle ES6 permet de parcourir les CLÉS ou INDICES d'un objet/tableau ?",
      options: [
        "for...in",
        "for...of",
        "foreach",
        "repeat"
      ],
      answer: 0
    },
    {
      id: 13,
      question: "Quelle est la particularité de la boucle do...while ?",
      options: [
        "Elle ne s'exécute jamais",
        "Elle s'exécute au moins une fois",
        "Elle est plus rapide que for",
        "Elle évite les boucles infinies"
      ],
      answer: 1
    },
    {
      id: 14,
      question: "Quelle syntaxe définit une fonction fléchée à retour implicite ?",
      options: [
        "const carre = x => x * x;",
        "const carre = (x) { x * x };",
        "function carre(x) => x * x;",
        "const carre = x => return x * x;"
      ],
      answer: 0
    },
    {
      id: 15,
      question: "Quelle est la valeur de retour par défaut d'une fonction sans instruction return ?",
      options: [
        "null",
        "0",
        "undefined",
        "false"
      ],
      answer: 2
    },
    {
      id: 16,
      question: "Comment appelle-t-on une fonction qui s'appelle elle-même ?",
      options: [
        "Une fonction anonyme",
        "Une fonction récursive",
        "Une fonction callback",
        "Une closure"
      ],
      answer: 1
    },
    {
      id: 17,
      question: "Qu'est-ce qu'une expression de fonction anonyme ?",
      options: [
        "Une fonction sans nom stockée dans une variable",
        "Une fonction fléchée uniquement",
        "Une fonction qui n'a pas d'arguments",
        "Une fonction masquée du débogueur"
      ],
      answer: 0
    },
    {
      id: 18,
      question: "Comment appelle-t-on une fonction passée en argument d'une autre fonction ?",
      options: [
        "Une méthode",
        "Un paramètre par défaut",
        "Un callback",
        "Une fonction fléchée"
      ],
      answer: 2
    },
    {
      id: 19,
      question: "Quel opérateur ES6 permet de définir des paramètres par défaut ?",
      options: [
        "L'opérateur de coalescence ??",
        "L'opérateur d'affectation =",
        "Le ternaire ?",
        "L'opérateur rest (...)"
      ],
      answer: 1
    },
    {
      id: 20,
      question: "Que renvoie l'expression globale : Number('123abc') ?",
      options: [
        "123",
        "NaN",
        "TypeError",
        "undefined"
      ],
      answer: 1
    }
  ]
};