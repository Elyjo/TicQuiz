export const chapter1 = {
  id: "chapter-1",

  title: "Technologie des ordinateurs",

  questions: [
    {
      id: 1,
      question: "Quelle est la définition exacte de l'Informatique selon le document ?",
      options: [
        "La science de la maintenance des ordinateurs",
        "La science du traitement automatique de l’information",
        "L'art de programmer des applications web",
        "L'étude exclusive des composants matériels",
      ],
      answer: 1,
    },

    {
      id: 2,
      question: "Qu'est-ce que l'information pour un ordinateur ?",
      options: [
        "Uniquement les textes saisis au clavier",
        "La matière manipulée et traitée par les ordinateurs, convertie sous forme numérique",
        "Le signal électrique de l'alimentation",
        "Uniquement les fichiers stockés sur une clé USB",
      ],
      answer: 1,
    },

    {
      id: 3,
      question: "De quoi se compose un système Informatique ?",
      options: [
        "De matériels informatiques (HARDWARE) et de programmes (SOFTWARE)",
        "Uniquement d'une unité centrale et d'un écran",
        "De l'unité arithmétique et logique et de l'unité de contrôle",
        "D'entrées et de sorties physiques uniquement",
      ],
      answer: 0,
    },

    {
      id: 4,
      question: "Dans la première approche du système informatique, quel est l'ordre du flux ?",
      options: [
        "SORTIES -> SYSTEME DE TRAITEMENT -> ENTREES",
        "SYSTEME DE TRAITEMENT -> ENTREES -> SORTIES",
        "ENTREES -> SYSTEME DE TRAITEMENT -> SORTIES",
        "COMMANDE -> MEMOIRE -> CALCUL",
      ],
      answer: 2,
    },

    {
      id: 5,
      question: "Que contient principalement l'Unité Centrale ?",
      options: [
        "Uniquement l'écran et le clavier",
        "Le processeur, le disque dur, la carte mère et l’alimentation",
        "Les périphériques de sortie uniquement",
        "La mémoire morte exclusivement",
      ],
      answer: 1,
    },

    {
      id: 6,
      question: "Quelle est la particularité structurelle de l'architecture de Von Neumann ?",
      options: [
        "Elle sépare strictement la mémoire des données de celle des instructions",
        "Elle n'utilise pas d'unité de contrôle",
        "Elle utilise une structure de stockage unique pour conserver à la fois les instructions et les données",
        "Elle élimine le besoin de périphériques d'entrée-sortie",
      ],
      answer: 2,
    },

    {
      id: 7,
      question: "Quel est le rôle de l'Unité Arithmétique et Logique (UAL) ?",
      options: [
        "Gérer le séquençage des opérations",
        "Communiquer avec le monde extérieur",
        "Stocker les programmes et les données de base",
        "Effectuer les opérations de base",
      ],
      answer: 3,
    },

    {
      id: 8,
      question: "Quelle composante est chargée du « séquençage » des opérations ?",
      options: [
        "L’unité de contrôle",
        "L'unité arithmétique et logique",
        "La mémoire vive",
        "Le dispositif d'entrée-sortie",
      ],
      answer: 0,
    },

    {
      id: 9,
      question: "Comment se divise la mémoire selon la décomposition de Von Neumann ?",
      options: [
        "Entre mémoire d'entrée et mémoire de sortie",
        "Entre mémoire volatile et mémoire permanente",
        "Entre disque dur et unité centrale",
        "Entre mémoire arithmétique et mémoire logique",
      ],
      answer: 1,
    },

    {
      id: 10,
      question: "À quoi servent les dispositifs d'entrée-sortie ?",
      options: [
        "À effectuer les calculs complexes",
        "À stocker les données volatiles en cours de fonctionnement",
        "À permettre de communiquer avec le monde extérieur",
        "À gérer l'alimentation électrique de la carte mère",
      ],
      answer: 2,
    },

    // ===== NOUVELLES QUESTIONS (11 à 20) =====

    {
      id: 11,
      question: "Quelles sont les capacités fondamentales d'un ordinateur mentionnées dans l'introduction ?",
      options: [
        "Naviguer sur internet, jouer à des jeux et envoyer des e-mails",
        "Acquérir, conserver, traiter et restituer des informations stockées",
        "Remplacer entièrement l'intelligence humaine",
        "Générer de l'électricité pour ses composants périphériques",
      ],
      answer: 1,
    },

    {
      id: 12,
      question: "Quels types d'exemples d'informations converties sous formes numériques sont cités ?",
      options: [
        "Les câbles électriques et les cartes mères",
        "Les valeurs numériques, les textes, les images et les sons",
        "Les disques durs et les boîtiers principaux",
        "Les systèmes d'exploitation et les logiciels",
      ],
      answer: 1,
    },

    {
      id: 13,
      question: "Qu'est-ce que le 'SOFTWARE' dans un système informatique ?",
      options: [
        "Le boîtier en métal de l'ordinateur",
        "L'alimentation électrique de la carte mère",
        "Les programmes indispensables au fonctionnement des matériels",
        "Les périphériques de stockage externes",
      ],
      answer: 2,
    },

    {
      id: 14,
      question: "Dans l'approche détaillée du système, quelles sont les deux types de mémoires reliées à l'unité de calcul ?",
      options: [
        "Mémoire flash et mémoire cache",
        "Mémoire morte et mémoire vive",
        "Mémoire externe et clé USB",
        "Disque dur et disque SSD",
      ],
      answer: 1,
    },

    {
      id: 15,
      question: "Comment appelle-t-on les mémoires externes représentées sous l'unité centrale dans le schéma détaillé ?",
      options: [
        "Les mémoires auxiliaires",
        "Les mémoires volatiles",
        "Les unités logiques",
        "Les registres de commande",
      ],
      answer: 0,
    },

    {
      id: 16,
      question: "Où se connectent les périphériques d'entrées-sorties d'un ordinateur ?",
      options: [
        "Directement à la mémoire morte",
        "À l'unité centrale",
        "Uniquement au disque dur",
        "À l'unité arithmétique et logique",
      ],
      answer: 1,
    },

    {
      id: 17,
      question: "Dans le modèle de Von Neumann, quel type de stockage est utilisé pour les instructions et les données ?",
      options: [
        "Deux stockages physiques complètement séparés",
        "Une structure de stockage unique",
        "Uniquement des disquettes externes",
        "Un stockage réseau distant",
      ],
      answer: 1,
    },

    {
      id: 18,
      question: "Qu'est-ce que la 'mémoire volatile' selon la décomposition de l'architecture ?",
      options: [
        "Une mémoire permanente qui conserve les données de base de la machine",
        "Une mémoire qui contient les programmes et données en cours de fonctionnement",
        "Un composant géré exclusivement par les dispositifs d'entrée-sortie",
        "Le boîtier principal de l'ordinateur",
      ],
      answer: 1,
    },

    {
      id: 19,
      question: "Qu'est-ce que la 'mémoire permanente' selon l'architecture de Von Neumann ?",
      options: [
        "Une mémoire contenant les programmes et les données de base de la machine",
        "Une mémoire qui s'efface à chaque extinction de l'ordinateur",
        "L'unité arithmétique et logique",
        "Les périphériques de commande externes",
      ],
      answer: 0,
    },

    {
      id: 20,
      question: "L'unité de contrôle est chargée du « séquençage » des opérations. Que contient la mémoire pour l'aider ?",
      options: [
        "Le courant électrique stabilisé",
        "Les données et le programme indiquant les calculs à faire",
        "Les périphériques d'entrée uniquement",
        "L'infrastructure matérielle (HARDWARE)",
      ],
      answer: 1,
    },
  ],
};