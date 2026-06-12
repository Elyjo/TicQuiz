export const chapter4 = {
  id: "chapter-4",
  title: "Les Fonctions",
  questions: [
    {
      id: 1,
      question: "Mot-clé pour une fonction qui ne retourne rien",
      options: ["null", "void", "empty", "static"],
      answer: 1,
    },
    {
      id: 2,
      question: "Nom de la déclaration d'une fonction en haut de fichier",
      options: ["En-tête", "Prototype", "Macro", "Instance"],
      answer: 1,
    },
    {
      id: 3,
      question: "Mot-clé pour renvoyer une valeur à l'appelant",
      options: ["send", "output", "return", "exit"],
      answer: 2,
    },
    {
      id: 4,
      question:
        "Par défaut, comment les variables simples sont-elles passées",
      options: ["Par valeur", "Par référence", "Par adresse", "Par pointeur"],
      answer: 0,
    },
    {
      id: 5,
      question:
        "Impact d'une modification sur une variable passée par valeur",
      options: [
        "Change aussi dans le main",
        "Reste locale à la fonction",
        "Le programme plante",
        "Devient globale",
      ],
      answer: 1,
    },
    {
      id: 6,
      question: "Comment appelle-t-on une fonction qui s'appelle elle-même",
      options: [
        "Fonction infinie",
        "Fonction récursive",
        "Fonction miroir",
        "Boucle imbriquée",
      ],
      answer: 1,
    },
    {
      id: 7,
      question: "Où sont stockées les variables locales lors de l'exécution",
      options: [
        "Dans le Tas (Heap)",
        "Dans la Pile (Stack)",
        "Dans le Registre",
        "Segment de texte",
      ],
      answer: 1,
    },
    {
      id: 8,
      question: "Quelle est la portée d'une variable locale à une fonction",
      options: [
        "Tout le fichier",
        "Uniquement cette fonction",
        "Partagée avec le main",
        "Tout le projet",
      ],
      answer: 1,
    },
    {
      id: 9,
      question: "Nom des variables listées dans le prototype",
      options: [
        "Paramètres formels",
        "Arguments effectifs",
        "Constantes locales",
        "Variables globales",
      ],
      answer: 0,
    },
    {
      id: 10,
      question: "Nom des valeurs transmises lors de l'appel réel",
      options: [
        "Paramètres formels",
        "Arguments effectifs",
        "Types de retour",
        "Données statiques",
      ],
      answer: 1,
    },
    {
      id: 11,
      question: "Condition obligatoire dans une fonction récursive",
      options: [
        "Boucle for",
        "Cas de base (condition d'arrêt)",
        "Pointeur nul",
        "Return void",
      ],
      answer: 1,
    },
    {
      id: 12,
      question: "Risque majeur en cas de récursion infinie",
      options: [
        "Dépassement de pile (Stack Overflow)",
        "Fuite de mémoire",
        "Division par zéro",
        "Rien",
      ],
      answer: 0,
    },
    {
      id: 13,
      question: "Où doit-on placer les prototypes des fonctions",
      options: [
        "À la fin du main()",
        "Avant utilisation ou dans un fichier .h",
        "Dans un switch",
        "N'importe où",
      ],
      answer: 1,
    },
    {
      id: 14,
      question: "Effet du mot-clé 'static' sur une variable locale",
      options: [
        "Devient en lecture seule",
        "Conserve sa valeur entre les appels",
        "S'efface plus vite",
        "Change de type",
      ],
      answer: 1,
    },
    {
      id: 15,
      question:
        "Combien de valeurs une fonction peut-elle retourner directement",
      options: [
        "0 ou 1 valeur",
        "Autant que d'arguments",
        "2 valeurs",
        "Illimité",
      ],
      answer: 0,
    },
    {
      id: 16,
      question: "Syntaxe correcte pour appeler 'somme(int a, int b)'",
      options: [
        "somme(int x, int y);",
        "somme(5, 3);",
        "call somme(5, 3);",
        "somme[5, 3];",
      ],
      answer: 1,
    },
    {
      id: 17,
      question: "Qu'est-ce qui est transmis lors du passage d'un tableau",
      options: [
        "Copie complète du tableau",
        "Adresse de son premier élément",
        "Taille en octets",
        "Le caractère \\0",
      ],
      answer: 1,
    },
    {
      id: 18,
      question: "Si une fonction modifie un tableau reçu en paramètre",
      options: [
        "Le tableau d'origine est modifié",
        "Seule la copie locale change",
        "Le compilateur râle",
        "Le tableau est dupliqué",
      ],
      answer: 0,
    },
    {
      id: 19,
      question: "Bibliothèque standard contenant la fonction exit()",
      options: ["stdio.h", "string.h", "stdlib.h", "math.h"],
      answer: 2,
    },
    {
      id: 20,
      question: "Si une fonction ne correspond pas à son prototype",
      options: [
        "Erreur/Warning à la compilation",
        "Exécution normale",
        "Fonction ignorée",
        "Boucle infinie",
      ],
      answer: 0,
    },
  ],
};
