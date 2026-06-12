export const chapter5 = {
  id: "chapter-5",
  title: "DOM et Événements Web",
  questions: [
    {
      id: 1,
      question: "Que signifie précisément l'acronyme DOM ?",
      options: [
        "Data Object Management",
        "Document Object Model",
        "Digital Office Mechanism",
        "Document Option Mode"
      ],
      answer: 1
    },
    {
      id: 2,
      question: "Quel objet global représente le point d'entrée du DOM dans le navigateur ?",
      options: [
        "window",
        "document",
        "html",
        "screen"
      ],
      answer: 1
    },
    {
      id: 3,
      question: "Quelle méthode sélectionne un élément unique via son identifiant HTML ?",
      options: [
        "getElementsByClassName()",
        "querySelector()",
        "getElementById()",
        "getElementsById()"
      ],
      answer: 2
    },
    {
      id: 4,
      question: "Que retourne querySelectorAll() si aucun élément ne correspond ?",
      options: [
        "null",
        "undefined",
        "Une NodeList vide",
        "Un tableau contenant [null]"
      ],
      answer: 2
    },
    {
      id: 5,
      question: "Quelle propriété modifie le texte brut d'un élément sans interpréter les balises ?",
      options: [
        "innerHTML",
        "textContent",
        "value",
        "outerHTML"
      ],
      answer: 1
    },
    {
      id: 6,
      question: "Quelle propriété permet de lire ou modifier le contenu HTML interne d'un nœud ?",
      options: [
        "textContent",
        "innerText",
        "innerHTML",
        "src"
      ],
      answer: 2
    },
    {
      id: 7,
      question: "Quelle méthode crée un nouvel élément HTML en mémoire ?",
      options: [
        "document.createElement()",
        "document.newElement()",
        "document.appendChild()",
        "document.makeElement()"
      ],
      answer: 0
    },
    {
      id: 8,
      question: "Quelle méthode insère un nœud enfant à la fin d'un élément parent ?",
      options: [
        "prepend()",
        "appendChild()",
        "insertBefore()",
        "replaceChild()"
      ],
      answer: 1
    },
    {
      id: 9,
      question: "Comment supprime-t-on un élément enfant spécifique du DOM ?",
      options: [
        "parent.deleteChild(enfant)",
        "enfant.remove() ou parent.removeChild(enfant)",
        "document.clear(enfant)",
        "enfant.destroy()"
      ],
      answer: 1
    },
    {
      id: 10,
      question: "Quelle est la méthode standard pour attacher un écouteur d'événement ?",
      options: [
        "onclick()",
        "addEventListener()",
        "attachEvent()",
        "listenEvent()"
      ],
      answer: 1
    },
    {
      id: 11,
      question: "Quel événement se déclenche à la validation finale d'un formulaire HTML ?",
      options: [
        "click",
        "submit",
        "change",
        "input"
      ],
      answer: 1
    },
    {
      id: 12,
      question: "Quelle méthode de l'objet événement annule son action par défaut ?",
      options: [
        "e.stopPropagation()",
        "e.preventDefault()",
        "e.stop()",
        "e.cancel()"
      ],
      answer: 1
    },
    {
      id: 13,
      question: "Quelle méthode de l'objet événement bloque la remontée (bubbling) de l'événement ?",
      options: [
        "e.preventDefault()",
        "e.stopPropagation()",
        "e.cancelBubble()",
        "e.freeze()"
      ],
      answer: 1
    },
    {
      id: 14,
      question: "Comment ajoute-t-on de manière propre une classe CSS à un élément ?",
      options: [
        "element.className = 'classe'",
        "element.classList.add('classe')",
        "element.classList.push('classe')",
        "element.style.add('classe')"
      ],
      answer: 1
    },
    {
      id: 15,
      question: "Quel événement détecte l'écriture en temps réel dans un champ de texte ?",
      options: [
        "change",
        "input",
        "blur",
        "focus"
      ],
      answer: 1
    },
    {
      id: 16,
      question: "Quel événement s'exécute lorsqu'un élément perd le focus utilisateur ?",
      options: [
        "focus",
        "blur",
        "change",
        "leave"
      ],
      answer: 1
    },
    {
      id: 17,
      question: "Dans un addEventListener, à quoi fait référence le mot-clé 'this' (hors fonction fléchée) ?",
      options: [
        "À l'objet window",
        "À l'élément du DOM qui a déclenché l'écouteur",
        "À l'objet événement",
        "Au document entier"
      ],
      answer: 1
    },
    {
      id: 18,
      question: "Quel objet permet de stocker des données locales persistantes sans limite de session ?",
      options: [
        "sessionStorage",
        "cookies",
        "localStorage",
        "window.data"
      ],
      answer: 2
    },
    {
      id: 19,
      question: "Quelle est la nature des collections d'éléments renvoyées par getElementsByTagName() ?",
      options: [
        "Un tableau JavaScript classique (Array)",
        "Une collection HTML dynamique (HTMLCollection)",
        "Une NodeList statique",
        "Une chaîne JSON"
      ],
      answer: 1
    },
    {
      id: 20,
      question: "Quelle méthode vérifie si une classe CSS spécifique est appliquée à un élément ?",
      options: [
        "element.classList.has('classe')",
        "element.classList.contains('classe')",
        "element.classList.check('classe')",
        "element.className.includes('classe')"
      ],
      answer: 1
    }
  ]
};