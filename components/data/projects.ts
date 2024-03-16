export const projectData = [
    {
        title: 'My Portfolio',
        description: 'Explore my portfolio, my initial project designed for both fun and to assess my skills. It serves as a small but meaningful reflection of my design capabilities and the joy I find in creating engaging experiences',
        technologies: ['Next.js', 'Typescript', 'Scss'],
        githubLink: 'https://github.com/imShuheb/portfolio',
        externalLink: 'https://imshuheb.github.io/portfolio/',
    },
    {
        title: 'LearnNThrive',
        description: 'Developed and managed a learning and course selling platform',
        technologies: ['Next.js', 'Javascript', 'Bootstrap'],
        githubLink: '',
        externalLink: 'https://learnnthrive.com/',
    },
    {
        title: 'SkillDots',
        description: 'Developed a customized web application tailored to the needs of the institution, enhancing their operations and supporting specific functionalities',
        technologies: ['Next.js', 'Javascript', 'Bootstrap'],
        githubLink: '',
        externalLink: 'https://skilldots.skilldeck.net/',
    },
];

export type Project = {
    title: string;
    description: string;
    githubLink: string;
    externalLink: string;
    technologies: string[];
};
