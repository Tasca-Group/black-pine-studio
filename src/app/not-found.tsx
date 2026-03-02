import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center py-24">
      <Container className="text-center">
        <h1 className="text-6xl font-bold text-pine sm:text-8xl">404</h1>
        <h2 className="mt-4 text-2xl font-bold text-near-black sm:text-3xl">
          Seite nicht gefunden
        </h2>
        <p className="mt-4 text-lg text-dark-gray">
          Die angeforderte Seite existiert leider nicht oder wurde verschoben.
        </p>
        <div className="mt-8">
          <Button href="/">Zurück zur Startseite</Button>
        </div>
      </Container>
    </section>
  )
}
