// import './Card.css';
import React, { ReactElement, useEffect, useState } from 'react';
import styles from './Card.module.css'
// import img from './logo192.png'
// console.log(img)

// custom type
type GitHubRepo = {
    id: number;
    node_id: string;
    name: string;
    description: string;
    full_name: string;
    html_url: string;
    homepage: string;
    topics: any;
    created_at: Date;
    fork: boolean;
}

// generic type T receives a string and returns a promise
async function fetchGithub<T>(url: string): Promise<T> {
    const response = await fetch(url);
    return response.json();
}

// formats date to Month Day, Year format
const formatDate = (date: Date): string => {
    return (`${new Date(date).toLocaleString('default', { month: 'short' })} ${new Date(date).getDate()}, ${new Date(date).getFullYear()}`)
}

export default function Card() {
    const [repos, setRepos] = useState<GitHubRepo[]>([]);
    // retrieve GitHub API
    useEffect(() => {
        fetchGithub<GitHubRepo[]>('https://api.github.com/users/miacias/repos?type=owner')
            .then(repos => {
                setRepos(repos
                    .filter(repo => !repo.fork) // removes forked repos
                    .sort((a, b) => +new Date(b.created_at) - +new Date(a.created_at)) // sorts newest to oldest
                )
                return console.log(repos);
            })
    }, []); // empty dependencies means run only once
    // returns TSX to webpage
    return (
        <>
            <h2>My Projects</h2>
            <div className='repo-format-container'>
                <div className='repo-box'>
                    {repos.map((repo) => {
                        const background: string = `url(${process.env.PUBLIC_URL}/assets/images/${repo.name}.png)` ?? `url(${process.env.PUBLIC_URL}/assets/images/scott-carroll-unsplash.png)`;
                        return (
                            // card resource https://codepen.io/uiswarup/pen/RBByzW
                            <canvas id="canvas-image-blending" key={repo.name} style={{
                                position: "absolute", 
                                display: "block",
                                width: "100%",
                                height: "100%",
                                top: 0,
                                right: 0,
                                bottom: 0,
                                left: 0
                                }}>
                                <div className={styles.repoContainer} key={repo.id}>
                                    <div className={styles.repoBackgroundImg} style={{ backgroundImage: background }}>
                                        <div className={styles.repoBox}>
                                            <span className={styles.repoBoxSpan}></span>
                                            <span className={styles.repoBoxSpan}></span>
                                            <span className={styles.repoBoxSpan}></span>
                                            <span className={styles.repoBoxSpan}></span>
                                            <div className={styles.repoContent}>
                                                <h2 className={styles.h2}><a href={repo.homepage}>{repo.name}</a></h2>
                                                <p className='repo-description'>{repo.description}</p>
                                                <p className='repo-github'><a href={repo.html_url}>my code here</a></p>
                                                <p className='repo-date'>Started {formatDate(repo.created_at)}</p>
                                                <p className='repo-topics'>{repo.topics.length ? "Topics:" : ""}
                                                    {repo.topics.map((topic: string) => {
                                                        return <span key={topic}> {topic} |</span>
                                                    })}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </canvas>
                        )
                    })}
                </div>
            </div>
            <script src="./granim.min.js"></script>
        </>
    )
    // ORIGINAL CARD WITHOUT AUTO GITHUB API
    // return (
    //     <div className={styles.repoContainer}>
    //         <div className={styles.repoBackgroundImg}>
    //             <div className={styles.repoBox}>
    //                 <span className={styles.repoBoxSpan}></span>
    //                 <span className={styles.repoBoxSpan}></span>
    //                 <span className={styles.repoBoxSpan}></span>
    //                 <span className={styles.repoBoxSpan}></span>
    //                 <div className={styles.repoContent}>
    //                     <h2 className={styles.h2}><a href={props.homepage}>Name: {props.name}</a></h2>
    //                     <p className='repo-description'>Description: {props.description}</p>
    //                     <p className='repo-date'><a href={props.html_url}>Started: {props.date}</a></p>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // )
}