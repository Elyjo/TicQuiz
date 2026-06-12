export const chapter4 = {
  id: "chapter-4",
  title: "Suivi de la session",
  questions: [
    {
      id: 1,
      question: "Pourquoi utiliser cookies ou sessions",
      options: [
        "HTTP est sans état",
        "Accélérer les pages",
        "Sécuriser le réseau",
        "Java ne gère pas les variables globales",
      ],
      answer: 0,
    },
    {
      id: 2,
      question: "Méthode pour envoyer un cookie au client",
      options: [
        "request.addCookie(c)",
        "response.setCookie(c)",
        "response.addCookie(c)",
        "session.addCookie(c)",
      ],
      answer: 2,
    },
    {
      id: 3,
      question: "Comment empêcher l'accès au cookie via JavaScript",
      options: [
        "cookie.setSecure(true)",
        "cookie.setHttpOnly(true)",
        "cookie.setPath('/')",
        "cookie.setMaxAge(0)",
      ],
      answer: 1,
    },
    {
      id: 4,
      question: "Méthode pour invalider une session",
      options: [
        "session.destroy()",
        "session.close()",
        "session.invalidate()",
        "session.remove()",
      ],
      answer: 2,
    },
    {
      id: 5,
      question: "Solution si le client refuse les cookies",
      options: [
        "Session impossible",
        "Réécriture d'URL",
        "Utiliser l'adresse IP",
        "Authentification à chaque clic",
      ],
      answer: 1,
    },
  ],
};
