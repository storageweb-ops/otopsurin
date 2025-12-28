import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, ShoppingBag, Leaf, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import CategoryCard from "@/components/CategoryCard";
import { heroImage, products, categories } from "@/data/mockData";

const Index = () => {
  const featuredProducts = products.slice(0, 6);
  const categoryIcons = {
    "Silk & Textile": Sparkles,
    Handicraft: ShoppingBag,
    "Food & Herbal": Leaf,
    Souvenir: Gift,
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Surin OTOP Products"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/50 to-transparent" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 lg:px-8 py-32">
          <div className="max-w-2xl animate-fade-in-up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 backdrop-blur-sm text-primary-foreground text-sm font-medium mb-6 border border-primary/30">
              Discover Surin's Finest
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Surin OTOP
              <span className="block text-primary mt-2">Thai Craft, Modern Touch</span>
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed max-w-xl">
              Experience the rich cultural heritage of Surin Province through our 
              authentic handcrafted products. From exquisite silk to traditional crafts, 
              each piece tells a unique story.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="gold" size="xl" asChild>
                <Link to="/products">
                  Explore Products
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
              <Button variant="outline-light" size="xl" asChild>
                <Link to="/about">Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative element */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-background thai-pattern">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Browse by Category
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
              Explore Our Collections
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Discover authentic OTOP products across four unique categories, 
              each showcasing the exceptional craftsmanship of Surin artisans.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div
                key={category.id}
                className="animate-fade-in-up opacity-0"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
              >
                <CategoryCard
                  name={category.name}
                  nameThai={category.nameThai}
                  icon={categoryIcons[category.name as keyof typeof categoryIcons]}
                  image={category.image}
                  href={`/products?category=${encodeURIComponent(category.name)}`}
                  productCount={category.productCount}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
            <div>
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                Featured Products
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
                Best of Surin OTOP
              </h2>
            </div>
            <Button variant="outline" asChild>
              <Link to="/products">
                View All Products
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-in-up opacity-0"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                About Surin OTOP
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Preserving Heritage, <br />Embracing Innovation
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Surin Province, located in the heart of Thailand's Isan region, is renowned 
                for its rich cultural heritage, majestic elephants, and exceptional 
                craftsmanship. Our OTOP (One Tambon One Product) initiative brings together 
                local artisans and communities to showcase their unique skills.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Each product represents generations of knowledge, from the intricate 
                patterns of mudmee silk to the delicate art of traditional weaving. 
                When you choose Surin OTOP, you're not just buying a product – you're 
                supporting communities and preserving cultural traditions.
              </p>
              <div className="flex flex-wrap gap-8">
                <div>
                  <span className="block text-3xl font-display font-bold text-primary">50+</span>
                  <span className="text-sm text-muted-foreground">Communities</span>
                </div>
                <div>
                  <span className="block text-3xl font-display font-bold text-primary">500+</span>
                  <span className="text-sm text-muted-foreground">Products</span>
                </div>
                <div>
                  <span className="block text-3xl font-display font-bold text-primary">200+</span>
                  <span className="text-sm text-muted-foreground">Years of Heritage</span>
                </div>
              </div>
              <Button variant="earth" size="lg" className="mt-8" asChild>
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
            <div className="relative animate-slide-in-right opacity-0" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src={heroImage}
                  alt="Surin craftsmanship"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-gold">
                <span className="font-display text-2xl font-bold block">ผลิตภัณฑ์ OTOP</span>
                <span className="text-sm opacity-80">จังหวัดสุรินทร์</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-accent-foreground mb-4">
            Ready to Explore Authentic Thai Crafts?
          </h2>
          <p className="text-accent-foreground/80 mb-8 max-w-2xl mx-auto">
            Browse our complete collection of OTOP products and discover the perfect piece 
            that resonates with your appreciation for Thai culture and craftsmanship.
          </p>
          <Button variant="gold" size="xl" asChild>
            <Link to="/products">
              Browse All Products
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
