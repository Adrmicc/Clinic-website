import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const pricingCategories = [
  {
    category: "Depilacja laserowa",
    services: [
      { name: "Barki ", price: "od 300 zł" },
      { name: "Pachy", price: "250 zł" },
      { name: "Bikini brazylijskie", price: "500 zł" },
      { name: "Cała twarz", price: "350 zł" },
      { name: "Uda", price: "500 zł" },
    ],
  },
  {
    category: "Kosmetologia",
    services: [
      { name: "Oczyszczanie wodorowe", price: "230 zł" },
      { name: "Konsultacja kosmetologiczna", price: "100 zł" },
      { name: "Peeling chemiczny", price: "230 zł" },
      { name: "Zabiegi relaksacyjne", price: "250 zł" },
      { name: "Oczyszczanie manualne", price: "250 zł" },
    ],
  },
  {
    category: "Medycyna estetyczna",
    services: [
      { name: "Botox - 1 obszar", price: "550 zł" },
      { name: "Kwas hialuronowy - (1 ampułka)", price: "1100 zł" },
      { name: "Jalupro Classic", price: "900 zł" },
      { name: "Lumi Eyes", price: "600 zł" },
      { name: "RRS Eyes", price: "350 zł" },
    ],
  },
  {
    category: "Dermatologia",
    services: [
      { name: "Konsultacja dermatologiczna", price: "250 zł" },
      { name: "Dermatoskopia", price: "200 zł" },
      { name: "Usuwanie znamion", price: "od 300 zł" },
      { name: "Leczenie trądziku", price: "od 400 zł" },
      { name: "Kriochirurgia", price: "od 150 zł" },
    ],
  },
]

export function Pricing() {
  return (
    <section id="cennik" className="py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6">Cennik</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Transparentne ceny i profesjonalna obsługa. Pierwsza konsultacja zawsze bezpłatna.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {pricingCategories.map((category, index) => (
              <Card key={index} className="border-2">
                <CardHeader className="bg-primary/5 border-b-2 border-border">
                  <CardTitle className="font-serif text-2xl text-foreground">{category.category}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {category.services.map((service, idx) => (
                      <div
                        key={idx}
                        className="flex justify-between items-center py-3 border-b border-border last:border-0"
                      >
                        <span className="text-foreground">{service.name}</span>
                        <span className="font-semibold text-primary">{service.price}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-lg p-8">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
              Nie znalazłeś interesującego Cię zabiegu?
            </h3>
            <p className="text-muted-foreground mb-6">
              Skontaktuj się z nami, aby uzyskać więcej informacji o naszej ofercie
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Skontaktuj się z nami
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
