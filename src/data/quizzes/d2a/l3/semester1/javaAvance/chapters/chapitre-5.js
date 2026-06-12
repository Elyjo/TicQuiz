export const chapter5 = {
  id: "chapter-5",
  title: "Concepts avancés",
  questions: [
    {
      id: 1,
      question: "Quelle est la valeur par défaut d'un attribut de type objet",
      options: ["0", "false", "null", "vide"],
      answer: 2,
    },
    {
      id: 2,
      question: "Comment Java passe-t-il un objet en paramètre d'une méthode",
      options: [
        "Par valeur",
        "Par référence de la référence (copie)",
        "Par copie profonde",
        "Par nom",
      ],
      answer: 1,
    },
    {
      id: 3,
      question:
        "Quelle est la différence entre une surcharge et une surdéfinition",
      options: [
        "C'est la même chose",
        "La surdéfinition porte sur les méthodes de même nom",
        "La surcharge porte sur les constructeurs",
        "La surdéfinition nécessite des types de retour différents",
      ],
      answer: 1,
    },
    {
      id: 4,
      question:
        "Quel modificateur restreint l'accès aux membres de la classe uniquement",
      options: ["protected", "public", "private", "package"],
      answer: 2,
    },
    {
      id: 5,
      question:
        "Quelle instruction permet d'utiliser une classe d'un autre paquet",
      options: ["include", "use", "import", "package"],
      answer: 2,
    },
    {
      id: 6,
      question: "Quel est l'utilité principale du fichier MANIFEST dans un JAR",
      options: [
        "Lister tous les fichiers",
        "Définir la classe principale",
        "Gérer la mémoire",
        "Stocker les commentaires",
      ],
      answer: 1,
    },
    {
      id: 7,
      question: "Les énumérations en Java peuvent-elles avoir des méthodes",
      options: ["Oui", "Non"],
      answer: 0,
    },
    {
      id: 8,
      question: "Quelle commande génère la documentation HTML",
      options: ["javac", "java", "javadoc", "jar"],
      answer: 2,
    },
    {
      id: 9,
      question: "Que fait le bloc 'static { ... }' dans une classe",
      options: [
        "Initialise les variables de classe une seule fois",
        "Initialise chaque instance créée",
        "Gère les erreurs",
        "Définit une méthode privée",
      ],
      answer: 0,
    },
    {
      id: 10,
      question: "Quel paquet est importé automatiquement",
      options: ["java.util", "java.io", "java.lang", "java.net"],
      answer: 2,
    },
  ],
};
