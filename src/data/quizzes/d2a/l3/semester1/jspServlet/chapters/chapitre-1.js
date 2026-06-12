export const chapter1 = {
  id: "chapter-1",
  title: "Premier pas avec les Servlets",
  questions: [
    {
      id: 1,
      question: "Protocole de communication client-serveur web",
      options: ["FTP", "SMTP", "HTTP", "SSH"],
      answer: 2,
    },
    {
      id: 2,
      question: "Classe à étendre pour un Servlet",
      options: [
        "javax.servlet.Servlet",
        "javax.servlet.http.HttpServlet",
        "java.io.Servlet",
        "javax.servlet.GenericServlet",
      ],
      answer: 1,
    },
    {
      id: 3,
      question: "Méthode du cycle de vie exécutée une seule fois",
      options: ["service()", "doGet()", "destroy()", "init()"],
      answer: 3,
    },
    {
      id: 4,
      question: "Annotation pour déclarer un Servlet",
      options: ["@Servlet", "@WebInit", "@WebServlet", "@RequestMapping"],
      answer: 2,
    },
    {
      id: 5,
      question: "Méthode appelée à chaque requête",
      options: ["init()", "service()", "destroy()", "config()"],
      answer: 1,
    },
  ],
};
