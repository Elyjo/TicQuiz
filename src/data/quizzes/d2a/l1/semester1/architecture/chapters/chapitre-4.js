export const chapter4 = {
  id: "chapter-4",
  title: "Nombres réels",
  questions: [
    {
      id: 1,
      question: "Composition d'un nombre réel ?",
      options: [
        "Uniquement des bits signés",
        "Partie entière et fractionnaire",
        "Exposant négatif et mantisse entière",
        "Base décimale et complément à 2"
      ],
      answer: 1
    },
    {
      id: 2,
      question: "Méthodes pour coder la virgule ?",
      options: [
        "Virgule fixe et virgule flottante",
        "Virgule simple et double",
        "Virgule signée et inversée",
        "Virgule absolue et relative"
      ],
      answer: 0
    },
    {
      id: 3,
      question: "Principe de la virgule fixe ?",
      options: [
        "Virgule mobile dynamiquement",
        "Format précis pour entier/fraction",
        "Suppression de la fraction",
        "32 bits fixes pour la décimale"
      ],
      answer: 1
    },
    {
      id: 4,
      question: "Format (5 bits entiers, 4 décimaux) valide ?",
      options: [
        "1001011,10011",
        "101,1011101",
        "10011,0111",
        "111111,1111"
      ],
      answer: 2
    },
    {
      id: 5,
      question: "Pourquoi '100,01' est valide pour ce format (5,4) ?",
      options: [
        "Ne dépasse pas les limites allouées",
        "Binaire pur sans signe",
        "Notation normalisée IEEE",
        "Contient uniquement des zéros"
      ],
      answer: 0
    },
    {
      id: 6,
      question: "Forme générale de la virgule flottante ?",
      options: [
        "± 1,M x 2^n",
        "± 0,M x 10^n",
        "± M x 16^n",
        "± 1,M x 127^n"
      ],
      answer: 0
    },
    {
      id: 7,
      question: "Nombre de bits total du standard IEEE ici ?",
      options: [
        "8 bits",
        "16 bits",
        "32 bits",
        "64 bits"
      ],
      answer: 2
    },
    {
      id: 8,
      question: "Bits réservés à l'exposant (IEEE 32 bits) ?",
      options: [
        "1 bit",
        "8 bits",
        "23 bits",
        "32 bits"
      ],
      answer: 1
    },
    {
      id: 9,
      question: "Bits réservés à la mantisse (IEEE 32 bits) ?",
      options: [
        "1 bit",
        "8 bits",
        "23 bits",
        "32 bits"
      ],
      answer: 2
    },
    {
      id: 10,
      question: "Valeur du bit de signe (MSB) si négatif ?",
      options: [
        "0",
        "1",
        "-1",
        "127"
      ],
      answer: 1
    },
    {
      id: 11,
      question: "Valeur du bit de signe (MSB) si positif ?",
      options: [
        "0",
        "1",
        "Plus ou moins",
        "Aucune valeur"
      ],
      answer: 0
    },
    {
      id: 12,
      question: "Biais appliqué à l'exposant ?",
      options: [
        "1 bit",
        "23",
        "128",
        "127"
      ],
      answer: 3
    },
    {
      id: 13,
      question: "Exposants interdits par la norme ?",
      options: [
        "01010101 et 10101010",
        "00000000 et 11111111",
        "11110000 et 00001111",
        "Toutes les valeurs impaires"
      ],
      answer: 1
    },
    {
      id: 14,
      question: "Où se situent les bits de la mantisse (M) ?",
      options: [
        "Avant la virgule",
        "Après la virgule",
        "Au bit de signe",
        "Dans l'exposant biaisé"
      ],
      answer: 1
    },
    {
      id: 15,
      question: "Composant juste après le bit de signe ?",
      options: [
        "La mantisse (23 bits)",
        "L'exposant (8 bits)",
        "La virgule fixe (4 bits)",
        "Le reste de la division"
      ],
      answer: 1
    },
    {
      id: 16,
      question: "Ordre exact d'un mot IEEE 32 bits ?",
      options: [
        "Signe - mantisse - exposant",
        "Exposant - signe - mantisse",
        "Signe - exposant - mantisse",
        "Mantisse - exposant - signe"
      ],
      answer: 2
    },
    {
      id: 17,
      question: "Exemple réel proposé en fin de cours ?",
      options: [
        "±37,625",
        "±307,625",
        "±10011,0111",
        "±13976,2548"
      ],
      answer: 1
    },
    {
      id: 18,
      question: "Format final requis pour l'exercice ?",
      options: [
        "Binaire pur",
        "Décimal positionnel",
        "Octal",
        "Hexadécimal"
      ],
      answer: 3
    },
    {
      id: 19,
      question: "Nom de la norme pour la virgule flottante ?",
      options: [
        "ISO",
        "IEEE",
        "ASCII",
        "RBS"
      ],
      answer: 1
    },
    {
      id: 20,
      question: "Pourquoi 1001011,10011 est invalide en fixe (5,4) ?",
      options: [
        "Entier nécessite 7 bits et fraction 5 bits",
        "C'est un nombre négatif",
        "Doit être converti en hexadécimal",
        "Ne contient pas de bit de signe"
      ],
      answer: 0
    }
  ]
};