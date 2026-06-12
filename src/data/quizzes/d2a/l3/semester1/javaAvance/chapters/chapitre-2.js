export const chapter2 = {
  id: "chapter-2",
  title: "Les tableaux",
  questions: [
    {
      id: 1,
      question: "Quelle est la valeur du premier indice d'un tableau en Java",
      options: ["1", "0", "Le nom du tableau", "Indéfini"],
      answer: 1,
    },
    {
      id: 2,
      question: "Comment accéder à la taille d'un tableau nommé 't'",
      options: ["t.size()", "t.length()", "t.length", "t.count"],
      answer: 2,
    },
    {
      id: 3,
      question:
        "Que se passe-t-il si on tente d'ajouter un élément dans un tableau plein",
      options: [
        "Java agrandit automatiquement le tableau",
        "Une erreur de compilation ou d'exécution (IndexOutOfBounds) survient",
        "L'élément est ignoré",
        "Le premier élément est écrasé",
      ],
      answer: 1,
    },
    {
      id: 4,
      question: "Comment déclarer un tableau d'entiers à deux dimensions",
      options: ["int[] t[]", "int[][] t", "int[2] t", "t = new int[x,y]"],
      answer: 1,
    },
    {
      id: 5,
      question: "Quelle méthode permet de trier un tableau par ordre croissant",
      options: [
        "Arrays.sort(tab)",
        "tab.sort()",
        "System.sort(tab)",
        "Collections.sort(tab)",
      ],
      answer: 0,
    },
    {
      id: 6,
      question:
        "Si l'on initialise 'int[] t = new int[5]', quelle est la valeur des éléments",
      options: ["null", "1", "0", "Indéterminée"],
      answer: 2,
    },
    {
      id: 7,
      question: "Qu'est-ce qu'un tableau à plusieurs dimensions en Java",
      options: [
        "Un tableau dont la taille change dynamiquement",
        "Un tableau d'objets uniquement",
        "Un tableau dont les éléments sont eux-mêmes des tableaux",
        "Une structure de données illimitée",
      ],
      answer: 2,
    },
    {
      id: 8,
      question:
        "Quelle méthode est utilisée pour copier une partie d'un tableau",
      options: [
        "Arrays.copyOfRange",
        "System.copyPart",
        "tab.copyTo",
        "Arrays.split",
      ],
      answer: 0,
    },
    {
      id: 9,
      question: "Un tableau peut-il contenir des types différents",
      options: [
        "Oui, si c'est un tableau d'objets",
        "Non, il doit contenir des éléments de même type",
        "Oui, en utilisant le type 'var'",
        "Seulement pour les types primitifs",
      ],
      answer: 1,
    },
    {
      id: 10,
      question: "L'instruction 'new Equation[3]' crée",
      options: [
        "3 objets Equation initialisés",
        "Un tableau contenant 3 références nulles",
        "3 références vers une seule instance d'Equation",
        "Une erreur de compilation",
      ],
      answer: 1,
    },
  ],
};
