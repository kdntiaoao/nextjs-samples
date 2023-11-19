import type { Post as PostType } from '@/types'
import { LinkText } from '@/components/LinkText'
import { PageHeading } from '@/components/PageHeading'

type Props = {
  post: PostType
}

export const Post = ({ post }: Props) => {
  return (
    <div>
      <LinkText href="/samples/sample-posts-static">Back</LinkText>

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
