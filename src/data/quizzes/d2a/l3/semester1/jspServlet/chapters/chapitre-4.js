export const chapter4 = {
  id: "chapter-4",
  title: "Suivi de la session",
  questions: [
    {
      id: 1,
      question: "Pourquoi a-t-on besoin de mécanismes comme les cookies ou les sessions ?",
      options: [
        "Parce que HTTP est un protocole sans état",
        "Pour accélérer le chargement des pages",
        "Pour sécuriser la connexion réseau",
        "Parce que Java ne gère pas les variables globales"
      ],
      answer: 1
    },
    {
      id: 2,
      question: "Quelle méthode permet d'envoyer un cookie au client ?",
      options: [
        "request.addCookie(c)",
        "response.setCookie(c)",
        "response.addCookie(c)",
        "session.addCookie(c)"
      ],
      answer: 3
    },
    {
      id: 3,
      question: "Comment empêcher l'accès à un cookie via JavaScript pour protéger contre les attaques XSS ?",
      options: [
        "cookie.setSecure(true)",
        "cookie.setHttpOnly(true)",
        "cookie.setPath('/')",
        "cookie.setMaxAge(0)"
      ],
      answer: 2
    },
    {
      id: 4,
      question: "Quelle méthode est utilisée pour invalider (fermer) une session ?",
      options: [
        "session.destroy()",
        "session.close()",
        "session.invalidate()",
        "session.remove()"
      ],
      answer: 3
    },
    {
      id: 5,
      question: "Que se passe-t-il si un client refuse les cookies pour une application utilisant `JSESSIONID` ?",
      options: [
        "La session est impossible à maintenir",
        "Il faut utiliser la réécriture d'URL",
        "Le serveur utilise l'adresse IP comme identifiant",
        "Le navigateur demande une authentification à chaque clic"
      ],
      answer: 2
    }
  ]
};