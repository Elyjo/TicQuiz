export const chapter3 = {
  id: "chapter-3",
  title: "Validation avec DTD",
  questions: [
    {
      id: 1,
      question: "Une DTD est-elle un document XML",
      options: ["Oui", "Non"],
      answer: 1
    },
    {
      id: 2,
      question: "Quel opérateur DTD indique qu'un élément peut apparaître 0 ou 1 fois",
      options: ["*", "+", "?", "|"],
      answer: 2
    },
    {
      id: 3,
      question: "Que signifie #REQUIRED dans la déclaration d'un attribut",
      options: ["L'attribut est optionnel", "L'attribut est obligatoire", "L'attribut a une valeur fixe", "L'attribut est interdit"],
      answer: 1
    },
    {
      id: 4,
      question: "Quelle est la différence entre ID et IDREF",
      options: [
        "Aucune",
        "ID définit un identifiant unique, IDREF fait référence à un ID existant",
        "IDREF définit l'identifiant, ID fait référence",
        "ID est pour les chiffres, IDREF pour les chaînes"
      ],
      answer: 1
    },
    {
      id: 5,
      question: "Que signifie `(#PCDATA)`",
      options: ["Un élément vide", "Un contenu textuel analysable", "Un élément enfant obligatoire", "Un attribut"],
      answer: 1
    }
  ]
};