export const chapter3 = {
  id: "chapter-3",
  title: "Tableaux et Chaînes",
  questions: [
    {
      id: 1,
      question: "Quel est l'indice du tout premier élément d'un tableau ?",
      options: ["1", "0", "-1", "Dépend de la taille"],
      answer: 1,
    },
    {
      id: 2,
      question: "Comment déclare-t-on un tableau de 10 entiers en C ?",
      options: ["int t(10);", "int t[10];", "t = array(10);", "int tab 10;"],
      answer: 1,
    },
    {
      id: 3,
      question: "Quel est l'indice maximal d'un tableau déclaré avec T[5] ?",
      options: ["4", "5", "6", "Indéfini"],
      answer: 0,
    },
    {
      id: 4,
      question: "Qu'est-ce qu'une chaîne de caractères en langage C ?",
      options: [
        "Un type primitif 'string'",
        "Un tableau de caractères",
        "Un objet spécial",
        "Une liste chaînée de bits",
      ],
      answer: 1,
    },
    {
      id: 5,
      question: "Quel caractère marque la fin d'une chaîne en C ?",
      options: ["\\n", "\\0", ";", "L'espace"],
      answer: 1,
    },
    {
      id: 6,
      question:
        'Combien d\'octets occupe réellement la chaîne "Hi" en mémoire ?',
      options: ["1 octet", "2 octets", "3 octets", "4 octets"],
      answer: 2,
    },
    {
      id: 7,
      question: "Quelle fonction calcule la longueur d'une chaîne ?",
      options: ["length()", "strlen()", "strcmp()", "size()"],
      answer: 1,
    },
    {
      id: 8,
      question:
        "Quelle bibliothèque faut-il inclure pour manipuler les chaînes ?",
      options: ["stdio.h", "stdlib.h", "string.h", "ctype.h"],
      answer: 2,
    },
    {
      id: 9,
      question: "Quelle fonction permet de copier une chaîne dans une autre ?",
      options: ["strcpy()", "strcat()", "copy()", "strcmp()"],
      answer: 0,
    },
    {
      id: 10,
      question: "Que retourne strcmp() si les deux chaînes sont identiques ?",
      options: ["1", "0", "true", "-1"],
      answer: 1,
    },
    {
      id: 11,
      question: "Comment déclare-t-on un tableau à deux dimensions (matrice) ?",
      options: [
        "int m[3,3];",
        "int m[3][3];",
        "int m(3)(3);",
        "matrix m(3,3);",
      ],
      answer: 1,
    },
    {
      id: 12,
      question: "Que se passe-t-il si on dépasse la taille d'un tableau en C ?",
      options: [
        "Une erreur de compilation",
        "Une exception logicielle",
        "Un comportement indéterminé",
        "Le tableau grandit seul",
      ],
      answer: 2,
    },
    {
      id: 13,
      question: "Quel formatteur de printf affiche une chaîne de caractères ?",
      options: ["%c", "%d", "%s", "%f"],
      answer: 2,
    },
    {
      id: 14,
      question: "Quel formatteur de printf affiche un caractère unique ?",
      options: ["%s", "%c", "%d", "%str"],
      answer: 1,
    },
    {
      id: 15,
      question: "Que fait la fonction strcat() ?",
      options: [
        "Coupe une chaîne",
        "Compare deux chaînes",
        "Concatène deux chaînes",
        "Inverse une chaîne",
      ],
      answer: 2,
    },
    {
      id: 16,
      question: "Quelle syntaxe initialise correctement un tableau d'entiers ?",
      options: [
        "int t[3] = [1, 2, 3];",
        "int t[3] = {1, 2, 3};",
        "int t[3] = (1, 2, 3);",
        "int t[3] = 1, 2, 3;",
      ],
      answer: 1,
    },
    {
      id: 17,
      question: "Que contient le nom seul d'un tableau en C ?",
      options: [
        "La valeur du premier élément",
        "L'adresse du premier élément",
        "La taille totale du tableau",
        "Le nombre d'éléments",
      ],
      answer: 1,
    },
    {
      id: 18,
      question: "Limite principale de scanf() avec le formatteur %s ?",
      options: [
        "Bloque après 10 caractères",
        "S'arrête au premier espace",
        "N'accepte que les majuscules",
        "N'ajoute pas de \\0",
      ],
      answer: 1,
    },
    {
      id: 19,
      question: "Quelle fonction standard lit une ligne entière avec espaces ?",
      options: ["scanf()", "gets()", "fgets()", "read()"],
      answer: 2,
    },
    {
      id: 20,
      question: "Si 'char s[10] = \"Hello\";', que vaut strlen(s) ?",
      options: ["5", "6", "10", "11"],
      answer: 0,
    },
  ],
};
