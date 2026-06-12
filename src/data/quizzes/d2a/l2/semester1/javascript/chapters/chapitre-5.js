export const chapter5 = {
  id: "chapter-5",
  title: "DOM et Événements Web",
  questions: [
    {
      id: 1,
      question: "Signification précise de l'acronyme DOM ?",
      options: [
        "Data Object Management",
        "Document Object Model",
        "Digital Office Mechanism",
        "Document Option Mode",
      ],
      answer: 1,
    },
    {
      id: 2,
      question: "Objet global représentant le point d'entrée du DOM ?",
      options: ["window", "document", "html", "screen"],
      answer: 1,
    },
    {
      id: 3,
      question: "Méthode sélectionnant un élément unique via son identifiant ?",
      options: [
        "getElementsByClassName()",
        "querySelector()",
        "getElementById()",
        "getElementsById()",
      ],
      answer: 2,
    },
    {
      id: 4,
      question:
        "Que retourne querySelectorAll() si aucun élément n'est trouvé ?",
      options: [
        "null",
        "undefined",
        "Une NodeList vide",
        "Un tableau avec [null]",
      ],
      answer: 2,
    },
    {
      id: 5,
      question:
        "Propriété modifiant le texte brut sans interpréter les balises ?",
      options: ["innerHTML", "textContent", "value", "outerHTML"],
      answer: 1,
    },
    {
      id: 6,
      question: "Propriété permettant de lire ou modifier le HTML interne ?",
      options: ["textContent", "innerText", "innerHTML", "src"],
      answer: 2,
    },
    {
      id: 7,
      question: "Méthode créant un nouvel élément HTML en mémoire ?",
      options: [
        "document.createElement()",
        "document.newElement()",
        "document.appendChild()",
        "document.makeElement()",
      ],
      answer: 0,
    },
    {
      id: 8,
      question: "Méthode insérant un nœud enfant à la fin d'un parent ?",
      options: [
        "prepend()",
        "appendChild()",
        "insertBefore()",
        "replaceChild()",
      ],
      answer: 1,
    },
    {
      id: 9,
      question: "Comment supprimer un élément enfant spécifique du DOM ?",
      options: [
        "parent.deleteChild(enfant)",
        "enfant.remove() ou parent.removeChild(enfant)",
        "document.clear(enfant)",
        "enfant.destroy()",
      ],
      answer: 1,
    },
    {
      id: 10,
      question: "Méthode standard pour attacher un écouteur d'événement ?",
      options: [
        "onclick()",
        "addEventListener()",
        "attachEvent()",
        "listenEvent()",
      ],
      answer: 1,
    },
    {
      id: 11,
      question: "Événement déclenché à la validation finale d'un formulaire ?",
      options: ["click", "submit", "change", "input"],
      answer: 1,
    },
    {
      id: 12,
      question: "Méthode annulant l'action par défaut d'un événement ?",
      options: [
        "e.stopPropagation()",
        "e.preventDefault()",
        "e.stop()",
        "e.cancel()",
      ],
      answer: 1,
    },
    {
      id: 13,
      question: "Méthode bloquant la remontée (bubbling) d'un événement ?",
      options: [
        "e.preventDefault()",
        "e.stopPropagation()",
        "e.cancelBubble()",
        "e.freeze()",
      ],
      answer: 1,
    },
    {
      id: 14,
      question: "Manière propre d'ajouter une classe CSS à un élément ?",
      options: [
        "element.className = 'classe'",
        "element.classList.add('classe')",
        "element.classList.push('classe')",
        "element.style.add('classe')",
      ],
      answer: 1,
    },
    {
      id: 15,
      question: "Événement détectant l'écriture en temps réel dans un champ ?",
      options: ["change", "input", "blur", "focus"],
      answer: 1,
    },
    {
      id: 16,
      question: "Événement s'exécutant quand un élément perd le focus ?",
      options: ["focus", "blur", "change", "leave"],
      answer: 1,
    },
    {
      id: 17,
      question: "Dans addEventListener, à quoi fait référence 'this' ?",
      options: [
        "window",
        "L'élément ayant déclenché l'écouteur",
        "L'objet événement",
        "Le document",
      ],
      answer: 1,
    },
    {
      id: 18,
      question: "Objet stockant des données locales persistantes ?",
      options: ["sessionStorage", "cookies", "localStorage", "window.data"],
      answer: 2,
    },
    {
      id: 19,
      question: "Nature de la collection renvoyée par getElementsByTagName() ?",
      options: [
        "Tableau classique",
        "HTMLCollection dynamique",
        "NodeList statique",
        "Chaîne JSON",
      ],
      answer: 1,
    },
    {
      id: 20,
      question: "Méthode vérifiant la présence d'une classe CSS ?",
      options: [
        "classList.has()",
        "classList.contains()",
        "classList.check()",
        "className.includes()",
      ],
      answer: 1,
    },
  ],
};
