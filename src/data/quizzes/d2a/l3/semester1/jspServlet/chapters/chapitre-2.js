export const chapter2 = {
  id: "chapter-2",
  title: "Récupération d'informations",
  questions: [
    {
      id: 1,
      question: "Méthode pour un paramètre d'initialisation",
      options: [
        "getServletContext().getInitParameter()",
        "getServletConfig().getInitParameter()",
        "request.getParameter()",
        "getAttribute()",
      ],
      answer: 1,
    },
    {
      id: 2,
      question: "Méthode pour valeurs multiples de formulaire",
      options: [
        "getParameter()",
        "getAttribute()",
        "getParameterValues()",
        "getHeader()",
      ],
      answer: 2,
    },
    {
      id: 3,
      question: "Objet pour transférer une requête",
      options: [
        "ServletConfig",
        "RequestDispatcher",
        "HttpServletResponse",
        "ServletContext",
      ],
      answer: 1,
    },
    {
      id: 4,
      question: "Comment accéder à l'adresse IP du client",
      options: [
        "request.getServerName()",
        "request.getRemoteHost()",
        "request.getRemoteAddr()",
        "context.getInitParameter()",
      ],
      answer: 2,
    },
    {
      id: 5,
      question: "Fichier de configuration des rôles Tomcat",
      options: ["web.xml", "context.xml", "tomcat-users.xml", "server.xml"],
      answer: 2,
    },
  ],
};
