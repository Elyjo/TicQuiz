export const chapter3 = {
  id: "chapter-3",
  title: "Le MCT",
  questions: [
    {
      id: 1,
      question: "Quelle question fondamentale le niveau Conceptuel des Traitements (MCT) cherche-t-il à résoudre ?",
      options: [
        "Qui doit exécuter les tâches ?",
        "Quelles sont les réactions du système face aux événements du monde réel (QUOI) ?",
        "Comment les données sont-elles stockées sur le disque ?",
        "Dans quel langage informatique faut-il coder ?"
      ],
      answer: 1
    },
    {
      id: 2,
      question: "Le MCT prend-il en compte l'organisation de l'entreprise (les services, le temps, les lieux) ?",
      options: [
        "Oui, de manière très précise",
        "Non, il est totalement indépendant de l'organisation et de la technique",
        "Uniquement pour les acteurs externes",
        "Seulement si l'entreprise utilise un SGBD"
      ],
      answer: 1
    },
    {
      id: 3,
      question: "Qu'est-ce qu'une opération au sens conceptuel dans un MCT ?",
      options: [
        "Une fonction mathématique complexe",
        "Un ensemble de traitements déclenché par un ou plusieurs événements, non interruptible par l'extérieur",
        "Une modification directe d'une table SQL",
        "Une session utilisateur sur une application"
      ],
      answer: 1
    },
    {
      id: 4,
      question: "Quelle est la règle d'or concernant l'exécution d'une opération conceptuelle ?",
      options: [
        "Elle peut être mise en pause par un acteur externe",
        "Elle est ininterrompue : une fois déclenchée, elle s'exécute entièrement jusqu'à produire ses résultats",
        "Elle doit durer moins d'une minute",
        "Elle nécessite obligatoirement une intervention humaine"
      ],
      answer: 1
    },
    {
      id: 5,
      question: "Qu'est-ce qu'un événement dans un MCT ?",
      options: [
        "La constatation d'un fait qui sollicite le système ou résulte d'un traitement",
        "Une panne de disque dur",
        "Une alerte de clé étrangère invalide",
        "Le choix d'un mot de passe par l'utilisateur"
      ],
      answer: 0
    },
    {
      id: 6,
      question: "Comment appelle-t-on un événement qui provient de l'extérieur du domaine d'étude ?",
      options: [
        "Un événement interne",
        "Un événement externe (ou déclencheur)",
        "Un événement calculé",
        "Un événement temporel"
      ],
      answer: 1
    },
    {
      id: 7,
      question: "Comment appelle-t-on un événement produit par une opération et destiné au système lui-même ?",
      options: [
        "Un événement externe",
        "Un événement interne (ou résultat)",
        "Un flux de contexte",
        "Une contrainte d'intégrité"
      ],
      answer: 1
    },
    {
      id: 8,
      question: "Qu'est-ce qu'une synchronisation dans un diagramme MCT ?",
      options: [
        "La mise à jour en temps réel des données",
        "Une condition logique liant les événements d'entrée requis pour déclencher l'opération",
        "Le lien d'héritage entre deux entités",
        "Une fonction d'attente réseau"
      ],
      answer: 1
    },
    {
      id: 9,
      question: "Quel opérateur logique est utilisé si TOUS les événements d'entrée doivent être présents pour démarrer l'opération ?",
      options: [
        "L'opérateur OU",
        "L'opérateur ET",
        "L'opérateur NON",
        "L'opérateur XOR"
      ],
      answer: 1
    },
    {
      id: 10,
      question: "Quel opérateur logique est utilisé si la présence d'au moins UN SEUL des événements suffit à déclencher l'opération ?",
      options: [
        "L'opérateur ET",
        "L'opérateur OU",
        "L'opérateur NON",
        "L'opérateur NAND"
      ],
      answer: 1
    },
    {
      id: 11,
      question: "Qu'est-ce qu'une règle d'émission dans un MCT ?",
      options: [
        "Une condition qui détermine la production d'un événement de sortie selon le résultat de l'opération",
        "Une loi sur le chiffrement des données",
        "Un protocole d'envoi de paquets IP",
        "Une restriction d'accès à la base de données"
      ],
      answer: 0
    },
    {
      id: 12,
      question: "Que signifie une règle d'emission notée 'Toujours' ?",
      options: [
        "L'événement de sortie est produit uniquement si une erreur survient",
        "L'événement de sortie est systématiquement produit à la fin de l'opération",
        "L'opération tourne en boucle infinie",
        "Le traitement est asynchrone"
      ],
      answer: 1
    },
    {
      id: 13,
      question: "Si une opération vérifie un stock, quelles peuvent être les règles d'émission logiques ?",
      options: [
        "PRIMARY KEY et FOREIGN KEY",
        "[Si disponible] et [Si rupture]",
        "ET / OU",
        "INSERT / UPDATE"
      ],
      answer: 1
    },
    {
      id: 14,
      question: "Qu'est-ce qu'un processus dans le cadre du MCT ?",
      options: [
        "Un programme en cours d'exécution sous Linux",
        "Un sous-ensemble cohérent d'opérations concourant à un même but (ex: processus Facturation)",
        "Une suite d'attributs atomiques",
        "Le schéma logique de la base"
      ],
      answer: 1
    },
    {
      id: 15,
      question: "D'où proviennent généralement les événements externes modélisés dans le MCT ?",
      options: [
        "Des tables du MLD",
        "Des flux identifiés en amont dans le Modèle Conceptuel de Communication (MCC)",
        "Des scripts de programmation",
        "De l'espace de stockage physique"
      ],
      answer: 1
    },
    {
      id: 16,
      question: "Un événement de type 'Date = 31 décembre' est qualifié d'événement :",
      options: [
        "Interne",
        "Temporel (facteur temps)",
        "Conditionnel",
        "Calculé"
      ],
      answer: 1
    },
    {
      id: 17,
      question: "Dans la représentation graphique d'un MCT, où place-t-on la condition de synchronisation ?",
      options: [
        "À l'intérieur du rectangle de l'opération",
        "Dans un entonnoir ou un symbole juste au-dessus de l'opération",
        "Tout en bas de la page après les résultats",
        "Dans l'entité-association"
      ],
      answer: 1
    },
    {
      id: 18,
      question: "Le MCT décrit-il les technologies utilisées (comme l'utilisation de serveurs web ou de terminaux) ?",
      options: [
        "Oui, au moyen de diagrammes réseaux",
        "Non, il fait abstraction complète des choix technologiques et matériels",
        "Seulement pour les opérations de paiement",
        "Uniquement à l'Université"
      ],
      answer: 1
    },
    {
      id: 19,
      question: "Quelle est la relation entre le MCT et le MOT ?",
      options: [
        "Le MOT remplace le MCT qui est obsolète",
        "Le MOT est une projection du MCT intégrant les choix d'organisation (Qui, Où, Quand)",
        "Le MCT est généré à partir du MOT",
        "Il n'y a aucun rapport entre ces deux modèles"
      ],
      answer: 1
    },
    {
      id: 20,
      question: "Quelle structure permet d'exprimer graphiquement les traitements du MCT ?",
      options: [
        "Le graphe d'ordonnancement des événements et des opérations",
        "Le diagramme de classes",
        "Le modèle relationnel de tables",
        "La matrice des dépendances fonctionnelles"
      ],
      answer: 0
    }
  ]
};