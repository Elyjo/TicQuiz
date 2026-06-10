export const chapter6 = {
  id: "chapter-6",
  title: "Circuits logiques",
  questions: [
    {
      id: 1,
      question: "Modèle mathématique pour les circuits logiques ?",
      options: [
        "Modèle de Von Neumann",
        "L'algèbre de BOOLE",
        "Codage de Hamming",
        "Compression de Gray"
      ],
      answer: 1
    },
    {
      id: 2,
      question: "Valeurs d'une variable booléenne ?",
      options: [
        "Entières de 0 à 15",
        "Positives ou négatives",
        "VRAI ou FAUX (1 ou 0)",
        "Alphabet hexadécimal"
      ],
      answer: 2
    },
    {
      id: 3,
      question: "Circuits réalisant les opérateurs logiques ?",
      options: [
        "Bascules volatiles",
        "Mémoires auxiliaires",
        "Portes logiques",
        "Mintermes condensés"
      ],
      answer: 2
    },
    {
      id: 4,
      question: "Caractéristique de la porte ET (AND) ?",
      options: [
        "Sortie à 1 si au moins une entrée est à 1",
        "Sortie à 1 si toutes les entrées sont à 1",
        "Sortie à 0 si toutes les entrées sont à 1",
        "Inverse la valeur de l'unique entrée"
      ],
      answer: 1
    },
    {
      id: 5,
      question: "Équation de l'opération somme OU (OR) ?",
      options: [
        "Q = A . B",
        "Q = A ⊕ B",
        "Q = A + B",
        "Q = ¯A"
      ],
      answer: 2
    },
    {
      id: 6,
      question: "Particularité de la table du NON-ET (NAND) ?",
      options: [
        "Sortie à 0 si toutes les entrées sont à 1",
        "Sortie à 1 si toutes les entrées sont à 1",
        "Sortie à 0 si toutes les entrées sont à 0",
        "Toujours identique à l'entrée A"
      ],
      answer: 0
    },
    {
      id: 7,
      question: "Porte OU-EXCLUSIF (XOR) : Sortie à 1 si :",
      options: [
        "Toutes les entrées valent 1 simultanément",
        "Une entrée vaut 1 mais pas les deux",
        "Toutes les entrées valent 0",
        "L'entrée A est l'inverse de B"
      ],
      answer: 1
    },
    {
      id: 8,
      question: "Loi de Morgan : Complément d'un produit (¯A ¯. ¯B) ?",
      options: [
        "¯A . ¯B",
        "A + B",
        "¯A + ¯B",
        "0"
      ],
      answer: 2
    },
    {
      id: 9,
      question: "Propriété Boole : 'A + A = A' ?",
      options: [
        "L'idempotence",
        "L'absorption",
        "La distributivité",
        "La nullité"
      ],
      answer: 0
    },
    {
      id: 10,
      question: "Propriété de l'opérateur ET : 'A . ¯A' vaut :",
      options: [
        "A",
        "1",
        "¯A",
        "0"
      ],
      answer: 3
    },
    {
      id: 11,
      question: "Départ de la conception combinatoire ?",
      options: [
        "Dessin direct du logigramme",
        "Cahier des charges pour table de vérité",
        "Simplification par code Gray",
        "Choix des alimentations électriques"
      ],
      answer: 1
    },
    {
      id: 12,
      question: "Variables d'entrée pour l'afficheur 7 segments (0-F) ?",
      options: [
        "3 variables",
        "4 variables (codage 4 bits)",
        "7 variables (une par segment)",
        "16 variables"
      ],
      answer: 1
    },
    {
      id: 13,
      question: "Extraction de la table : l'état 'X = 0' devient :",
      options: [
        "Le chiffre 1",
        "L'opérateur +",
        "La variable complémentée (¯X)",
        "Variable complètement ignorée"
      ],
      answer: 2
    },
    {
      id: 14,
      question: "Outil graphique pour optimiser les expressions ?",
      options: [
        "Logigramme de Von Neumann",
        "Tableau de George Boole",
        "Table de Karnaugh",
        "Algorithme d'Aiken"
      ],
      answer: 2
    },
    {
      id: 15,
      question: "Codage des lignes/colonnes de Karnaugh ?",
      options: [
        "Binaire naturel",
        "Code BCD",
        "Code Gray",
        "Caractères ASCII"
      ],
      answer: 2
    },
    {
      id: 16,
      question: "Taille d'un groupe dans Karnaugh ?",
      options: [
        "Nombre impair de cases",
        "Puissance binaire (1, 2, 4, 8, 16...)",
        "Tableau parfaitement carré",
        "Maximum 4 cases au total"
      ],
      answer: 1
    },
    {
      id: 17,
      question: "Karnaugh : Quelles variables retient-on ?",
      options: [
        "Toutes les variables du tableau",
        "Variables valant 1 à l'état initial",
        "Variables sans modification d'état",
        "Variables qui changent d'état"
      ],
      answer: 2
    },
    {
      id: 18,
      question: "Chevauchement de cases à 1 permis ?",
      options: [
        "Non, chaque 1 a un unique groupe",
        "Oui, pour augmenter la taille des groupes",
        "Oui, mais sur les bords verticaux",
        "Seulement si les variables sont impaires"
      ],
      answer: 1
    },
    {
      id: 19,
      question: "Quand s'arrêtent les groupes de Karnaugh ?",
      options: [
        "Tableau entièrement rempli de 0",
        "Dès qu'un groupe de taille 8 est trouvé",
        "Quand tous les 1 sont dans un groupe",
        "Après la première ligne"
      ],
      answer: 2
    },
    {
      id: 20,
      question: "Qu'est-ce qu'un logigramme ?",
      options: [
        "Tableau des mintermes d'une fonction",
        "Schéma électronique en portes logiques",
        "Algorithme de conversion binaire-décimal",
        "Liste chronologique des modifications"
      ],
      answer: 1
    }
  ]
};