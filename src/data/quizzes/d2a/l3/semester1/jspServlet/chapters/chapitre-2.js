export const chapter2 = {
  id: "chapter-2",
  title: "Récupération d'informations",
  questions: [
    {
      id: 1,
      question: "Quelle méthode permet de récupérer un paramètre d'initialisation propre à un Servlet ?",
      options: [
        "getServletContext().getInitParameter()",
        "getServletConfig().getInitParameter()",
        "request.getParameter()",
        "getAttribute()"
      ],
      answer: 1
    },
    {
      id: 2,
      question: "Quelle méthode utiliser pour récupérer les valeurs d'un champ de formulaire présent plusieurs fois (ex: cases à cocher) ?",
      options: [
        "getParameter()",
        "getAttribute()",
        "getParameterValues()",
        "getHeader()"
      ],
      answer: 2
    },
    {
      id: 3,
      question: "Quel objet permet de transférer une requête d'un servlet à un autre ?",
      options: [
        "ServletConfig",
        "RequestDispatcher",
        "HttpServletResponse",
        "ServletContext"
      ],
      answer: 1
    },
    {
      id: 4,
      question: "Comment accéder à l'adresse IP du client ?",
      options: [
        "request.getServerName()",
        "request.getRemoteHost()",
        "request.getRemoteAddr()",
        "context.getInitParameter()"
      ],
      answer: 2
    },
    {
      id: 5,
      question: "Dans quel fichier Tomcat définit-on les utilisateurs et leurs rôles pour l'authentification ?",
      options: [
        "web.xml",
        "context.xml",
        "tomcat-users.xml",
        "server.xml"
      ],
      answer: 2
    }
  ]
};