export const chapter1 = {
  id: "chapter-1",
  title: "Syntaxe de base en C",
  questions: [
    {
      id: 1,
      question: "Quelle fonction est le point d'entrée de tout programme C ?",
      options: [
        "include()",
        "main()",
        "printf()",
        "scanf()"
      ],
      answer: 1
    },
    {
      id: 2,
      question: "Par quoi se termine obligatoirement chaque instruction en C ?",
      options: [
        "Un point (.)",
        "Un deux-points (:)",
        "Un point-virgule (;)",
        "Un retour à la ligne"
      ],
      answer: 2
    },
    {
      id: 3,
      question: "Quelle directive préprocesseur inclut une bibliothèque ?",
      options: [
        "#define",
        "#include",
        "#import",
        "#require"
      ],
      answer: 1
    },
    {
      id: 4,
      question: "Quelle bibliothèque standard contient printf() et scanf() ?",
      options: [
        "stdlib.h",
        "math.h",
        "string.h",
        "stdio.h"
      ],
      answer: 3
    },
    {
      id: 5,
      question: "Quel formatteur est utilisé dans printf pour un entier (int) ?",
      options: [
        "%c",
        "%f",
        "%d",
        "%s"
      ],
      answer: 2
    },
    {
      id: 6,
      question: "Taille courante en octets d'un type 'char' en C ?",
      options: [
        "1 octet",
        "2 octets",
        "4 octets",
        "8 octets"
      ],
      answer: 0
    },
    {
      id: 7,
      question: "Quel formatteur correspond au type 'float' ?",
      options: [
        "%d",
        "%f",
        "%lf",
        "%s"
      ],
      answer: 1
    },
    {
      id: 8,
      question: "Symbole impératif devant la variable dans un scanf() ?",
      options: [
        "L'esperluette &",
        "L'étoile *",
        "Le dièse #",
        "Le dollar $"
      ],
      answer: 0
    },
    {
      id: 9,
      question: "Comment écrire un commentaire sur une seule ligne en C ?",
      options: [
        "# Commentaire",
        "// Commentaire",
        "/* Commentaire",
        ""
      ],
      answer: 1
    },
    {
      id: 10,
      question: "Quel opérateur calcule le reste d'une division (modulo) ?",
      options: [
        "/",
        "div",
        "%",
        "mod"
      ],
      answer: 2
    },
    {
      id: 11,
      question: "Que renvoie la fonction main() en cas de succès graphique ?",
      options: [
        "void",
        "0",
        "1",
        "-1"
      ],
      answer: 1
    },
    {
      id: 12,
      question: "Quelle séquence d'échappement crée un retour à la ligne ?",
      options: [
        "\\t",
        "\\r",
        "\\n",
        "\\b"
      ],
      answer: 2
    },
    {
      id: 13,
      question: "Quel type permet de ne retourner aucune valeur ?",
      options: [
        "int",
        "null",
        "void",
        "empty"
      ],
      answer: 2
    },
    {
      id: 14,
      question: "Quelle instruction définit une constante préprocesseur ?",
      options: [
        "const",
        "#define",
        "let",
        "#constant"
      ],
      answer: 1
    },
    {
      id: 15,
      question: "Quel opérateur teste l'égalité stricte entre deux valeurs ?",
      options: [
        "=",
        "==",
        "===",
        "equal"
      ],
      answer: 1
    },
    {
      id: 16,
      question: "Comment écrit-on l'opérateur logique ET (AND) ?",
      options: [
        "AND",
        "&",
        "&&",
        "|"
      ],
      answer: 2
    },
    {
      id: 17,
      question: "Quel type utilise-t-on pour stocker un nombre réel double précision ?",
      options: [
        "float",
        "double",
        "long int",
        "real"
      ],
      answer: 1
    },
    {
      id: 18,
      question: "Que fait l'instruction 'x++;' ?",
      options: [
        "Multiplie x par 2",
        "Ajoute 1 à x",
        "Met x à zéro",
        "Déclare x"
      ],
      answer: 1
    },
    {
      id: 19,
      question: "Quelle structure permet un choix multiple selon une variable ?",
      options: [
        "if / else",
        "switch / case",
        "while",
        "for"
      ],
      answer: 1
    },
    {
      id: 20,
      question: "Quel outil convertit le code source (.c) en fichier exécutable ?",
      options: [
        "L'interpréteur",
        "Le compilateur (ex: gcc)",
        "Le linker uniquement",
        "Le débogueur"
      ],
      answer: 1
    }
  ]
};