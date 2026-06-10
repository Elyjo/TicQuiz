export const chapter3 = {
  id: "chapter-3",
  title: "Nombres signés",
  questions: [
    {
      id: 1,
      question: "Types d'entiers dans l'introduction ?",
      options: [
        "Réels et imaginaires",
        "Non signés (positifs) et signés (+ ou -)",
        "Simples et multiples",
        "Binaires et décimaux"
      ],
      answer: 1
    },
    {
      id: 2,
      question: "Nombre de méthodes citées pour les signés ?",
      options: [
        "2 méthodes",
        "3 méthodes",
        "4 méthodes",
        "16 méthodes"
      ],
      answer: 2
    },
    {
      id: 3,
      question: "Rôle du MSB en binaire signé (RBS) ?",
      options: [
        "Stocker la partie entière",
        "Indiquer le signe (0 = +, 1 = -)",
        "Multiplier par deux",
        "Marquer la fin du calcul"
      ],
      answer: 1
    },
    {
      id: 4,
      question: "Que représentent les n-1 bits restants ?",
      options: [
        "Le complément à 2",
        "L'excès du nombre",
        "La valeur absolue du nombre",
        "La position de la virgule"
      ],
      answer: 2
    },
    {
      id: 5,
      question: "Valeur binaire pure de (307)10 ?",
      options: [
        "(100110011)2",
        "(0100110011)2",
        "(1100110011)2",
        "(1110110011)2"
      ],
      answer: 0
    },
    {
      id: 6,
      question: "RBS de (-307)10 au format minimal ?",
      options: [
        "(0100110011)RBS",
        "(1100110011)RBS",
        "(100100110011)RBS",
        "(1011001100)RBS"
      ],
      answer: 1
    },
    {
      id: 7,
      question: "Code RBS de (+307)10 sur 12 bits ?",
      options: [
        "(1001 0011 0011)RBS",
        "(1000 0100 1100)RBS",
        "(0001 0011 0011)RBS",
        "(0100 1100 1100)RBS"
      ],
      answer: 2
    },
    {
      id: 8,
      question: "Intervalle en RBS sur n bits ?",
      options: [
        "−2^(n-1) ≤ N ≤ 2^(n-1)",
        "−(2^(n-1) − 1) ≤ N ≤ 2^(n-1) − 1",
        "−2^n ≤ N ≤ 2^n − 1",
        "0 ≤ N ≤ 2^n − 1"
      ],
      answer: 1
    },
    {
      id: 9,
      question: "Particularité du zéro en RBS ?",
      options: [
        "Une seule écriture : (00)RBS",
        "Deux formes : (+0) et (-0)",
        "Impossible à représenter",
        "S'écrit avec des '1' partout"
      ],
      answer: 1
    },
    {
      id: 10,
      question: "Comment obtenir le Complément à 1 (Cà1) ?",
      options: [
        "Ajouter 1 à la valeur absolue binaire",
        "Inverser tous les bits du positif",
        "Multiplier par 2 la forme RBS",
        "Décaler les bits vers la gauche"
      ],
      answer: 1
    },
    {
      id: 11,
      question: "Valeur de (-307)10 en Cà1 (format de base) ?",
      options: [
        "(1011001100)Cà1",
        "(0100110011)Cà1",
        "(1110110010)Cà1",
        "(1100110011)Cà1"
      ],
      answer: 0
    },
    {
      id: 12,
      question: "Cà1 d'un nombre positif ?",
      options: [
        "Inverser tous ses bits",
        "Identique à sa représentation RBS",
        "Ajouter 1 en poids faible",
        "Le MSB passe obligatoirement à 1"
      ],
      answer: 1
    },
    {
      id: 13,
      question: "Complément à 1 de (-307)10 sur 12 bits ?",
      options: [
        "(0001 0011 0011)Cà1",
        "(1001 0011 0011)Cà1",
        "(1110 1100 1100)Cà1",
        "(1110 1100 1101)Cà1"
      ],
      answer: 2
    },
    {
      id: 14,
      question: "Représentation du zéro en Cà1 ?",
      options: [
        "(00)Cà1 et (10)Cà1",
        "(00)Cà1 et (11)Cà1",
        "(01)Cà1 et (10)Cà1",
        "(0000)Cà1 et (1000)Cà1"
      ],
      answer: 1
    },
    {
      id: 15,
      question: "Règle pour le Complément à 2 (Cà2) ?",
      options: [
        "Ajouter 1 au Complément à 1",
        "Inverser les bits de la valeur absolue",
        "Soustrait 1 à la forme RBS",
        "Doubler les zéros du format"
      ],
      answer: 0
    },
    {
      id: 16,
      question: "Retenue finale après addition en Cà2 ?",
      options: [
        "Ajoutée au bit de poids faible",
        "Décalage global vers la droite",
        "On l'ignore",
        "Erreur système"
      ],
      answer: 2
    },
    {
      id: 17,
      question: "Opération pour (-307)10 en Cà2 ?",
      options: [
        "1011001100 + 1",
        "0100110011 + 1",
        "1110110011 + 1",
        "1100110011 - 1"
      ],
      answer: 0
    },
    {
      id: 18,
      question: "Résultat de (-307)10 en Cà2 (format de base) ?",
      options: [
        "(1011001100)Cà2",
        "(1011001101)Cà2",
        "(1100110011)Cà2",
        "(0100110011)Cà2"
      ],
      answer: 1
    },
    {
      id: 19,
      question: "Résultat final de (-307)10 en Cà2 sur 12 bits ?",
      options: [
        "(1110 1100 1100)Cà2",
        "(1110 1100 1101)Cà2",
        "(1001 0011 0101)Cà2",
        "(0001 0011 0011)Cà2"
      ],
      answer: 1
    },
    {
      id: 20,
      question: "Méthode NON détaillée par calcul dans le cours ?",
      options: [
        "Le Complément à 1",
        "Le Complément à 2",
        "Le binaire signé (RBS)",
        "L’excès"
      ],
      answer: 3
    }
  ]
};