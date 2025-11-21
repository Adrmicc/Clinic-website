import { Facebook, Instagram, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="font-serif text-2xl font-semibold text-foreground">Blazer</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Profesjonalna klinika medycyny estetycznej i kosmetologii
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Szybkie linki</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#zabiegi" className="text-muted-foreground hover:text-foreground transition-colors">
                    Zabiegi
                  </a>
                </li>
                <li>
                  <a href="#cennik" className="text-muted-foreground hover:text-foreground transition-colors">
                    Cennik
                  </a>
                </li>
                <li>
                  <a href="#o-nas" className="text-muted-foreground hover:text-foreground transition-colors">
                    O nas
                  </a>
                </li>
                <li>
                  <a href="#kontakt" className="text-muted-foreground hover:text-foreground transition-colors">
                    Kontakt
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Usługi</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Depilacja laserowa</li>
                <li>Kosmetologia</li>
                <li>Medycyna estetyczna</li>
                <li>Dermatologia</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Kontakt</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>ul. Piękna 15/3</li>
                <li>00-001 Warszawa</li>
                <li>+48 123 456 789</li>
                <li>kontakt@Blazer.pl</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">© 2025 Blazer. Wszelkie prawa zastrzeżone.</p>
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-accent hover:bg-accent/80 flex items-center justify-center transition-colors text-accent-foreground"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-accent hover:bg-accent/80 flex items-center justify-center transition-colors text-accent-foreground"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-accent hover:bg-accent/80 flex items-center justify-center transition-colors text-accent-foreground"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
