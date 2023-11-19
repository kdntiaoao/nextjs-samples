'use client'

import { LinkText } from '@/components/LinkText'
import { usePosts } from '@/hooks/use-posts'

export const Posts = () => {
  const { posts } = usePosts()

  return (
    <ul>
      {posts &&
        posts.map(({ id, title }) => (
          <li key={id}>
            <LinkText href={`/samples/sample-posts-dynamic/${id}`}>{title}</LinkText>
          </li>
        ))}
    </ul>
  )
}
