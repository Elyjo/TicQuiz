export const chapter1 = {
  id: "chapter-1",
  title: "Fondamentaux de Merise",
  questions: [
    {
      id: 1,
      question: "Dans quel pays la méthode Merise a-t-elle été créée dans les années 1970 ?",
      options: [
        "Aux États-Unis",
        "En France",
        "Au Canada",
        "En Allemagne"
      ],
      answer: 1
    },
    {
      id: 2,
      question: "Que signifie l'acronyme MERISE ?",
      options: [
        "Méthode d'Étude de Réalisation Informatique par Sous-Ensembles",
        "Méthode de Rassemblement des Informations Système Évolué",
        "Modèle d'Enregistrement des Relations et Interconnexions Système",
        "Méthode d'Évaluation Rapide des Infrastructures Serveur"
      ],
      answer: 0
    },
    {
      id: 3,
      question: "Qu'est-ce qu'un Système d'Information (SI) ?",
      options: [
        "Un ensemble de serveurs et de câbles réseaux uniquement",
        "Un ensemble de ressources humaines, matérielles et immatérielles gérant les données",
        "Un logiciel de base de données comme MySQL",
        "L'équipe de direction informatique"
      ],
      answer: 1
    },
    {
      id: 4,
      question: "Quel système de l'entreprise prend les décisions et fixe les objectifs ?",
      options: [
        "Le système opérant",
        "Le système d'information",
        "Le système de pilotage",
        "Le système informatique"
      ],
      answer: 2
    },
    {
      id: 5,
      question: "Quel système de l'entreprise exécute les tâches physiques et la production ?",
      options: [
        "Le système opérant",
        "Le système de pilotage",
        "Le système d'information",
        "Le système automatisé"
      ],
      answer: 0
    },
    {
      id: 6,
      question: "Quel système sert de pont/liaison entre le pilotage et l'opérant ?",
      options: [
        "Le système de décision",
        "Le système d'information (SI)",
        "Le système mécanique",
        "Le système de stockage"
      ],
      answer: 1
    },
    {
      id: 7,
      question: "Merise sépare strictement deux aspects du système. Lesquels ?",
      options: [
        "Le matériel et le logiciel",
        "Les données et les traitements",
        "Le réseau et la sécurité",
        "L'algorithme et l'interface"
      ],
      answer: 1
    },
    {
      id: 8,
      question: "Combien de niveaux d'abstraction principaux compte la démarche Merise ?",
      options: [
        "2 niveaux",
        "3 niveaux",
        "4 niveaux",
        "5 niveaux"
      ],
      answer: 1
    },
    {
      id: 9,
      question: "Quel niveau d'abstraction répond à la question 'QUOI ?' (sans contrainte technique) ?",
      options: [
        "Le niveau Conceptuel",
        "Le niveau Organisationnel",
        "Le niveau Logique",
        "Le niveau Physique"
      ],
      answer: 0
    },
    {
      id: 10,
      question: "Quel niveau répond aux questions 'QUI ?, OÙ ? et QUAND ?' concernant les processus ?",
      options: [
        "Le niveau Conceptuel",
        "Le niveau Organisationnel / Logique des traitements",
        "Le niveau Physique",
        "Le niveau Technique"
      ],
      answer: 1
    },
    {
      id: 11,
      question: "Quel niveau d'abstraction répond à la question 'COMMENT ?' de manière informatique ?",
      options: [
        "Le niveau Conceptuel",
        "Le niveau Logique (données) / Physique",
        "Le niveau Organisationnel",
        "Le niveau Métier"
      ],
      answer: 1
    },
    {
      id: 12,
      question: "Qu'est-ce que le Cycle de Vie dans Merise ?",
      options: [
        "Le temps de calcul d'une requête",
        "Les étapes de vie d'un projet, de la conception à la maintenance",
        "La durée de rotation d'une sauvegarde",
        "L'usure des serveurs de base de données"
      ],
      answer: 1
    },
    {
      id: 13,
      question: "Quel cycle Merise s'intéresse aux choix d'ordonnancement et d'approbation politique du projet ?",
      options: [
        "Le cycle d'abstraction",
        "Le cycle de décision",
        "Le cycle de vie",
        "Le cycle d'évaluation"
      ],
      answer: 1
    },
    {
      id: 14,
      question: "Quel schéma étudie la structure logique des données avant l'implantation en base ?",
      options: [
        "Le MCD",
        "Le MLD",
        "Le MPD",
        "Le MCT"
      ],
      answer: 1
    },
    {
      id: 15,
      question: "Quel schéma représente l'organisation informatique concrète sur un SGBD spécifique ?",
      options: [
        "Le MCD",
        "Le MLD",
        "Le MPD",
        "Le MOT"
      ],
      answer: 2
    },
    {
      id: 16,
      question: "Que modélise le Modèle Conceptuel des Traitements (MCT) ?",
      options: [
        "Les tables de la base de données",
        "Les flux réseau",
        "Les réactions du système aux événements externes",
        "Le budget du projet"
      ],
      answer: 2
    },
    {
      id: 17,
      question: "Dans Merise, qu'appelle-t-on la 'méthode par étapes' ?",
      options: [
        "Le passage progressif du conceptuel vers le physique",
        "Le codage immédiat du projet",
        "La configuration des postes de travail",
        "L'installation du serveur SQL"
      ],
      answer: 0
    },
    {
      id: 18,
      question: "Quelle est la principale force de la séparation Données/Traitements ?",
      options: [
        "Rendre le site web plus joli",
        "Assurer la stabilité de la structure des données si les procédures changent",
        "Diminuer le nombre de lignes de code",
        "Se passer de base de données relationnelle"
      ],
      answer: 1
    },
    {
      id: 19,
      question: "L'étude préalable fait partie de quel cycle merisien ?",
      options: [
        "Cycle de vie",
        "Cycle d'abstraction",
        "Cycle de décision",
        "Cycle logiciel"
      ],
      answer: 0
    },
    {
      id: 20,
      question: "À quel niveau d'abstraction est rattaché le choix du SGBD (Oracle, MySQL, etc.) ?",
      options: [
        "Conceptuel",
        "Organisationnel",
        "Logique",
        "Physique"
      ],
      answer: 3
    }
  ]
};