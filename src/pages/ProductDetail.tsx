import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Heart, Share2, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products, communities } from "@/data/mockData";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const community = communities.find((c) => c.id === product?.communityId);
  const relatedProducts = products
    .filter((p) => p.category === product?.category && p.id !== id)
    .slice(0, 3);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="font-display text-2xl font-bold mb-4">Product Not Found</h1>
          <Button asChild>
            <Link to="/products">Back to Products</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-28 pb-12">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link
              to="/products"
              className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Products
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="animate-fade-in">
              <div className="aspect-square rounded-2xl overflow-hidden bg-secondary/50 shadow-card">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="animate-fade-in-up">
              <Badge className="mb-4 bg-accent text-accent-foreground">
                {product.category}
              </Badge>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                {product.name}
              </h1>
              {product.nameThai && (
                <p className="text-lg text-muted-foreground mb-6">
                  {product.nameThai}
                </p>
              )}

              <div className="text-3xl font-bold text-primary mb-8">
                ฿{product.price.toLocaleString()}
              </div>

              <div className="prose prose-sm text-muted-foreground mb-8">
                <p>{product.description}</p>
                <p className="mt-4">
                  This authentic OTOP product represents the finest craftsmanship 
                  from Surin Province. Each piece is carefully handmade by skilled 
                  artisans, ensuring quality and authenticity.
                </p>
              </div>

              <div className="flex gap-4 mb-8">
                <Button variant="gold" size="xl" className="flex-1">
                  Contact Seller
                </Button>
                <Button variant="outline" size="icon" className="h-14 w-14">
                  <Heart className="h-6 w-6" />
                </Button>
                <Button variant="outline" size="icon" className="h-14 w-14">
                  <Share2 className="h-6 w-6" />
                </Button>
              </div>

              {/* Community Card */}
              {community && (
                <Card variant="feature" className="mt-8">
                  <CardContent className="p-6">
                    <h3 className="font-display text-lg font-semibold mb-2">
                      Made by {community.name}
                    </h3>
                    {community.nameThai && (
                      <p className="text-sm text-muted-foreground mb-4">
                        {community.nameThai}
                      </p>
                    )}
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{community.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        <span>{community.contactInfo.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        <span>{community.contactInfo.email}</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="mt-4" asChild>
                      <Link to={`/communities/${community.id}`}>
                        View Community
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-display text-2xl font-bold text-foreground mb-8">
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default ProductDetail;
