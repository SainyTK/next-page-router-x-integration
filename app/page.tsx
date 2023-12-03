import TwitterLogin from '@/components/TwitterLogin'
import TwitterPost from '@/components/TwitterPost'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <TwitterLogin />
      <TwitterPost />
    </main>
  )
}
