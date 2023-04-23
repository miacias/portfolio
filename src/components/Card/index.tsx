import React, { ReactElement, useEffect, useState } from 'react';
import styles from './Card.module.css'

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
                return setRepos(repos
                    .filter(repo => !repo.fork) // removes forked repos
                    .sort((a, b) => +new Date(b.created_at) - +new Date(a.created_at)) // sorts newest to oldest
                )
                // return console.log(repos);
            })
    }, []); // empty dependencies means run only once
    return (
        <>   
            <div className='repo-format-container'>
                <div className='repo-box'>
                    {repos.map((repo) => {
                        const background: string = `url(${process.env.PUBLIC_URL}/assets/images/${repo.name}1.png)` ?? `url(${process.env.PUBLIC_URL}/assets/images/scott-carroll-unsplash.png)`;
                        const colors: any = {
                            darkBlue: `rgba(8, 13, 43, .4)`,
                            midBlue: `rgba(14, 56, 129, .6)`,
                            brightBlue: `rgba(72, 221, 213, .4)`,
                            purple: `rgba(70, 40, 132, .2)`,
                            yellow: `rgba(237, 188, 142, .4)`,
                            white: `rgba(72, 221, 213, .4)`,
                            red: `rgba(116, 23, 56, .2)`
                        }
                        // const gradient: string = `linear-gradient(to top right, ${colors.darkBlue}, ${colors.purple}, ${colors.midBlue}, ${colors.brightBlue}, ${colors.yellow}, ${colors.red})`;
                        const gradient: any = {
                            one: `linear-gradient(217deg, ${colors.darkBlue}, ${colors.midBlue} 70.71%)`,
                            two: `linear-gradient(127deg, ${colors.purple}, ${colors.brightBlue} 70.71%)`,
                            three: `linear-gradient(336deg, ${colors.yellow}, ${colors.red} 70.71%)`
                        }
                        return (
                            // card resource https://codepen.io/uiswarup/pen/RBByzW
                            <div className={styles.repoContainer} key={repo.id}>
                                <div className={styles.repoBackgroundImg} style={{ backgroundImage: `${gradient.one}, ${gradient.two}, ${background}`}}>
                                    <div className={styles.repoBox}>
                                        <span className={styles.repoBoxSpan}></span>
                                        <span className={styles.repoBoxSpan}></span>
                                        <span className={styles.repoBoxSpan}></span>
                                        <span className={styles.repoBoxSpan}></span>
                                        <div className={styles.repoContent}>
                                            <h2 className={styles.h2}><a href={repo.homepage}>{repo.name}</a></h2>
                                            <p className='repo-description'>{repo.description}</p>
                                            <p className='repo-github'><a href={repo.html_url}>my code here</a></p>
                                            <p className={styles.repoDate}>Started {formatDate(repo.created_at)}</p>
                                            <p className={styles.repoTopics}>{repo.topics.length ? "Topics:" : ""}
                                                {repo.topics.map((topic: string) => {
                                                    return <span key={topic}> {topic} |</span>
                                                })}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
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