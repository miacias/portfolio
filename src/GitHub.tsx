import React, { ReactElement, useEffect, useState } from 'react';
import './GitHub.css';

// custom type
type GitHubRepo = {
    id: number;
    node_id: string;
    name: string;
    description: string;
    full_name: string;
    html_url: string;
    homepage: string;
    created_at: Date;
    fork: boolean;
}

// generic type T receives a string and returns a promise
async function fetchGithub<T>(url: string): Promise<T> {
    const response = await fetch(url);
    return response.json();
}

// formats date to Month Day, Year format
const formatDate = (date: Date):string => {
    return (`${new Date(date).toLocaleString('default', { month: 'short' })} ${new Date(date).getDate()}, ${new Date(date).getFullYear()}`)
}

// formats GitHub Pages URL
const formatPageUrl = (repoUrl: string):string => {
    let username: string = repoUrl.split('/')[3];
    let repoName: string = repoUrl.split('/')[4];
    return `https://${username}.github.io/${repoName}`
}

// sends github repositories to React as JSX cards
export default function Repos() {
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
    },[]); // empty dependencies means run only once
    return (
        <>
            <h2>My Projects</h2>
            {/* basic card version: https://codepen.io/wikyware-net/pen/dyKPRxQ */}
            <div className='repo-format-container'>
                <div className='repo-box'>
                    {repos.map((repo) => {
                        // MODIFIED CARD
                        return (
                            /* 
                            - consider adding a counter that allows users to "like" and shows a heart with a number
                            - consider adding a "copy" icon that puts the link to the repo in the clipboard
                            */
                            <div className="repo-list-item" key={repo.id}>
                                <a href='/' className="repo-link">
                                    <div className="repo-background"></div>
                                    <a href={repo.html_url}>
                                        <div className="repo-title">{repo.name}</div>
                                    </a>
                                    <a href={formatPageUrl(repo.html_url)}>
                                        <div className='deployed-link'>{repo.homepage}</div>
                                    </a>
                                    <div className='repo-description'>{repo.description}</div>
                                    <div className='repo-date-box'>
                                        <div className="repo-date-box">
                                            <span className="repo-date">{formatDate(repo.created_at)}</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            )
                    })}
                </div>
            </div>
        </>
    )
}