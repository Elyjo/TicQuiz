export const chapter2 = {
  id: "chapter-2",
  title: "Structure, Entités et Espaces",
  questions: [
    {
      id: 1,
      question: "Quelle est la différence entre structure logique et physique en XML",
      options: [
        "Il n'y a aucune différence",
        "La logique est une arborescence, la physique est un découpage en entités (fichiers)",
        "La physique est l'arborescence, la logique est le fichier unique",
        "La logique est pour le Web, la physique pour le papier"
      ],
      answer: 1
    },
    {
      id: 2,
      question: "Comment appelle-t-on les fragments de documents nommés utilisés comme raccourcis",
      options: ["Balises", "Entités", "Attributs", "Prologues"],
      answer: 1
    },
    {
      id: 3,
      question: "Quel est l'intérêt principal des espaces de noms (Namespaces)",
      options: [
        "Accélérer le traitement par le processeur",
        "Éviter les conflits de noms entre différentes sources XML",
        "Réduire la taille du fichier",
        "Changer la couleur des balises"
      ],
      answer: 1
    },
    {
      id: 4,
      question: "Quel attribut est utilisé pour déclarer un espace de noms",
      options: ["xml-name", "namespace", "xmlns", "uri-id"],
      answer: 2
    },
    {
      id: 5,
      question: "Quelle est l'entité prédéfinie pour le caractère '&'",
      options: ["&amp;", "&and;", "&char;", "&esc;"],
      answer: 0
    },
    {
      id: 6,
      question: "À quoi sert l'attribut 'standalone' dans la déclaration XML",
      options: [
        "À définir la langue du document",
        "À indiquer si le document dépend de déclarations externes",
        "À spécifier la version du parser",
        "À lier une feuille de style"
      ],
      answer: 1
    }
  ]
};