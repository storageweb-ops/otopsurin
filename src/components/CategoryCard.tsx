import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  name: string;
  nameThai?: string;
  icon: LucideIcon;
  image: string;
  href: string;
  productCount?: number;
  className?: string;
}

const CategoryCard = ({
  name,
  nameThai,
  icon: Icon,
  image,
  href,
  productCount,
  className,
}: CategoryCardProps) => {
  return (
    <Link
      to={href}
      className={cn(
        "group relative overflow-hidden rounded-2xl aspect-[4/3] block",
        className
      )}
    >
      <img
        src={image}
        alt={name}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
        <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 backdrop-blur-sm border border-primary-foreground/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/30">
          <Icon className="h-8 w-8 text-primary-foreground" />
        </div>
        <h3 className="font-display text-xl font-semibold text-primary-foreground">
          {name}
        </h3>
        {nameThai && (
          <p className="text-sm text-primary-foreground/80 mt-1">{nameThai}</p>
        )}
        {productCount !== undefined && (
          <p className="mt-2 text-xs text-primary-foreground/70">
            {productCount} products
          </p>
        )}
      </div>
    </Link>
  );
};

export default CategoryCard;
