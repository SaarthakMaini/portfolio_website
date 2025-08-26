'use client'

import React, { useEffect, useState } from 'react'

const query = `
{
  publication(host: "saarthakmaini.hashnode.dev") {
    title
    url
    posts(first: 10) {
      edges {
        node {
          title
          url
          seo {
            description
          }
          coverImage {
            url
          }
        }
      }
    }
  }
}
`

interface PostNode {
  node: {
    title: string
    url: string
    publishedAt: string
    seo: {
      description: string
    }
    coverImage: {
      url: string
    } | null
  }
}

interface PublicationData {
  publication: {
    title: string
    url: string
    posts: {
      edges: PostNode[]
    }
  }
}

const fetchPosts = async (): Promise<PublicationData | null> => {
  try {
    const response = await fetch('https://gql.hashnode.com', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
    })
    const data = await response.json()
    return data.data
  } catch (error) {
    console.error('Error fetching posts:', error)
    return null
  }
}

export default function Blogs() {
  const [posts, setPosts] = useState<PostNode[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPosts().then((data) => {
      if (data?.publication?.posts?.edges) {
        setPosts(data.publication.posts.edges)
      }
      setLoading(false)
    })
  }, [])

  const skeletonCards = Array.from({ length: 6 }).map((_, i) => (
    <div key={i} className="card bg-neutral text-neutral-content shadow-lg animate-pulse h-64" />
  ))

  return (
    <div className="p-6 bg-neutral min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center text-neutral-content">
        {posts.length > 0 ? `Saarthak's Latest Blogs` : 'Loading...'}
      </h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {loading
          ? skeletonCards
          : posts.map((post) => (
              <a
                key={post.node.url}
                href={post.node.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card bg-neutral text-neutral-content shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {post.node.coverImage?.url && (
                  <figure>
                    <img
                      src={post.node.coverImage.url}
                      alt={post.node.title}
                      className="rounded-t-lg"
                      loading="lazy"
                    />
                  </figure>
                )}
                <div className="card-body">
                  <h2 className="card-title text-lg font-bold">{post.node.title}</h2>
                  <p className="text-sm font-semibold text-neutral-content/80 mt-2">
                    {post.node.seo.description}
                  </p>
                </div>
              </a>
            ))}
      </div>
    </div>
  )
}
