export const projectData = [
    {
        title: 'My Portfolio',
        description: 'Explore my portfolio, my initial project designed for both fun and to assess my skills. It serves as a small but meaningful reflection of my design capabilities and the joy I find in creating engaging experiences',
        technologies: ['Next.js', 'Typescript', 'Scss'],
        githubLink: 'https://github.com/imShuheb/portfolio',
        externalLink: 'https://imshuheb.github.io/portfolio/',
    },
];

export type Project = {
    title: string;
    description: string;
    githubLink: string;
    externalLink: string;
    technologies: string[];
};
