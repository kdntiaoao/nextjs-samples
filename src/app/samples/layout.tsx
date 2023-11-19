import { LinkText } from '@/components/LinkText'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="p-4">
        <LinkText href="/">TOPへ</LinkText>
      </div>
      {children}
    </>
  )
}
