export const chapter2 = {
  id: "chapter-2",
  title: "Système de fichiers Linux",
  questions: [
    {
      id: 1,
      question: "Quelle opération prépare une partition à recevoir un SGF",
      options: [
        "Le partitionnement",
        "Le formatage",
        "Le montage",
        "La vérification"
      ],
      answer: 1
    },
    {
      id: 2,
      question: "Nombre max de partitions principales sur un disque",
      options: [
        "1",
        "2",
        "4",
        "Illimité"
      ],
      answer: 2
    },
    {
      id: 3,
      question: "Particularité d'une partition étendue",
      options: [
        "Reçoit directement un SGF",
        "Ne contient que des partitions logiques",
        "Activée directement dans le BIOS",
        "Ne nécessite pas de partition principale"
      ],
      answer: 1
    },
    {
      id: 4,
      question: "Fichier de la 1ère partition du 1er disque SATA/SSD",
      options: [
        "/dev/hda1",
        "/dev/sda0",
        "/dev/sda1",
        "/dev/nvme0n1"
      ],
      answer: 2
    },
    {
      id: 5,
      question: "Fichier de la 1ère partition du 1er disque NVMe",
      options: [
        "/dev/nvme0n1",
        "/dev/nvme0n1p1",
        "/dev/sda1",
        "/dev/nvme1p1"
      ],
      answer: 1
    },
    {
      id: 6,
      question: "Commande interactive pour modifier les partitions",
      options: [
        "fsck",
        "mount",
        "df",
        "fdisk"
      ],
      answer: 3
    },
    {
      id: 7,
      question: "Que fait la commande 'fdisk -l'",
      options: [
        "Formate toutes les partitions",
        "Affiche les disques connectés et leurs partitions",
        "Vérifie les erreurs du SGF",
        "Monte automatiquement les périphériques"
      ],
      answer: 1
    },
    {
      id: 8,
      question: "Commande pour démonter /media/stock",
      options: [
        "unmount /media/stock",
        "umount /media/stock",
        "mount -d /media/stock",
        "fsck -u /media/stock"
      ],
      answer: 1
    },
    {
      id: 9,
      question: "Condition impérative pour lancer 'fsck'",
      options: [
        "La partition doit être montée",
        "La partition doit être en vfat",
        "La partition doit être démontée",
        "La machine doit être hors ligne"
      ],
      answer: 2
    },
    {
      id: 10,
      question: "Commande affichant l'espace total occupé et libre",
      options: [
        "du -sh",
        "fdisk -l",
        "df",
        "fsck"
      ],
      answer: 2
    },
    {
      id: 11,
      question: "Fichier gérant le montage auto au démarrage",
      options: [
        "/etc/passwd",
        "/etc/fstab",
        "/etc/shells",
        "/etc/mount"
      ],
      answer: 1
    },
    {
      id: 12,
      question: "Apport d'ext3 par rapport à ext2",
      options: [
        "Suppression des i-nœuds",
        "Support exclusif du NVMe",
        "Un journal pour la récupération rapide",
        "Absence de fragmentation externe"
      ],
      answer: 2
    },
    {
      id: 13,
      question: "Équivalent de 'mkfs -t ext4 /dev/sda1'",
      options: [
        "mke2fs /dev/sda1",
        "mkfs.ext4 /dev/sda1",
        "mkfs.vfat /dev/sda1",
        "mkfs -ext4 /dev/sda1"
      ],
      answer: 1
    },
    {
      id: 14,
      question: "Dossier contenant les configurations système",
      options: [
        "/dev",
        "/boot",
        "/var",
        "/etc"
      ],
      answer: 3
    },
    {
      id: 15,
      question: "Où est le home du super-utilisateur (root)",
      options: [
        "/home/root",
        "/root",
        "/etc/root",
        "/"
      ],
      answer: 1
    },
    {
      id: 16,
      question: "Particularité du répertoire /tmp",
      options: [
        "Contient les binaires de secours",
        "N'est jamais nettoyé",
        "Contenu effacé à chaque reboot",
        "Stocke les logs des démons"
      ],
      answer: 2
    },
    {
      id: 17,
      question: "Dossier contenant les logs variables des démons",
      options: [
        "/usr",
        "/var",
        "/lib",
        "/proc"
      ],
      answer: 1
    },
    {
      id: 18,
      question: "Commande pour créer un lien symbolique",
      options: [
        "ln fichier lien",
        "ln -s fichier lien",
        "ln -p fichier lien",
        "link -s fichier lien"
      ],
      answer: 1
    },
    {
      id: 19,
      question: "Caractéristique d'un lien physique",
      options: [
        "Peut pointer vers un répertoire",
        "Peut traverser les partitions",
        "Ne peut pas traverser les partitions",
        "Détruit si la source est supprimée"
      ],
      answer: 2
    },
    {
      id: 20,
      question: "Quand un fichier à liens physiques est-il détruit",
      options: [
        "Dès le premier lien supprimé",
        "Quand le lien symbolique expire",
        "Quand TOUS ses liens physiques sont supprimés",
        "Uniquement après un reboot"
      ],
      answer: 2
    }
  ]
};