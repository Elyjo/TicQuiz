export const chapter5 = {
  id: "chapter-5",
  title: "Java Server Pages",
  questions: [
    {
      id: 1,
      question: "Syntaxe pour une déclaration JSP globale",
      options: ["<% %>", "<%= %>", "<%! %>", "<%@ %>"],
      answer: 2,
    },
    {
      id: 2,
      question: "Directive d'inclusion à la compilation",
      options: [
        "<%@ include %>",
        "<jsp:include />",
        "<%@ page include %>",
        "<jsp:forward />",
      ],
      answer: 0,
    },
    {
      id: 3,
      question: "Objet pour accéder aux attributs de page",
      options: ["request", "pageContext", "config", "application"],
      answer: 1,
    },
    {
      id: 4,
      question: "Action transférant la requête sans changer l'URL",
      options: [
        "<jsp:include>",
        "<jsp:forward>",
        "<jsp:param>",
        "<jsp:plugin>",
      ],
      answer: 1,
    },
    {
      id: 5,
      question: "Condition pour l'objet implicite exception",
      options: ["Toujours", "isErrorPage=true", "Dans les .jspf", "Par défaut"],
      answer: 1,
    },
  ],
};
