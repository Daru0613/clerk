import React from 'react'
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa'

interface RepoProps {
  name: string
}
export default async function Repo({ name }: RepoProps) {
  const username = 'Daru0613'
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const response = await fetch(
    `https://api.github.com/repos/${username}/${name}`
  )
  const repo = await response.json()
  console.log(repo)
  return (
    <div>
      <h3 className="text-xl font-bold">{repo.name}</h3>
      <p>{repo.description}</p>
      <div className="flex justify-between items-center mb-4">
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
    </div>
  )
}
