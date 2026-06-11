export const chapter3 = {
  id: "chapter-3",
  title: "Services Réseaux",
  questions: [
    {
      id: 1,
      question: "Que signifie le sigle du processus DHCP 'DORA' ?",
      options: [
        "Discover, Offer, Request, Ack",
        "Data, Option, Route, Access",
        "DNS, OSI, Routing, ARP",
        "Domain, Object, Resource, Auth"
      ],
      answer: 0
    },
    {
      id: 2,
      question: "IP source et destination d'un message DHCPDISCOVER ?",
      options: [
        "127.0.0.1 et 192.168.0.1",
        "0.0.0.0 et 255.255.255.255",
        "192.168.0.0 et 192.168.0.255",
        "En unicast direct vers le serveur"
      ],
      answer: 1
    },
    {
      id: 3,
      question: "Quel message DHCP valide définitivement le bail ?",
      options: [
        "DHCPOFFER",
        "DHCPREQUEST",
        "DHCPACK",
        "DHCPINFORM"
      ],
      answer: 2
    },
    {
      id: 4,
      question: "Quel message permet au client de résilier son bail ?",
      options: [
        "DHCPNACK",
        "DHCPRELEASE",
        "DHCPDECLINE",
        "DHCPINFORM"
      ],
      answer: 1
    },
    {
      id: 5,
      question: "Fichier Linux principal de configuration du serveur DHCP ?",
      options: [
        "/etc/dhcpd.leases",
        "/etc/resolv.conf",
        "/etc/dhcpd.conf",
        "/etc/hosts"
      ],
      answer: 2
    },
    {
      id: 6,
      question: "Commande Linux pour redémarrer le serveur isc-dhcp-server ?",
      options: [
        "ifconfig eth0 up",
        "dhclient eth0",
        "/etc/init.d/isc-dhcp-server restart",
        "service network stop"
      ],
      answer: 2
    },
    {
      id: 7,
      question: "Option du fichier dhcpd.conf pour fixer la passerelle ?",
      options: [
        "range",
        "option routers",
        "option domain-name-servers",
        "fixed-address"
      ],
      answer: 1
    },
    {
      id: 8,
      question: "Instruction pour fixer une IP par rapport à la MAC ?",
      options: [
        "subnet",
        "range",
        "host { hardware ethernet; fixed-address; }",
        "option broadcast-address"
      ],
      answer: 2
    },
    {
      id: 9,
      question: "Commande Cisco pour relayer le DHCP via un routeur ?",
      options: [
        "ip route",
        "ip address",
        "ip helper-address",
        "ip dhcp pool"
      ],
      answer: 2
    },
    {
      id: 10,
      question: "Quel port et protocole de transport utilise le service DNS ?",
      options: [
        "Port 80 en TCP",
        "Port 53 en UDP",
        "Port 67 en UDP",
        "Port 25 en TCP"
      ],
      answer: 1
    },
    {
      id: 11,
      question: "Quel serveur DNS détient la base de données maître ?",
      options: [
        "Le serveur secondaire",
        "Le serveur cache",
        "Le serveur primaire (maître)",
        "Le resolver local"
      ],
      answer: 2
    },
    {
      id: 12,
      question: "Quelle est la limite de niveaux de l'espace DNS ?",
      options: [
        "7 niveaux",
        "32 niveaux",
        "127 niveaux",
        "255 niveaux"
      ],
      answer: 2
    },
    {
      id: 13,
      question: "Quel domaine gère la résolution DNS inverse ?",
      options: [
        ".com",
        ".edu",
        "in-addr.arpa",
        ".sn"
      ],
      answer: 2
    },
    {
      id: 14,
      question: "Quel enregistrement DNS assure la résolution directe (Nom->IP) ?",
      options: [
        "MX",
        "PTR",
        "A (ou INA)",
        "SOA"
      ],
      answer: 2
    },
    {
      id: 15,
      question: "Que désigne l'indicateur 'serial' dans le SOA ?",
      options: [
        "Le numéro de série pour les mises à jour",
        "Le temps de rafraîchissement",
        "La durée de vie du cache",
        "Le port d'écoute secret"
      ],
      answer: 0
    },
    {
      id: 16,
      question: "Quel daemon Linux gère le service DNS (package BIND) ?",
      options: [
        "dhcpd",
        "named",
        "postfix",
        "apache2"
      ],
      answer: 1
    },
    {
      id: 17,
      question: "Quel paquet remplace Sendmail lors du cours de messagerie ?",
      options: [
        "Courier-IMAP",
        "Postfix",
        "Dovecot",
        "Apache"
      ],
      answer: 1
    },
    {
      id: 18,
      question: "Quel enregistrement DNS est requis pour la messagerie ?",
      options: [
        "A",
        "PTR",
        "MX",
        "SOA"
      ],
      answer: 2
    },
    {
      id: 19,
      question: "Quel type d'hébergement Web possède son propre DocumentRoot ?",
      options: [
        "Site principal",
        "Site par dossier",
        "Site virtuel (VirtualHost)",
        "Site en cache proxy"
      ],
      answer: 2
    },
    {
      id: 20,
      question: "Rôle majeur d'un serveur Proxy (Mandataire) Web ?",
      options: [
        "Attribuer des baux IP dynamiques",
        "Intermédiaire, contrôle d'accès et mise en cache",
        "Résoudre les noms de domaine en adresses MAC",
        "Héberger des scripts PHP dynamiques"
      ],
      answer: 1
    }
  ]
};