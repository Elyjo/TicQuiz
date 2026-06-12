export const chapter3 = {
  id: "chapter-3",
  title: "Entrées-Sorties standards",
  questions: [
    {
      id: 1,
      question: "Quel flux est utilisé pour l'affichage standard en Java",
      options: ["System.in", "System.out", "System.err", "System.print"],
      answer: 1,
    },
    {
      id: 2,
      question: "Quelle classe est recommandée pour lire les entrées clavier",
      options: ["System.in", "InputStream", "Scanner", "ConsoleReader"],
      answer: 2,
    },
    {
      id: 3,
      question:
        "Quelle instruction est nécessaire pour utiliser la classe Scanner",
      options: [
        "import java.io.Scanner;",
        "import java.util.Scanner;",
        "use java.util.Scanner;",
        "include Scanner;",
      ],
      answer: 1,
    },
    {
      id: 4,
      question:
        "Quelle méthode de Scanner est utilisée pour lire une chaîne de caractères complète",
      options: ["next()", "nextLine()", "readString()", "getString()"],
      answer: 1,
    },
    {
      id: 5,
      question: "Quelle est la différence entre print() et println()",
      options: [
        "print() ajoute une fin de ligne, println() non",
        "println() ajoute une fin de ligne, print() non",
        "Il n'y a aucune différence",
        "println() est plus rapide",
      ],
      answer: 1,
    },
    {
      id: 6,
      question: "À quoi sert principalement System.err",
      options: [
        "À arrêter le programme en cas d'erreur",
        "À afficher les erreurs, même si la sortie standard est redirigée",
        "À lire les erreurs clavier",
        "À stocker les erreurs dans un fichier",
      ],
      answer: 1,
    },
    {
      id: 7,
      question: "Que fait l'instruction 'int n = clavier.nextInt();'",
      options: [
        "Elle affiche un entier",
        "Elle lit le prochain entier saisi au clavier",
        "Elle crée un entier nommé clavier",
        "Elle transforme la chaîne en entier",
      ],
      answer: 1,
    },
    {
      id: 8,
      question: "Laquelle de ces méthodes permet de formater une sortie",
      options: ["format()", "printf()", "printFormat()", "write()"],
      answer: 1,
    },
    {
      id: 9,
      question: "Où doit être placée l'instruction import en Java",
      options: [
        "À l'intérieur de la classe",
        "Juste après la méthode main",
        "Avant la déclaration de la classe",
        "À la fin du fichier",
      ],
      answer: 2,
    },
    {
      id: 10,
      question: "De quelle classe héritent System.out et System.err",
      options: ["PrintStream", "InputStream", "Scanner", "System"],
      answer: 0,
    },
  ],
};
