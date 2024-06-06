//TODO: Use this interface in the Card component and index page.
export interface Project {
    image: {
        imageUrl: string;
        alt: string;
    };
    title: string;
    description: string;
    years?: string[];
    tags: string[];
    route: string;
}

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
    NOW: 'today',
};

//TODO: Remplacer les champs description et titre par le nom des objets dans les fichiers de langues
export const PROJECT_LIST: Record<string, Project> = {
    heldia: {
        image: {
            imageUrl: "/images/heldia.png",
            alt: 'heldia-image-alt'
        },
        title: "heldia-title",
        description: "heldia-description",
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
            imageUrl: "/images/portfolio.png",
            alt: 'portfolio-image-alt'
        },
        title: "portfolio-title",
        description: "portfolio-description",
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
    stuckwin: {
        image: {
            imageUrl: "/images/stuckwin.png",
            alt: "stuckwin-image-alt"
        },
        title: "stuckwin-title",
        description: "stuckwin-description",
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
            imageUrl: "/images/flask_ecommerce_website.png",
            alt: 'flask-website-image-alt'
        },
        title: "flask-website-title",
        description: "flask-website-description",
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
            imageUrl: "/images/vm.png",
            alt: 'vm-image-alt',
        },
        title: "vm-title",
        description: "vm-description",
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
            imageUrl: "/images/hackaton.png",
            alt: 'hackaton-image-alt'
        },
        title: "hackaton-title",
        description: "hackaton-description",
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
