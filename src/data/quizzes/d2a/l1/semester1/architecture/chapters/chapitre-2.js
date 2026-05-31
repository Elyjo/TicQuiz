export const chapter2 = {
  id: "chapter-2",

  title: "Représentation de l’information : Les systèmes de numération",

  questions: [
    {
      id: 1,
      question: "Qu'est-ce qu'un 'bit' selon l'introduction du cours ?",
      options: [
        "Un ensemble de 8 octets",
        "Une information élémentaire correspondant à un chiffre binaire (0 ou 1)",
        "Un système de codage hexadécimal",
        "Une valeur numérique uniquement décimale",
      ],
      answer: 1,
    },

    {
      id: 2,
      question: "Dans un système de numération, comment appelle-t-on le nombre de symboles distincts ?",
      options: [
        "Le bit de poids fort",
        "Le poids faible",
        "La base",
        "La position",
      ],
      answer: 2,
    },

    {
      id: 3,
      question: "Comment positionne-t-on les chiffres pour calculer la représentation positionnelle de la partie décimale ?",
      options: [
        "À partir de 0, de la droite vers la gauche",
        "À partir de -1, de la gauche vers la droite",
        "À partir de 1, de la droite vers la gauche",
        "À partir de 0, de la gauche vers la droite",
      ],
      answer: 1,
    },

    {
      id: 4,
      question: "Que signifient MSB et LSB dans le système binaire ?",
      options: [
        "Multiplication Successive Binaire et Logique Multi-Système",
        "Maximum System Bit et Lowest System Bit",
        "Bit de poids fort (Most Significant Bit) et bit de poids faible (Least Significant Bit)",
        "Mémoire Super Volatile et Longue Structure Binaire",
      ],
      answer: 2,
    },

    {
      id: 5,
      question: "Quel est le principe de la conversion de la base 10 à la base 2 pour un nombre entier ?",
      options: [
        "Faire des multiplications successives par 2 jusqu'à obtenir un résultat nul",
        "Remplacer chaque chiffre par son équivalent sur 3 bits",
        "Faire des divisions successives par 2 jusqu'à ce que le quotient soit nul et prendre les restes à l'envers",
        "Calculer la représentation positionnelle directement",
      ],
      answer: 2,
    },

    {
      id: 6,
      question: "Comment convertit-on la partie décimale (fractionnaire) d'un nombre de la base 10 à la base 2 ?",
      options: [
        "Par des multiplications successives par 2 jusqu'à ce que la partie décimale soit nulle ou la précision atteinte",
        "Par des divisions successives par 16",
        "En extrayant uniquement les puissances négatives de 10",
        "En regroupant les bits par paquets de 4",
      ],
      answer: 0,
    },

    {
      id: 7,
      question: "Pour convertir un nombre de la base 8 (octal) vers la base 2 (binaire), on remplace chaque symbole par :",
      options: [
        "Son équivalent binaire sur 2 bits",
        "Son équivalent binaire sur 4 bits",
        "Son équivalent binaire sur 3 bits",
        "Une division successive par 8",
      ],
      answer: 2,
    },

    {
      id: 8,
      question: "Dans le système hexadécimal, quelle lettre représente la valeur décimale 10 ?",
      options: [
        "B",
        "F",
        "C",
        "A",
      ],
      answer: 3,
    },

    {
      id: 9,
      question: "Quelle est la méthode recommandée pour convertir un nombre de la base 8 à la base 16 (ou inversement) ?",
      options: [
        "Faire une division directe par 24",
        "Utiliser la base 2 (le binaire) comme base intermédiaire",
        "Passer obligatoirement par des multiplications successives par 10",
        "Multiplier le nombre par 8 puis le diviser par 16",
      ],
      answer: 1,
    },

    // ===== NOUVELLES QUESTIONS (10 à 20) =====

    {
      id: 10,
      question: "À quoi correspond le regroupement par blocs de 4 bits lors d'une conversion binaire ?",
      options: [
        "À la conversion binaire vers octal",
        "À la conversion binaire vers décimal",
        "À la conversion binaire vers hexadécimal",
        "À l'extraction de la plus grande puissance de 2",
      ],
      answer: 2,
    },

    {
      id: 11,
      question: "Que signifie le terme 'codage de l'information' selon le document ?",
      options: [
        "Sécuriser les données de l'ordinateur contre les virus",
        "Établir une correspondance entre la représentation externe de l'information et sa représentation binaire",
        "Écrire des programmes informatiques en langage C ou Java",
        "Calculer la partie entière et décimale d'un nombre réel",
      ],
      answer: 1,
    },

    {
      id: 12,
      question: "Quels sont les symboles utilisés par le système de numération octal ?",
      options: [
        "Les symboles de 0 à 8 inclus",
        "Les symboles de 1 à 8 inclus",
        "Les symboles de 0 à 7 inclus",
        "Les symboles de 0 à 9 inclus",
      ],
      answer: 2,
    },

    {
      id: 13,
      question: "Quelle est la base du système hexadécimal (hexa-déci) ?",
      options: [
        "Base 6",
        "Base 10",
        "Base 8",
        "Base 16",
      ],
      answer: 3,
    },

    {
      id: 14,
      question: "Pour situer les positions de la partie entière d'un nombre, on numérote de la droite vers la gauche à partir de :",
      options: [
        "Le chiffre 1",
        "Le chiffre -1",
        "Le chiffre 0",
        "La base du système",
      ],
      answer: 2,
    },

    {
      id: 15,
      question: "Calculer la représentation positionnelle d'un nombre revient à le décomposer suivant :",
      options: [
        "Les puissances de sa base",
        "Des multiplications successives par 2",
        "Des divisions successives par la base",
        "L'ordre inverse des restes",
      ],
      answer: 0,
    },

    {
      id: 16,
      question: "Quelle est la valeur binaire du nombre décimal (37)10 obtenue par divisions successives ?",
      options: [
        "(101011)2",
        "(100101)2",
        "(110001)2",
        "(100111)2",
      ],
      answer: 1,
    },

    {
      id: 17,
      question: "Dans la méthode d'extraction de la plus grande puissance, que fait-on sous les puissances non extradites ?",
      options: [
        "On écrit le chiffre 1",
        "On écrit le reste de la soustraction",
        "On écrit le chiffre 0",
        "On effectue une division par 2",
      ],
      answer: 2,
    },

    {
      id: 18,
      question: "Quelle est la valeur octale correspondante au nombre décimal entier (37)10 ?",
      options: [
        "(45)8",
        "(25)8",
        "(54)8",
        "(37)8",
      ],
      answer: 0,
    },

    {
      id: 19,
      question: "En hexadécimal, quelle est la correspondance pour la valeur décimale 15 ?",
      options: [
        "La lettre E",
        "La lettre D",
        "La lettre F",
        "La lettre A",
      ],
      answer: 2,
    },

    {
      id: 20,
      question: "Lors d'une conversion binaire vers octal, comment regroupe-t-on les bits de la partie entière ?",
      options: [
        "Par groupes de 4 bits de la droite vers la gauche",
        "Par groupes de 3 bits de la droite vers la gauche",
        "Par groupes de 3 bits de la gauche vers la droite",
        "Par groupes de 4 bits de la gauche vers la droite",
      ],
      answer: 1,
    },
  ],
};