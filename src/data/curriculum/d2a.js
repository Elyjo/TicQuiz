// data/curriculum/d2a.js
import {
  Cpu,
  AppWindow,
  Code2,
  Globe,
  Calculator,
  Wallet,
  Network,
  Terminal,
  Database,
  FileCode2,
  Coffee,
  Server,
  Monitor,
  Workflow,
  CodeXml,
  FileCode,
  Image,
  LayoutDashboard,
  BookText,
  Scale,
} from "lucide-react";

export const d2a = {
  l1: {
    semester1: [
      // L1 - S1
      {
        id: "architecture",
        name: "Architecture",
        credits: 10,
        icon: Cpu,
        color: "indigo",
      },
      {
        id: "systemexploitation",
        name: "Système Exploitation",
        credits: 8,
        icon: AppWindow,
        color: "yellow",
      },
      {
        id: "algorithmique",
        name: "Algorithmique",
        credits: 6,
        icon: Code2,
        color: "violet",
      },
    ],

    semester2: [
      {
        id: "html-css",
        name: "HTML & CSS",
        credits: 6,
        icon: Globe,
        color: "cyan",
      },
      {
        id: "algorithmique-avance",
        name: "Algorithmique",
        credits: 8,
        icon: Code2,
        color: "violet",
      },
      {
        id: "probabilites",
        name: "Probabilités",
        credits: 4,
        icon: Calculator,
        color: "yellow",
      },
      {
        id: "comptabilite",
        name: "Comptabilité",
        credits: 4,
        icon: Wallet,
        color: "emerald",
      },
      {
        id: "reseaux",
        name: "Réseaux",
        credits: 6,
        icon: Network,
        color: "cyan",
      },
    ],
  },

  l2: {
    semester1: [
      {
        id: "linux",
        name: "Linux",
        credits: 4,
        icon: Terminal,
        color: "cyan",
      },
      {
        id: "reseaux",
        name: "Réseaux",
        credits: 5,
        icon: Network,
        color: "blue",
      },
      {
        id: "merise",
        name: "Merise",
        credits: 7,
        icon: Database,
        color: "emerald",
      },
      {
        id: "langageC",
        name: "Langage C",
        credits: 6,
        icon: Code2,
        color: "violet",
      },
      {
        id: "javascript",
        name: "JavaScript",
        credits: 4,
        icon: FileCode2,
        color: "yellow",
      },
    ],

    semester2: [
      {
        id: "php",
        name: "PHP",
        credits: 7,
        icon: FileCode2,
        color: "indigo",
      },
      {
        id: "java-poo",
        name: "POO Java",
        credits: 7,
        icon: Coffee,
        color: "orange",
      },
      {
        id: "bases-donnees",
        name: "Bases de Données",
        credits: 7,
        icon: Database,
        color: "emerald",
      },
      {
        id: "admin-linux",
        name: "Administration Linux",
        credits: 5,
        icon: Server,
        color: "cyan",
      },
      {
        id: "admin-windows",
        name: "Administration Windows",
        credits: 4,
        icon: Monitor,
        color: "blue",
      },
    ],
  },

  l3: {
    semester1: [
      {
        id: "uml",
        name: "UML",
        credits: 6,
        icon: Workflow,
        color: "emerald",
      },
      {
        id: "javaAvance",
        name: "Java Avancé",
        credits: 6,
        icon: Coffee,
        color: "orange",
      },
      {
        id: "framework-web",
        name: "Framework Web",
        credits: 5,
        icon: Globe,
        color: "pink",
      },
      {
        id: "jsp-servlet",
        name: "JSP & Servlet",
        credits: 5,
        icon: CodeXml,
        color: "pink",
      },
      {
        id: "oracle",
        name: "Oracle",
        credits: 4,
        icon: Database,
        color: "red",
      },
      {
        id: "xml",
        name: "XML",
        credits: 4,
        icon: FileCode,
        color: "indigo",
      },
    ],

    semester2: [
      {
        id: "multimedia",
        name: "Multimédia",
        credits: 4,
        icon: Image,
        color: "pink",
      },
      {
        id: "cms",
        name: "CMS",
        credits: 3,
        icon: LayoutDashboard,
        color: "cyan",
      },
      {
        id: "memoire",
        name: "Méthodologie Mémoire",
        credits: 3,
        icon: BookText,
        color: "yellow",
      },
      {
        id: "droit-tic",
        name: "Droit des TIC",
        credits: 2,
        icon: Scale,
        color: "orange",
      },
    ],
  },
};
