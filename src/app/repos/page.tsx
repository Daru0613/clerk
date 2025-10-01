import React from 'react'
import { Repository } from '@/components/types/repo'
import Link from 'next/link'
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa'

const username = 'Daru0613'

export default async function RepoPage() {
  // 1. SSG: static site generation
  const response = await fetch(`https://api.github.com/users/${username}/repos`)

  // 2. SSR: server-side rendering
  //const response = await fetch(`https://api.github.com/users/${username}/repos`, {cache: 'no-store'})

  // 3. ISR: incremental static generation
  //   const response = await fetch(
  //     `https://api.github.com/users/${username}/repos`,
  //     { next: { revalidate: 60 } }
  //   )

  const repos = await response.json()

  const reposArray = Array.isArray(repos) ? repos : []

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">
        Github Repositories of {username}
      </h2>
      <ul>
        {reposArray.map((repo: Repository) => (
          <li key={repo.id} className="bg-gray-100 m-4 p-4 rounded-md">
            <Link href={`https://github.com/${username}/${repo.name}`}>
              <h3 className="text-xl font-bold">{repo.name}</h3>
              <p>{repo.description}</p>
              <div className="flex justify-between items-center">
                <span className="flex items-center gab-1">
                  <FaStar /> {repo.stargazers_count}
                </span>
                <span className="flex items-center gab-1">
                  <FaCodeBranch /> {repo.forks_count}
                </span>
                <span className="flex items-center gab-1">
                  <FaEye /> {repo.watchers_count}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
