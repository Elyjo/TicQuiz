export const chapter6 = {
  id: "chapter-6",
  title: "Gestion des exceptions",
  questions: [
    {
      id: 1,
      question: "Classe racine de toutes les exceptions",
      options: ["Exception", "Error", "Throwable", "RuntimeException"],
      answer: 2,
    },
    {
      id: 2,
      question: "Bloc toujours exécuté",
      options: ["try", "catch", "finally", "throw"],
      answer: 2,
    },
    {
      id: 3,
      question: "Différence entre throw et throws",
      options: [
        "Aucune",
        "throw lève, throws déclare",
        "throws lève, throw déclare",
        "throw pour objets, throws pour primitifs",
      ],
      answer: 1,
    },
    {
      id: 4,
      question: "RuntimeException est-elle vérifiée (Checked)",
      options: ["Oui", "Non"],
      answer: 1,
    },
    {
      id: 5,
      question: "Conséquence d'une exception non rattrapée",
      options: [
        "Programme continue",
        "Programme crash",
        "Programme redémarre",
        "Rien",
      ],
      answer: 1,
    },
  ],
};