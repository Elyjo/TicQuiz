export const chapter3 = {
  id: "chapter-3",

  title: "Nombres signés",

  questions: [
    {
      id: 1,
      question: "Quels sont les deux types d'entiers présentés dans l'introduction du cours ?",
      options: [
        "Les entiers réels et les entiers imaginaires",
        "Les entiers non signés (positifs) et les entiers signés (positifs ou négatifs)",
        "Les entiers simples et les entiers multiples",
        "Les entiers binaires et les entiers décimaux",
      ],
      answer: 1,
    },

    {
      id: 2,
      question: "Combien de méthodes sont citées pour représenter les nombres signés en machine ?",
      options: [
        "2 méthodes",
        "3 méthodes",
        "4 méthodes",
        "16 méthodes",
      ],
      answer: 2,
    },

    {
      id: 3,
      question: "En Représentation en Binaire Signé (RBS), à quoi sert le bit de poids fort (MSB) ?",
      options: [
        "À stocker la partie entière du nombre",
        "À indiquer le signe (0 pour + et 1 pour -)",
        "À multiplier la valeur par deux",
        "À marquer la fin du calcul binaire",
      ],
      answer: 1,
    },

    {
      id: 4,
      question: "En RBS sur n bits, que représentent les (n-1) bits restants ?",
      options: [
        "Le complément à 2",
        "L'excès du nombre",
        "La valeur absolue du nombre",
        "La position de la virgule",
      ],
      answer: 2,
    },

    {
      id: 5,
      question: "Quelle est la valeur en binaire pur de (307)10 avant application d'une règle de signe ?",
      options: [
        "(100110011)2",
        "(0100110011)2",
        "(1100110011)2",
        "(1110110011)2",
      ],
      answer: 0,
    },

    {
      id: 6,
      question: "Quelle est la représentation RBS de (-307)10 sur son format minimal (sans contrainte de bits) ?",
      options: [
        "(0100110011)RBS",
        "(1100110011)RBS",
        "(100100110011)RBS",
        "(1011001100)RBS",
      ],
      answer: 1,
    },

    {
      id: 7,
      question: "Comment code-t-on (+307)10 en RBS sur un format spécifique de 12 bits ?",
      options: [
        "(1001 0011 0011)RBS",
        "(1000 0100 1100)RBS",
        "(0001 0011 0011)RBS",
        "(0100 1100 1100)RBS",
      ],
      answer: 2,
    },

    {
      id: 8,
      question: "Quel est l'intervalle des valeurs représentables en RBS si on travaille sur n bits ?",
      options: [
        "−2^(n-1) ≤ N ≤ 2^(n-1)",
        "−(2^(n-1) − 1) ≤ N ≤ 2^(n-1) − 1",
        "−2^n ≤ N ≤ 2^n − 1",
        "0 ≤ N ≤ 2^n − 1",
      ],
      answer: 1,
    },

    {
      id: 9,
      question: "Quelle est la particularité de la représentation du zéro en RBS ?",
      options: [
        "Il n'a qu'une seule écriture possible : (00)RBS",
        "Il possède deux représentations : (+0) = (00)RBS et (-0) = (10)RBS",
        "Il ne peut pas être représenté en binaire signé",
        "Il s'écrit obligatoirement avec des '1' partout",
      ],
      answer: 1,
    },

    {
      id: 10,
      question: "Comment obtient-on le Complément à 1 (Cà1) d'un nombre négatif ?",
      options: [
        "On ajoute 1 à sa valeur absolue binaire",
        "On inverse tous les bits du nombre positif en RBS (les 0 deviennent 1 et les 1 deviennent 0)",
        "On multiplie par 2 la représentation binaire signée",
        "On décale tous les bits d'une position vers la gauche",
      ],
      answer: 1,
    },

    {
      id: 11,
      question: "Quelle est la valeur de (-307)10 en Complément à 1 (Cà1) sans extension de format ?",
      options: [
        "(1011001100)Cà1",
        "(0100110011)Cà1",
        "(1110110010)Cà1",
        "(1100110011)Cà1",
      ],
      answer: 0,
    },

    {
      id: 12,
      question: "Quelle affirmation est vraie concernant le Complément à 1 d'un nombre positif ?",
      options: [
        "On doit inverser tous ses bits",
        "Sa représentation en Complément à 1 est identique à sa représentation en binaire signé (RBS)",
        "On doit lui ajouter 1 en poids faible",
        "Son premier bit (MSB) passe obligatoirement à 1",
      ],
      answer: 1,
    },

    {
      id: 13,
      question: "Sur un format de 12 bits, quel est le Complément à 1 du nombre (-307)10 ?",
      options: [
        "(0001 0011 0011)Cà1",
        "(1001 0011 0011)Cà1",
        "(1110 1100 1100)Cà1",
        "(1110 1100 1101)Cà1",
      ],
      answer: 2,
    },

    {
      id: 14,
      question: "En Complément à 1, quelle est la double représentation du zéro mentionnée ?",
      options: [
        "(00)Cà1 et (10)Cà1",
        "(00)Cà1 et (11)Cà1",
        "(01)Cà1 et (10)Cà1",
        "(0000)Cà1 et (1000)Cà1",
      ],
      answer: 1,
    },

    {
      id: 15,
      question: "Quelle est la règle pour obtenir la représentation en Complément à 2 (Cà2) d'un nombre négatif ?",
      options: [
        "On ajoute 1 au Complément à 1 du nombre négatif",
        "On inverse les bits de la valeur absolue uniquement",
        "On soustrait 1 à la représentation en binaire signé",
        "On double le nombre de zéros dans le format",
      ],
      answer: 0,
    },

    {
      id: 16,
      question: "Que fait-on en Complément à 2 s'il existe une retenue après l'addition avec le bit le plus significatif ?",
      options: [
        "On l'ajoute au bit de poids faible",
        "On décale tout le nombre vers la droite",
        "On l'ignore",
        "On génère une erreur système",
      ],
      answer: 2,
    },

    {
      id: 17,
      question: "Quelle est l'opération binaire exacte effectuée pour trouver (-307)10 en Cà2 ?",
      options: [
        "1011001100 + 1",
        "0100110011 + 1",
        "1110110011 + 1",
        "1100110011 - 1",
      ],
      answer: 0,
    },

    {
      id: 18,
      question: "Quel est le résultat final de (-307)10 en Complément à 2 (Cà2) sur son format de base ?",
      options: [
        "(1011001100)Cà2",
        "(1011001101)Cà2",
        "(1100110011)Cà2",
        "(0100110011)Cà2",
      ],
      answer: 1,
    },

    {
      id: 19,
      question: "Sur un format de 12 bits, quel est le résultat final de (-307)10 en Complément à 2 ?",
      options: [
        "(1110 1100 1100)Cà2",
        "(1110 1100 1101)Cà2",
        "(1001 0011 0101)Cà2",
        "(0001 0011 0011)Cà2",
      ],
      answer: 1,
    },

    {
      id: 20,
      question: "Parmi les méthodes suivantes pour représenter les nombres signés, laquelle n'est PAS détaillée par des exemples de calcul dans ce document ?",
      options: [
        "Le Complément à 1",
        "Le Complément à 2",
        "La Représentation en Binaire Signé (RBS)",
        "L’excès",
      ],
      answer: 3,
    },
  ],
};