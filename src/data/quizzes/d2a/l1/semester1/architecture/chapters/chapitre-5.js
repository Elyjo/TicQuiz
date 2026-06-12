export const chapter5 = {
  id: "chapter-5",
  title: "Codage binaire",
  questions: [
    {
      id: 1,
      question: "Valeurs représentables avec n bits",
      options: [
        "2 * n valeurs",
        "2^n valeurs",
        "n^2 valeurs",
        "2^(n-1) valeurs"
      ],
      answer: 1
    },
    {
      id: 2,
      question: "Pourquoi le code binaire est-il 'pondéré'",
      options: [
        "Même nombre de 1 partout",
        "Le ième bit pèse 2^(i-1)",
        "Intègre un bit de signe",
        "Limité aux nombres pairs"
      ],
      answer: 1
    },
    {
      id: 3,
      question: "Principe fondamental du codage BCD",
      options: [
        "Chaque chiffre décimal est codé sur 4 bits",
        "Conversion globale par divisions",
        "Poids alternatif de 2 puis 4",
        "Ajout systématique de 3"
      ],
      answer: 0
    },
    {
      id: 4,
      question: "Configurations inutilisées en BCD",
      options: [
        "2",
        "4",
        "6",
        "10"
      ],
      answer: 2
    },
    {
      id: 5,
      question: "BCD : Règle d'addition si résultat > 9",
      options: [
        "Soustraire 6 au résultat",
        "Ajouter 3 au résultat",
        "Ajouter 6 au résultat",
        "Ignorer la retenue du MSB"
      ],
      answer: 2
    },
    {
      id: 6,
      question: "Particularité du code Excès-3",
      options: [
        "Code pondéré de poids 8-4-2-1",
        "Équivalent binaire + 3 et autocomplémentaire",
        "Utilise 3 bits pour les caractères",
        "Réservé aux soustractions"
      ],
      answer: 1
    },
    {
      id: 7,
      question: "Poids binaires fixes du code Aiken",
      options: [
        "8, 4, 2, 1",
        "2, 4, 2, 1",
        "3, 3, 2, 1",
        "1, 2, 4, 8"
      ],
      answer: 1
    },
    {
      id: 8,
      question: "Objectif principal du code ASCII",
      options: [
        "Concevoir des processeurs identiques",
        "Coder les caractères pour échanger du texte",
        "Multiplier par 2 la vitesse de transfert",
        "Sécuriser la RAM des modifications"
      ],
      answer: 1
    },
    {
      id: 9,
      question: "Codes permettant uniquement la détection",
      options: [
        "Codes autocorrecteurs",
        "Codes pondérés",
        "Codes autovérificateurs",
        "Codes complémentaires"
      ],
      answer: 2
    },
    {
      id: 10,
      question: "Position du bit de parité",
      options: [
        "Bit le moins significatif (LSB)",
        "Au milieu des bits de données",
        "Bit le plus significatif (MSB)",
        "Inséré de façon aléatoire"
      ],
      answer: 2
    },
    {
      id: 11,
      question: "Valeur du bit en parité paire",
      options: [
        "Rend le nombre de 1 impair",
        "Toujours égale à 0",
        "Rend le nombre de 1 pair",
        "Toujours égale à 1"
      ],
      answer: 2
    },
    {
      id: 12,
      question: "Parité : Si deux bits s'inversent",
      options: [
        "L'erreur est corrigée",
        "Parité vérifiée, détection impossible",
        "Le système s'arrête",
        "Le bit de parité s'inverse"
      ],
      answer: 1
    },
    {
      id: 13,
      question: "Environnement adapté pour la parité simple",
      options: [
        "Longue distance et fortes perturbations",
        "Réseaux internet haut débit",
        "Taux d'erreurs très faible (ex: interne PC)",
        "Stockage exclusif sur disques"
      ],
      answer: 2
    },
    {
      id: 14,
      question: "Propriété du code de Hamming",
      options: [
        "Autovérificateur uniquement",
        "Autocorrecteur (corrige un bit erroné)",
        "Aucun bit supplémentaire requis",
        "Convertit le binaire en décimal pondéré"
      ],
      answer: 1
    },
    {
      id: 15,
      question: "Formule pour les bits de contrôle (k) de Hamming",
      options: [
        "2^k ≤ m + k + 1",
        "2^k ≥ m + k + 1",
        "2^k = m",
        "k = m + 1"
      ],
      answer: 1
    },
    {
      id: 16,
      question: "Où place-t-on les bits k de Hamming",
      options: [
        "Aux puissances de 2 (1, 2, 4, 8...)",
        "Sur les positions impaires",
        "Au début et à la fin du message",
        "Sur les multiples de 3"
      ],
      answer: 0
    },
    {
      id: 17,
      question: "Hamming paire : Calcul des bits de parité",
      options: [
        "Multiplication logique des positions",
        "Addition modulo 2 des positions des 1",
        "Compter le nombre total de zéros",
        "Inverser la valeur absolue"
      ],
      answer: 1
    },
    {
      id: 18,
      question: "Hamming impaire : Opération de contrôle",
      options: [
        "Addition modulo 2 inversée",
        "Soustraction binaire des puissances",
        "Forcer les bits de contrôle à 1",
        "Multiplier le résultat par la base"
      ],
      answer: 0
    },
    {
      id: 19,
      question: "Erreur détectée à la position 9, syndrome",
      options: [
        "0100",
        "1001",
        "1111",
        "0011"
      ],
      answer: 1
    },
    {
      id: 20,
      question: "Action après localisation du bit erroné",
      options: [
        "Demander la retransmission complète",
        "Inverser le bit à la position indiquée",
        "Effacer les bits de contrôle",
        "Renvoyer un code d'erreur"
      ],
      answer: 1
    }
  ]
};