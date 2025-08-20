import { HomeLayout } from 'app/ui'
import ErrorBoundary from 'app/ui/components/ErrorBoundary'

export default function Home() {
  return (
    <main className='min-h-screen relative bg-brand-purple'>
      <ErrorBoundary>
        <HomeLayout />
      </ErrorBoundary>
    </main>
  )
}
