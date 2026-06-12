export const chapter3 = {
  id: "chapter-3",
  title: "Gestion users et groupes",
  questions: [
    {
      id: 1,
      question: "Où sont répertoriés tous les utilisateurs",
      options: [
        "/etc/group",
        "/etc/shadow",
        "/etc/passwd",
        "/etc/gshadow"
      ],
      answer: 2
    },
    {
      id: 2,
      question: "Nombre de champs dans une ligne /etc/passwd",
      options: [
        "4",
        "5",
        "7",
        "9"
      ],
      answer: 2
    },
    {
      id: 3,
      question: "Quel est l'UID de root",
      options: [
        "0",
        "1",
        "1000",
        "9999"
      ],
      answer: 0
    },
    {
      id: 4,
      question: "Que signifie 'x' dans le champ mot de passe",
      options: [
        "Compte verrouillé",
        "Passe vide",
        "Stocké dans /etc/shadow",
        "Shell désactivé"
      ],
      answer: 2
    },
    {
      id: 5,
      question: "Comment interdire l'accès à un compte via /etc/passwd",
      options: [
        "Laisser le champ vide",
        "Remplacer le passe par '*'",
        "Mettre l'UID à 0",
        "Supprimer la ligne"
      ],
      answer: 1
    },
    {
      id: 6,
      question: "Qui a le droit de lire /etc/shadow",
      options: [
        "Tous les utilisateurs",
        "Le groupe wheel",
        "L'administrateur (root)",
        "Personne (chiffré)"
      ],
      answer: 2
    },
    {
      id: 7,
      question: "Que signifie un '0' comme date de dernier changement",
      options: [
        "N'expire jamais",
        "Changement requis au prochain accès",
        "Compte désactivé",
        "Pas de mot de passe"
      ],
      answer: 1
    },
    {
      id: 8,
      question: "Quelle valeur dans /etc/shadow verrouille un compte",
      options: [
        "*",
        "!",
        "x",
        "0"
      ],
      answer: 1
    },
    {
      id: 9,
      question: "Nombre de champs dans une ligne /etc/group",
      options: [
        "4",
        "7",
        "9",
        "12"
      ],
      answer: 0
    },
    {
      id: 10,
      question: "Quelle commande permet de changer de groupe principal",
      options: [
        "gpasswd",
        "usermod",
        "newgrp",
        "groupmod"
      ],
      answer: 2
    },
    {
      id: 11,
      question: "Qui modifie le mot de passe groupe dans /etc/gshadow",
      options: [
        "Les membres du groupe",
        "L'administrateur du groupe",
        "Tout utilisateur normal",
        "Le programme login"
      ],
      answer: 1
    },
    {
      id: 12,
      question: "Commande conviviale (Ubuntu) pour créer un utilisateur",
      options: [
        "useradd",
        "adduser",
        "usermod",
        "pwck"
      ],
      answer: 1
    },
    {
      id: 13,
      question: "Commande bas niveau pour créer un utilisateur",
      options: [
        "useradd",
        "adduser",
        "gpasswd",
        "chfn"
      ],
      answer: 0
    },
    {
      id: 14,
      question: "Que fait 'passwd' lancé par root sans argument",
      options: [
        "Affiche l'aide",
        "Change le passe de root",
        "Liste les mots de passe",
        "Verrouille les comptes"
      ],
      answer: 1
    },
    {
      id: 15,
      question: "Quelle commande affiche les UID/GID d'un utilisateur",
      options: [
        "who",
        "groups",
        "id",
        "pwck"
      ],
      answer: 2
    },
    {
      id: 16,
      question: "Option de 'userdel' pour effacer le dossier home",
      options: [
        "-f",
        "-d",
        "-r",
        "-p"
      ],
      answer: 2
    },
    {
      id: 17,
      question: "Commande bas niveau pour créer un groupe",
      options: [
        "addgroup",
        "groupadd",
        "groupmod",
        "gpasswd"
      ],
      answer: 1
    },
    {
      id: 18,
      question: "Option usermod pour remplacer les groupes secondaires",
      options: [
        "-aG",
        "-G",
        "-p",
        "-u"
      ],
      answer: 1
    },
    {
      id: 19,
      question: "Commande conviviale (Ubuntu) pour supprimer un groupe",
      options: [
        "groupdel",
        "delgroup",
        "rmgroup",
        "gpasswd -d"
      ],
      answer: 1
    },
    {
      id: 20,
      question: "Comment ajouter 'jean' au groupe 'compta'",
      options: [
        "sudo gpasswd -a jean compta",
        "sudo groupadd jean compta",
        "sudo usermod -g compta jean",
        "sudo addgroup jean compta"
      ],
      answer: 0
    }
  ]
};