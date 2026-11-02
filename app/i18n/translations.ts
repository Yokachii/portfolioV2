export const locales = ["en", "fr"] as const;

export type Locale = (typeof locales)[number];

export const translations = {
    en: {
        language: "English",
        chooseLanguage: "Choose language",
        profilePortrait: "Portrait of Elliot Deconinck",
        profileDescription: "A creative developer building thoughtful digital experiences.",
        socialLinks: "Social media links",
        navigation: {
            label: "Main navigation",
            projects: "All Projects",
            portfolio: "Portfolio",
            about: "About me",
        },
        home: {
            title: ["SOFTWARE", "ENGINEER"],
            description: "Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products.",
            experience: "Years of experience",
            projects: "Projects completed",
        },
        projectHighlights: {
            title: ["RECENT", "PROJECTS"],
            items: [
                { title: "Framework Picture", description: "A photography portfolio built with Next.js, featuring a responsive design and smooth animations.", image: "/projects/framework/main.png", href: "/projects/framework-picture" },
                { title: "Socket.IO Chess App", description: "A real-time multiplayer chess application built with Socket.IO and Next.js.", image: "/projects/chess/main.png", href: "/projects/chess-game" },
                { title: "3D Engine 2023", description: "A 3D engine built with native HTML, JavaScript, PHP and CSS 3D transforms. One of my first major projects.", image: "/projects/3d-engine/cover.png", href: "/3d/engine2023" },
            ],
        },
        experience: {
            title: ["8+ YEARS OF", "EXPERIENCE"],
            entries: [
                { title: "ESISAR", description: "School of Advanced Industrial & Embedded Systems. Studying embedded systems and industrial computing, with a focus on software development, electronics, and computer architecture.", period: "2025 — NOW" },
                { title: "Samsoe Skole", description: "Exchange student in Denmark, where I learned Danish, explored Danish culture, and experienced its education system.", period: "2021 — 2023" },
                { title: "UI / UX Design Course", description: "Learning interface and user experience design, including wireframing, prototyping, and usability testing.", period: "2023 — 2024" },
                { title: "Web Development Course", description: "Learning web development fundamentals: HTML, CSS, JavaScript, algorithms, and data structures.", period: "2019 — 2023" },
            ],
        },
        tools: {
            title: ["PREMIUM", "TOOLS"],
            descriptions: ["UI library", "Web framework", "JavaScript runtime", "Programming", "Typed JavaScript", "Server-side", "Markup", "Stylesheets", "CSS preprocessor", "Programming", "Programming", "Interface design", "Visual design", "Deployment", "Code editor", "Version control"],
        },
        about: {
            title: ["ABOUT", "ME"],
            lead: "A developer who cares about the details — building interfaces that feel effortless, and software that lasts.",
            introTitle: ["WHO I AM", "& WHAT I BUILD"],
            paragraphs: [
                "I'm Elliot Deconinck, a software engineer based in France, currently studying Embedded Systems and Industrial Computing. I like the space where hardware stubbornness meets software elegance — where a few hundred bytes have to behave as well as a modern web app.",
                "My work moves between two worlds: product-facing interfaces built with React, Next.js and TypeScript, and closer-to-the-metal work in C and Python. I care about the details most people never notice — easing curves, focus states, the millisecond it takes a page to feel alive.",
            ],
            stats: ["Years of experience", "Projects completed", "Languages spoken"],
            journeyTitle: ["MY", "JOURNEY"],
            journey: [
                { title: "ESISAR", place: "School of Advanced Industrial & Embedded Systems", description: "Studying embedded systems and industrial computing, with a focus on software development, electronics, and computer architecture.", period: "2025 — NOW" },
                { title: "Samsoe Skole", place: "Denmark", description: "Exchange student in Denmark, where I became fluent in Danish and discovered a different culture and approach to learning.", period: "2021 — 2023" },
                { title: "UI / UX Design", place: "Coursework", description: "Wireframing, prototyping, and usability testing — learning to design before writing a single line of code.", period: "2023 — 2024" },
                { title: "Web Development", place: "Coursework", description: "The fundamentals: HTML, CSS, and JavaScript, followed by algorithms and data structures. The reason I fell in love with building.", period: "2019 — 2023" },
            ],
            skillsTitle: ["WHAT I", "WORK WITH"],
            skillDescriptions: ["UI library", "Web framework", "JavaScript runtime", "Typed JavaScript", "Programming", "Programming", "Programming", "Server-side", "Markup", "Stylesheets", "Interface design", "Version control"],
        },
        contact: {
            openToWork: "Open to work",
            title: ["LET'S MAKE YOUR VISION", "UNFORGETTABLE"],
        },
        projectIndex: {
            title: ["PROJECT", "JOURNAL"],
            lead: "Building, testing, starting over. A collection of electronics, software, and handmade projects.",
            searchLabel: "Search",
            searchPlaceholder: "A project, a technology...",
            sortLabel: "Sort by",
            newest: "Newest",
            oldest: "Oldest",
            allProjects: "All projects",
            resultSingular: "project",
            resultPlural: "projects",
            empty: "No projects match your search. Try another keyword or category.",
            filterLabel: "Filter projects",
            categoriesLabel: "Filter by category",
        },
        projectDetail: {
            back: "All projects",
            notFound: "Project not found",
        },
    },
    fr: {
        language: "Français",
        chooseLanguage: "Choisir la langue",
        profilePortrait: "Portrait d'Elliot Deconinck",
        profileDescription: "Un développeur créatif qui imagine des expériences numériques réfléchies.",
        socialLinks: "Liens vers les réseaux sociaux",
        navigation: {
            label: "Navigation principale",
            projects: "Tous les projets",
            portfolio: "Portfolio",
            about: "À propos",
        },
        home: {
            title: ["INGÉNIEUR", "LOGICIEL"],
            description: "Passionné par la création d'expériences utilisateur intuitives et captivantes. Je transforme les idées en produits soigneusement conçus.",
            experience: "Années d'expérience",
            projects: "Projets réalisés",
        },
        projectHighlights: {
            title: ["PROJETS", "RÉCENTS"],
            items: [
                { title: "Framework Picture", description: "Un portfolio de photographe réalisé avec Next.js, au design adaptatif et aux animations fluides.", image: "/projects/framework/main.png", href: "/projects/framework-picture" },
                { title: "Jeu d'échecs Socket.IO", description: "Un jeu d'échecs multijoueur en temps réel développé avec Socket.IO et Next.js.", image: "/projects/chess/main.png", href: "/projects/chess-game" },
                { title: "Moteur 3D 2023", description: "Un moteur 3D conçu avec HTML, JavaScript, PHP et les transformations 3D CSS natives. L'un de mes premiers grands projets.", image: "/projects/3d-engine/cover.png", href: "/3d/engine2023" },
            ],
        },
        experience: {
            title: ["8+ ANS", "D'EXPÉRIENCE"],
            entries: [
                { title: "ESISAR", description: "École nationale supérieure en informatique, systèmes avancés et réseaux. Études en systèmes embarqués et informatique industrielle, avec une spécialisation en développement logiciel, électronique et architecture des ordinateurs.", period: "2025 — AUJ." },
                { title: "Samsoe Skole", description: "Échange scolaire au Danemark, où j'ai appris le danois et découvert la culture et le système éducatif danois.", period: "2021 — 2023" },
                { title: "Formation UI / UX", description: "Apprentissage de la conception d'interfaces et d'expériences utilisateur : maquettes, prototypes et tests d'ergonomie.", period: "2023 — 2024" },
                { title: "Formation en développement web", description: "Apprentissage des bases du développement web : HTML, CSS, JavaScript, algorithmes et structures de données.", period: "2019 — 2023" },
            ],
        },
        tools: {
            title: ["MES OUTILS", "PRÉFÉRÉS"],
            descriptions: ["Bibliothèque d'interface", "Framework web", "Environnement JavaScript", "Programmation", "JavaScript typé", "Côté serveur", "Balisage", "Feuilles de style", "Préprocesseur CSS", "Programmation", "Programmation", "Conception d'interfaces", "Création visuelle", "Déploiement", "Éditeur de code", "Gestion de versions"],
        },
        about: {
            title: ["À PROPOS", "DE MOI"],
            lead: "Un développeur attentif aux détails : des interfaces intuitives et des logiciels conçus pour durer.",
            introTitle: ["QUI JE SUIS", "ET CE QUE JE CRÉE"],
            paragraphs: [
                "Je m'appelle Elliot Deconinck, je suis développeur logiciel en France et j'étudie actuellement les systèmes embarqués et l'informatique industrielle. J'aime le point de rencontre entre la rigueur du matériel et l'élégance du logiciel, où quelques centaines d'octets doivent être aussi fiables qu'une application web moderne.",
                "Mon travail navigue entre deux univers : des interfaces produit avec React, Next.js et TypeScript, et des développements plus proches du matériel en C et Python. Je soigne les détails que l'on remarque à peine : les animations, la navigation au clavier et la milliseconde qui rend une page vivante.",
            ],
            stats: ["Années d'expérience", "Projets réalisés", "Langues parlées"],
            journeyTitle: ["MON", "PARCOURS"],
            journey: [
                { title: "ESISAR", place: "École nationale supérieure en informatique, systèmes avancés et réseaux", description: "Études en systèmes embarqués et informatique industrielle, avec une spécialisation en développement logiciel, électronique et architecture des ordinateurs.", period: "2025 — AUJ." },
                { title: "Samsoe Skole", place: "Danemark", description: "Échange scolaire au Danemark, où je suis devenu bilingue en danois et ai découvert une autre culture et approche de l'apprentissage.", period: "2021 — 2023" },
                { title: "Design UI / UX", place: "Formation", description: "Maquettes, prototypage et tests d'ergonomie : apprendre à concevoir avant d'écrire la moindre ligne de code.", period: "2023 — 2024" },
                { title: "Développement web", place: "Formation", description: "Les fondamentaux : HTML, CSS et JavaScript, puis les algorithmes et les structures de données. Le début de ma passion pour la création.", period: "2019 — 2023" },
            ],
            skillsTitle: ["MES", "COMPÉTENCES"],
            skillDescriptions: ["Bibliothèque d'interface", "Framework web", "Environnement JavaScript", "JavaScript typé", "Programmation", "Programmation", "Programmation", "Côté serveur", "Balisage", "Feuilles de style", "Conception d'interfaces", "Gestion de versions"],
        },
        contact: {
            openToWork: "À la recherche d'opportunités",
            title: ["DONNONS VIE À VOTRE VISION", "ENSEMBLE"],
        },
        projectIndex: {
            title: ["CARNET", "DE PROJETS"],
            lead: "Construire, tester, recommencer. Une collection de projets électroniques, logiciels et objets fabriqués à la main.",
            searchLabel: "Rechercher",
            searchPlaceholder: "Un projet, une technologie...",
            sortLabel: "Trier par",
            newest: "Plus récent",
            oldest: "Plus ancien",
            allProjects: "Tous les projets",
            resultSingular: "projet",
            resultPlural: "projets",
            empty: "Aucun projet ne correspond à cette recherche. Essayez un autre mot-clé ou une autre catégorie.",
            filterLabel: "Filtrer les projets",
            categoriesLabel: "Filtrer par catégorie",
        },
        projectDetail: {
            back: "Tous les projets",
            notFound: "Projet introuvable",
        },
    },
} as const satisfies Record<Locale, object>;

const frenchProjectTags: Record<string, string> = {
    electronique: "électronique",
    programmation: "programmation",
    "impression 3D": "impression 3D",
    informatique: "informatique",
    design: "design",
    web: "web",
    simulation: "simulation",
    socket: "Socket",
    chess: "échecs",
    database: "base de données",
    clavier: "clavier",
    AI: "IA",
    "3D": "3D",
};

export function translateProjectTag(locale: Locale, tag: string) {
    return locale === "fr" ? frenchProjectTags[tag] ?? tag : tag;
}
