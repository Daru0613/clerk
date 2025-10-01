import React from 'react'
import Link from 'next/link'
import { Suspense } from 'react'
import Repo from '@/components/Repo'
import RepoDirs from '@/components/RepoDirs'

export default function RepoPage({ params }: { params: { name: string } }) {
  return (
    <div className="flex flex-col justify-start items-start max-w-lg">
      <Link
        href="/repos"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py2 px-4 rounded mb-4"
      >
        Back to Repositories
      </Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Repo name={params.name} />
      </Suspense>
      <Suspense fallback={<div>Loading... directories...</div>}>
        <RepoDirs name={params.name} />
      </Suspense>
    </div>
  )
}
