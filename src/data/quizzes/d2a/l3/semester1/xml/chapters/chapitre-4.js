export const chapter4 = {
  id: "chapter-4",
  title: "Quiz de synthèse",
  questions: [
    {
      id: 1,
      question: "Différence fondamentale entre XML et HTML",
      options: [
        "XML pour affichage/HTML pour structure",
        "HTML pour affichage/XML pour structure",
        "XML est langage programmation",
        "Aucune différence",
      ],
      answer: 1,
    },
    {
      id: 2,
      question: "Signification de bien formé (well-formed)",
      options: [
        "Respecte une DTD",
        "Respecte règles syntaxiques base",
        "Validé par schéma XSD",
        "Contient déclaration au début",
      ],
      answer: 1,
    },
    {
      id: 3,
      question: "Entité prédéfinie pour le symbole &",
      options: ["&amp;", "&lt;", "&gt;", "&quote;"],
      answer: 0,
    },
    {
      id: 4,
      question: "Différence majeure DTD et XML Schema",
      options: [
        "Schema ne valide pas attributs",
        "DTD écrite en XML",
        "Schema est en XML et typage riche",
        "DTD obsolète",
      ],
      answer: 2,
    },
    {
      id: 5,
      question: "Opérateur DTD pour choix exclusifs",
      options: ["(a, b)", "(a | b)", "a?", "a*"],
      answer: 1,
    },
    {
      id: 6,
      question: "Indicateur Schema : éléments présents sans ordre imposé",
      options: ["xsd:sequence", "xsd:choice", "xsd:all", "xsd:order"],
      answer: 2,
    },
    {
      id: 7,
      question: "Utilité des espaces de noms (Namespaces)",
      options: [
        "Accélérer chargement",
        "Éviter conflits de noms",
        "Compresser données",
        "Définir styles",
      ],
      answer: 1,
    },
    {
      id: 8,
      question: "Définition d'un attribut obligatoire dans Schema",
      options: [
        "use='optional'",
        "use='required'",
        "minOccurs='1'",
        "type='fixed'",
      ],
      answer: 1,
    },
  ],
};
