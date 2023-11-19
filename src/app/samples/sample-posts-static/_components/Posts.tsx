import type { Post } from '@/types'
import { LinkText } from '@/components/LinkText'

type Props = {
  posts: Post[]
}

export const Posts = ({ posts }: Props) => {
  return (
    <ul>
      {posts &&
        posts.map(({ id, title }) => (
          <li key={id}>
            <LinkText href={`/samples/sample-posts-static/${id}`}>{title}</LinkText>
          </li>
        ))}
    </ul>
  )
}
