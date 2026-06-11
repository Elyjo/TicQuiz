export const chapter1 = {
  id: "chapter-1",
  title: "Commandes usuelles Linux",
  questions: [
    {
      id: 1,
      question: "Quel composant exécute les lignes de commande ?",
      options: [
        "Le programme login",
        "L'interpréteur (shell)",
        "Le script de démarrage",
        "Le gestionnaire UEFI"
      ],
      answer: 1
    },
    {
      id: 2,
      question: "Quel caractère termine le prompt du root ?",
      options: [
        "Le caractère $",
        "Le caractère %",
        "Le caractère #",
        "Le caractère @"
      ],
      answer: 2
    },
    {
      id: 3,
      question: "Par quoi commence toujours un chemin absolu ?",
      options: [
        "Le nom d'utilisateur",
        "La racine /",
        "Le dossier courant .",
        "Le dossier parent .."
      ],
      answer: 1
    },
    {
      id: 4,
      question: "Où sont listés les interpréteurs du système ?",
      options: [
        "/etc/passwd",
        "/bin/bash",
        "/etc/shells",
        "/var/log/messages"
      ],
      answer: 2
    },
    {
      id: 5,
      question: "Que fait 'cd' sans option ni argument ?",
      options: [
        "Affiche le dossier courant",
        "Retourne à la racine /",
        "Revient en arrière",
        "Va au répertoire personnel (home)"
      ],
      answer: 3
    },
    {
      id: 6,
      question: "Quelle option de 'ls' permet l'affichage long ?",
      options: [
        "-a",
        "-l",
        "-r",
        "-f"
      ],
      answer: 1
    },
    {
      id: 7,
      question: "Que fait 'touch' si le fichier n'existe pas ?",
      options: [
        "Provoque une erreur",
        "Crée un fichier vide",
        "Ouvre le manuel",
        "Supprime le dossier"
      ],
      answer: 1
    },
    {
      id: 8,
      question: "Comment supprimer un dossier non vide avec 'rm' ?",
      options: [
        "Avec l'option -f",
        "Avec rmdir",
        "Avec l'option -r",
        "Impossible"
      ],
      answer: 2
    },
    {
      id: 9,
      question: "Quelle syntaxe rejoue la dernière commande ?",
      options: [
        "!N",
        "history",
        "man !!",
        "!!"
      ],
      answer: 3
    },
    {
      id: 10,
      question: "Qu'est-ce qu'un filtre sous Linux ?",
      options: [
        "Un outil de sécurité",
        "Une commande traitant un flux d'entrée",
        "Un bloqueur d'erreurs",
        "Un masque de fichier"
      ],
      answer: 1
    },
    {
      id: 11,
      question: "Que fait 'cat' sans argument ?",
      options: [
        "Affiche une erreur",
        "Attend une saisie au clavier",
        "Affiche l'historique",
        "Nettoie l'écran"
      ],
      answer: 1
    },
    {
      id: 12,
      question: "Quel outil extrait la colonne 1 séparée par ':' ?",
      options: [
        "cut -d : -f1",
        "cut -f 1 -s :",
        "cut -c 1",
        "cut -d f1"
      ],
      answer: 0
    },
    {
      id: 13,
      question: "Que cherche l'expression 'grep ^root' ?",
      options: [
        "Root n'importe où",
        "Les lignes finissant par root",
        "Les lignes commençant par root",
        "Les lignes sans root"
      ],
      answer: 2
    },
    {
      id: 14,
      question: "Lignes affichées par 'head' sans option ?",
      options: [
        "1 ligne",
        "5 lignes",
        "10 lignes",
        "20 lignes"
      ],
      answer: 2
    },
    {
      id: 15,
      question: "Quelle commande affiche un fichier à l'envers ?",
      options: [
        "cat -v",
        "tac",
        "sort -r",
        "tail"
      ],
      answer: 1
    },
    {
      id: 16,
      question: "Quel numéro désigne la sortie d'erreur standard ?",
      options: [
        "Descripteur 0",
        "Descripteur 1",
        "Descripteur 2",
        "Descripteur 3"
      ],
      answer: 2
    },
    {
      id: 17,
      question: "Effet de '>>' comparé à '>' ?",
      options: [
        "Écrase le contenu",
        "Ajoute à la fin du fichier",
        "Supprime le fichier",
        "Crée un lien"
      ],
      answer: 1
    },
    {
      id: 18,
      question: "Quel critère de 'find' cherche un répertoire ?",
      options: [
        "-type f",
        "-type r",
        "-type d",
        "-type c"
      ],
      answer: 2
    },
    {
      id: 19,
      question: "Quand le séparateur '&&' exécute-t-il la commande 2 ?",
      options: [
        "Si la commande 1 échoue",
        "Si la commande 1 réussit",
        "En même temps",
        "Jamais"
      ],
      answer: 1
    },
    {
      id: 20,
      question: "Comment rediriger la sortie ET les erreurs ?",
      options: [
        "Avec >",
        "Avec 2>",
        "Avec |",
        "Avec &>"
      ],
      answer: 3
    }
  ]
};