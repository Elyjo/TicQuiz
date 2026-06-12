export const chapter5 = {
  id: "chapter-5",
  title: "XPath et XQuery",
  questions: [
    {
      id: 1,
      question: "Quel est l'équivalent de SQL pour les documents XML ?",
      options: ["DTD", "XPath", "XQuery", "XSLT"],
      answer: 2
    },
    {
      id: 2,
      question: "Que sélectionne l'expression XPath //livre[2] ?",
      options: [
        "Le deuxième livre enfant de la racine",
        "Tous les livres, puis le deuxième de chaque liste rencontrée",
        "Le deuxième livre parmi tous les livres trouvés dans le document",
        "Aucune des réponses"
      ],
      answer: 2
    },
    {
      id: 3,
      question: "Dans une expression FLWOR, à quoi sert la clause 'let' ?",
      options: ["À filtrer les résultats", "À trier", "À assigner une valeur à une variable", "À itérer"],
      answer: 2
    },
    {
      id: 4,
      question: "Quelle fonction permet de compter le nombre d'éléments dans une liste ?",
      options: ["size()", "count()", "length()", "total()"],
      answer: 1
    },
    {
      id: 5,
      question: "L'axe 'parent::' contient :",
      options: ["Le nœud racine", "Le nœud courant", "Le père direct du nœud contextuel", "Tous les ancêtres"],
      answer: 2
    }
  ]
};