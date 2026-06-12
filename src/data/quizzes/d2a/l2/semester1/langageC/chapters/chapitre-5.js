export const chapter5 = {
  id: "chapter-5",
  title: "Pointeurs et Mémoire",
  questions: [
    {
      id: 1,
      question: "Quel opérateur donne l'adresse mémoire d'une variable ?",
      options: [
        "L'étoile *",
        "L'esperluette &",
        "La flèche ->",
        "Le point ."
      ],
      answer: 1
    },
    {
      id: 2,
      question: "Comment déclare-t-on un pointeur vers un entier ?",
      options: [
        "int &p;",
        "ptr int p;",
        "int *p;",
        "int p*;"
      ],
      answer: 2
    },
    {
      id: 3,
      question: "Qu'est-ce qu'un pointeur en langage C ?",
      options: [
        "Une variable contenant une adresse mémoire",
        "Un type de données chiffrées",
        "Un raccourci vers une fonction",
        "Une option du compilateur"
      ],
      answer: 0
    },
    {
      id: 4,
      question: "Que fait l'étoile * placée devant un pointeur existant ?",
      options: [
        "Il détruit le pointeur",
        "Il accède à la valeur pointée",
        "Il multiplie l'adresse par 2",
        "Il affiche l'adresse"
      ],
      answer: 1
    },
    {
      id: 5,
      question: "Quel formatteur de printf affiche une adresse mémoire ?",
      options: [
        "%d",
        "%s",
        "%x",
        "%p"
      ],
      answer: 3
    },
    {
      id: 6,
      question: "Quelle fonction alloue dynamiquement de la mémoire brute ?",
      options: [
        "alloc()",
        "malloc()",
        "calloc()",
        "realloc()"
      ],
      answer: 1
    },
    {
      id: 7,
      question: "Quelle valeur indique qu'un pointeur ne pointe sur rien ?",
      options: [
        "0",
        "VOID",
        "NULL",
        "EMPTY"
      ],
      answer: 2
    },
    {
      id: 8,
      question: "Quelle fonction libère la mémoire allouée sur le Tas ?",
      options: [
        "delete()",
        "clear()",
        "free()",
        "release()"
      ],
      answer: 2
    },
    {
      id: 9,
      question: "Qu'est-ce qu'une fuite de mémoire (Memory Leak) ?",
      options: [
        "Un pointeur qui change d'adresse seul",
        "De la mémoire allouée non libérée",
        "Une écriture hors d'un tableau",
        "Une erreur de segmentation"
      ],
      answer: 1
    },
    {
      id: 10,
      question: "Si 'int T[5];', quelle expression équivaut à T[2] ?",
      options: [
        "*(T + 2)",
        "*T + 2",
        "&T + 2",
        "T + 2"
      ],
      answer: 0
    },
    {
      id: 11,
      question: "Où est stockée la mémoire allouée par malloc() ?",
      options: [
        "Dans la Pile (Stack)",
        "Dans le Tas (Heap)",
        "Dans les registres CPU",
        "Dans le code source"
      ],
      answer: 1
    },
    {
      id: 12,
      question: "Quelle est la taille d'un pointeur sur un système 64 bits ?",
      options: [
        "2 octets",
        "4 octets",
        "8 octets",
        "Dépend du type pointé"
      ],
      answer: 2
    },
    {
      id: 13,
      question: "Que retourne malloc() si le système n'a plus de mémoire ?",
      options: [
        "Le pointeur NULL",
        "Une adresse au hasard",
        "Une erreur de compilation",
        "La valeur -1"
      ],
      answer: 0
    },
    {
      id: 14,
      question: "Quel opérateur accède aux champs d'une structure via son pointeur ?",
      options: [
        "Le point .",
        "La flèche ->",
        "L'étoile *",
        "L'esperluette &"
      ],
      answer: 1
    },
    {
      id: 15,
      question: "Qu'est-ce qu'un pointeur générique en C ?",
      options: [
        "null*",
        "any*",
        "void*",
        "auto*"
      ],
      answer: 2
    },
    {
      id: 16,
      question: "Quel danger représente un pointeur 'dangling' (suspendu) ?",
      options: [
        "Pointe vers une zone mémoire libérée",
        "N'a jamais été initialisé",
        "Est bloqué par le pare-feu",
        "Consomme trop de CPU"
      ],
      answer: 0
    },
    {
      id: 17,
      question: "Que mesure l'opérateur sizeof(int*) ?",
      options: [
        "La taille de l'entier",
        "La taille du pointeur",
        "La longueur du tableau",
        "Le nombre de variables"
      ],
      answer: 1
    },
    {
      id: 18,
      question: "Quelle fonction réalloue un bloc en changeant sa taille ?",
      options: [
        "malloc()",
        "calloc()",
        "realloc()",
        "resize()"
      ],
      answer: 2
    },
    {
      id: 19,
      question: "Que se passe-t-il si on déréférence un pointeur NULL ?",
      options: [
        "Le programme l'ignore",
        "Une Erreur de Segmentation (Crash)",
        "La variable passe à zéro",
        "Le compilateur corrige l'adresse"
      ],
      answer: 1
    },
    {
      id: 20,
      question: "L'arithmétique des pointeurs : que fait 'p++;' si p est un int* ?",
      options: [
        "Ajoute 1 octet à l'adresse",
        "Ajoute 1 à la valeur pointée",
        "Avance de la taille d'un int (4 octets)",
        "Met l'adresse à zéro"
      ],
      answer: 2
    }
  ]
};