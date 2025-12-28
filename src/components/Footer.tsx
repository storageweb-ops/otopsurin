import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-earth text-earth-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="font-display text-lg font-bold text-primary-foreground">S</span>
              </div>
              <div>
                <span className="font-display text-xl font-semibold">
                  Surin OTOP
                </span>
              </div>
            </Link>
            <p className="text-earth-foreground/70 text-sm leading-relaxed">
              Discover the finest handcrafted products from Surin Province, Thailand. 
              Each piece tells a story of tradition, craftsmanship, and cultural heritage.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-earth-foreground/10 hover:bg-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-earth-foreground/10 hover:bg-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Products", "Communities", "About"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-sm text-earth-foreground/70 hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-3">
              {["Silk & Textile", "Handicraft", "Food & Herbal", "Souvenir"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to={`/products?category=${encodeURIComponent(item)}`}
                      className="text-sm text-earth-foreground/70 hover:text-primary transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-earth-foreground/70">
                <MapPin className="h-5 w-5 shrink-0 mt-0.5" />
                <span>Surin Province, Northeastern Thailand</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-earth-foreground/70">
                <Phone className="h-5 w-5 shrink-0" />
                <span>+66 44 XXX XXX</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-earth-foreground/70">
                <Mail className="h-5 w-5 shrink-0" />
                <span>info@surinotop.go.th</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-earth-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-earth-foreground/50">
            © 2024 Surin OTOP. All rights reserved.
          </p>
          <p className="text-sm text-earth-foreground/50">
            ผลิตภัณฑ์ OTOP จังหวัดสุรินทร์
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
