export const chapter4 = {
  id: "chapter-4",
  title: "Quiz de synthèse",
  questions: [
    {
      id: 1,
      question: "Quelle est la différence fondamentale entre XML et HTML ?",
      options: [
        "XML est destiné à l'affichage, HTML à la structure.",
        "HTML est destiné à l'affichage, XML à la structure (sémantique).",
        "XML est un langage de programmation.",
        "Il n'y a aucune différence."
      ],
      answer: 1
    },
    {
      id: 2,
      question: "Que signifie le terme 'bien formé' (well-formed) pour un document XML ?",
      options: [
        "Il respecte une DTD.",
        "Il respecte les règles syntaxiques de base de XML (racine unique, balises fermées, etc.).",
        "Il a été validé par un schéma XSD.",
        "Il contient une déclaration XML au début."
      ],
      answer: 1
    },
    {
      id: 3,
      question: "Laquelle de ces propositions est une entité prédéfinie en XML pour le symbole '&' ?",
      options: ["&amp;", "&lt;", "&gt;", "&quote;"],
      answer: 0
    },
    {
      id: 4,
      question: "Quelle est la différence majeure entre une DTD et un XML Schema ?",
      options: [
        "Le XML Schema ne permet pas de valider les attributs.",
        "La DTD est écrite en XML, le Schema non.",
        "Le XML Schema est un document XML et permet un typage de données riche.",
        "La DTD est obsolète et inutilisable."
      ],
      answer: 2
    },
    {
      id: 5,
      question: "Quel opérateur DTD permet de définir une liste de choix exclusifs ?",
      options: ["(a, b)", "(a | b)", "a?", "a*"],
      answer: 1
    },
    {
      id: 6,
      question: "Dans un XML Schema, quel indicateur permet de spécifier que tous les éléments fils doivent être présents, mais sans ordre imposé ?",
      options: ["xsd:sequence", "xsd:choice", "xsd:all", "xsd:order"],
      answer: 2
    },
    {
      id: 7,
      question: "À quoi servent les espaces de noms (Namespaces) en XML ?",
      options: [
        "À accélérer le chargement des fichiers.",
        "À éviter les conflits de noms entre différents vocabulaires XML.",
        "À compresser les données XML.",
        "À définir des feuilles de style."
      ],
      answer: 1
    },
    {
      id: 8,
      question: "Comment définit-on un attribut obligatoire dans un XML Schema ?",
      options: ["use='optional'", "use='required'", "minOccurs='1'", "type='fixed'"],
      answer: 1
    }
  ]
};