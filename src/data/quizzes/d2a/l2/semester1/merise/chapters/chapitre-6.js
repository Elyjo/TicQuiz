export const chapter6 = {
  id: "chapter-6",
  title: "Le MLD",
  questions: [
    {
      id: 1,
      question: "En quoi se transforme une entité du MCD lors du passage au MLD relationnel ?",
      options: [
        "En un attribut (ou colonne)",
        "En une table (ou relation)",
        "En une clé étrangère",
        "En une contrainte de vérification"
      ],
      answer: 1
    },
    {
      id: 2,
      question: "En quoi se transforment les propriétés d'une entité dans le MLD ?",
      options: [
        "En lignes d'enregistrements",
        "En attributs (ou colonnes)",
        "En contraintes d'intégrité",
        "En index de recherche"
      ],
      answer: 1
    },
    {
      id: 3,
      question: "En quoi se transforme l'identifiant d'une entité dans sa propre table au MLD ?",
      options: [
        "En clé étrangère (FK)",
        "En clé primaire (PK)",
        "En type de données binaire",
        "En index secondaire"
      ],
      answer: 1
    },
    {
      id: 4,
      question: "Qu'est-ce qu'une clé étrangère (Foreign Key) dans un MLD ?",
      options: [
        "Une clé primaire cachée par le système",
        "Un attribut d'une table qui fait référence à la clé primaire d'une autre table",
        "Un mot de passe d'accès pour l'administrateur",
        "Une colonne qui ne peut contenir que des chaînes de caractères"
      ],
      answer: 1
    },
    {
      id: 5,
      question: "Règle des cardinalités (0,n) - (0,n) : comment traduit-on cette association au MLD ?",
      options: [
        "On fusionne purement les deux entités",
        "On crée une table intermédiaire (table d'association)",
        "La clé primaire de l'une migre simplement dans l'autre",
        "On supprime l'association sans créer de lien"
      ],
      answer: 1
    },
    {
      id: 6,
      question: "Règle des cardinalités (0,1) - (1,n) : comment traduit-on cette association au MLD ?",
      options: [
        "On crée obligatoirement une table intermédiaire",
        "La clé primaire du côté (1,n) migre comme clé étrangère du côté (0,1)",
        "La clé primaire du côté (0,1) migre comme clé étrangère du côté (1,n)",
        "On fusionne les deux tables"
      ],
      answer: 1
    },
    {
      id: 7,
      question: "Lorsqu'une association devient une table intermédiaire, de quoi est composée sa clé primaire ?",
      options: [
        "D'un nouvel identifiant automatique indépendant",
        "De la concaténation (combinaison) des clés primaires des entités liées",
        "Uniquement de la clé de la première entité alphabétique",
        "De ses propres propriétés descriptives uniquement"
      ],
      answer: 1
    },
    {
      id: 8,
      question: "Dans une relation de type (1,1) - (0,n), de quel côté migre la clé étrangère ?",
      options: [
        "Du côté (0,n) vers le côté (1,1)",
        "Du côté (1,1) vers le côté (0,n)",
        "Dans une nouvelle table de jointure autonome",
        "Elle ne migre nulle part"
      ],
      answer: 1
    },
    {
      id: 9,
      question: "Qu'est-ce qu'une Contrainte d'Intégrité Référentielle (CIR) au niveau du MLD ?",
      options: [
        "Une restriction d'accès réseau à la base",
        "Une règle assurant qu'une clé étrangère correspond toujours à une clé primaire existante",
        "Une limitation stricte du nombre de colonnes",
        "Un chiffrement des tables de données"
      ],
      answer: 1
    },
    {
      id: 10,
      question: "Comment représente-t-on graphiquement ou textuellement une clé étrangère dans un MLD ?",
      options: [
        "Elle est obligatoirement écrite en italique",
        "Elle est précédée d'un dièse (#) ou suivie d'une étoile (*)",
        "Elle est soulignée en continu",
        "Elle disparaît du formalisme textuel"
      ],
      answer: 1
    },
    {
      id: 11,
      question: "Une table intermédiaire issue d'une association peut-elle contenir des attributs descriptifs ?",
      options: [
        "Non, c'est formellement interdit par Merise",
        "Oui, si l'association porteuse avait des propriétés dans le MCD (ex: Quantité)",
        "Uniquement des attributs de type temporel (Date)",
        "Seulement si elle possède plus de trois clés"
      ],
      answer: 1
    },
    {
      id: 12,
      question: "En quoi se transforme une association ternaire (0,n) - (0,n) - (0,n) au MLD ?",
      options: [
        "En trois clés étrangères réparties dans chaque table d'origine",
        "En une table intermédiaire contenant trois clés étrangères",
        "En une entité unique globale fusionnée",
        "Elle est impossible à modéliser en relationnel"
      ],
      answer: 1
    },
    {
      id: 13,
      question: "Qu'est-ce que la Normalisation en conception relationnelle ?",
      options: [
        "Le choix du SGBD sur le serveur",
        "Un ensemble de règles pour éviter la redondance et les anomalies de mise à jour",
        "La traduction directe des algorithmes en code",
        "La compression des fichiers de données"
      ],
      answer: 1
    },
    {
      id: 14,
      question: "Qu'exige la Première Forme Normale (1FN) au niveau des attributs ?",
      options: [
        "Que toutes les valeurs soient des nombres entiers",
        "Que tous les attributs soient atomiques (non décomposables)",
        "L'absence totale de clés étrangères dans la table",
        "Que la table contienne moins de dix colonnes"
      ],
      answer: 1
    },
    {
      id: 15,
      question: "Qu'exige la Deuxième Forme Normale (2FN) concernant les dépendances ?",
      options: [
        "Être en 1FN et que tout attribut n'appartenant pas à la clé dépende de la totalité de la clé",
        "Avoir obligatoirement au moins deux clés primaires distinctes",
        "L'interdiction stricte des valeurs nulles",
        "Que les données soient triées par ordre alphabétique"
      ],
      answer: 0
    },
    {
      id: 16,
      question: "Qu'exige la Troisième Forme Normale (3FN) ?",
      options: [
        "Être en 2FN et que tout attribut n'appartenant pas à la clé n'en dépende pas de manière transitive",
        "Avoir exactement trois tables intermédiaires",
        "Le chiffrement complet des données de la clé",
        "L'absence totale de relations de type (0,n)"
      ],
      answer: 0
    },
    {
      id: 17,
      question: "Si l'on a une association réflexive (0,1) - (0,n) sur une entité 'Employé' (ex: manager), que se passe-t-il au MLD ?",
      options: [
        "La table Employé reçoit une clé étrangère pointant vers sa propre clé primaire",
        "On crée obligatoirement une table intermédiaire",
        "On duplique la table Employé en deux fichiers disques séparés",
        "La relation est purement supprimée"
      ],
      answer: 0
    },
    {
      id: 18,
      question: "Quel est le risque majeur d'un Modèle Logique de Données mal normalisé ?",
      options: [
        "Le serveur plante dès le premier lancement",
        "Des redondances, des incohérences et des pertes d'informations lors des modifications",
        "Les requêtes de sélection simples deviennent impossibles",
        "L'application web perd sa connexion réseau"
      ],
      answer: 1
    },
    {
      id: 19,
      question: "Le niveau Logique (MLD) prend-il en compte les contraintes matérielles (espace disque, RAM) ?",
      options: [
        "Oui, c'est son rôle principal",
        "Non, il structure les données de façon logique indépendamment des contraintes physiques de stockage",
        "Uniquement pour la création des index de recherche",
        "Seulement si le serveur tourne sous Linux"
      ],
      answer: 1
    },
    {
      id: 20,
      question: "Quelle syntaxe textuelle standard représente correctement une table 'Commande' liée à un 'Client' au MLD ?",
      options: [
        "Commande(id_com, date_com, client_id)",
        "Commande(#id_com, date_com, #client_id)",
        "Commande(id_com, date_com, #id_client)",
        "Commande = [id_com, date_com, id_client]"
      ],
      answer: 2
    }
  ]
};