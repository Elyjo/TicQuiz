export const chapter6 = {
  id: "chapter-6",
  title: "Transformation avec XSLT",
  questions: [
    {
      id: 1,
      question: "Quelle est la principale différence entre XSLT et CSS ?",
      options: [
        "CSS est pour le XML, XSLT pour le HTML",
        "XSLT permet la transformation structurelle du document, CSS seulement la présentation visuelle",
        "XSLT est plus simple à écrire que CSS",
        "Aucune, ils font la même chose"
      ],
      answer: 1
    },
    {
      id: 2,
      question: "Quelle instruction XSLT permet d'itérer sur une liste de nœuds ?",
      options: ["xsl:template", "xsl:apply-templates", "xsl:for-each", "xsl:value-of"],
      answer: 2
    },
    {
      id: 3,
      question: "Que fait `<xsl:apply-templates/>` ?",
      options: [
        "Il boucle sur chaque élément",
        "Il demande au processeur de traiter les enfants du nœud courant",
        "Il affiche la valeur d'un nœud",
        "Il crée un nouvel attribut"
      ],
      answer: 1
    },
    {
      id: 4,
      question: "Quelle instruction permet d'écrire la valeur d'un nœud XML dans le résultat ?",
      options: ["xsl:output", "xsl:value-of", "xsl:template", "xsl:text"],
      answer: 1
    },
    {
      id: 5,
      question: "Le langage XSLT est dit :",
      options: ["Procédural", "Déclaratif", "Orienté Objet", "Binaire"],
      answer: 1
    }
  ]
};