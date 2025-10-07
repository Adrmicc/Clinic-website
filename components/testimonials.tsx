import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Jagoda K.",
    treatment: "Depilacja laserowa",
    rating: 5,
    text:"Kompetentny i pomocny personel, świetne sprzęty (laser, który nie boli!) i zabiegi oraz cudowna atmosfera. Bardzo polecam ❤️"  },
  {
    name: "Magdalena Nowak",
    treatment: "Medycyna estetyczna",
    rating: 5,
    text: "Pani doktor wykonała zabieg wypełniania ust z niezwykłą precyzją. Efekt jest naturalny i dokładnie taki, jakiego oczekiwałam. Czuję się piękniejsza i pewniejsza siebie.",
  },
  {
    name: "Katarzyna Wiśniewska",
    treatment: "Kosmetologia",
    rating: 5,
    text: "Zabiegi kosmetologiczne w tej klinice to czysta przyjemność. Atmosfera relaksu, profesjonalizm i widoczne efekty. Moja skóra nigdy nie wyglądała lepiej!",
  },
  {
    name: "Joanna Lewandowska",
    treatment: "Dermatologia",
    rating: 5,
    text: "Kompleksowa opieka dermatologiczna na najwyższym poziomie. Pani doktor dokładnie zbadała moją skórę i zaproponowała skuteczne leczenie. Jestem bardzo zadowolona.",
  },
]

export function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6">Opinie naszych klientów</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Zaufały nam setki zadowolonych klientów. Przeczytaj, co mówią o naszych zabiegach.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-8">
                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-muted-foreground leading-relaxed mb-6 italic">"{testimonial.text}"</p>

                  {/* Author */}
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.treatment}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
