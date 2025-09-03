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
    <div key={i} className="card bg-neutral text-neutral-content shadow-lg animate-pulse h-48 sm:h-56 lg:h-64" />
  ))

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-neutral">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-center text-neutral-content">
        {posts.length > 0 ? `Saarthak's Latest Blogs` : 'Loading...'}
      </h1>
      <div className="grid gap-4 sm:gap-6 md:gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {loading
          ? skeletonCards
          : posts.map((post) => (
              <a
                key={post.node.url}
                href={post.node.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card bg-neutral text-neutral-content shadow-lg hover:shadow-xl transition-shadow duration-300 
                         hover:scale-[1.02] transition-transform duration-200"
              >
                {post.node.coverImage?.url && (
                  <figure>
                    <img
                      src={post.node.coverImage.url}
                      alt={post.node.title}
                      className="rounded-t-lg w-full h-32 sm:h-40 lg:h-48 object-cover"
                      loading="lazy"
                    />
                  </figure>
                )}
                <div className="card-body p-4 sm:p-6">
                  <h2 className="card-title text-base sm:text-lg lg:text-xl font-bold line-clamp-2">{post.node.title}</h2>
                  <p className="text-xs sm:text-sm lg:text-base font-semibold text-neutral-content/80 mt-2 line-clamp-3">
                    {post.node.seo.description}
                  </p>
                </div>
              </a>
            ))}
      </div>
    </div>
  )
}
