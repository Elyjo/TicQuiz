export const chapter6 = {
  id: "chapter-6",
  title: "Introduction à jQuery",
  questions: [
    {
      id: 1,
      question: "Qu'est-ce que jQuery en informatique ?",
      options: [
        "Un framework CSS",
        "Une bibliothèque JavaScript légère",
        "Un serveur web compact",
        "Un langage de programmation"
      ],
      answer: 1
    },
    {
      id: 2,
      question: "Quel symbole sert d'alias principal pour appeler jQuery ?",
      options: [
        "&",
        "@",
        "#",
        "$"
      ],
      answer: 3
    },
    {
      id: 3,
      question: "Comment sélectionne-t-on tous les éléments de classe 'menu' ?",
      options: [
        "$('.menu')",
        "$('#menu')",
        "$('menu')",
        "jQuery.get('menu')"
      ],
      answer: 0
    },
    {
      id: 4,
      question: "Comment sélectionne-t-on un élément unique ayant l'ID 'titre' ?",
      options: [
        "$('.titre')",
        "$('titre')",
        "$('#titre')",
        "jQuery.id('titre')"
      ],
      answer: 2
    },
    {
      id: 5,
      question: "Quelle méthode jQuery équivaut à la propriété innerHTML ?",
      options: [
        "text()",
        "html()",
        "val()",
        "content()"
      ],
      answer: 1
    },
    {
      id: 6,
      question: "Quelle méthode modifie ou récupère la valeur d'un champ d'input ?",
      options: [
        "text()",
        "html()",
        "attr()",
        "val()"
      ],
      answer: 3
    },
    {
      id: 7,
      question: "Quelle fonction attend le chargement complet du DOM avant d'agir ?",
      options: [
        "$(document).ready() ou $(function())",
        "$(window).load()",
        "$.start()",
        "$(document).setup()"
      ],
      answer: 0
    },
    {
      id: 8,
      question: "Quelle méthode jQuery masque instantanément un élément HTML ?",
      options: [
        "hide()",
        "fadeOut()",
        "slideUp()",
        "invisible()"
      ],
      answer: 0
    },
    {
      id: 9,
      question: "Que fait précisément la méthode jQuery slideUp() ?",
      options: [
        "Déplace l'élément vers le haut",
        "Masque l'élément en l'enroulant vers le haut",
        "Affiche l'élément avec un fondu",
        "Augmente la taille de la police"
      ],
      answer: 1
    },
    {
      id: 10,
      question: "Quelle méthode applique un effet de fondu transparent progressif ?",
      options: [
        "slideToggle()",
        "animate()",
        "fadeToggle()",
        "hide()"
      ],
      answer: 2
    },
    {
      id: 11,
      question: "Quelle méthode universelle attache un événement en jQuery ?",
      options: [
        "bind()",
        "on()",
        "click()",
        "addEventListener()"
      ],
      answer: 1
    },
    {
      id: 12,
      question: "Comment ajoute-t-on une classe CSS à un élément en jQuery ?",
      options: [
        "css('classe')",
        "setClass('classe')",
        "addClass('classe')",
        "append('classe')"
      ],
      answer: 2
    },
    {
      id: 13,
      question: "Quelle méthode jQuery supprime ou alterne la présence d'une classe CSS ?",
      options: [
        "toggleClass()",
        "switchClass()",
        "removeClass()",
        "alterClass()"
      ],
      answer: 0
    },
    {
      id: 14,
      question: "Comment modifier directement le style CSS 'color' en rouge avec jQuery ?",
      options: [
        "element.style('color', 'red')",
        "$('element').css('color', 'red')",
        "$('element').color('red')",
        "$('element').attr('color', 'red')"
      ],
      answer: 1
    },
    {
      id: 15,
      question: "Quelle méthode supprime définitivement un élément du DOM ?",
      options: [
        "empty()",
        "remove()",
        "clear()",
        "detach()"
      ],
      answer: 1
    },
    {
      id: 16,
      question: "Quelle méthode vide le contenu interne d'un élément sans le supprimer ?",
      options: [
        "remove()",
        "delete()",
        "empty()",
        "clean()"
      ],
      answer: 2
    },
    {
      id: 17,
      question: "Quelle méthode permet de modifier ou lire un attribut HTML (ex: src, href) ?",
      options: [
        "attr()",
        "prop()",
        "val()",
        "css()"
      ],
      answer: 0
    },
    {
      id: 18,
      question: "Que permet de faire la méthode performante animate() ?",
      options: [
        "Créer des transitions CSS personnalisées via des objets",
        "Lancer des vidéos HTML5",
        "Générer des images GIF",
        "Ajouter des bruitages sonores"
      ],
      answer: 0
    },
    {
      id: 19,
      question: "À quoi sert le chaînage d'instructions en jQuery (ex: $('#id').show().text('Ok')) ?",
      options: [
        "À créer des boucles infinies",
        "À exécuter plusieurs méthodes d'affilée sur un même élément",
        "À fusionner deux variables distinctes",
        "À sécuriser le code contre le piratage"
      ],
      answer: 1
    },
    {
      id: 20,
      question: "Que vaut '$(this)' à l'intérieur d'un écouteur d'événement jQuery ?",
      options: [
        "L'objet window global",
        "L'élément HTML cible enveloppé dans un objet jQuery",
        "La fonction parente",
        "Le document de base"
      ],
      answer: 1
    }
  ]
};