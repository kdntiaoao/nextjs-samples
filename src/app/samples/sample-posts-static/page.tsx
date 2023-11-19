import type { Post } from '@/types'
import { PageWrapper } from '@/components/PageWrapper'
import { Posts } from './_components/Posts'

const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  if (!res.ok) {
    throw new Error('Failed to fetch.')
  }
  const posts: Post[] = await res.json()
  return posts
}

export default async function Page() {
  const posts = await fetchPosts()

  return (
    <PageWrapper title="Sample Posts">
      <Posts posts={posts} />
    </PageWrapper>
  )
}
