import { PageWrapper } from '@/components/PageWrapper'
import { Post } from './_components/Post'

export default function Page({ params: { id } }: { params: { id: string } }) {
  return (
    <PageWrapper>
      <Post id={id} />
    </PageWrapper>
  )
}
