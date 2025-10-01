import React from 'react'
import { GithubContent } from '@/components/types/github'
import Link from 'next/link'

interface RepoProps {
  name: string
}

export default async function RepoDirs({ name }: RepoProps) {
  const username = 'Daru0613'
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const response = await fetch(
    `https://api.github.com/repos/${username}/${name}/contents`,
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`,
      },
    }
  )
  const contents: GithubContent[] = await response.json()

  const dirs = contents.filter((content) => content.type === 'dir')

  return (
    <div>
      <h3 className="text-xl font-bold">Directories</h3>
      <ul>
        {dirs.map((dir) => (
          <li key={dir.path}>
            <Link
              href={`https://github.com/${username}/${name}/tree/master/${dir.path}`}
            >
              {dir.path}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
