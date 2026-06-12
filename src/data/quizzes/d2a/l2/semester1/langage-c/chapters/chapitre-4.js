export const chapter4 = {
  id: "chapter-4",
  title: "Les Fonctions",
  questions: [
    {
      id: 1,
      question: "Quel mot-clé définit une fonction qui ne retourne rien ?",
      options: [
        "null",
        "void",
        "empty",
        "static"
      ],
      answer: 1
    },
    {
      id: 2,
      question: "Comment appelle-t-on la déclaration en haut de fichier d'une fonction ?",
      options: [
        "Un en-tête",
        "Un prototype",
        "Une macro",
        "Une instance"
      ],
      answer: 1
    },
    {
      id: 3,
      question: "Quel mot-clé renvoie une valeur à l'appelant d'une fonction ?",
      options: [
        "send",
        "output",
        "return",
        "exit"
      ],
      answer: 2
    },
    {
      id: 4,
      question: "Par défaut, comment les variables simples sont-elles passées en C ?",
      options: [
        "Par valeur",
        "Par référence",
        "Par adresse",
        "Par pointeur"
      ],
      answer: 0
    },
    {
      id: 5,
      question: "Que se passe-t-il pour une variable modifiée passée par valeur ?",
      options: [
        "Elle change aussi dans le main",
        "La modification reste locale à la fonction",
        "Le programme plante",
        "Elle devient globale"
      ],
      answer: 1
    },
    {
      id: 6,
      question: "Comment appelle-t-on une fonction qui s'appelle elle-même ?",
      options: [
        "Une fonction infinie",
        "Une fonction récursive",
        "Une fonction miroir",
        "Une boucle imbriquée"
      ],
      answer: 1
    },
    {
      id: 7,
      question: "Où sont stockées les variables locales lors de l'exécution ?",
      options: [
        "Dans le Tas (Heap)",
        "Dans la Pile (Stack)",
        "Dans le Registre",
        "Dans le segment de texte"
      ],
      answer: 1
    },
    {
      id: 8,
      question: "Quelle est la portée d'une variable déclarée dans une fonction ?",
      options: [
        "Accessible dans tout le fichier",
        "Uniquement dans cette fonction",
        "Partagée avec le main",
        "Accessible dans tout le projet"
      ],
      answer: 1
    },
    {
      id: 9,
      question: "Comment appelle-t-on les variables listées dans le prototype ?",
      options: [
        "Paramètres formels",
        "Arguments effectifs",
        "Constantes locales",
        "Variables globales"
      ],
      answer: 0
    },
    {
      id: 10,
      question: "Comment appelle-t-on les valeurs passées lors de l'appel réel ?",
      options: [
        "Paramètres formels",
        "Arguments effectifs",
        "Types de retour",
        "Données statiques"
      ],
      answer: 1
    },
    {
      id: 11,
      question: "Quelle condition est obligatoire dans une fonction récursive ?",
      options: [
        "Une boucle for",
        "Un cas de base (condition d'arrêt)",
        "Un pointeur nul",
        "Un return void"
      ],
      answer: 1
    },
    {
      id: 12,
      question: "Que risque-t-on en cas de récursion infinie ?",
      options: [
        "Un dépassement de pile (Stack Overflow)",
        "Une fuite de mémoire (Memory Leak)",
        "Une division par zéro",
        "Rien, le compilateur l'arrête"
      ],
      answer: 0
    },
    {
      id: 13,
      question: "Où doit-on placer les prototypes des fonctions ?",
      options: [
        "À la fin du main()",
        "Avant leur utilisation ou dans un fichier .h",
        "Dans le bloc switch",
        "N'importe où"
      ],
      answer: 1
    },
    {
      id: 14,
      question: "Que permet le mot-clé 'static' sur une variable locale ?",
      options: [
        "Elle devient en lecture seule",
        "Elle conserve sa valeur entre les appels",
        "Elle s'efface plus vite",
        "Elle change de type"
      ],
      answer: 1
    },
    {
      id: 15,
      question: "Combien de valeurs maximum une fonction C peut-elle retourner directement ?",
      options: [
        "0 ou 1 valeur",
        "Autant que d'arguments",
        "2 valeurs",
        "Illimité"
      ],
      answer: 0
    },
    {
      id: 16,
      question: "Quelle syntaxe appelle correctement une fonction 'somme(int a, int b)' ?",
      options: [
        "somme(int x, int y);",
        "somme(5, 3);",
        "call somme(5, 3);",
        "somme[5, 3];"
      ],
      answer: 1
    },
    {
      id: 17,
      question: "Quand on passe un tableau à une fonction, qu'est-ce qui est transmis ?",
      options: [
        "Une copie complète du tableau",
        "L'adresse de son premier élément",
        "Sa taille en octets",
        "Le caractère \\0"
      ],
      answer: 1
    },
    {
      id: 18,
      question: "Si une fonction modifie un tableau reçu en paramètre :",
      options: [
        "Le tableau d'origine est modifié",
        "Seule une copie locale change",
        "Le compilateur génère un warning",
        "Le tableau est dupliqué en pile"
      ],
      answer: 0
    },
    {
      id: 19,
      question: "Quelle bibliothèque standard contient la fonction exit() ?",
      options: [
        "stdio.h",
        "string.h",
        "stdlib.h",
        "math.h"
      ],
      answer: 2
    },
    {
      id: 20,
      question: "Que se passe-t-il si une fonction ne correspond pas à son prototype ?",
      options: [
        "Erreur ou Warning à la compilation",
        "Le programme s'exécute normalement",
        "La fonction est ignorée",
        "Une boucle infinie se crée"
      ],
      answer: 0
    }
  ]
};