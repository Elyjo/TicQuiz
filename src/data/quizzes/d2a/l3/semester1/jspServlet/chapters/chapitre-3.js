export const chapter3 = {
  id: "chapter-3",
  title: "Externalisation du code Java",
  questions: [
    {
      id: 1,
      question: "Syntaxe pour accéder à une variable JSP EL",
      options: [
        "<%= variable %>",
        "${variable}",
        "#{variable}",
        "<% variable %>",
      ],
      answer: 1,
    },
    {
      id: 2,
      question: "Scope parcouru en premier par JSP EL",
      options: ["application", "session", "request", "pageContext"],
      answer: 3,
    },
    {
      id: 3,
      question: "Action pour initialiser les propriétés d'un JavaBean",
      options: [
        "<jsp:useBean property='*'/>",
        "<jsp:setProperty name='bean' property='*'/>",
        "<c:set value='*'/>",
        "<jsp:getProperty property='*'/>",
      ],
      answer: 1,
    },
    {
      id: 4,
      question: "Tag JSTL pour une boucle itérative",
      options: ["<c:if>", "<c:choose>", "<c:forEach>", "<c:forTokens>"],
      answer: 2,
    },
    {
      id: 5,
      question: "Fonction JSTL pour la taille d'une collection",
      options: ["fn:size()", "fn:length()", "c:length()", "fn:count()"],
      answer: 1,
    },
  ],
};
