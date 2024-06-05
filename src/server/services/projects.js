export const LANGUAGES = {
    C: 'C',
    CPP: 'C++',
    CSHARP: 'CSharp',
    JAVA: 'Java',
    JS: 'JavaScript',
    TS: 'TypeScript',
    HTML: 'HTML',
    CSS: 'CSS',
};

export const FRAMEWORKS = {
    VUE: 'Vue.JS',
    NUXT: 'Nuxt.JS',
    FLASK: 'Flask',
    REACT: 'React',
    REACT_NATIVE: 'React Native',
    MONOGAME: 'Monogame',
    DOTNET: '.Net Framework',
};

export const PROJECTS_TYPES = {
    GAMING: 'Gaming',
    WEB: 'Web',
    SYSTEM: 'System',
    VIRTUAL_MACHINE: 'VM',
    CHALLENGE: 'Challenge',
    HACKATON: 'Hackaton',
};

export const YEARS = {
    2024: '2024',
    2023: '2023',
    2022: '2022',
    NOW: 'Now',
};

//TODO: Remplacer les champs description et titre par le nom des objets dans les fichiers de langues
export const PROJECT_LIST = {
    heldia: {
        image: {
            imageUrl: "https://blog.cellenza.com/wp-content/uploads/2015/05/React-JS.png",
            alt: 'image du jeux intitulé Heldia'
        },
        title: "Heldia",
        description: "Projet consistant en la réalisation d'un jeux vidéo RPG 2D.",
        years: [
            YEARS["2023"],
            YEARS.NOW
        ],
        tags: [
            LANGUAGES.CSHARP,
            FRAMEWORKS.MONOGAME,
            PROJECTS_TYPES.GAMING,
        ],
        route: "/portfolio/project/personnal/heldia"
    },
    portfolio: {
        image: {
            imageUrl: "https://blog.cellenza.com/wp-content/uploads/2015/05/React-JS.png",
            alt: 'image du portfolio (site actuel)'
        },
        title: "Portfolio",
        description: "Site sur lequel vous êtes actuellement.",
        years: [
            YEARS["2024"]
        ],
        tags: [
            LANGUAGES.JS,
            LANGUAGES.TS,
            FRAMEWORKS.NUXT,
            PROJECTS_TYPES.WEB,
        ],
        route: "/portfolio/project/personnal/portfolio"
    },
    consoleJavaGame: {
        image: {
            imageUrl: "https://blog.cellenza.com/wp-content/uploads/2015/05/React-JS.png",
            alt: "image du jeux console en java"
        },
        title: "Jeux console en java",
        description: "Un jeux développé dans le cadre d'un projet tuteuré en première année.",
        years: [
            YEARS["2023"]
        ],
        tags: [
            LANGUAGES.JAVA,
            PROJECTS_TYPES.GAMING,
        ],
        route: "/portfolio/project/sae/console-java-game"
    },
    flaskWebsite: {
        image: {
            imageUrl: "https://blog.cellenza.com/wp-content/uploads/2015/05/React-JS.png",
            alt: 'image du site de e-commerce codé avec flask'
        },
        title: "Site de e-commerce",
        description: "Un site de e-commerce développé cadre d'un projet tuteuré en première année.",
        years: [
            YEARS["2023"]
        ],
        tags: [
            LANGUAGES.JS,
            LANGUAGES.HTML,
            LANGUAGES.CSS,
            FRAMEWORKS.FLASK,
            PROJECTS_TYPES.WEB,
        ],
        route: "/portfolio/project/sae/flask-website"
    },
    virtualMachine: {
        image: {
            imageUrl: "https://blog.cellenza.com/wp-content/uploads/2015/05/React-JS.png",
            alt: 'image de la virtual machine',
        },
        title: "Machine virtuelle",
        description: "Machine virtuelle créée dans le cadre d'un projet tuteuré.",
        years: [
            YEARS["2023"]
        ],
        tags: [
            PROJECTS_TYPES.SYSTEM,
            PROJECTS_TYPES.VIRTUAL_MACHINE,
        ],
        route: "/portfolio/project/sae/virtual-machine"
    },
    hackatonBelfort2023: {
        image: {
            imageUrl: "https://blog.cellenza.com/wp-content/uploads/2015/05/React-JS.png",
            alt: 'image du hackaton de belfort 2023'
        },
        title: "Hackaton Belfort 2023",
        description: "Résolution de problèmes.",
        years: [
            YEARS["2023"]
        ],
        tags: [
            PROJECTS_TYPES.HACKATON,
            PROJECTS_TYPES.CHALLENGE,
        ],
        route: "/portfolio/project/sae/virtual-machine"
    },
}
