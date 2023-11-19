import type { Post as PostType } from '@/types'
import { PageWrapper } from '@/components/PageWrapper'
import { Post } from './_components/Post'

const fetchPost = async (id: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  if (!res.ok) {
    throw new Error('Failed to fetch.')
  }
  const post: PostType = await res.json()
  return post
}

export default async function Page({ params: { id } }: { params: { id: string } }) {
  const post = await fetchPost(id)

  return (
    <PageWrapper>
      <Post post={post} />
    </PageWrapper>
  )
}
