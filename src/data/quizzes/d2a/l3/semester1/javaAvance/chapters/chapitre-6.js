export const chapter6 = {
  id: "chapter-6",
  title: "Gestion des exceptions",
  questions: [
    {
      id: 1,
      question: "Quelle est la classe racine de toutes les exceptions",
      options: ["Exception", "Error", "Throwable", "RuntimeException"],
      answer: 2,
    },
    {
      id: 2,
      question:
        "Quel bloc est toujours exécuté, même si une exception est levée",
      options: ["try", "catch", "finally", "throw"],
      answer: 2,
    },
    {
      id: 3,
      question: "Quelle est la différence entre throw et throws",
      options: [
        "Aucune",
        "throw lève une exception, throws déclare une exception potentielle",
        "throws lève une exception, throw déclare une exception",
        "throw est pour les objets, throws pour les primitifs",
      ],
      answer: 1,
    },
    {
      id: 4,
      question:
        "Une exception de type RuntimeException est-elle 'Checked' (vérifiée)",
      options: ["Oui", "Non"],
      answer: 1,
    },
    {
      id: 5,
      question: "Que se passe-t-il si une exception n'est pas rattrapée",
      options: [
        "Le programme continue normalement",
        "Le programme s'arrête (crash)",
        "Le programme redémarre",
        "Rien",
      ],
      answer: 1,
    },
  ],
};
