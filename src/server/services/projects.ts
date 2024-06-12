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
    QT: 'QT',
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
        videoPath: "/videos/hls/heldia.m3u8",
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
        videoPath: '/videos/hls/portfolio.m3u8',
        tags: [
            LANGUAGES.JS,
            LANGUAGES.TS,
            FRAMEWORKS.NUXT,
            PROJECTS_TYPES.WEB,
        ],
    },
    HabitTracker: {
        id: 2,
        title: "habit-tracker-title",
        description: "habit-tracker-description",
        content: "habit-tracker-content",
        years: [
            YEARS["2024"]
        ],
        image: {
            imageUrl: "/images/habitsTracker.png",
            alt: 'habit-tracker-image-alt'
        },
        tags: [
            LANGUAGES.SWIFT,
            PROJECTS_TYPES.MOBILE,
        ],
        githubLink: 'https://github.com/tomsnx/HabitsTracker_IOS'
    },
    MediaPlayer: {
        id: 3,
        title: "mediaplayer-title",
        description: "mediaplayer-description",
        content: "mediaplayer-content",
        years: [
            YEARS["2024"]
        ],
        image: {
            imageUrl: "/images/qt-mediaplayer/logo.png",
            alt: 'mediaplayer-image-alt'
        },
        tags: [
            LANGUAGES.CPP,
            FRAMEWORKS.QT,
            PROJECTS_TYPES.SYSTEM,
        ],
        githubLink: 'https://github.com/tomsnx/QT_MediaPlayer'
    },
    EZCON: {
        id: 4,
        title: "ezcon-title",
        description: "ezcon-description",
        content: "ezcon-content",
        years: [
            YEARS["2024"]
        ],
        image: {
            imageUrl: "/images/ezcon/home.png",
            alt: 'ezcon-image-alt'
        },
        tags: [
            LANGUAGES.JS,
            LANGUAGES.HTML,
            LANGUAGES.CSS,
            FRAMEWORKS.VUE,
            PROJECTS_TYPES.WEB,
        ],
        githubLink: 'https://github.com/SunoWhere/Chokbar-Project'
    },
}
