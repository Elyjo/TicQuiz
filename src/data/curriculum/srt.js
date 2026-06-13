// data/curriculum/srt.js

import {
  Cpu,
  AppWindow,
  Code2,
  Languages,
  Monitor,
  Network,
  Database,
  Zap,
  Signal,
  Coffee,
  Globe,
  Server,
  Shield,
  Router,
  Scale,
  Terminal,
} from "lucide-react";

export const srt = {
  l1: {
    semester1: [
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
        credits: 10,
        icon: AppWindow,
        color: "yellow",
      },
      {
        id: "algorithmique",
        name: "Algorithmique",
        credits: 8,
        icon: Code2,
        color: "violet",
      },
    ],

    semester2: [
      {
        id: "reseaux",
        name: "Réseaux",
        credits: 11,
        icon: Network,
        color: "cyan",
      },
      {
        id: "electricite",
        name: "Électricité",
        credits: 7,
        icon: Zap,
        color: "orange",
      },
      {
        id: "traitementSignal",
        name: "Traitement du Signal",
        credits: 7,
        icon: Signal,
        color: "pink",
      },
    ],
  },

  l2: {
    semester1: [
      {
        id: "langageC",
        name: "Langage C",
        credits: 6,
        icon: Code2,
        color: "violet",
      },
      {
        id: "reseaux",
        name: "Réseaux",
        credits: 10,
        icon: Network,
        color: "cyan",
      },
      {
        id: "reseauxSansFil",
        name: "Réseaux Sans Fil",
        credits: 10,
        icon: Router,
        color: "blue",
      },
      {
        id: "linux",
        name: "Linux",
        credits: 10,
        icon: Terminal,
        color: "cyan",
      },
      {
        id: "iot",
        name: "IoT",
        credits: 4,
        icon: Cpu,
        color: "emerald",
      },
    ],

    semester2: [
      {
        id: "java",
        name: "Java",
        credits: 14,
        icon: Coffee,
        color: "orange",
      },
      {
        id: "sibd",
        name: "SIBD",
        credits: 14,
        icon: Database,
        color: "emerald",
      },
      {
        id: "programmationWeb",
        name: "Programmation Web",
        credits: 14,
        icon: Globe,
        color: "pink",
      },
      {
        id: "telecoms",
        name: "Bases des Télécoms",
        credits: 8,
        icon: Signal,
        color: "cyan",
      },
      {
        id: "adminLinux",
        name: "Admin Linux",
        credits: 8,
        icon: Server,
        color: "cyan",
      },
      {
        id: "adminWindows",
        name: "Admin Windows",
        credits: 8,
        icon: Monitor,
        color: "indigo",
      },
    ],
  },

  l3: {
    semester1: [
      {
        id: "routage",
        name: "Routage",
        credits: 8,
        icon: Router,
        color: "cyan",
      },
      {
        id: "reseauxEtendus",
        name: "Réseaux Étendus",
        credits: 8,
        icon: Network,
        color: "blue",
      },
      {
        id: "securite",
        name: "Sécurité",
        credits: 7,
        icon: Shield,
        color: "red",
      },
      {
        id: "javaAvance",
        name: "Java Avancé",
        credits: 15,
        icon: Coffee,
        color: "orange",
      },
      {
        id: "webServices",
        name: "Web Services",
        credits: 15,
        icon: Globe,
        color: "pink",
      },
    ],

    semester2: [
      {
        id: "droitTic",
        name: "Droit des TIC",
        credits: 9,
        icon: Scale,
        color: "orange",
      },
      {
        id: "anglais",
        name: "Anglais",
        credits: 9,
        icon: Languages,
        color: "pink",
      },

    ],
  },
};
