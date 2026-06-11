export const chapter1 = {
  id: "chapter-subnetting",
  title: "Subnetting et Protocoles",
  questions: [
    {
      id: 1,
      question: "Quelle solution résout l'épuisement des adresses IPv4 ?",
      options: [
        "Le protocole ICMP",
        "Le Subnetting et le NAT",
        "La gigue réseau",
        "Le monitoring de bande"
      ],
      answer: 1
    },
    {
      id: 2,
      question: "Quel est l'un des rôles majeurs du subnetting ?",
      options: [
        "Augmenter la taille de l'en-tête IP",
        "Réduire la congestion dans les réseaux",
        "Forcer l'utilisation d'IPv6",
        "Supprimer le routage statique"
      ],
      answer: 1
    },
    {
      id: 3,
      question: "Que requiert obligatoirement chaque sous-réseau ?",
      options: [
        "Un serveur RARP dédié",
        "Un identifiant unique et un masque",
        "Un segment TCP fixe",
        "Une liaison Token Ring"
      ],
      answer: 1
    },
    {
      id: 4,
      question: "Valeur décimale du masque binaire fini par 11000000 ?",
      options: [
        "255.255.255.0",
        "255.255.255.128",
        "255.255.255.192",
        "255.255.255.240"
      ],
      answer: 2
    },
    {
      id: 5,
      question: "Pourquoi les sous-réseaux 00 et 11 sont-ils interdits ici ?",
      options: [
        "Erreur de parité",
        "Bits de haut et de bas",
        "Incompatibilité MTU",
        "Réservés au protocole NTP"
      ],
      answer: 1
    },
    {
      id: 6,
      question: "Comment obtient-on l'adresse de diffusion (Broadcast) ?",
      options: [
        "Tous les bits hôtes à 0",
        "Tous les bits hôtes à 1",
        "En inversant le NetID",
        "En ajoutant l'UID au masque"
      ],
      answer: 1
    },
    {
      id: 7,
      question: "À quelle couche du modèle OSI appartient le datagramme IP ?",
      options: [
        "Couche 2 (Liaison)",
        "Couche 3 (Réseau)",
        "Couche 4 (Transport)",
        "Couche 7 (Application)"
      ],
      answer: 1
    },
    {
      id: 8,
      question: "Quelle est la taille courante de l'en-tête IP sans option ?",
      options: [
        "10 octets",
        "20 octets",
        "32 octets",
        "60 octets"
      ],
      answer: 1
    },
    {
      id: 9,
      question: "Quel bit interdit la fragmentation d'un datagramme ?",
      options: [
        "Bit MF",
        "Bit TOS",
        "Bit DF",
        "Bit URG"
      ],
      answer: 2
    },
    {
      id: 10,
      question: "Que se passe-t-il lorsque le TTL arrive à 0 ?",
      options: [
        "Le datagramme est dupliqué",
        "Le datagramme est détruit",
        "Le bit MF passe à 1",
        "La connexion TCP est réinitialisée"
      ],
      answer: 1
    },
    {
      id: 11,
      question: "Quelle est la valeur de la MTU par défaut d'Ethernet ?",
      options: [
        "576 octets",
        "1000 octets",
        "1500 octets",
        "65536 octets"
      ],
      answer: 2
    },
    {
      id: 12,
      question: "Quel protocole trouve l'adresse MAC depuis une adresse IP ?",
      options: [
        "ICMP",
        "RARP",
        "ARP",
        "DHCP"
      ],
      answer: 2
    },
    {
      id: 13,
      question: "Quelle adresse MAC cible caractérise une requête ARP ?",
      options: [
        "00-00-00-00-00-00",
        "FF-FF-FF-FF-FF-FF",
        "127.0.0.1",
        "Celle de la passerelle"
      ],
      answer: 1
    },
    {
      id: 14,
      question: "Quelle commande utilise les messages Echo Request/Reply ?",
      options: [
        "netstat",
        "ping",
        "ss",
        "lsof"
      ],
      answer: 1
    },
    {
      id: 15,
      question: "Caractéristique principale du protocole TCP ?",
      options: [
        "Mode non connecté",
        "Mode connecté et fiable",
        "Aucun contrôle de flux",
        "Destiné uniquement au streaming"
      ],
      answer: 1
    },
    {
      id: 16,
      question: "Quels sont les ports d'écoute dits 'référencés' ?",
      options: [
        "Les ports 0 à 1023",
        "Les ports supérieurs à 1024",
        "Uniquement les ports TCP",
        "Les ports dynamiques"
      ],
      answer: 0
    },
    {
      id: 17,
      question: "Quel flag TCP initie l'établissement d'une connexion ?",
      options: [
        "ACK",
        "FIN",
        "SYN",
        "RST"
      ],
      answer: 2
    },
    {
      id: 18,
      question: "Sous Linux, quelle commande liste les ports en écoute ?",
      options: [
        "netstat -ano",
        "ss -tuln",
        "ping -t",
        "ifconfig"
      ],
      answer: 1
    },
    {
      id: 19,
      question: "En Python, quelle primitive lie une socket à un port ?",
      options: [
        "s.connect()",
        "s.listen()",
        "s.bind()",
        "s.accept()"
      ],
      answer: 2
    },
    {
      id: 20,
      question: "Quel protocole de transport est non connecté et ultra-léger ?",
      options: [
        "TCP",
        "UDP",
        "ICMP",
        "ARP"
      ],
      answer: 1
    }
  ]
};