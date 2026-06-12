export const chapter6 = {
  id: "chapter-6",
  title: "Externalisation du code Java",
  questions: [
    {
      id: 1,
      question: "Quel est l'ordre de recherche par défaut des variables dans JSP EL ?",
      options: [
        "session -> request -> page -> application",
        "page -> request -> session -> application",
        "application -> session -> request -> page",
        "request -> page -> session -> application"
      ],
      answer: 2
    },
    {
      id: 2,
      question: "Quelle spécification un JavaBean DOIT respecter ?",
      options: [
        "Avoir un constructeur avec paramètres",
        "Implémenter l'interface java.io.Serializable",
        "Ne pas avoir d'accesseurs",
        "Hériter de HttpServlet"
      ],
      answer: 2
    },
    {
      id: 3,
      question: "Que signifie property='*' dans la balise <jsp:setProperty /> ?",
      options: [
        "Initialiser toutes les propriétés avec une valeur nulle",
        "Initialiser toutes les propriétés correspondantes aux paramètres de la requête",
        "Ignorer toutes les propriétés",
        "Rendre toutes les propriétés statiques"
      ],
      answer: 2
    },
    {
      id: 4,
      question: "Quelle bibliothèque JSTL est utilisée pour les structures de contrôle comme forEach ?",
      options: [
        "JSTL Core",
        "JSTL XML",
        "JSTL I18n",
        "JSTL Functions"
      ],
      answer: 1
    },
    {
      id: 5,
      question: "Comment accéder à la propriété 'nom' d'un bean 'etudiant' avec EL ?",
      options: [
        "<%= etudiant.nom %>",
        "${etudiant.nom}",
        "&{etudiant.nom}",
        "<c:out value='etudiant.nom' />"
      ],
      answer: 2
    }
  ]
};