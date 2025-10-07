import { Card, CardContent } from "@/components/ui/card"
import { Zap, Sparkles, Syringe, Stethoscope } from "lucide-react"

const services = [
  {
    icon: Zap,
    title: "Depilacja laserowa",
    description:
      "Trwałe usuwanie owłosienia z wykorzystaniem najnowszej technologii laserowej. Bezpieczne i skuteczne zabiegi dla każdego typu skóry.",
    treatments: ["Depilacja twarzy", "Depilacja ciała", "Depilacja bikini", "Depilacja nóg i rąk"],
  },
  {
    icon: Sparkles,
    title: "Kosmetologia",
    description: "Profesjonalne zabiegi pielęgnacyjne i odmładzające. Przywróć skórze zdrowy wygląd i naturalny blask.",
    treatments: ["Oczyszczanie wodorowe", "Mezoterapia igłowa", "Peelingi chemiczne", "Zabiegi anti-aging"],
  },
  {
    icon: Syringe,
    title: "Medycyna estetyczna",
    description:
      "Nieinwazyjne zabiegi medycyny estetycznej wykonywane przez doświadczonych lekarzy. Naturalne efekty i bezpieczeństwo.",
    treatments: ["Botox", "Wypełniacze kwasem hialuronowym", "Mezoterapia igłowa", "Stymulacja tkankowa"],
  },
  {
    icon: Stethoscope,
    title: "Dermatologia",
    description:
      "Kompleksowa diagnostyka i leczenie schorzeń skóry. Profesjonalna opieka dermatologiczna na najwyższym poziomie.",
    treatments: ["Konsultacje dermatologiczne", "Leczenie trądziku", "Usuwanie zmian skórnych", "Dermatoskopia"],
  },
]

export function Services() {
  return (
    <section id="zabiegi" className="py-24 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6">Nasze zabiegi</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Oferujemy szeroki zakres zabiegów z zakresu medycyny estetycznej, kosmetologii i dermatologii
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card
                  key={index}
                  className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">{service.title}</h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                    <div className="space-y-2">
                      {service.treatments.map((treatment, idx) => (
                        <div key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                          {treatment}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
