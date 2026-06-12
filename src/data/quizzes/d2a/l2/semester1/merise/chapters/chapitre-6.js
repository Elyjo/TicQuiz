export const chapter6 = {
  id: "chapter-6",
  title: "Le MLD",
  questions: [
    {
      id: 1,
      question: "En quoi se transforme une entité au MLD ?",
      options: ["Attribut (colonne)", "Table (relation)", "Clé étrangère", "Contrainte"],
      answer: 1
    },
    {
      id: 2,
      question: "En quoi se transforment les propriétés d'une entité ?",
      options: ["Lignes d'enregistrements", "Attributs (colonnes)", "Contraintes", "Index"],
      answer: 1
    },
    {
      id: 3,
      question: "En quoi se transforme l'identifiant d'une entité dans sa table ?",
      options: ["Clé étrangère (FK)", "Clé primaire (PK)", "Type binaire", "Index secondaire"],
      answer: 1
    },
    {
      id: 4,
      question: "Qu'est-ce qu'une clé étrangère (FK) ?",
      options: [
        "Clé primaire cachée",
        "Attribut faisant référence à la clé primaire d'une autre table",
        "Mot de passe admin",
        "Colonne de texte unique"
      ],
      answer: 1
    },
    {
      id: 5,
      question: "Traduction au MLD d'une relation (0,n) - (0,n) ?",
      options: ["Fusion des entités", "Création d'une table intermédiaire", "Migration simple de clé", "Suppression"],
      answer: 1
    },
    {
      id: 6,
      question: "Traduction au MLD d'une relation (0,1) - (1,n) ?",
      options: [
        "Table intermédiaire obligatoire",
        "La PK du côté (1,n) migre en FK du côté (0,1)",
        "La PK du côté (0,1) migre en FK du côté (1,n)",
        "Fusion des deux tables"
      ],
      answer: 1
    },
    {
      id: 7,
      question: "Composition de la PK d'une table intermédiaire ?",
      options: [
        "Identifiant auto indépendant",
        "Concaténation des PK des entités liées",
        "Clé de la première entité",
        "Attributs descriptifs seuls"
      ],
      answer: 1
    },
    {
      id: 8,
      question: "Direction de migration de la clé pour une relation (1,1) - (0,n) ?",
      options: ["Du côté (0,n) vers le côté (1,1)", "Du côté (1,1) vers le côté (0,n)", "Table autonome", "Aucune migration"],
      answer: 1
    },
    {
      id: 9,
      question: "Qu'est-ce qu'une Contrainte d'Intégrité Référentielle (CIR) ?",
      options: [
        "Restriction réseau",
        "Règle assurant qu'une FK correspond à une PK existante",
        "Limite de colonnes",
        "Chiffrement des tables"
      ],
      answer: 1
    },
    {
      id: 10,
      question: "Représentation textuelle standard d'une FK ?",
      options: ["En italique", "Précédée d'un dièse (#) ou suivie d'une étoile (*)", "Soulignée", "Masquée"],
      answer: 1
    },
    {
      id: 11,
      question: "Une table intermédiaire peut-elle avoir des attributs descriptifs ?",
      options: ["Non, interdit", "Oui, si portés par l'association d'origine", "Uniquement temporels", "Si +3 clés"],
      answer: 1
    },
    {
      id: 12,
      question: "En quoi se transforme une relation ternaire (0,n) - (0,n) - (0,n) ?",
      options: ["Trois FK réparties", "Table intermédiaire avec trois FK", "Fusion globale", "Impossible"],
      answer: 1
    },
    {
      id: 13,
      question: "But de la Normalisation ?",
      options: ["Choisir le SGBD", "Éviter les redondances et anomalies de mise à jour", "Traduire en code", "Compresser"],
      answer: 1
    },
    {
      id: 14,
      question: "Exigence de la Première Forme Normale (1FN) ?",
      options: ["Valeurs entières", "Attributs atomiques (non décomposables)", "Zéro FK", "Moins de 10 colonnes"],
      answer: 1
    },
    {
      id: 15,
      question: "Exigence de la Deuxième Forme Normale (2FN) ?",
      options: [
        "En 1FN + tout attribut hors clé dépend de la totalité de la clé",
        "Au moins deux PK distinctes",
        "Interdiction des NULL",
        "Tri alphabétique obligatoire"
      ],
      answer: 0
    },
    {
      id: 16,
      question: "Exigence de la Troisième Forme Normale (3FN) ?",
      options: [
        "En 2FN + pas de dépendance transitive des attributs hors clé",
        "Trois tables intermédiaires",
        "Chiffrement de la clé",
        "Aucune relation (0,n)"
      ],
      answer: 0
    },
    {
      id: 17,
      question: "Impact MLD d'une relation réflexive (0,1) - (0,n) (ex: manager) ?",
      options: ["La table reçoit une FK pointant sur sa propre PK", "Table intermédiaire obligatoire", "Duplication de table", "Suppression"],
      answer: 0
    },
    {
      id: 18,
      question: "Risque majeur d'un MLD mal normalisé ?",
      options: ["Plantage serveur au boot", "Redondances, incohérences et pertes d'infos", "Requêtes SELECT impossibles", "Perte réseau"],
      answer: 1
    },
    {
      id: 19,
      question: "Le MLD prend-il en compte l'espace disque ou la RAM ?",
      options: ["Oui, rôle principal", "Non, indépendant du stockage physique", "Pour les index", "Si serveur Linux"],
      answer: 1
    },
    {
      id: 20,
      question: "Syntaxe textuelle correcte d'une table avec clé étrangère ?",
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