//TODO: Use this interface in the Card component and index page.
export interface Project {
    id: number;
    title: string;
    description: string;
    years?: string[];
    image: {
        imageUrl: string;
        alt: string;
    };
    tags: string[];
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

export const PROJECT_LIST: Record<string, Project> = {
    heldia: {
        id: 0,
        title: "heldia-title",
        description: "heldia-description",
        years: [
            YEARS["2023"],
            YEARS.NOW
        ],
        image: {
            imageUrl: "/images/heldia.png",
            alt: 'heldia-image-alt'
        },
        tags: [
            LANGUAGES.CSHARP,
            FRAMEWORKS.MONOGAME,
            PROJECTS_TYPES.GAMING,
        ],
    },
    portfolio: {
        id: 1,
        title: "portfolio-title",
        description: "portfolio-description",
        years: [
            YEARS["2024"]
        ],
        image: {
            imageUrl: "/images/portfolio.png",
            alt: 'portfolio-image-alt'
        },
        tags: [
            LANGUAGES.JS,
            LANGUAGES.TS,
            FRAMEWORKS.NUXT,
            PROJECTS_TYPES.WEB,
        ],
    },
    stuckwin: {
        id: 2,
        title: "stuckwin-title",
        description: "stuckwin-description",
        years: [
            YEARS["2023"]
        ],
        image: {
            imageUrl: "/images/stuckwin.png",
            alt: "stuckwin-image-alt"
        },
        tags: [
            LANGUAGES.JAVA,
            PROJECTS_TYPES.GAMING,
        ],
    },
    flaskWebsite: {
        id: 3,
        title: "flask-website-title",
        description: "flask-website-description",
        years: [
            YEARS["2023"]
        ],
        image: {
            imageUrl: "/images/flask_ecommerce_website.png",
            alt: 'flask-website-image-alt'
        },
        tags: [
            LANGUAGES.JS,
            LANGUAGES.HTML,
            LANGUAGES.CSS,
            FRAMEWORKS.FLASK,
            PROJECTS_TYPES.WEB,
        ],
    },
    virtualMachine: {
        id: 4,
        title: "vm-title",
        description: "vm-description",
        years: [
            YEARS["2023"]
        ],
        image: {
            imageUrl: "/images/vm.png",
            alt: 'vm-image-alt',
        },
        tags: [
            PROJECTS_TYPES.SYSTEM,
            PROJECTS_TYPES.VIRTUAL_MACHINE,
        ],
    },
    hackatonBelfort2023: {
        id: 5,
        title: "hackaton-title",
        description: "hackaton-description",
        years: [
            YEARS["2023"]
        ],
        image: {
            imageUrl: "/images/hackaton.png",
            alt: 'hackaton-image-alt'
        },
        tags: [
            PROJECTS_TYPES.HACKATON,
            PROJECTS_TYPES.CHALLENGE,
        ],
    },
}
