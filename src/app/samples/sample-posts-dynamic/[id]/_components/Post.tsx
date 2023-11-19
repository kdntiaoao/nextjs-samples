'use client'

import { LinkText } from '@/components/LinkText'
import { PageHeading } from '@/components/PageHeading'
import { usePost } from '@/hooks/use-posts'

type Props = {
  id: string
}

export const Post = ({ id }: Props) => {
  const { post } = usePost(id)

  return (
    <div>
      <LinkText href="/samples/sample-posts-dynamic">Back</LinkText>

      <div className="mt-4">
        <p>ID: {post?.id}</p>
        <div className="my-4">
          <PageHeading>{post?.title}</PageHeading>
        </div>
        <p>{post?.body}</p>
      </div>
    </div>
  )
}
