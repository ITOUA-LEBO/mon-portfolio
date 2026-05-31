export const translations = {
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      education: 'Education',
      contact: 'Contact',
    },
    hero: {
      name: 'ITOUA LEBO Lebo Rohi Nathan',
      typed: ['SaaS.', 'the future.', 'with code.', 'something real.'],
      headline: 'Build',
      sub: 'Student-Entrepreneur at EFREI Paris. I develop innovative SaaS solutions to transform learning and digital productivity.',
      cta_primary: 'View my SaaS',
      cta_secondary: 'My journey',
      scroll: 'Scroll',
    },
    about: {
      title: 'Vision &',
      title_accent: 'Journey',
      p1: 'Student at EFREI Paris, I combine academic rigor with entrepreneurial ambition.',
      p2: "I believe technology shouldn't just be powerful; it should be useful. That's why I focus on creating tools that automate repetitive tasks and unlock human potential.",
      p3: 'My approach blends robust programming with strategic thinking to transform complex ideas into simple, elegant digital products.',
      expertise: 'Expertise',
      skills: [
        { title: 'Development', skills: ['Programming', 'SaaS Architecture', 'Algorithms'] },
        { title: 'Data Analysis', skills: ['Python', 'SQL', 'Data Analysis', 'Visualization'] },
        { title: 'Product', skills: ['UI/UX Strategy', 'Problem Solving', 'Entrepreneurship'] },
      ],
    },
    projects: {
      title: 'SaaS Projects',
      items: [
        {
          title: 'SWY OS',
          description: 'Educational operating system designed to optimize memorization and course retention through spaced repetition algorithms.',
          tech: ['SaaS', 'EdTech', 'React'],
          type: 'In Development',
        },
        {
          title: 'STACKED',
          description: 'Next-generation habit tracker integrating a financial accountability system to build rock-solid discipline.',
          tech: ['FinTech', 'Productivity', 'Web'],
          type: 'Beta',
        },
        {
          title: 'Simplicité',
          description: 'Complete design of a high-performance compiler for the Simplicité language. Focus on parsing and memory optimization.',
          tech: ['Compiler', 'C++', 'Algorithms'],
          type: 'Academic',
        },
      ],
    },
    education: {
      title: 'Education',
      items: [
        {
          school: 'EFREI Paris',
          degree: 'Integrated Preparatory Class',
          period: '2025 - Present',
          desc: 'Intensive training in computer science, mathematics, and engineering sciences.',
        },
        {
          school: 'IBM Professional',
          degree: 'Data Analyst Certificate',
          period: '2025',
          desc: 'Specialized certification in Python, SQL, and statistical data analysis.',
        },
      ],
    },
    contact: {
      eyebrow: "Let's work together",
      title: 'Get In Touch',
      sub: "Ready to turn an idea into a SaaS?\nLet's discuss your next project.",
      cta_email: 'Send an Email',
      cta_linkedin: 'LinkedIn',
      cta_github: 'GitHub',
    },
    footer: {
      rights: 'All rights reserved.',
      built: 'Built with React & Framer Motion',
    },
  },

  fr: {
    nav: {
      about: 'À propos',
      projects: 'Projets',
      education: 'Formation',
      contact: 'Contact',
    },
    hero: {
      name: 'ITOUA LEBO Lebo Rohi Nathan',
      typed: ['du SaaS.', "l'avenir.", 'avec du code.', 'quelque chose de réel.'],
      headline: 'Construire',
      sub: "Étudiant-Entrepreneur à l'EFREI Paris. Je développe des solutions SaaS innovantes pour transformer l'apprentissage et la productivité digitale.",
      cta_primary: 'Voir mes SaaS',
      cta_secondary: 'Mon parcours',
      scroll: 'Défiler',
    },
    about: {
      title: 'Vision &',
      title_accent: 'Parcours',
      p1: "Étudiant à l'EFREI Paris, je combine rigueur académique et ambition entrepreneuriale.",
      p2: "Je crois que la technologie ne doit pas seulement être puissante, elle doit être utile. C'est pourquoi je me concentre sur des outils qui automatisent les tâches répétitives et libèrent le potentiel humain.",
      p3: "Mon approche mêle programmation solide et pensée stratégique pour transformer des idées complexes en produits digitaux simples et élégants.",
      expertise: 'Expertise',
      skills: [
        { title: 'Développement', skills: ['Programmation', 'Architecture SaaS', 'Algorithmes'] },
        { title: 'Analyse de données', skills: ['Python', 'SQL', 'Analyse', 'Visualisation'] },
        { title: 'Produit', skills: ['UI/UX', 'Problem Solving', 'Entrepreneuriat'] },
      ],
    },
    projects: {
      title: 'Projets SaaS',
      items: [
        {
          title: 'SWY OS',
          description: "Système d'exploitation éducatif conçu pour optimiser la mémorisation et la rétention de cours grâce à des algorithmes de répétition espacée.",
          tech: ['SaaS', 'EdTech', 'React'],
          type: 'En développement',
        },
        {
          title: 'STACKED',
          description: "Tracker d'habitudes nouvelle génération intégrant un système de responsabilité financière pour forger une discipline à toute épreuve.",
          tech: ['FinTech', 'Productivité', 'Web'],
          type: 'Bêta',
        },
        {
          title: 'Simplicité',
          description: "Conception complète d'un compilateur haute performance pour le langage Simplicité. Focus sur le parsing et l'optimisation mémoire.",
          tech: ['Compilateur', 'C++', 'Algorithmes'],
          type: 'Académique',
        },
      ],
    },
    education: {
      title: 'Formation',
      items: [
        {
          school: 'EFREI Paris',
          degree: 'Classe Préparatoire Intégrée',
          period: '2025 - Présent',
          desc: "Formation intensive en informatique, mathématiques et sciences de l'ingénieur.",
        },
        {
          school: 'IBM Professional',
          degree: 'Certificat Data Analyst',
          period: '2025',
          desc: "Certification spécialisée en Python, SQL et analyse statistique des données.",
        },
      ],
    },
    contact: {
      eyebrow: 'Travaillons ensemble',
      title: 'Me contacter',
      sub: "Prêt à transformer une idée en SaaS ?\nDiscutons de ton prochain projet.",
      cta_email: 'Envoyer un e-mail',
      cta_linkedin: 'LinkedIn',
      cta_github: 'GitHub',
    },
    footer: {
      rights: 'Tous droits réservés.',
      built: 'Fait avec React & Framer Motion',
    },
  },
} as const;

export type Lang = keyof typeof translations;
export type Translations = typeof translations[Lang];
