export const chapter3 = {
  id: "chapter-3",
  title: "Externalisation du code Java",
  questions: [
    {
      id: 1,
      question: "Quelle est la syntaxe correcte pour accéder à une variable en JSP EL ?",
      options: ["<%= variable %>", "${variable}", "#{variable}", "<% variable %>"],
      answer: 1
    },
    {
      id: 2,
      question: "Parmi les scopes suivants, lequel est parcouru en premier par JSP EL ?",
      options: ["application", "session", "request", "pageContext"],
      answer: 3
    },
    {
      id: 3,
      question: "Quelle action JSP permet d'initialiser automatiquement toutes les propriétés d'un JavaBean avec les paramètres de la requête ?",
      options: ["<jsp:useBean property='*'/>", "<jsp:setProperty name='bean' property='*'/>", "<c:set value='*'/>", "<jsp:getProperty property='*'/>"],
      answer: 1
    },
    {
      id: 4,
      question: "Quel tag JSTL est utilisé pour effectuer une boucle itérative ?",
      options: ["<c:if>", "<c:choose>", "<c:forEach>", "<c:forTokens>"],
      answer: 2
    },
    {
      id: 5,
      question: "Quelle fonction JSTL permet de connaître la taille d'une collection ?",
      options: ["fn:size()", "fn:length()", "c:length()", "fn:count()"],
      answer: 1
    }
  ]
};