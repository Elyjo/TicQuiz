export const chapter6 = {
  id: "chapter-6",
  title: "Externalisation du code Java",
  questions: [
    {
      id: 1,
      question: "Ordre de recherche par défaut des variables JSP EL",
      options: [
        "session/request/page/application",
        "page/request/session/application",
        "application/session/request/page",
        "request/page/session/application",
      ],
      answer: 1,
    },
    {
      id: 2,
      question: "Spécification requise pour un JavaBean",
      options: [
        "Constructeur avec paramètres",
        "Implémenter Serializable",
        "Aucun accesseur",
        "Hériter de HttpServlet",
      ],
      answer: 1,
    },
    {
      id: 3,
      question: "Signification de property='*' dans <jsp:setProperty />",
      options: [
        "Initialiser avec null",
        "Lier tous les paramètres requête aux propriétés",
        "Ignorer propriétés",
        "Rendre statique",
      ],
      answer: 1,
    },
    {
      id: 4,
      question: "Bibliothèque JSTL pour structures de contrôle",
      options: ["JSTL Core", "JSTL XML", "JSTL I18n", "JSTL Functions"],
      answer: 0,
    },
    {
      id: 5,
      question: "Accès à la propriété 'nom' d'un bean avec EL",
      options: [
        "<%= etudiant.nom %>",
        "${etudiant.nom}",
        "&{etudiant.nom}",
        "<c:out value='etudiant.nom' />",
      ],
      answer: 1,
    },
  ],
};
