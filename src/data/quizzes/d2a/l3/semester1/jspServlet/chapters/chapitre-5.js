export const chapter5 = {
  id: "chapter-5",
  title: "ava Server Pages",
  questions: [
    {
      id: 1,
      question: "Quelle est la syntaxe correcte pour une déclaration JSP (variables ou méthodes globales) ?",
      options: [
        "<% déclaration %>",
        "<%= déclaration %>",
        "<%! déclaration %>",
        "<%@ déclaration %>"
      ],
      answer: 3
    },
    {
      id: 2,
      question: "Quelle directive permet d'inclure un fragment de code lors de la phase de compilation (jsp vers servlet) ?",
      options: [
        "<%@ include file='...' %>",
        "<jsp:include page='...' />",
        "<%@ page include='...' %>",
        "<jsp:forward page='...' />"
      ],
      answer: 1
    },
    {
      id: 3,
      question: "Quel objet implicite est utilisé pour accéder aux attributs de la page courante ?",
      options: [
        "request",
        "pageContext",
        "config",
        "application"
      ],
      answer: 2
    },
    {
      id: 4,
      question: "Quelle action JSP transfère la requête vers une autre ressource sans que l'URL dans le navigateur ne change pour l'utilisateur ?",
      options: [
        "<jsp:include>",
        "<jsp:forward>",
        "<jsp:param>",
        "<jsp:plugin>"
      ],
      answer: 2
    },
    {
      id: 5,
      question: "Dans quel cas l'objet implicite 'exception' est-il disponible ?",
      options: [
        "Dans n'importe quel scriptlet",
        "Uniquement si l'attribut isErrorPage de la directive page est true",
        "Uniquement dans les fichiers .jspf",
        "Dans toutes les pages JSP par défaut"
      ],
      answer: 2
    }
  ]
};