import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  id: string;
  name: string;
  nameThai?: string;
  category: string;
  price: number;
  image: string;
  description?: string;
  communityName?: string;
  className?: string;
}

const ProductCard = ({
  id,
  name,
  nameThai,
  category,
  price,
  image,
  description,
  communityName,
  className,
}: ProductCardProps) => {
  return (
    <Card variant="product" className={cn("group overflow-hidden", className)}>
      <Link to={`/products/${id}`} className="block">
        <div className="relative aspect-square overflow-hidden">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-3 top-3 h-9 w-9 rounded-full bg-card/80 backdrop-blur-sm opacity-0 transition-all duration-300 group-hover:opacity-100 hover:bg-card hover:text-primary"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <Heart className="h-4 w-4" />
          </Button>
          <Badge className="absolute left-3 top-3 bg-accent text-accent-foreground">
            {category}
          </Badge>
        </div>
        <div className="p-4">
          <h3 className="font-display text-lg font-semibold text-foreground line-clamp-1">
            {name}
          </h3>
          {nameThai && (
            <p className="text-sm text-muted-foreground mt-0.5">{nameThai}</p>
          )}
          {description && (
            <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
              {description}
            </p>
          )}
          {communityName && (
            <p className="mt-2 text-xs text-elephant">By {communityName}</p>
          )}
          <div className="mt-3 flex items-center justify-between">
            <span className="text-lg font-semibold text-primary">
              ฿{price.toLocaleString()}
            </span>
            <span className="text-xs text-muted-foreground">View Details →</span>
          </div>
        </div>
      </Link>
    </Card>
  );
};

export default ProductCard;
