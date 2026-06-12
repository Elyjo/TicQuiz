export const chapter2 = {
  id: "chapter-2",
  title: "Les tableaux",
  questions: [
    {
      id: 1,
      question: "Valeur du premier indice d'un tableau",
      options: ["1", "0", "Le nom du tableau", "Indéfini"],
      answer: 1,
    },
    {
      id: 2,
      question: "Comment accéder à la taille du tableau t",
      options: ["t.size()", "t.length()", "t.length", "t.count"],
      answer: 2,
    },
    {
      id: 3,
      question: "Que se passe-t-il si le tableau est plein",
      options: [
        "Agrandissement automatique",
        "Erreur IndexOutOfBounds",
        "Élément ignoré",
        "Écrasement du premier",
      ],
      answer: 1,
    },
    {
      id: 4,
      question: "Déclaration d'un tableau à deux dimensions",
      options: ["int[] t[]", "int[][] t", "int[2] t", "t = new int[x,y]"],
      answer: 1,
    },
    {
      id: 5,
      question: "Méthode pour trier un tableau",
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
      question: "Valeur par défaut de int[] t = new int[5]",
      options: ["null", "1", "0", "Indéterminée"],
      answer: 2,
    },
    {
      id: 7,
      question: "Définition d'un tableau multidimensionnel",
      options: [
        "Taille dynamique",
        "Tableau d'objets",
        "Tableau de tableaux",
        "Structure illimitée",
      ],
      answer: 2,
    },
    {
      id: 8,
      question: "Méthode pour copier une partie d'un tableau",
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
        "Oui, si objets",
        "Non, type unique requis",
        "Oui, via var",
        "Seulement primitifs",
      ],
      answer: 1,
    },
    {
      id: 10,
      question: "L'instruction new Equation[3] crée",
      options: [
        "3 objets initialisés",
        "3 références nulles",
        "1 seule instance",
        "Erreur",
      ],
      answer: 1,
    },
  ],
};