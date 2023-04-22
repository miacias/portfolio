import styles from "./Technologies.module.css";

interface Skillset {
    name: string;
    devicon: string;
}

const langFrameworks: Skillset[] = [
    {
        name: 'HTML',
        devicon: "devicon-html5-plain"
    },
    {
        name: 'bootstrap',
        devicon: "devicon-bootstrap-plain"
    },
    {
        name: 'CSS',
        devicon: "devicon-css3-plain"
    },
    {
        name: 'JavaScript',
        devicon: "devicon-javascript-plain"
    },
    {
        name: 'TypeScript',
        devicon: "devicon-typescript-plain"
    },
    {
        name: 'jQuery',
        devicon: "devicon-jquery-plain"
    },
    {
        name: 'GraphQL',
        devicon: "devicon-graphql-plain"
    },
    {
        name: 'Handlebars JS',
        devicon: "devicon-handlebars-plain"
    },
    {
        name: 'Markdown',
        devicon: "devicon-markdown-original"
    },
    {
        name: 'MongoDB',
        devicon: "devicon-mongodb-plain"
    },
    {
        name: 'MySQL',
        devicon: "devicon-mysql-plain"
    },
    {
        name: 'React',
        devicon: "devicon-react-original"
    }
]

const tools: Skillset[] = [
    {
        name: 'VS Code',
        devicon: "devicon-vscode-plain"
    },
    {
        name: 'Express',
        devicon: "devicon-express-original"
    },
    {
        name: 'Git',
        devicon: "devicon-git-plain"
    },
    {
        name: 'GitHub',
        devicon: "devicon-github-original"
    },
    {
        name: 'Heroku',
        devicon: "devicon-heroku-plain"
    },
    {
        name: 'Node JS',
        devicon: "devicon-nodejs-plain"
    },
    {
        name: 'npm',
        devicon: "devicon-npm-original-wordmark"
    },
    {
        name: 'Photoshop',
        devicon: "devicon-photoshop-line"
    },
    {
        name: 'Sequelize',
        devicon: "devicon-sequelize-plain"
    },
]


export default function Tech() {
    return (
        <>
            <section className='technologies'>
                <h2 id='technologies'>Technologies</h2>
                {langFrameworks.map((tech) => {
                    return (
                        <div key={tech.name}>
                            <h3>{tech.name}</h3>
                            <i className={`${tech.devicon} ${styles.svg}`}></i>
                        </div>
                    )
                })}
                <h2>Tools</h2>
                {tools.map((tech) => {
                    return (
                        <div key={tech.name}>
                            <h3>{tech.name}</h3>
                            <i className={`${tech.devicon} ${styles.svg}`}></i>
                        </div>
                    )
                })}
            </section>
        </>
    )
}