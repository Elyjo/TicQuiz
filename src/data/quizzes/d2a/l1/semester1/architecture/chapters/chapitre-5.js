export const chapter5 = {
  id: "chapter-5",

  title: "Codage binaire",

  questions: [
    {
      id: 1,
      question: "Combien de valeurs différentes peut-on représenter avec un code de n bits ?",
      options: [
        "2 * n valeurs",
        "2^n valeurs",
        "n^2 valeurs",
        "2^(n-1) valeurs",
      ],
      answer: 1,
    },

    {
      id: 2,
      question: "Pourquoi dit-on que le code binaire naturel à 4 bits est un code 'pondéré' ?",
      options: [
        "Parce que chaque configuration possède le même nombre de 1",
        "Parce que le ième bit en partant de la droite pèse 2^(i-1)",
        "Parce qu'il intègre obligatoirement un bit de signe",
        "Parce qu'il est limité aux nombres pairs",
      ],
      answer: 1,
    },

    {
      id: 3,
      question: "Quel est le principe fondamental du codage BCD (Binary Coded Decimal) ?",
      options: [
        "Chaque chiffre décimal est codé individuellement en son équivalent binaire sur 4 bits",
        "Le nombre décimal entier est converti globalement par divisions successives",
        "Chaque bit reçoit un poids fixe alternatif de 2 puis de 4",
        "On ajoute systématiquement la valeur 3 à chaque bit",
      ],
      answer: 0,
    },

    {
      id: 4,
      question: "Combien de configurations sont inutilisées dans le codage BCD sur 4 bits ?",
      options: [
        "2 configurations",
        "4 configurations",
        "6 configurations",
        "10 configurations",
      ],
      answer: 2,
    },

    {
      id: 5,
      question: "En codage BCD, quelle règle applique-t-on lors de l'addition si le résultat est supérieur à 9 ?",
      options: [
        "Il faut soustraire 6 au résultat",
        "Il faut ajouter 3 au résultat",
        "Il faut ajouter 6 au résultat",
        "Il faut ignorer la retenue du bit de poids fort",
      ],
      answer: 2,
    },

    {
      id: 6,
      question: "Quelle est la Bureau/particularité du code Excès-3 mentionnée dans le document ?",
      options: [
        "C'est un code pondéré de poids 8-4-2-1",
        "Chaque chiffre décimal est codé en son équivalent binaire + 3 et c'est un code autocomplémentaire",
        "Il utilise uniquement 3 bits pour coder les caractères",
        "Il est réservé exclusivement aux opérations de soustraction",
      ],
      answer: 1,
    },

    {
      id: 7,
      question: "Quels sont les poids binaires fixes attribués au code Aiken ?",
      options: [
        "8, 4, 2, 1",
        "2, 4, 2, 1",
        "3, 3, 2, 1",
        "1, 2, 4, 8",
      ],
      answer: 1,
    },

    {
      id: 8,
      question: "Quel est l'objectif principal du code ASCII ?",
      options: [
        "Permettre aux systèmes informatiques de concevoir des processeurs identiques",
        "Permettre le codage des caractères pour échanger du texte, des nombres et des symboles de façon raisonnée",
        "Multiplier par deux la vitesse de transmission des informations",
        "Sécuriser la mémoire vive contre les modifications physiques",
      ],
      answer: 1,
    },

    {
      id: 9,
      question: "Lorsqu'on ajoute k bits de contrôle à m bits de données, comment appelle-t-on les codes qui permettent uniquement la détection des erreurs ?",
      options: [
        "Les codes autocorrecteurs",
        "Les codes pondérés",
        "Les codes autovérificateurs",
        "Les codes complémentaires",
      ],
      answer: 2,
    },

    {
      id: 10,
      question: "Dans un contrôle de parité, quelle position occupe le bit de contrôle par rapport aux bits de données ?",
      options: [
        "Il représente le bit le moins significatif (LSB)",
        "Il est placé exactement au milieu des bits de données",
        "Il représente le bit le plus significatif (MSB)",
        "Il est inséré de façon aléatoire",
      ],
      answer: 2,
    },

    {
      id: 11,
      question: "Quelle est la valeur du bit de contrôle dans le cas d'une parité paire ?",
      options: [
        "Sa valeur rend le nombre total de 1 impair",
        "Sa valeur est toujours égale à 0",
        "Sa valeur rend le nombre total de 1 pair",
        "Sa valeur est toujours égale à 1",
      ],
      answer: 2,
    },

    {
      id: 12,
      question: "Que se passe-t-il lors d'un contrôle de parité si deux bits sont erronés en même temps pendant le transfert ?",
      options: [
        "L'erreur est immédiatement corrigée par la machine",
        "La parité reste vérifiée et la détection de l'erreur est impossible",
        "Le système informatique s'arrête et demande une retransmission",
        "Le bit de parité s'inverse automatiquement pour signaler le problème",
      ],
      answer: 1,
    },

    {
      id: 13,
      question: "Pour quel type d'environnement le contrôle de parité est-il adapté ?",
      options: [
        "Pour des transmissions à très longue distance avec de fortes perturbations",
        "Pour des réseaux internet mondiaux à haut débit",
        "Pour des transmissions où le taux d'erreurs est très faible (ex: à l'intérieur d'un ordinateur)",
        "Uniquement pour le stockage permanent sur disques magnétiques",
      ],
      answer: 2,
    },

    {
      id: 14,
      question: "Quelle est la propriété fondamentale du code de Hamming ?",
      options: [
        "C'est un code autovérificateur uniquement",
        "C'est un code autocorrecteur basé sur les tests de parité qui permet de corriger un bit erroné",
        "Il ne nécessite aucun bit supplémentaire pour fonctionner",
        "Il convertit le binaire directement en code décimal pondéré",
      ],
      answer: 1,
    },

    {
      id: 15,
      question: "Quelle relation mathématique doit être vérifiée pour déterminer le nombre k de bits de contrôle dans un code de Hamming ?",
      options: [
        "2^k ≤ m + k + 1",
        "2^k ≥ m + k + 1",
        "2^k = m",
        "k = m + 1",
      ],
      answer: 1,
    },

    {
      id: 16,
      question: "Où place-t-on les bits de contrôle de parité (k) lors de la numérotation de droite à gauche dans le code de Hamming ?",
      options: [
        "Sur les positions correspondant aux puissances de 2 (1, 2, 4, 8...)",
        "Uniquement sur les positions impaires",
        "Au début et à la fin du message",
        "Sur les positions multiples de 3",
      ],
      answer: 0,
    },

    {
      id: 17,
      question: "Dans l'exemple de codage de Hamming avec parité paire, comment détermine-t-on la valeur des bits de parité ?",
      options: [
        "En faisant une multiplication logique de toutes les positions",
        "En transformant les positions des bits à 1 en binaire et en effectuant une addition modulo 2",
        "En comptant uniquement le nombre total de zéros reçus",
        "En inversant la valeur absolue du message initial",
      ],
      answer: 1,
    },

    {
      id: 18,
      question: "Pour une parité impaire dans le code de Hamming, quelle opération effectue-t-on ?",
      options: [
        "Une addition modulo 2 inversée (0 si le nombre de 1 est impair, 1 si pair)",
        "Une soustraction binaire de toutes les puissances de 2",
        "On force simplement tous les bits de contrôle à 1",
        "On multiplie le résultat par la valeur de la base",
      ],
      answer: 0,
    },

    {
      id: 19,
      question: "Dans l'exemple de réception d'un message avec erreur, quelle valeur d'erreur (syndrome) indique que le bit erroné se trouve à la position 9 (en décimal) ?",
      options: [
        "La valeur binaire 0100",
        "La valeur binaire 1001",
        "La valeur binaire 1111",
        "La valeur binaire 0011",
      ],
      answer: 1,
    },

    {
      id: 20,
      question: "Que doit faire le système après avoir déterminé l'emplacement exact du bit erroné avec le code de Hamming ?",
      options: [
        "Demander immédiatement une retransmission complète du message",
        "Inverser le bit à la position indiquée pour obtenir le message corrigé",
        "Effacer les bits de contrôle sans modifier les données",
        "Ignorer le message reçu et renvoyer un code d'erreur",
      ],
      answer: 1,
    },
  ],
};