export const chapter6 = {
  id: "chapter-6",

  title: "Circuits logiques",

  questions: [
    {
      id: 1,
      question: "Quel modèle mathématique prenant en considération le système binaire est utilisé pour concevoir les circuits logiques ?",
      options: [
        "Le modèle de Von Neumann",
        "L'algèbre de BOOLE",
        "Le système de codage de Hamming",
        "La méthode de compression de Gray",
      ],
      answer: 1,
    },

    {
      id: 2,
      question: "Quelles sont les seules valeurs que peut prendre une variable dite booléenne ?",
      options: [
        "Toutes les valeurs entières de 0 à 15",
        "Les valeurs positives ou négatives",
        "VRAI ou FAUX (ou bien encore 1 ou 0)",
        "Les symboles de l'alphabet hexadécimal",
      ],
      answer: 2,
    },

    {
      id: 3,
      question: "Comment appelle-t-on les circuits électroniques réalisant les opérateurs logiques ?",
      options: [
        "Les bascules volatiles",
        "Les mémoires auxiliaires",
        "Les portes logiques",
        "Les mintermes condensés",
      ],
      answer: 2,
    },

    {
      id: 4,
      question: "Quelle est la caractéristique de l'opération produit 'ET' (AND) pour deux entrées ?",
      options: [
        "La sortie vaut 1 si au moins une des entrées est à 1",
        "La sortie vaut 1 si toutes les entrées sont à 1",
        "La sortie vaut 0 si toutes les entrées sont à 1",
        "La sortie inverse simplement la valeur de l'unique entrée",
      ],
      answer: 1,
    },

    {
      id: 5,
      question: "Quelle équation logique correspond à l'opération somme 'OU' (OR) ?",
      options: [
        "Q = A . B",
        "Q = A ⊕ B",
        "Q = A + B",
        "Q = ¯A",
      ],
      answer: 2,
    },

    {
      id: 6,
      question: "Quelle est la particularité de la table de vérité de la porte NON-ET (NAND) ?",
      options: [
        "La sortie vaut 0 si toutes les entrées sont à 1",
        "La sortie vaut 1 uniquement si toutes les entrées sont à 1",
        "La sortie vaut 0 si toutes les entrées sont à 0",
        "La sortie est toujours identique à l'entrée A",
      ],
      answer: 0,
    },

    {
      id: 7,
      question: "Pour l'opération OU-EXCLUSIF (XOR), dans quel cas précis la sortie vaut-elle 1 ?",
      options: [
        "Si toutes les entrées valent 1 simultanément",
        "Si l'une des entrées vaut 1 mais pas les deux simultanément",
        "Uniquement si toutes les entrées valent 0",
        "Lorsque l'entrée A est l'inverse de l'entrée B uniquement",
      ],
      answer: 1,
    },

    {
      id: 8,
      question: "Selon la loi de Morgan, à quoi est égal le complément d'un produit binaire (¯A ¯. ¯B) ?",
      options: [
        "¯A . ¯B",
        "A + B",
        "¯A + ¯B",
        "0",
      ],
      answer: 2,
    },

    {
      id: 9,
      question: "Quelle propriété de l'algèbre de Boole est illustrée par l'équation 'A + A = A' ?",
      options: [
        "L'idempotence",
        "L'absorption",
        "La distributivité",
        "La nullité",
      ],
      answer: 0,
    },

    {
      id: 10,
      question: "D'après les propriétés de l'opérateur ET, quelle est la valeur de 'A . ¯A' ?",
      options: [
        "A",
        "1",
        "¯A",
        "0",
      ],
      answer: 3,
    },

    {
      id: 11,
      question: "Par quoi commence la démarche de conception d'un système logique combinatoire ?",
      options: [
        "Le dessin direct du logigramme",
        "Un cahier des charges afin de construire la table de vérité",
        "Une simplification par le code Gray uniquement",
        "Le choix exclusif des alimentations électriques",
      ],
      answer: 1,
    },

    {
      id: 12,
      question: "Dans l'exemple de l'afficheur 7 segments, combien de variables d'entrée sont nécessaires pour décrire les chiffres hexadécimaux de 0 à F ?",
      options: [
        "3 variables",
        "4 variables (codage sur 4 bits)",
        "7 variables (une par segment)",
        "16 variables",
      ],
      answer: 1,
    },

    {
      id: 13,
      question: "Lors de l'extraction d'une fonction algébrique depuis la table de vérité, par quoi remplace-t-on l'état 'X = 0' ?",
      options: [
        "Par le chiffre 1",
        "Par l'opérateur +",
        "Par la variable complémentée (¯X)",
        "On ignore complètement la variable",
      ],
      answer: 2,
    },

    {
      id: 14,
      question: "Quel outil graphique semi-graphique est présenté pour optimiser et simplifier les expressions logiques ?",
      options: [
        "Le logigramme de Von Neumann",
        "Le tableau de George Boole",
        "La table de Karnaugh",
        "L'algorithme d'Aiken",
      ],
      answer: 2,
    },

    {
      id: 15,
      question: "Comment sont codées les lignes et les colonnes d'une table de Karnaugh ?",
      options: [
        "En binaire naturel",
        "En code BCD",
        "En code Gray",
        "En caractères ASCII",
      ],
      answer: 2,
    },

    {
      id: 16,
      question: "Quelle règle de taille doit respecter un groupe de '1' formé dans une table de Karnaugh ?",
      options: [
        "Contenir un nombre impair de cases",
        "Avoir une taille égale à une puissance binaire (1, 2, 4, 8, 16...)",
        "Être obligatoirement un tableau parfaitement carré",
        "Ne jamais dépasser 4 cases au total",
      ],
      answer: 1,
    },

    {
      id: 17,
      question: "Pour extraire l'expression simplifiée d'un groupe dans une table de Karnaugh, quelles variables retient-on ?",
      options: [
        "Toutes les variables présentes dans le tableau",
        "Uniquement les variables qui valent 1 à l'état initial",
        "Uniquement les variables dont l'état logique n'est pas modifié à l'intérieur du regroupement",
        "Uniquement les variables qui changent d'état d'une case à l'autre",
      ],
      answer: 2,
    },

    {
      id: 18,
      question: "Est-il permis qu'une ou plusieurs cases à '1' soient communes à plusieurs regroupements (chevauchement) ?",
      options: [
        "Non, chaque '1' doit appartenir à un unique groupe",
        "Oui, pour augmenter la taille des groupes (les inclusions totales restent interdites)",
        "Oui, mais uniquement sur les bords verticaux du tableau",
        "Seulement si le nombre total de variables est empire",
      ],
      answer: 1,
    },

    {
      id: 19,
      question: "Quand s'arrête la confection des regroupements dans une table de Karnaugh ?",
      options: [
        "Lorsque le tableau est entièrement rempli de 0",
        "Dès qu'un groupe de taille 8 est identifié",
        "Lorsque tous les '1' appartiennent à au moins un regroupement",
        "Après avoir analysé uniquement la première ligne",
      ],
      answer: 2,
    },

    {
      id: 20,
      question: "Qu'est-ce qu'un logigramme dans le contexte de ce cours ?",
      options: [
        "Un tableau contenant l'ensemble des mintermes d'une fonction",
        "La réalisation électronique d'une fonction logique à l'aide de portes logiques",
        "Un algorithme de conversion binaire vers décimal",
        "La liste chronologique des modifications d'un fichier",
      ],
      answer: 1,
    },
  ],
};