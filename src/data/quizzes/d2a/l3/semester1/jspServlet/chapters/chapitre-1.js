export const chapter1 = {
  id: "chapter-1",
  title: "Premier pas avec les Servlets",
  questions: [
    {
      id: 1,
      question: "Quel protocole est utilisé pour la communication entre le client et le serveur web ?",
      options: [
        "FTP",
        "SMTP",
        "HTTP",
        "SSH"
      ],
      answer: 2
    },
    {
      id: 2,
      question: "Quelle classe Java doit obligatoirement étendre un Servlet ?",
      options: [
        "javax.servlet.Servlet",
        "javax.servlet.http.HttpServlet",
        "java.io.Servlet",
        "javax.servlet.GenericServlet"
      ],
      answer: 1
    },
    {
      id: 3,
      question: "Quelle méthode du cycle de vie d'un Servlet est exécutée une seule fois lors de son chargement ?",
      options: [
        "service()",
        "doGet()",
        "destroy()",
        "init()"
      ],
      answer: 3
    },
    {
      id: 4,
      question: "Quelle annotation permet de déclarer un Servlet directement dans le code Java ?",
      options: [
        "@Servlet",
        "@WebInit",
        "@WebServlet",
        "@RequestMapping"
      ],
      answer: 2
    },
    {
      id: 5,
      question: "Quelle méthode est appelée par le conteneur à chaque fois qu'une requête est reçue ?",
      options: [
        "init()",
        "service()",
        "destroy()",
        "config()"
      ],
      answer: 1
    }
  ]
};