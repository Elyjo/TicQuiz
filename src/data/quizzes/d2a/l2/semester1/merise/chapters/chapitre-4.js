export const chapter4 = {
  id: "chapter-4",
  title: "Le MCD",
  questions: [
    {
      id: 1,
      question: "Qu'est-ce qu'une entité dans un MCD Merise ?",
      options: [
        "Une table contenant du code SQL",
        "La modélisation d'un objet concret ou abstrait du monde réel ayant une existence propre",
        "Un lien logique entre deux fichiers textuels",
        "Une colonne de données numériques"
      ],
      answer: 1
    },
    {
      id: 2,
      question: "Comment appelle-t-on une caractéristique élémentaire qui décrit une entité ou une association ?",
      options: [
        "Un identifiant",
        "Une propriété (ou attribut)",
        "Une occurrence",
        "Une cardinalité"
      ],
      answer: 1
    },
    {
      id: 3,
      question: "Qu'est-ce qu'une occurrence (ou individu) par rapport à une entité ?",
      options: [
        "Un exemplaire ou un enregistrement particulier de cette entité",
        "Le nombre total de lignes dans la base de données",
        "Le type de données de l'identifiant",
        "Une erreur de redondance"
      ],
      answer: 0
    },
    {
      id: 4,
      question: "Quelle est le rôle obligatoire de l'identifiant d'une entité ?",
      options: [
        "Permettre de trier les données par ordre alphabétique",
        "Désigner de façon unique chaque occurrence de l'entité",
        "Créer un lien direct avec le serveur web",
        "Empêcher la suppression des lignes"
      ],
      answer: 1
    },
    {
      id: 5,
      question: "Comment représente-t-on graphiquement l'identifiant d'une entité dans un schéma MCD ?",
      options: [
        "Il est écrit en italique",
        "Il est souligné (et souvent placé en tête de liste)",
        "Il est encadré par des pointillés",
        "Il est précédé d'une étoile (*)"
      ],
      answer: 1
    },
    {
      id: 6,
      question: "Qu'est-ce qu'une association (ou relation) dans un MCD ?",
      options: [
        "Un fichier de configuration informatique",
        "Un lien sémantique entre deux ou plusieurs entités",
        "Une clé étrangère physique",
        "Une commande d'insertion de données"
      ],
      answer: 1
    },
    {
      id: 7,
      question: "Comment appelle-t-on le nombre d'entités connectées à une même association ?",
      options: [
        "La cardinalité",
        "La dimension de l'association",
        "L'indice de transitivité",
        "La multiplicité relationnelle"
      ],
      answer: 1
    },
    {
      id: 8,
      question: "Qu'est-ce qu'une association réflexive ?",
      options: [
        "Une association qui relie une entité à elle-même",
        "Une association qui n'a pas de propriétés",
        "Une relation impossible à traduire au niveau logique",
        "Une association reliant plus de quatre entités"
      ],
      answer: 0
    },
    {
      id: 9,
      question: "Que représente la cardinalité minimale (ex: 0 ou 1) dans un MCD ?",
      options: [
        "Le nombre minimum de fois qu'une occurrence de l'entité participe à l'association",
        "Le nombre minimal de colonnes dans la table",
        "La taille en octets de l'identifiant",
        "Le nombre de clés étrangères requises"
      ],
      answer: 0
    },
    {
      id: 10,
      question: "Que représente la cardinalité maximale (ex: 1 ou n) dans un MCD ?",
      options: [
        "Le nombre maximum de fois qu'une occurrence de l'entité peut participer à l'association",
        "La limite de stockage du SGBD",
        "Le nombre total de lignes de la table",
        "Le nombre d'utilisateurs simultanés"
      ],
      answer: 0
    },
    {
      id: 11,
      question: "Si un étudiant appartient à un et un seul groupe de TD, quelle est sa cardinalité du côté de l'association ?",
      options: [
        "0,n",
        "1,1",
        "0,1",
        "1,n"
      ],
      answer: 1
    },
    {
      id: 12,
      question: "Si un groupe de TD peut contenir entre 0 et 35 étudiants, quelle est sa cardinalité du côté de l'association ?",
      options: [
        "1,1",
        "0,n",
        "1,n",
        "0,1"
      ],
      answer: 1
    },
    {
      id: 13,
      question: "Une association dans un MCD peut-elle posséder des propriétés propres ?",
      options: [
        "Non, c'est théoriquement impossible",
        "Oui, si ces propriétés dépendent des entités reliées (ex: Quantité dans une vente)",
        "Uniquement si l'association est de dimension supérieure à 3",
        "Seulement si ce sont des propriétés de type Date"
      ],
      answer: 1
    },
    {
      id: 14,
      question: "Qu'est-ce qu'un dictionnaire des données ?",
      options: [
        "Un manuel d'utilisation SQL",
        "Un document recensant de façon exhaustive toutes les propriétés à intégrer dans le MCD",
        "Un répertoire contenant les mots de passe de la base",
        "Le code source du composant React"
      ],
      answer: 1
    },
    {
      id: 15,
      question: "Quelle règle interdit d'avoir deux propriétés portant le même nom pour désigner des choses différentes ?",
      options: [
        "L'élimination des synonymes",
        "L'élimination des polysèmes",
        "La règle d'atomicité",
        "La normalisation 2FN"
      ],
      answer: 1
    },
    {
      id: 16,
      question: "Que signifie le principe d'atomicité d'une propriété dans un MCD ?",
      options: [
        "La propriété doit être chiffrée",
        "La propriété n'est pas décomposable en sous-informations (ex: Ville et Code Postal séparés)",
        "La propriété doit obligatoirement être un nombre entier",
        "La propriété est partagée par toutes les entités"
      ],
      answer: 1
    },
    {
      id: 17,
      question: "Dans une relation sémantique 'Un auteur écrit des livres', de quoi 'écrit' est-il le nom ?",
      options: [
        "De l'entité",
        "De l'association",
        "De l'identifiant",
        "De l'occurrence"
      ],
      answer: 1
    },
    {
      id: 18,
      question: "Qu'est-ce qu'une dépendance fonctionnelle (A -> B) ?",
      options: [
        "Une fonction informatique écrite en langage C",
        "La connaissance d'une valeur de A détermine une et une seule valeur de B",
        "Le lien réseau entre deux ordinateurs",
        "Une contrainte de clé étrangère au format SQL"
      ],
      answer: 1
    },
    {
      id: 19,
      question: "Le Modèle Conceptuel des Données (MCD) dépend-il du type de SGBD (MySQL, Oracle, PostgreSQL...) ?",
      options: [
        "Oui, totalement",
        "Non, il est purement conceptuel et indépendant de tout choix technique ou logiciel",
        "Uniquement pour le choix des types numériques",
        "Seulement si l'application est en ligne"
      ],
      answer: 1
    },
    {
      id: 20,
      question: "Quelle est l'étape suivante immédiate après la validation du MCD dans la méthode Merise ?",
      options: [
        "L'écriture du code HTML/CSS",
        "La dérivation en Modèle Logique des Données (MLD)",
        "L'installation du serveur Ubuntu",
        "La configuration du serveur DHCP"
      ],
      answer: 1
    }
  ]
};