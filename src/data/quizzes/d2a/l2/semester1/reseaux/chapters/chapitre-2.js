export const chapter2 = {
  id: "chapter-2",
  title: "Réseaux locaux filaires",
  questions: [
    {
      id: 1,
      question: "Quelle instance a créé le groupe de travail 802 en 1980 ?",
      options: [
        "ISO",
        "ITU",
        "IEEE",
        "IETF"
      ],
      answer: 2
    },
    {
      id: 2,
      question: "Quelle norme correspond au protocole CSMA/CD Ethernet ?",
      options: [
        "IEEE 802.2",
        "IEEE 802.3",
        "IEEE 802.5",
        "IEEE 802.11"
      ],
      answer: 1
    },
    {
      id: 3,
      question: "Quelle méthode d'accès est basée sur le passage d'un jeton ?",
      options: [
        "Méthode aléatoire",
        "Méthode à contention",
        "Méthode à réservation",
        "Méthode CSMA/CA"
      ],
      answer: 2
    },
    {
      id: 4,
      question: "Quelle méthode d'accès utilise la technologie WiFi ?",
      options: [
        "CSMA/CD",
        "CSMA/CA",
        "Token Bus",
        "HDLC"
      ],
      answer: 1
    },
    {
      id: 5,
      question: "Sur combien d'octets l'adresse MAC est-elle codée ?",
      options: [
        "4 octets",
        "6 octets",
        "8 octets",
        "16 octets"
      ],
      answer: 1
    },
    {
      id: 6,
      question: "Que décrivent les 3 premiers octets d'une adresse MAC ?",
      options: [
        "Le numéro de série",
        "L'identifiant du constructeur",
        "Le protocole supérieur",
        "L'adresse de broadcast"
      ],
      answer: 1
    },
    {
      id: 7,
      question: "Quelle commande Windows affiche l'adresse MAC ?",
      options: [
        "ping",
        "netstat -ano",
        "ipconfig /all",
        "ss -tuln"
      ],
      answer: 2
    },
    {
      id: 8,
      question: "Quelle est la valeur de l'adresse MAC de broadcast ?",
      options: [
        "00-00-00-00-00-00",
        "FF-FF-FF-FF-FF-FF",
        "255.255.255.255",
        "127.0.0.1"
      ],
      answer: 1
    },
    {
      id: 9,
      question: "Quels points d'accès identifient les extrémités sous LLC ?",
      options: [
        "IP source / IP destination",
        "Ports TCP / Ports UDP",
        "DSAP / SSAP",
        "Sockets client / serveur"
      ],
      answer: 2
    },
    {
      id: 10,
      question: "Quelle est la particularité du service LLC1 ?",
      options: [
        "Mode connecté avec reprise",
        "Mode datagramme sans acquittement",
        "Contrôle de flux matériel",
        "Réservé à la voix sur IP"
      ],
      answer: 1
    },
    {
      id: 11,
      question: "Où est stockée la clé CRC (FCS) dans une trame ?",
      options: [
        "Dans le préambule",
        "Au milieu des données",
        "Dans l'en-queue de la trame",
        "Dans le champ Ethertype"
      ],
      answer: 2
    },
    {
      id: 12,
      question: "Que fait une station Ethernet si elle détecte une collision ?",
      options: [
        "Elle double son débit",
        "Elle cesse immédiatement d'émettre",
        "Elle ignore la perturbation",
        "Elle envoie un message ICMP"
      ],
      answer: 1
    },
    {
      id: 13,
      question: "Quel algorithme gère le temporisateur après collision ?",
      options: [
        "Algorithme d'interconnexion",
        "Algorithme BEB (Backoff)",
        "Algorithme de routage",
        "Algorithme de multiplexage"
      ],
      answer: 1
    },
    {
      id: 14,
      question: "Quel type de codage est utilisé pour la trame Ethernet ?",
      options: [
        "Code Binaire Pur",
        "Code Manchester",
        "Code Hexadécimal",
        "Code ASCII"
      ],
      answer: 1
    },
    {
      id: 15,
      question: "Quelle est la taille minimale d'une trame Ethernet ?",
      options: [
        "32 octets",
        "64 octets",
        "512 octets",
        "1518 octets"
      ],
      answer: 1
    },
    {
      id: 16,
      question: "À combien de temps correspond la fenêtre de collision à 10 Mbps ?",
      options: [
        "5,12 µs",
        "51,2 µs",
        "5,12 ms",
        "51,2 ms"
      ],
      answer: 3
    },
    {
      id: 17,
      question: "Comment se comporte Ethernet par rapport à Token Ring à forte charge ?",
      options: [
        "Le débit utile reste maximal",
        "Le débit utile s'effondre",
        "Il n'y a plus aucune collision",
        "Le réseau devient déterministe"
      ],
      answer: 1
    },
    {
      id: 18,
      question: "Pourquoi dit-on que le réseau Ethernet est probabiliste ?",
      options: [
        "Le temps d'accès n'est pas borné",
        "Les adresses changent au hasard",
        "Le jeton circule en permanence",
        "Il ne transporte que du texte"
      ],
      answer: 0
    },
    {
      id: 19,
      question: "Quel protocole est une version simplifiée de HDLC sans contrôle de flux ?",
      options: [
        "LLC2",
        "PPP",
        "Token Bus",
        "CSMA/CD"
      ],
      answer: 1
    },
    {
      id: 20,
      question: "Quelle norme correspond au standard Bluetooth (WPAN) ?",
      options: [
        "IEEE 802.3",
        "IEEE 802.11",
        "IEEE 802.15",
        "IEEE 802.16"
      ],
      answer: 2
    }
  ]
};