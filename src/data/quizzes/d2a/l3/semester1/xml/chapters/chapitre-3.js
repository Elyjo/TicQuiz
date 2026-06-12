export const chapter3 = {
  id: "chapter-3",
  title: "Validation avec DTD",
  questions: [
    {
      id: 1,
      question: "Une DTD est-elle un document XML",
      options: ["Oui", "Non"],
      answer: 1,
    },
    {
      id: 2,
      question: "Opérateur DTD pour 0 ou 1 apparition",
      options: ["*", "+", "?", "|"],
      answer: 2,
    },
    {
      id: 3,
      question: "Signification de #REQUIRED pour un attribut",
      options: ["Optionnel", "Obligatoire", "Valeur fixe", "Interdit"],
      answer: 1,
    },
    {
      id: 4,
      question: "Différence entre ID et IDREF",
      options: [
        "Aucune",
        "ID = identifiant unique / IDREF = référence",
        "IDREF = identifiant / ID = référence",
        "ID = chiffres / IDREF = chaînes",
      ],
      answer: 1,
    },
    {
      id: 5,
      question: "Signification de (#PCDATA)",
      options: [
        "Élément vide",
        "Contenu textuel analysable",
        "Enfant obligatoire",
        "Attribut",
      ],
      answer: 1,
    },
  ],
};
