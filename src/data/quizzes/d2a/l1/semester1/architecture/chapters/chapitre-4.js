export const chapter4 = {
  id: "chapter-4",

  title: "Nombres réels",

  questions: [
    {
      id: 1,
      question: "De quoi est composé un nombre réel selon l'introduction ?",
      options: [
        "Uniquement d'une suite de bits signés",
        "D'une partie entière et d'une partie fractionnaire après la virgule",
        "D'un exposant négatif et d'une mantisse entière",
        "D'une base décimale et d'un complément à 2",
      ],
      answer: 1,
    },

    {
      id: 2,
      question: "Quelles sont les deux méthodes citées pour représenter la virgule dans une machine ?",
      options: [
        "La virgule fixe et la virgule flottante",
        "La virgule simple et la virgule double",
        "La virgule signée et la virgule inversée",
        "La virgule absolue et la virgule relative",
      ],
      answer: 0,
    },

    {
      id: 3,
      question: "Quel est le principe de la représentation en virgule fixe ?",
      options: [
        "La virgule se déplace dynamiquement selon la taille du nombre",
        "Elle permet de coder un nombre réel suivant un format précis (fixe) pour la partie entière et la partie fractionnaire",
        "Elle supprime complètement la partie fractionnaire pour ne garder que l'entier",
        "Elle utilise toujours 32 bits pour la partie décimale",
      ],
      answer: 1,
    },

    {
      id: 4,
      question: "Si une machine est configurée pour 5 bits de partie entière et 4 bits de partie décimale, quel nombre peut être représenté ?",
      options: [
        "1001011,10011",
        "101,1011101",
        "10011,0111",
        "111111,1111",
      ],
      answer: 2,
    },

    {
      id: 5,
      question: "Si une machine alloue 5 bits à la partie entière et 4 bits à la décimale, pourquoi '100,01' peut-il y être représenté ?",
      options: [
        "Parce qu'il ne dépasse pas les limites de bits allouées (3 bits entiers et 2 bits décimaux requis)",
        "Parce que c'est un nombre binaire pur sans signe",
        "Parce qu'il s'agit d'une notation normalisée IEEE",
        "Parce qu'il contient uniquement des zéros",
      ],
      answer: 0,
    },

    {
      id: 6,
      question: "Sous quelle forme générale normalise-t-on un nombre pour la virgule flottante selon le document ?",
      options: [
        "± 1,M x 2^n",
        "± 0,M x 10^n",
        "± M x 16^n",
        "± 1,M x 127^n",
      ],
      answer: 0,
    },

    {
      id: 7,
      question: "Sur combien de bits au total la représentation en virgule flottante standard (IEEE) définit-elle ses composantes ici ?",
      options: [
        "8 bits",
        "16 bits",
        "32 bits",
        "64 bits",
      ],
      answer: 2,
    },

    {
      id: 8,
      question: "En virgule flottante, combien de bits sont réservés à l'exposant normalisé ?",
      options: [
        "1 bit",
        "8 bits",
        "23 bits",
        "32 bits",
      ],
      answer: 1,
    },

    {
      id: 9,
      question: "En virgule flottante, combien de bits sont réservés à la mantisse ?",
      options: [
        "1 bit",
        "8 bits",
        "23 bits",
        "32 bits",
      ],
      answer: 2,
    },

    {
      id: 10,
      question: "Quelle valeur prend le bit de signe (MSB) si le nombre réel est négatif ?",
      options: [
        "0",
        "1",
        "-1",
        "127",
      ],
      answer: 1,
    },

    {
      id: 11,
      question: "Quelle valeur prend le bit de signe (MSB) si le nombre réel est positif ?",
      options: [
        "0",
        "1",
        "Plus ou moins",
        "Aucune valeur",
      ],
      answer: 0,
    },

    {
      id: 12,
      question: "L'exposant normalisé correspond à la valeur binaire de l'exposant biaisé à :",
      options: [
        "1 bit",
        "23",
        "128",
        "127",
      ],
      answer: 3,
    },

    {
      id: 13,
      question: "Quelles sont les configurations d'exposants normalisés strictement interdites par le document ?",
      options: [
        "01010101 et 10101010",
        "00000000 et 11111111",
        "11110000 et 00001111",
        "Toutes les valeurs impaires",
      ],
      answer: 1,
    },

    {
      id: 14,
      question: "Où se situent exactement les bits qui représentent la mantisse dans la forme normalisée ?",
      options: [
        "Avant la virgule",
        "Après la virgule",
        "Au niveau du bit de signe",
        "Dans l'exposant biaisé",
      ],
      answer: 1,
    },

    {
      id: 15,
      question: "Dans la structure d'un mot de 32 bits en virgule flottante, quel composant vient juste après le bit de signe ?",
      options: [
        "La mantisse (23 bits)",
        "L'exposant normalisé (8 bits)",
        "La virgule fixe (4 bits)",
        "Le reste de la division par 16",
      ],
      answer: 1,
    },

    {
      id: 16,
      question: "Quel est l'ordre exact des composants dans la chaîne 'seeeeeeeemmmmmmmmmmmmmmmmmmmmmmm' ?",
      options: [
        "signe - mantisse - exposant",
        "exposant - signe - mantisse",
        "signe - exposant - mantisse",
        "mantisse - exposant - signe",
      ],
      answer: 2,
    },

    {
      id: 17,
      question: "Quel exemple de nombre décimal réel est proposé à la fin pour s'exercer au codage en notation IEEE ?",
      options: [
        "±37,625",
        "±307,625",
        "±10011,0111",
        "±13976,2548",
      ],
      answer: 1,
    },

    {
      id: 18,
      question: "Sous quel format final demande-t-on de représenter le résultat de l'exercice sur la virgule flottante ?",
      options: [
        "En binaire pur",
        "En décimal positionnel",
        "En octal",
        "En hexadécimal",
      ],
      answer: 3,
    },

    {
      id: 19,
      question: "La norme de notation mentionnée pour la virgule flottante dans le document est la notation :",
      options: [
        "ISO",
        "IEEE",
        "ASCII",
        "RBS",
      ],
      answer: 1,
    },

    {
      id: 20,
      question: "Pourquoi le nombre '1001011,10011' ne peut-il pas être codé sur une machine à virgule fixe au format (5 bits entiers, 4 bits décimaux) ?",
      options: [
        "Parce que sa partie entière nécessite 7 bits et sa partie fractionnaire 5 bits, ce qui dépasse le format",
        "Parce que c'est un nombre négatif",
        "Parce qu'il doit obligatoirement être converti en hexadécimal",
        "Parce qu'il ne contient pas le bit de signe requis",
      ],
      answer: 0,
    },
  ],
};