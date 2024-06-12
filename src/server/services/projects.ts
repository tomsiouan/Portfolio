//TODO: Use this interface in the Card component and index page.
export interface Project {
    id: number;
    title: string;
    description: string;
    content: string;
    years?: string[];
    image: {
        imageUrl: string;
        alt: string;
    };
    videoPath?: string;
    tags: string[];
    githubLink?: string;
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
    SWIFT: 'Swift',
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
    MOBILE: 'Mobile',
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
        content: "heldia-content",
        years: [
            YEARS["2023"],
            YEARS.NOW
        ],
        image: {
            imageUrl: "/images/heldia.png",
            alt: 'heldia-image-alt'
        },
        videoPath: "/videos/heldia.mp4",
        tags: [
            LANGUAGES.CSHARP,
            FRAMEWORKS.MONOGAME,
            PROJECTS_TYPES.GAMING,
        ],
        githubLink: "https://github.com/tomsnx/Heldia",
    },
    portfolio: {
        id: 1,
        title: "portfolio-title",
        description: "portfolio-description",
        content: 'portfolio-content',
        years: [
            YEARS["2024"]
        ],
        image: {
            imageUrl: "/images/portfolio.png",
            alt: 'portfolio-image-alt'
        },
        videoPath: '/videos/portfolio.mov',
        tags: [
            LANGUAGES.JS,
            LANGUAGES.TS,
            FRAMEWORKS.NUXT,
            PROJECTS_TYPES.WEB,
        ],
    },
    HabitTracker: {
        id: 5,
        title: "habit-tracker-title",
        description: "habit-tracker-description",
        content: "habit-tracker-content",
        years: [
            YEARS["2024"]
        ],
        image: {
            imageUrl: "/images/habitsTracker.png",
            alt: 'hackaton-image-alt'
        },
        tags: [
            LANGUAGES.SWIFT,
            PROJECTS_TYPES.MOBILE,
        ],
        githubLink: 'https://github.com/tomsnx/HabitsTracker_IOS'
    },
}
