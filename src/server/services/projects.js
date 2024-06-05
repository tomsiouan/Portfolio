export const LANGUAGES = {
    C: 'C',
    CPP: 'C++',
    CSharp: 'C#',
    Java: 'Java',
    JS: 'JavaScript',
    TS: 'TypeScript',
};

export const FRAMEWORKS = {
    Vue: 'Vue.JS',
    React: 'React',
    ReactNative: 'React Native',
    Monogame: 'Monogame',
    DotNet: '.Net Framework',
};

export const PROJECTS_TYPES = {
    Gaming: 'Gaming',
    Web: 'Web',
};

export const PROJECT_LIST = {
    heldia: {
        imageUrl: "https://blog.cellenza.com/wp-content/uploads/2015/05/React-JS.png",
        title: "Heldia",
        description: "Projet consistant en la réalisation d'un jeux vidéo RPG 2D.",
        tags: [
            LANGUAGES.CSharp,
            FRAMEWORKS.Monogame,
            PROJECTS_TYPES.Gaming
        ]
    },
    reactWebsite: {
        imageUrl: "https://blog.cellenza.com/wp-content/uploads/2015/05/React-JS.png",
        title: "React website",
        description: "Cours projet consistant en la réalisation d'un site web avec react.",
        tags: [
            LANGUAGES.CPP,
            FRAMEWORKS.React,
            PROJECTS_TYPES.Web
        ]
    },
}
