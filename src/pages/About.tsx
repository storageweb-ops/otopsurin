import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Heart, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { heroImage, landscapeImage } from "@/data/mockData";

const About = () => {
  const values = [
    {
      icon: Sparkles,
      title: "Authentic Craftsmanship",
      description:
        "Every product is handcrafted using traditional techniques passed down through generations.",
    },
    {
      icon: Heart,
      title: "Community First",
      description:
        "We empower local artisans and communities, ensuring fair prices and sustainable livelihoods.",
    },
    {
      icon: Users,
      title: "Cultural Preservation",
      description:
        "Our mission is to preserve and promote the rich cultural heritage of Surin Province.",
    },
    {
      icon: Award,
      title: "Quality Assured",
      description:
        "All products meet OTOP quality standards, guaranteeing authenticity and excellence.",
    },
  ];

  const timeline = [
    {
      year: "Traditional Era",
      title: "Ancient Craftsmanship",
      description:
        "For centuries, Surin artisans have perfected the art of silk weaving and traditional crafts.",
    },
    {
      year: "2001",
      title: "OTOP Initiative Launch",
      description:
        "Thailand's One Tambon One Product program begins, recognizing local craftsmanship.",
    },
    {
      year: "2010",
      title: "Digital Expansion",
      description:
        "Surin OTOP products gain national and international recognition through digital platforms.",
    },
    {
      year: "Present",
      title: "Modern Heritage",
      description:
        "Blending tradition with innovation, Surin OTOP continues to thrive in the global marketplace.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-accent/5 thai-pattern" />
        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                About Us
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
                The Story of <span className="text-primary">Surin OTOP</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Nestled in the heart of Thailand's Isan region, Surin Province is 
                a land where tradition meets artistry. Our OTOP initiative celebrates 
                this heritage by connecting skilled artisans with discerning customers 
                worldwide.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                From the intricate patterns of mudmee silk to the delicate craftsmanship 
                of handwoven baskets, each product tells a story of dedication, skill, 
                and cultural pride. We believe in fair trade, sustainable practices, 
                and preserving the traditions that make Surin unique.
              </p>
              <Button variant="gold" size="lg" asChild>
                <Link to="/products">
                  Explore Our Products
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
            <div className="relative animate-slide-in-right opacity-0" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src={landscapeImage}
                  alt="Surin landscape"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Our Values
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
              What We Stand For
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={value.title}
                variant="feature"
                className="text-center animate-fade-in-up opacity-0"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: "forwards",
                }}
              >
                <CardContent className="p-6">
                  <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Our Journey
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
              A Legacy of Excellence
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <div
                key={item.year}
                className="relative pl-8 pb-12 last:pb-0 animate-fade-in-up opacity-0"
                style={{
                  animationDelay: `${index * 150}ms`,
                  animationFillMode: "forwards",
                }}
              >
                <div className="absolute left-0 top-0 h-full w-px bg-border">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-primary" />
                </div>
                <div className="ml-6">
                  <span className="text-sm font-medium text-primary">
                    {item.year}
                  </span>
                  <h3 className="font-display text-xl font-semibold mt-1 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-20 bg-earth text-earth-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Surin: Land of Elephants
              </h2>
              <p className="text-earth-foreground/80 leading-relaxed mb-6">
                Surin Province is world-renowned as the "Elephant Kingdom" of Thailand. 
                This connection to these majestic creatures is reflected in our cultural 
                identity and many of our OTOP products.
              </p>
              <p className="text-earth-foreground/80 leading-relaxed mb-8">
                The annual Surin Elephant Round-up Festival draws visitors from around 
                the globe, celebrating the deep bond between the people of Surin and 
                their beloved elephants. This cultural significance is woven into the 
                fabric of our local crafts.
              </p>
              <div className="flex gap-8">
                <div>
                  <span className="block text-3xl font-display font-bold text-primary">
                    จ.สุรินทร์
                  </span>
                  <span className="text-sm text-earth-foreground/60">
                    Surin Province
                  </span>
                </div>
                <div>
                  <span className="block text-3xl font-display font-bold text-primary">
                    อีสาน
                  </span>
                  <span className="text-sm text-earth-foreground/60">
                    Isan Region
                  </span>
                </div>
              </div>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src={heroImage}
                alt="Surin elephant heritage"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Discover Surin's Treasures?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Explore our collection of authentic OTOP products and support the 
            talented artisan communities of Surin Province.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="gold" size="xl" asChild>
              <Link to="/products">Browse Products</Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/communities">Meet Our Communities</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
