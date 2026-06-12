export const chapter1 = {
  id: "chapter-1",
  title: "Concepts de base",
  questions: [
    {
      id: 1,
      question: "Quelle est la principale différence entre HTML et XML",
      options: [
        "HTML est pour le Web, XML est pour les bases de données",
        "HTML décrit la présentation, XML décrit la structure/sémantique",
        "HTML est plus récent que XML",
        "XML ne supporte pas les balises"
      ],
      answer: 1
    },
    {
      id: 2,
      question: "Qu'est-ce qu'un document XML 'bien formé'",
      options: [
        "Un document qui contient une DTD",
        "Un document qui respecte les règles syntaxiques de base de XML",
        "Un document qui utilise uniquement des balises prédéfinies",
        "Un document qui est affichable dans tous les navigateurs"
      ],
      answer: 1
    },
    {
      id: 3,
      question: "Laquelle de ces règles est fausse pour un document bien formé",
      options: [
        "Il doit y avoir un seul élément racine",
        "Les balises sont sensibles à la casse",
        "Les balises peuvent s'imbriquer comme `<A><B></A></B>`",
        "Les valeurs d'attributs doivent être entre guillemets"
      ],
      answer: 2
    },
    {
      id: 4,
      question: "Que signifie 'case sensitive' en XML",
      options: [
        "Les balises doivent être écrites en minuscules uniquement",
        "Les balises ne peuvent pas contenir de chiffres",
        "La casse (majuscules/minuscules) est importante : `<Nom>` est différent de `<nom>`",
        "Les balises doivent être en majuscules uniquement"
      ],
      answer: 2
    },
    {
      id: 5,
      question: "Quelle est la différence entre un document 'bien formé' et un document 'valide'",
      options: [
        "Il n'y a aucune différence",
        "Un document valide respecte en plus une grammaire (DTD ou Schema)",
        "Un document bien formé est plus complexe qu'un document valide",
        "Un document valide n'a pas besoin d'élément racine"
      ],
      answer: 1
    },
    {
      id: 6,
      question: "Que fait un processeur XML (parser)",
      options: [
        "Il ajoute du style CSS au document",
        "Il vérifie si le document respecte les règles de structure XML",
        "Il convertit le XML en base de données SQL automatiquement",
        "Il crypte les données"
      ],
      answer: 1
    },
    {
      id: 7,
      question: "Quelle est la syntaxe correcte pour un élément vide en XML",
      options: [
        "<element></element>",
        "<element/>",
        "<element> </element>",
        "Toutes les réponses ci-dessus sont correctes"
      ],
      answer: 3
    },
    {
      id: 8,
      question: "Pourquoi XML est-il dit 'extensible'",
      options: [
        "Parce qu'on peut inventer ses propres balises selon ses besoins",
        "Parce qu'il peut remplacer HTML",
        "Parce qu'il compresse les fichiers",
        "Parce qu'il fonctionne sans processeur"
      ],
      answer: 0
    }
  ]
};