import { Sparkles, Award, Heart } from "lucide-react"

export function About() {
  return (
    <section id="o-nas" className="py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6">O nas</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Jesteśmy kliniką medycyny estetycznej, która łączy najnowsze technologie z indywidualnym podejściem do
              każdego pacjenta.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="font-serif text-3xl font-semibold text-foreground">Eksperci w dziedzinie piękna</h3>
              <p className="text-muted-foreground leading-relaxed">
                Nasz zespół składa się z doświadczonych specjalistów z zakresu dermatologii, medycyny estetycznej i
                kosmetologii. Każdy zabieg wykonujemy z najwyższą starannością, wykorzystując najnowocześniejszy sprzęt
                medyczny.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Wierzymy, że prawdziwe piękno to połączenie zdrowia, naturalności i pewności siebie. Dlatego nasze
                zabiegi są zawsze dostosowane do indywidualnych potrzeb i oczekiwań każdego pacjenta.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img src="/professional-beauty-clinic-interior-with-modern-eq.jpg" alt="Klinika" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Features */}
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-serif text-xl font-semibold">Nowoczesne technologie</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Wykorzystujemy najnowszy sprzęt medyczny i sprawdzone metody
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-serif text-xl font-semibold">Certyfikowani specjaliści</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Nasz zespół posiada międzynarodowe certyfikaty i wieloletnie doświadczenie
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-serif text-xl font-semibold">Indywidualne podejście</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Każdy zabieg dostosowujemy do Twoich potrzeb i oczekiwań
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
